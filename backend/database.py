from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
from datetime import datetime

DATABASE_URL = "sqlite:///./gigshield.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class Worker(Base):
    __tablename__ = "workers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    phone = Column(String, unique=True, index=True)
    platform = Column(String)
    city = Column(String)
    pin_code = Column(String)
    daily_avg_earnings = Column(Float)
    monthly_avg_earnings = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)

    policies = relationship("Policy", back_populates="worker")
    claims = relationship("Claim", back_populates="worker")

class Policy(Base):
    __tablename__ = "policies"
    id = Column(Integer, primary_key=True, index=True)
    worker_id = Column(Integer, ForeignKey("workers.id"))
    plan_type = Column(String)
    weekly_premium = Column(Float)
    max_payout = Column(Float)
    status = Column(String, default="Active")
    created_at = Column(DateTime, default=datetime.utcnow)

    worker = relationship("Worker", back_populates="policies")
    claims = relationship("Claim", back_populates="policy")

class Claim(Base):
    __tablename__ = "claims"
    id = Column(Integer, primary_key=True, index=True)
    worker_id = Column(Integer, ForeignKey("workers.id"))
    policy_id = Column(Integer, ForeignKey("policies.id"))
    disruption_type = Column(String)
    zone = Column(String)
    blocked_hours = Column(Float, nullable=True)
    cancelled_orders = Column(Integer, nullable=True)
    rest_days = Column(Integer, nullable=True)
    payout_amount = Column(Float)
    fraud_score = Column(Integer)
    status = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    worker = relationship("Worker", back_populates="claims")
    policy = relationship("Policy", back_populates="claims")
    fraud_log = relationship("FraudLog", back_populates="claim", uselist=False)

class Payout(Base):
    __tablename__ = "payouts"
    id = Column(Integer, primary_key=True, index=True)
    claim_id = Column(Integer, ForeignKey("claims.id"))
    amount = Column(Float)
    upi_id = Column(String)
    status = Column(String, default="Pending")
    transaction_id = Column(String, unique=True, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class DisruptionEvent(Base):
    __tablename__ = "disruption_events"
    id = Column(Integer, primary_key=True, index=True)
    event_type = Column(String)
    city = Column(String)
    pin_code = Column(String)
    start_time = Column(DateTime)
    end_time = Column(DateTime)
    severity = Column(String)

class FraudLog(Base):
    __tablename__ = "fraud_logs"
    id = Column(Integer, primary_key=True, index=True)
    claim_id = Column(Integer, ForeignKey("claims.id"))
    flags_triggered = Column(String)
    score = Column(Integer)
    decision = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    claim = relationship("Claim", back_populates="fraud_log")

Base.metadata.create_all(bind=engine)
