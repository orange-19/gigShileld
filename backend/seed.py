from database import SessionLocal, Worker, Policy, DisruptionEvent, Claim, Payout, FraudLog
from datetime import datetime, timedelta

def seed_db():
    db = SessionLocal()
    if db.query(Worker).first():
        print("Database already seeded")
        return

    workers = [
        Worker(name="Ravi Kumar", phone="9876543210", platform="Swiggy", city="Chennai", pin_code="600001", daily_avg_earnings=800, monthly_avg_earnings=800*25),
        Worker(name="Priya Sharma", phone="8765432109", platform="Zomato", city="Mumbai", pin_code="400001", daily_avg_earnings=650, monthly_avg_earnings=650*25),
        Worker(name="Arjun Nair", phone="7654321098", platform="Swiggy", city="Bengaluru", pin_code="560001", daily_avg_earnings=900, monthly_avg_earnings=900*25),
        Worker(name="Meena Das", phone="6543210987", platform="Zomato", city="Hyderabad", pin_code="500001", daily_avg_earnings=720, monthly_avg_earnings=720*25)
    ]
    db.add_all(workers)
    db.commit()

    # Create policies for seeded workers
    for idx, worker in enumerate(workers, 1):
        if idx == 1:
            plan = "Standard"
            premium = 49
            max_payout = 1000
        elif idx == 2:
            plan = "Basic"
            premium = 29
            max_payout = 500
        else:
            plan = "Full Shield"
            premium = 69
            max_payout = 1500
            
        policy = Policy(worker_id=worker.id, plan_type=plan, weekly_premium=premium, max_payout=max_payout)
        db.add(policy)
    db.commit()

    # Disruption events
    events = [
        DisruptionEvent(event_type="Heavy Rain", city="Chennai", pin_code="600001", start_time=datetime.utcnow() - timedelta(hours=5), end_time=datetime.utcnow() - timedelta(hours=1), severity="High"),
        DisruptionEvent(event_type="Bandh", city="Mumbai", pin_code="400001", start_time=datetime.utcnow() - timedelta(hours=10), end_time=datetime.utcnow() - timedelta(hours=2), severity="High"),
        DisruptionEvent(event_type="Platform Outage", city="All", pin_code="All", start_time=datetime.utcnow() - timedelta(hours=2), end_time=datetime.utcnow(), severity="Medium"),
        DisruptionEvent(event_type="Extreme Heat", city="Delhi", pin_code="110001", start_time=datetime.utcnow() - timedelta(hours=6), end_time=datetime.utcnow() - timedelta(hours=1), severity="High")
    ]
    db.add_all(events)
    db.commit()
    
    # Pre-seed a hard flagged claim
    claim = Claim(worker_id=2, policy_id=2, disruption_type="Heavy Rain", zone="Mumbai", blocked_hours=4, payout_amount=130, fraud_score=82, status="HARD_FLAG")
    db.add(claim)
    db.commit()
    
    fraud_log = FraudLog(claim_id=claim.id, flags_triggered="no order activity, GPS spoofing suspect, multiple recent claims", score=82, decision="Manual review required")
    db.add(fraud_log)
    db.commit()

    print("Database seeded successfully")

if __name__ == "__main__":
    seed_db()
