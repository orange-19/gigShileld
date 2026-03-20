# GigShield — AI-Powered Parametric Income Insurance for India's Gig Economy

**Guidewire DEVTrails 2026 | University Hackathon**
Protecting the weekly earnings of Zomato and Swiggy delivery partners against uncontrollable external disruptions — automatically, intelligently, and fairly.

![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Phase%201-blue)
![Coverage](https://img.shields.io/badge/Coverage-Income%20Protection-yellow)

---

## Table of Contents

1. [Who Is Our User?](#1-who-is-our-user)
2. [What Problem Are We Solving?](#2-what-problem-are-we-solving)
3. [Our Solution — Earnings Floor Protection](#3-our-solution--earnings-floor-protection)
4. [Adversarial Defense and Anti-Spoofing Strategy](#4-adversarial-defense-and-anti-spoofing-strategy)
5. [Coverage and Payout Model](#5-coverage-and-payout-model)
6. [Persona-Based Scenarios and Workflow](#6-persona-based-scenarios-and-workflow)
7. [Weekly Premium Model](#7-weekly-premium-model)
8. [Parametric Triggers](#8-parametric-triggers)
9. [AI Architecture](#9-ai-architecture)
10. [System Architecture](#10-system-architecture)
11. [Tech Stack](#11-tech-stack)
12. [Platform Choice](#12-platform-choice)
    
---

## 1. Who Is Our User?

**Persona: Ravi Kumar**

| Field | Details |
|---|---|
| Age | 26 years old |
| Occupation | Full-time food delivery partner on Zomato and Swiggy |
| City | Tier-1 Indian city — Chennai, Mumbai, Bengaluru, or Hyderabad |
| Daily Income | Rs. 600 to Rs. 1,000 per day |
| Weekly Income | Rs. 4,000 to Rs. 7,000 per week |
| Device | Android smartphone — uses UPI, WhatsApp, and delivery apps daily |
| Financial Reality | Lives week-to-week. No savings buffer. Daily bike EMI. No employer benefits or safety net. |

Ravi's situation in one sentence:

> "When it rains heavily, a curfew is called, or my platform goes down, I cannot work — but my EMI, rent, and groceries do not stop."

### Who Are They at Scale

- Food Delivery Partners: Zomato, Swiggy riders
- E-Commerce Delivery: Amazon, Flipkart delivery associates
- Grocery and Q-Commerce: Zepto, Blinkit, Instamart delivery partners
- Income range: Rs. 300 to Rs. 800 per day — highly variable, no job security
- Vulnerability: One bad disruption day = Rs. 300 to Rs. 500 lost with no fallback

---

## 2. What Problem Are We Solving?

India has over 12 million platform-based delivery workers. They face income loss when external events, which they cannot control, take them off the road or lower their earnings.

### The Explicit Gap

| Event | What Happens to Ravi | Current Solution |
|---|---|---|
| Heavy monsoon rain shuts deliveries for 4 hours | Earns Rs. 0. No compensation. | None |
| Zone-level curfew or bandh called | Cannot reach pickup point. Full day income lost. | None |
| AQI crosses 300 — outdoor work unsafe | Stays home. No income protection. | None |
| Platform app goes down for 2 hours | Orders stop. No fallback income. | None |
| Minor accident — unable to work for 2 days | Loses Rs. 1,200 to Rs. 2,000. No sick pay. | None |
| Traditional insurance available? | Yes — but monthly premiums, paper forms, built for salaried workers. Inaccessible to gig workers. | Irrelevant |

### The Real Problem — Every Disruption Type

Workers do not just lose income from weather. They lose income from any disruption:

```
Workers lose income from ANY disruption:
    Environmental  -- monsoon, extreme heat, floods, pollution
    Social         -- curfews, strikes, market closures
    Platform       -- app outages, algorithm changes, order reduction
    Accident       -- minor injury, serious hospitalization, fatal accident
    Regulatory     -- delivery zone restrictions, new regulations
```

### The Hidden Threat — GPS Fraud at Platform Scale

Current parametric platforms that only use GPS coordinates are susceptible to coordinated spoofing attacks. It is possible for a group of employees to pretend to be in a designated weather zone from home, which could result in fraudulent payouts and quickly deplete the liquidity pool.

This is resolved by GigShield's multi-signal fraud detection system, which uses data that cannot all be faked at once to cross-validate worker presence.

---

## 3. Our Solution — Earnings Floor Protection
 
### What Makes GigShield Different
 
Most parametric insurance platforms do this:
 
```
WHAT EVERYONE ELSE DOES:
"If heavy rain detected in zone → Pay fixed Rs. 200"
(Generic, easy to copy, exploitable)
```
 
GigShield monitors what actually matters:
 
```
OUR UNIQUE APPROACH:
"If worker's actual earnings drop 70% below their personal
30-day baseline for 30 or more minutes
→ Auto-detect the disruption
→ Pay the actual loss amount — not a fixed flat rate"
(Personalized, fraud-proof, covers ALL disruptions)
```
 
The core insight: **You cannot fake verified platform earnings data.** 
 
### What vs. Traditional Approach
 
| Aspect | Weather-Based Insurance | GigShield Earnings Floor |
|---|---|---|
| What it monitors | External weather events | Real earnings from platform API |
| Coverage | Weather disruptions only | Any disruption — weather, platform outage, curfew, accident |
| Payout amount | Fixed Rs. 200 for all workers | Actual loss amount per worker |
| Personalization | Same for everyone | Unique 30-day baseline per worker |
| Fraud resistance | Low — GPS is spoofable | High — platform earnings cannot be faked |
| Detection method | Manual claim filing | Automatic — worker does nothing |
| User friction | High — 5 or more steps | Zero — fully automatic |
| Competitive moat | None — easy to copy | 6 to 12 months — requires platform partnerships |
 
### How It Works — The Insurance Model
 
Parametric income insurance is what GigShield is. The employee has an active weekly policy. They use the app to submit a claim when something goes wrong that impacts their income. The claim is then verified by the system using multiple signals and actual earnings data, and it is approved or rejected based on evidence rather than just GPS.
 
The key difference from traditional insurance: validation is instant and automated. The worker does not wait days or fill out paperwork. But the claim is still **initiated by the worker** — GigShield does not pay anything without a claim being raised.
 
```
Worker holds an active weekly insurance policy
        |
        v
Disruption occurs
(weather, curfew, platform outage, accident, etc.)
        |
        v
Worker files a claim through the GigShield app
(one tap — select disruption type, confirm zone and time window)
        |
        v
GigShield pulls actual earnings from platform API
and compares against worker's personal 30-day baseline
        |
        v
Multi-signal fraud validation runs automatically
(earnings data, order activity, accelerometer, GPS variance,
 IMU, cell tower, delivery range, climate zone, peer check)
        |
        v
Fraud Risk Score computed — claim approved or flagged in under 2 minutes
        |
        v
If approved: Payout calculated based on actual earnings loss
        |
        v
Payout sent via UPI directly to worker's registered account
        |
        v
Claim history and payout record updated in worker dashboard
```
 
The worker files a claim whenever a disruption impacts their income — during or after the event. There is no automatic monitoring that pays without a claim. Every payout follows a worker-initiated, system-validated claim.
 
---

## 4. Adversarial Defense and Anti-Spoofing Strategy

### The Market Crash Scenario

500 delivery workers in a tier-1 city make up a sophisticated syndicate that is arranged through regional Telegram groups. They pretended to be inside a severe red-alert weather zone while safely at home by using sophisticated GPS-spoofing software. They immediately depleted the platform's liquidity pool and caused widespread fraudulent payouts.

Officially, basic GPS verification is no longer valid. GigShield was designed to withstand precisely this kind of assault.

### Why GigShield Survives Where Others Collapse

```
WEATHER-BASED SYSTEM (COLLAPSES):
    GPS spoofed               -- Fraudster appears in monsoon zone
    Weather API shows rain    -- Real monsoon is happening
    500 claims submitted      -- System cannot tell fake from real
    Platform loses Rs. 50,000+ in minutes

GIGSHIELD EARNINGS FLOOR (SURVIVES):
    Fraudster claims: "I lost Rs. 500 earnings during the storm"
    System queries platform API: "You actually earned Rs. 350 today"
    Contradiction detected instantly
    Claim auto-rejected -- no payout issued
    Repeated for 490 fraudsters -- all rejected
    Result: 98% of attack blocked
    Platform loss: Rs. 1,500 (10 genuine claims paid)
    Liquidity pool intact
```

---

### 1. The Differentiation — Genuine Worker vs. Bad Actor

GPS is not the main differentiator of GigShield. It is based on an unchangeable fact: **verified platform earnings data.

In Zomato's or Swiggy's own database, a true stranded worker has a real wage decline. The platform data contradicts the claim as soon as it is submitted, so a fraudster sitting at home who is still logged into the app and completing orders cannot simultaneously claim income loss.

GigShield performs a multi-signal cross-validation in addition to the earnings check, which a home fraudster cannot simultaneously pass:

| Signal | Genuine Stranded Worker | GPS Spoofer at Home |
|---|---|---|
| Platform earnings | Actual drop to zero visible in platform API | Earnings continue or were never started |
| Order activity log | Was actively accepting orders until disruption hit | Not logged in or never active that day |
| Accelerometer and motion | Phone shows outdoor vibration, movement, hand-held patterns | Phone flat and stationary on a table |
| GPS signal strength and variance | Natural atmospheric jitter in signal power levels | Unnaturally smooth and consistent — software-generated |
| IMU cross-reference | Gyroscope and linear acceleration match movement claim | IMU shows device is stationary despite GPS claiming movement |
| Wi-Fi and cell tower triangulation | Independent location estimate matches claimed zone | Network triangulation places device in a different neighborhood |
| Delivery range history | Worker has 30-day delivery history in this zone | Zero or near-zero prior delivery activity in claimed zone |
| Climate zone verification | IMD and CPCB confirm the event at this exact pin code | No weather event recorded at the claimed pin code |
| Peer workers in zone | Other insured workers in same zone also show zero earnings | Only this worker claiming while others show normal earnings |

An auto-approve requires at least 6 of these 9 signals to be consistent with genuine outdoor presence. A single inconsistent signal triggers soft verification — never instant rejection.

---

### 2. The Data — Detecting a Coordinated Fraud Ring

Beyond individual claim validation, GigShield monitors for ring-level patterns across all simultaneous claims. These are the specific data points analyzed beyond GPS coordinates:

**Earnings and Platform Data**
- Real-time earnings from Zomato and Swiggy APIs — immutable, cannot be forged
- Order acceptance and completion timestamps before and during the claimed disruption
- Platform login activity log — was the worker online and working?
- Order cancellation records cross-matched against confirmed social disruption events

**Device-Level Signals**
- Accelerometer readings — motion pattern inconsistent with outdoor delivery work flags as indoor
- GPS signal power level and variance over time — spoofed signals lack atmospheric jitter
- IMU gyroscope data — cross-referenced against GPS movement claims to detect contradiction
- Wi-Fi SSID and cellular tower ID — independently estimates actual physical location
- Device fingerprint hash — identifies if multiple worker accounts are filing from the same physical device
- IP subnet — multiple claims from the same home network indicate organized fraud

**Behavioral and Pattern Signals**
- Claim cluster density — if 20 or more workers in one pin code claim within 10 minutes, batch is auto-paused
- Social graph analysis — workers who registered via the same referral chain and claim simultaneously are flagged
- GPS trajectory smoothness score — real GPS paths have natural jitter; spoofed paths are statistically smooth
- Velocity anomaly — worker claiming in multiple cities within 7 days is flagged as operating outside normal range
- New account flag — accounts registered within 7 days of a claim receive elevated scrutiny
- Historical claim frequency — abnormal claim rate versus the worker's prior baseline triggers behavioral alert

**Environmental Verification**
- IMD pin code level weather data — the declared disruption must be confirmed at the worker's specific pin code
- CPCB AQI reading for the exact zone and time window
- NDMA flood alert status — zone must be on active alert for flood claims to be valid
- Platform status API — outage claims require confirmed downtime from the platform itself

---

### 3. The UX Balance — Flagging Without Penalizing Honest Workers

A genuine Swiggy rider caught in a real storm may have a weak GPS signal, low battery, inconsistent sensor data, and zero orders — all through no fault of their own. Every verification step in GigShield is designed around one principle: **the worker is innocent until the system proves otherwise.**

GigShield never bans on a first offense. It never accuses. It never leaves a worker with zero rupees.

```
FRAUD RISK SCORE: 0 --------------------------------- 100

Score 0 to 39     AUTO-APPROVE
                  Payout added to weekly ledger immediately.
                  Worker receives notification: claim approved.
                  No action required from worker.
                  Timeline: under 5 minutes.

Score 40 to 60    SOFT FLAG
                  Worker receives a friendly notification:
                  "We are verifying your claim due to network
                  conditions. You will hear back in 2 hours."
                  System runs secondary cell tower and Wi-Fi
                  triangulation check automatically.
                  If check passes -- approved, zero penalty to worker.
                  Worker never knows they were flagged.
                  Timeline: under 30 minutes.

Score 61 to 75    MEDIUM FLAG
                  Worker is asked for one simple step:
                  "Please share a quick photo of your surroundings."
                  Timestamp and location metadata auto-attached by app.
                  Outdoor or rain-consistent photo -- approved immediately.
                  Framed as "weather confirmation" -- never as accusation.
                  Timeline: under 10 minutes once photo submitted.

Score 76 to 100   HARD FLAG
                  Claim enters human review queue.
                  50% provisional payout issued IMMEDIATELY --
                  worker is never left with zero rupees.
                  Worker can submit: photo, current location,
                  medical document, or any supporting proof.
                  Full appeal available via in-app support chat.
                  Resolved within 24 hours.
                  Only confirmed fraud leads to policy suspension.
                  First-time flagged workers are never permanently banned.
```

**The five principles we never violate:**

1. A claim is never cancelled based on a single anomalous signal
2. Every flagged claim gets at least one automated second chance before any human penalty
3. Hard-flagged workers receive a provisional 50% payout immediately — rent does not wait for our review
4. Every verification step is framed as a routine weather or network confirmation — never as an accusation of fraud
5. A false positive that punishes an honest worker is treated as a product failure, not an acceptable outcome

**Expected Detection Rates:**

| Attack Type | Detection Rate | Primary Catch Mechanism |
|---|---|---|
| Solo GPS spoofer | 99%+ | Earnings data contradiction plus cell tower mismatch |
| Small ring of 10 workers | 95%+ | Device fingerprinting plus behavioral clustering |
| Medium ring of 100 workers | 98%+ | Claim clustering plus social graph analysis |
| Large ring of 500 workers | 99.5%+ | Batch auto-pause plus all layers simultaneously |
| Professional coordinated attack | 99.9%+ | Multiple independent catches across all signal layers |

---

## 5. Coverage and Payout Model

GigShield covers six categories of disruption. Each payout is tied to the worker's actual earning history — not a fixed flat rate.

### Category 1 — Environmental Disruption

**Examples:** Heavy rain, floods, extreme heat, severe air pollution (AQI above 300)

**Payout Logic:**
5% of the previous day's earnings is accumulated as the protected income for each hour the worker is blocked from working.

Example: Ravi earned Rs. 800 yesterday. During a 4-hour rain blockage, he receives Rs. 40 per blocked hour, totalling Rs. 160 credited to his weekly payout.

---

### Category 2 — Social Disruption

**Examples:** Unplanned curfews, local strikes, bandh, sudden zone closures

**Payout Logic:**
For every order cancelled due to a confirmed social disruption in the worker's active zone, 2% of the cancelled order value is accumulated as compensation.

Example: Ravi had 8 orders cancelled during a bandh, averaging Rs. 300 per order. He receives Rs. 6 per cancelled order, totalling Rs. 48 for that event.

---

### Category 3 — Platform Disruption

**Examples:** Zomato or Swiggy app outage, algorithm-driven order reduction, payment gateway failure

**Payout Logic:**
1% of the previous day's earnings is accumulated per blocked hour during a confirmed platform outage, cross-validated against platform status APIs.

---

### Category 4 — Minor Accident (Unable to Work, Not Hospitalized)

**Examples:** Sprain, minor collision, injury requiring 1 to 7 days rest

**Payout Logic:**
The average daily income from the previous calendar month is calculated. That daily average is paid out for each verified rest day, up to a maximum of 7 days per month.

Example: Ravi averaged Rs. 750 per day last month. He rests for 3 days. He receives Rs. 2,250.

Verification required: Medical certificate or doctor visit confirmation via photo upload in the app.

---

### Category 5 — Serious Accident (Hospitalized)

**Examples:** Road accident, severe injury requiring hospital admission

**Payout Logic:**
Total delivery earnings over the past 3 months are calculated from platform data. 70% of that 3-month total is paid out as a lump sum.

Example: Ravi earned Rs. 18,000 over the past 3 months. He receives Rs. 12,600.

Verification required: Hospital admission document or FIR uploaded through the app.

---

### Category 6 — Fatal Accident

**Payout Logic:**
A fixed compensation of Rs. 10,00,000 (Ten Lakhs) is paid to the registered nominee. Funded by a dedicated reserve pool maintained separately from the weekly payout pool.

Nominee registration is mandatory during onboarding and can be updated at any time.

---

### Weekly Payout Summary

All accumulated compensation across all categories is consolidated and paid out every Monday as a single UPI transfer to the worker's registered account. This matches the gig worker's natural week-to-week financial cycle.

---

## 6. Persona-Based Scenarios and Workflow
 
### Scenario 1 — Monsoon Rain Block (Chennai, July)
 
- GigShield monitors Ravi's earnings every 15 minutes via Swiggy API
- At 2 PM, earnings drop to zero — 70% drop from Rs. 25 per hour baseline
- IMD API confirms rainfall above 50mm per hour in pin code 600001
- Peer workers in same zone also showing zero earnings — confirmed area-wide disruption
- Fraud score: 14 — auto-approved
- Payout: 5% of previous day earnings (Rs. 800) x 4 blocked hours = Rs. 160 added to weekly payout
 
### Scenario 2 — Local Strike or Curfew (Mumbai)
 
- Social disruption API confirms zone-level bandh in pin code 400001
- Platform API confirms 8 orders cancelled for Ravi during the event
- Fraud score: 22 — auto-approved
- Payout: 2% of each cancelled order value accumulated and added to weekly payout
 
### Scenario 3 — Platform Outage (Bengaluru)
 
- Swiggy API shows server error status for 2 hours
- Ravi's earnings drop to zero during the confirmed outage window
- Fraud score: 8 — auto-approved
- Payout: 1% of previous day earnings per blocked hour added to weekly payout
 
### Scenario 4 — Minor Accident
 
- Worker manually reports inability to work via app
- Medical certificate photo uploaded and verified within 24 hours
- Payout: Previous month daily average x rest days added to weekly payout (max 7 days)
 
---
 
### Full Application Workflow
 
```
WORKER ONBOARDING
    Register with phone number and Zomato or Swiggy partner ID
    30-day earnings baseline calculated from platform data
    AI builds risk profile from zone, history, and earnings data
    Choose weekly plan and set UPI AutoPay mandate and nominee details
            |
            v
POLICY ACTIVE
    Auto-renews every Monday
    Weekly premium deducted from UPI
    Worker is now insured against income loss from disruptions
            |
            v
DISRUPTION OCCURS
    Weather event, curfew, platform outage, or accident impacts worker
    Worker's income is affected during the disruption window
            |
            v
WORKER FILES A CLAIM
    Worker opens GigShield app
    Selects disruption type (environmental, social, platform, accident)
    Confirms the zone and time window of the disruption
    Submits claim with one tap -- no paperwork, no lengthy forms
            |
            v
CLAIM VALIDATION (Automated, under 2 minutes)
    GigShield pulls actual earnings from platform API
    Compares against worker's personal 30-day baseline
    Multi-signal fraud check runs:
        Layer 1: Platform earnings authenticity (cannot be faked)
        Layer 2: Order activity log (was worker actually working?)
        Layer 3: Accelerometer and motion check + GPS signal variance
        Layer 4: IMU cross-reference + Wi-Fi and cell tower triangulation
        Layer 5: Delivery range check + climate zone + peer validation
    Fraud Risk Score computed: 0 to 100
            |
            v
CLAIM DECISION
    Score 0 to 39   -- Approved immediately
    Score 40 to 75  -- Soft or medium verification step requested from worker
    Score 76 to 100 -- Hard flag, 50% provisional payout, human review queue
            |
            v
PAYOUT PROCESSING (On Approved Claims)
    Disruption type and duration confirmed
    Payout amount calculated based on worker's actual earnings loss
    UPI transfer sent directly to worker's registered account
    Claim record and payout history updated in worker dashboard
    Insurer analytics log updated
```

---

## 7. Weekly Premium Model

| Plan | Weekly Premium | Max Weekly Payout | Covered Events |
|---|---|---|---|
| Basic | Rs. 29 per week | Rs. 500 | Heavy rain and floods only |
| Standard | Rs. 49 per week | Rs. 1,000 | Rain, Extreme Heat, AQI, Platform Outages |
| Full Shield | Rs. 69 per week | Rs. 1,500 | All disruptions including curfews, strikes, and minor accidents |

### AI-Driven Dynamic Pricing

The base premium is recalculated every Sunday night using four inputs:

- Zone risk score — flood-prone or historically disruption-heavy zones carry a higher base
- Seasonal weather forecast — upcoming week's predicted disruption probability from API data
- Worker activity score — days active on platform in the past 4 weeks
- Past claim frequency — used for actuarial calibration, not penalization

Example: A Swiggy rider in Sion, Mumbai during peak monsoon week pays Rs. 8 to Rs. 12 more than baseline compared to a rider in Whitefield, Bengaluru during the same week.

Premium is auto-deducted every Monday via UPI AutoPay mandate.

---

## 8. Parametric Triggers

| Trigger | Data Source | Threshold | Payout Rule |
|---|---|---|---|
| Earnings Drop | Platform API (Zomato/Swiggy) | 70% drop from 30-day baseline for 30+ minutes | Actual loss amount calculated |
| Heavy Rain | OpenWeatherMap / IMD | Rainfall above 50mm per hour in pin code | 5% of previous day earnings per blocked hour |
| Flood Alert | IMD / NDMA Flood Watch | Red alert issued for zone | 5% of previous day earnings per blocked hour |
| Extreme Heat | Weather API | Temperature above 42 degrees, 11 AM to 4 PM | 5% of previous day earnings per blocked hour |
| Severe Air Pollution | CPCB AQI API | AQI above 300 in zone | 5% of previous day earnings per blocked hour |
| Curfew or Bandh | Social / News API | Zone-level restriction confirmed | 2% of each cancelled order value |
| Platform Outage | Platform Status API | Confirmed downtime in worker zone | 1% of previous day earnings per blocked hour |
| Minor Accident | Manual report + medical document | Rest period 1 to 7 days | Previous month daily average x rest days |
| Serious Accident | Hospital document | Hospitalization confirmed | 70% of last 3 months total earnings |
| Fatal Accident | Death certificate or nominee claim | Confirmed fatality | Rs. 10,00,000 fixed to registered nominee |

---

## 9. AI Architecture

GigShield uses four AI modules across the claim lifecycle.

---

### Module 1 — Earnings Baseline Engine

**Model Type:** Time-Series Analysis — Rolling Average with Day-of-Week and Hour-of-Day Weighting

```
INPUT
    Worker's last 30 days of hourly earnings from platform API
    Day-of-week pattern (Fridays vs Mondays behave differently)
    Hour-of-day pattern (peak hours vs off-peak)
    Zone-level order density data

PROCESSING
    Weighted rolling average computed per worker
    Personal baseline = expected earnings per 15-minute window
    Disruption threshold = 70% drop from baseline for 30 minutes

OUTPUT
    Personal earnings baseline stored per worker in Redis cache
    Recalculated weekly as new data comes in
    Primary trigger for all non-accident claims
```

---

### Module 2 — Fraud Detection Engine

**Model Type:** Hybrid — Isolation Forest (anomaly detection) + Rule-based layer

```
INPUT PER CLAIM EVENT
    Platform earnings data for the claim window (Layer 1)
    Order activity log from platform API (Layer 2)
    Accelerometer and motion sensor data from device (Layer 3)
    GPS coordinates, signal strength, and variance (Layer 3)
    IMU gyroscope cross-reference with GPS movement claim (Layer 4)
    Wi-Fi network and cellular tower triangulation (Layer 4)
    Worker's 30-day delivery zone history (Layer 5)
    IMD and CPCB data for the specific pin code and time (Layer 5)
    Earnings status of peer workers in same zone (Layer 5)
    Claim cluster density in zone in last 10 minutes (Ring detection)
    Device fingerprint and IP subnet (Ring detection)
    Social graph flags (Ring detection)

PROCESSING
    Rule-based layer applies instant hard flags:
        Earnings data contradicts claimed loss  -- auto-reject
        Claim cluster above 20 in 10 minutes   -- auto-pause batch
        Same device ID across multiple claims   -- ring flag
        GPS path unnaturally smooth             -- spoofing flag
    Isolation Forest scores remaining claims on anomaly distance
    Final Fraud Risk Score: 0 (genuine) to 100 (fraudulent)

OUTPUT
    Score 0 to 39    -- Auto-approve
    Score 40 to 75   -- Soft or medium verification requested
    Score 76 to 100  -- Hard flag, provisional 50% payout, human review
```

---

### Module 3 — Dynamic Premium Calculator

**Model Type:** Supervised Regression — XGBoost

```
INPUT
    Worker's current risk tier
    Next-week weather forecast data from API
    Zone's historical claim rate for the same week in prior years
    Worker's claim count and payout total in last 4 weeks
    Worker's days active on platform in last 4 weeks

PROCESSING
    XGBoost regression predicts expected weekly claim cost per worker
    Outputs a risk multiplier between 0.8x and 2.5x on base premium

OUTPUT
    Adjusted weekly premium per worker
    Recalculated every Sunday night for the coming week
```

---

### Module 4 — Disruption Risk Forecaster

**Model Type:** Time-Series Forecasting — Facebook Prophet

```
INPUT
    Historical weather data by city and pin code (3-year dataset)
    Seasonal disruption patterns (monsoon calendar, heat wave history)
    Upcoming week's weather forecast data
    Historical claim volume by zone and week

PROCESSING
    Prophet forecasts expected claim volume per zone for next 7 days
    Outputs zone-level disruption probability and estimated weekly payout budget

OUTPUT
    Insurer dashboard: zone disruption probability for next week
    Feeds into Module 3 for premium adjustment
    Liquidity reserve alert if forecasted payouts approach threshold
```

---

### The 3-Tier Claims Decision System

**Tier 1 — Greenlight (70% of claims)**
- Criteria: Risk Score below 30, matches historical pattern
- Action: Instant auto-approval
- Timeline: Under 5 minutes payout
- Example: Real monsoon, multiple workers affected, data verified

**Tier 2 — Yellow Flag (25% of claims)**
- Criteria: Risk Score 30 to 60, some anomalies but explainable
- Action: Soft verification — interactive prompt for quick proof
- Proof options: Selfie with surroundings (10 seconds), weather photo, location status
- Timeline: Under 30 minutes if verified
- Example: Worker diverted to unusual zone due to traffic

**Tier 3 — Red Alert (5% of claims)**
- Criteria: Risk Score above 60, multiple anomalies or ring pattern
- Action: Parallel investigation — AI plus human plus external validation
- Verification: Cross-check platform API, weather API, peer validation
- Timeline: 2 to 4 hours with human review, 50% provisional payout issued immediately
- Example: New account claiming same disruption as 100 others simultaneously

---

## 10. System Architecture

```
WORKER MOBILE APP (React Native)
    Earnings dashboard, Policy status, Claim history, Payout wallet
            |
            | HTTPS REST API
            v
WEB DASHBOARD (React.js)
    Admin: Live zone heatmap, Fraud queue, Loss ratio analytics,
    Worker: Weekly earnings protected, active coverage status
            |
            | HTTPS REST API
            v
BACKEND API LAYER (Python FastAPI)
    /onboard  /policy  /monitor  /claim  /payout  /admin
            |
    +-------+----------+-----------+
    |                  |           |
    v                  v           v
DATABASE LAYER      AI/ML ENGINE  EXTERNAL API LAYER
PostgreSQL          Python        Platform APIs (Zomato, Swiggy)
  Workers           XGBoost       OpenWeatherMap / IMD
  Policies          Isolation     CPCB AQI API
  Claims            Forest        NDMA Flood Watch
  Payouts           Prophet       Social / News API (mock)
  FraudLogs                       Razorpay test mode
                                  Twilio SMS
Redis Cache
  Baseline cache
  Claim event queue
  Session store
  Rate limiting counters
```

### End-to-End Data Flow

```
Step 1 -- Worker Registration and Baseline Calculation
    Worker registers with phone and platform ID
    Backend creates profile in PostgreSQL
    ML Service calculates 30-day earnings baseline
    Baseline cached in Redis for real-time access
    Worker ready for monitoring

Step 2 -- Real-Time Earnings Monitoring (Every 15 Minutes)
    Backend queries platform API for actual earnings
    Compares against cached baseline
    Drop below 70% -- continue monitoring
    Drop exceeds 70% for 30 minutes -- proceed to verification

Step 3 -- Claim Verification and Approval
    5-layer verification runs in parallel
    Layer 1: Earnings authenticity check
    Layer 2: Baseline comparison
    Layer 3: Disruption validation
    Layer 4: Peer validation
    Layer 5: Behavioral baseline
    Risk score calculated and combined decision made

Step 4 -- Payout Processing
    Payout = (Baseline - Actual) x Duration x Disruption Multiplier
    Razorpay API call or UPI transfer initiated
    Transaction ID recorded in PostgreSQL
    Worker notified via SMS and in-app push
    Weekly ledger updated
```

### Scalability Architecture

```
Load Balancer (Nginx)
    |
    +-- Backend Instance 1
    +-- Backend Instance 2
    +-- Backend Instance 3
    +-- Backend Instance N

All instances share:
    PostgreSQL with connection pooling (max 50 connections per instance)
    Redis cluster for shared cache and session store
    ML service endpoints served via FastAPI
```

### Caching Strategy

```
L1 Cache -- Browser/Client
    Auth tokens, user preferences

L2 Cache -- Redis (Server-side)
    Baseline calculations
    User sessions
    API responses
    Rate limiting counters

L3 Cache -- Database indexes
    Direct SQL queries on indexed columns
```

---

## 11. Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Mobile App | React Native (Android-first) | Single codebase for Android and iOS, performant on low-end devices |
| Web Dashboard | React.js with Redux | Component-based, real-time analytics and admin UI |
| Backend API | Python FastAPI | Async, lightweight, ideal for ML model serving alongside REST endpoints |
| AI and ML Models | Python — XGBoost, Scikit-learn, Prophet, Isolation Forest | Industry standard, all deployable via FastAPI |
| Primary Database | PostgreSQL | Reliable relational database for workers, policies, claims, and payouts |
| Cache and Event Queue | Redis | Earnings baseline cache, real-time trigger queue, rate limiting |
| Earnings Data | Zomato API, Swiggy API (simulated for Phase 1) | Ground truth for earnings — cannot be faked |
| Weather API | OpenWeatherMap (free tier) | Real-time rain, temperature, AQI with pin code granularity |
| AQI Data | CPCB API India | Official Indian pollution monitoring |
| Flood and Disaster Alerts | IMD / NDMA (mocked Phase 1) | Authoritative alerts by zone |
| Payment Gateway | Razorpay test mode / UPI sandbox | Simulated instant payout — real integration from Phase 3 |
| Notifications | Twilio SMS and Firebase Push | Worker claim and payout alerts |
| Real-time | WebSockets | Live claim status and dashboard updates |
| Task Queue | RabbitMQ or Celery | Async processing for long-running fraud checks |
| Containerization | Docker and Docker Compose | Consistent dev and production environments |
| CI/CD | GitHub Actions | Automated testing and deployment |
| Hosting | Vercel (frontend) + Railway or Render (backend) | Free-tier friendly for hackathon phases |

Phase 1 note: Platform APIs (Zomato, Swiggy) are simulated via mock data. All other external APIs use free tiers.

---

## 11. Platform Choice

**Mobile App (Primary — for the delivery worker)**

React Native, Android-first. Core screens: Policy status, Weekly payout history, Claim event log, Accident report form. Push notifications for every claim event and payout. Regional language support planned: Tamil, Hindi, Telugu. Designed for low-data and low-battery conditions.

**Web Dashboard (Secondary — for the Insurer and Admin)**

React.js with Redux. Live zone risk heatmap, fraud flag queue and review interface, claim volume and loss ratio analytics, weekly payout batch management, forecasted payout alerts, earnings protection metrics per worker.

Both platforms share the same FastAPI backend and PostgreSQL database with no data duplication.

---

## 12. Key Performance Indicators

| Metric | Target |
|---|---|
| Claim Processing Time | Under 5 minutes (Tier 1), under 2 hours (Tier 3) |
| Fraud Detection Rate | 98% or higher |
| Payout Success Rate | 99% or higher |
| Worker Adoption Target | 10,000 or more in first month |
| System Uptime | 99.9% |
| False Positive Rate | Below 1% |
| API Response Time | Under 100ms |
| Baseline Accuracy | 95% or higher |
| Auto-Approval Rate | 70% of all claims |
| Appeal Approval Rate | 92% or higher |

---


## Team - LeadToWin
S.Buubes - CSE
V.Pooja - CSE
N.Ram Narren Gowtham - CSE
V.Yogapoorvaja - CSE

---

                 *Every worker requires proper value for their hard work*
