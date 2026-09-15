# Banking & EMI (Digital Banks, Challenger Banks, E-Money Institutions) — Messaging Reference

> Sources: Gong ICP doc (Apr 2026), Gong Problem/Outcome doc (Apr 2026), Messaging Guide v1.0
> cVRP / commercial VRP is UK-only. Sweeping VRP is UK-only. Do not reference for EU prospects.

---

## ICP Identity

**Who are these companies?**
Digital banks (Revolut), challenger banks (Fiinu offering overdrafts), e-money institutions (Guru Pay, Blender Lithuania), and neobanks building financial products. Range from early-stage startups to established players. Often building embedded finance or Banking-as-a-Service offerings.

**Who is in the room?**
Heads of technology, product leads, founders/CEOs, and AI specialists. Measured on customer acquisition, product stickiness, and time-to-market for new features. Success means seamless user experiences and regulatory compliance.

**What kind of buyer are they?**
Product-led and technical — building consumer-facing products where open banking is embedded. Experience-focused: care deeply about UX, conversion rates, and user journey. Regulatory-aware: need to understand FCA agency registration, consent obligations, and compliance. Often evaluating whether to build or buy.

**Language they use:**
- "Wallet top-up" / "account aggregation" / "money management" / "treasury function" / "overdraft facility"
- "VRP for loan repayments" / "sweeping vs non-sweeping" / "hosted pages vs SDK" / "iframe embedding"
- "Conversion rates" / "drop-off" / "authentication flow" / "seamless journey"
- "Can we embed the widget without redirect?"

**What they actually care about:**
- VRP for repayments — automated loan/overdraft repayment is a key use case
- Account aggregation — showing users all their accounts in one place; PFM features
- Data depth — historical data for credit decisions; real-time balance for cash management
- White-label flexibility — invisible infrastructure in their own branding; no Yapily branding in user journey

---

## Problem / JTBD

**Trigger:** Friction in customer onboarding (KYC/KYB), need to verify bank account ownership, and poor conversion during onboarding. Also triggered by wanting to offer account aggregation or payment initiation for top-ups as competitive features.

**What has broken down:** Manual bank statement uploads for verification create friction and drop-off. Customers expect seamless digital experiences but face cumbersome verification processes. Non-sweeping VRP is extremely limited (NatWest only as of last data point — validate current coverage before using in conversations).

**What they're really trying to achieve:** Frictionless onboarding with instant account verification, the ability to offer account aggregation (PFM features), and payment initiation for top-ups or transfers. Goal: become the primary financial hub for customers.

**What success looks like:** Verify account ownership in seconds, 90%+ onboarding completion rates, value-added services like transaction categorisation or payment links, automated loan repayments reducing manual collections.

**Cost of inaction:** Lose customers to competitors with better UX, higher operational costs from manual verification, can't offer competitive features like account aggregation. Customer acquisition costs remain high.

**Who feels the pain most acutely:** Chief Product Officer, Head of Customer Experience, Growth teams who own activation and conversion metrics. Operations teams feel manual verification workload.

---

## Use Cases

### Use Case: Onboarding (KYC/KYB)

- **Products:** Data (Validate + AIS)
- **Outcome / Value:** OB authentication confirms ID and account ownership in seconds. Reduces sign-up time and blocks fake accounts. No document or photo uploads.
- **Key Message:** Instant, compliant customer onboarding in minutes. Verify identity and account ownership in real time, replacing manual KYC steps to onboard customers faster while fulfilling KYC and AML requirements.
- **Short Form:** Frictionless KYC. Account ownership confirmed in seconds.
- **Persona notes:**
  - Head of Product: launch new features fast
  - CTO: single integration, low maintenance
  - Risk & Compliance Officer: secure data flows, enterprise-ready services
  - Head of Growth: boost customer activation
- **Funnel stage:** Consideration, Evaluation

### Use Case: Account Aggregation / PFM

- **Products:** Data (AIS)
- **Outcome / Value:** Securely aggregate all banking accounts in one place. Clean, reliable feeds enable spend categorisation, insights, and dashboards that drive user engagement. Real-time balances and transactions with extensive coverage.
- **Key Message:** Unified account views for better customer experiences. Connect to 2,000+ UK and EU banks to offer customers a real-time overview of their accounts, balances, and transactions — improving engagement and retention.
- **Short Form:** All accounts in one view. Real-time, reliable, at scale.
- **Funnel stage:** Consideration

### Use Case: Account Top-Ups / Wallet Funding

- **Products:** Payments (PIS), Sweeping VRP *(UK only)*
- **Outcome / Value:** Direct A2A payments settle instantly at a fixed fee with zero chargebacks. Real-time confirmation lets users spend the balance immediately, improving activation and CLTV.
- **Key Message:** Instant wallet top-ups at lower costs. Direct-to-bank payments settle in seconds, raising top-up success and removing interchange fees and chargebacks.
- **Short Form:** Faster top-ups. Lower fees. Zero chargebacks.
- **Note:** Sweeping VRP is UK-only.
- **Funnel stage:** Consideration, Evaluation

### Use Case: Credit Card Bill Payment

- **Products:** Payments (PIS), Sweeping VRP *(UK only)*
- **Outcome / Value:** Real-time, low-cost method that lowers delinquency and improves customer experience. Direct A2A payments → higher customer satisfaction and lower default rates. Option for automated reminders and flexible options.
- **Key Message:** Faster, seamless card bill payments. Enable customers to repay their credit card bills via direct A2A payments, reducing friction and delays while improving repayment success.
- **Short Form:** Credit card repayments via open banking. Frictionless, instant, lower default rates.
- **Note:** Sweeping VRP is UK-only.
- **Funnel stage:** Consideration

### Use Case: Credit Decisioning

- **Products:** Data Plus
- **Outcome / Value:** Real-time financial data access improves risk assessment and accelerates credit approvals. Banks can offer more accurate and personalised credit products.
- **Key Message:** Smarter lending with live customer data. Real-time income, spending, and cash-flow insights help form better credit decisions, reduce defaults, and tailor products to customer needs.
- **Short Form:** Live bank data for better credit decisions.
- **Funnel stage:** Consideration, Evaluation

---

## Gaps to Flag for This Vertical

- **Commercial VRP in EU** — recurring variable payments are UK-only; cannot be referenced for EU digital banks/EMIs
- **Non-sweeping VRP availability** — very limited (NatWest only as of last data point); validate current bank coverage before including in any conversation
- **Virtual account issuance** — Yapily does not issue virtual accounts; EMI licence required for this
- **Instant payouts** — cannot push money to users via open banking
- **Savings/investment account data** — not consistently available; flag per market
- **Switzerland coverage** — not part of EU regulatory framework; limited connectivity
- **Agency registration** — UK FCA registration takes 2–3 months; flag early in conversations with non-registered fintechs

> Never claim virtual accounts, payouts, or cVRP in EU as available capabilities. See Edge Case 8.

---

## Proof Points Available

*From confirmed figures in proof_points.md — do not use any metric not listed there.*

- 2,000+ bank connections across 19 countries
- 99.97% uptime (99.5% customer-facing SLA)
- Sweeping VRP: 12 banks, 90%+ UK coverage
- Named clients: Revolut (data), Allica Bank (onboarding), Emma (account aggregation), Fiinu (VRP for overdrafts), inbestMe

*For deal-specific metrics (onboarding completion rate, verification time saved, top-up success rate): run the metric prompt — ask the user for their figures.*

---

## Content Assets

*Relevant assets from Content Hub for this vertical:*

- [How Emma + Yapily are helping people make smarter financial decisions](https://www.yapily.com/resources/case-studies/open-banking-case-study-emma) — Case Study. Consideration.
- [How inbestMe + Yapily are democratising investment](https://www.yapily.com/resources/case-studies/open-banking-case-study-inbestme) — Case Study. Consideration.
- [Open banking for banks and financial institutions: Six use cases](https://www.yapily.com/blog/open-banking-for-banks-and-financial-institutions-six-use-cases) — Blog. Consideration.
- [How to use open banking for account aggregation](https://www.yapily.com/blog/how-to-use-open-banking-for-account-aggregation) — Blog. Consideration.
- [Sweeping VRP Sales Enablement Slides](https://docs.google.com/presentation/d/1lCHL4a52DR6CIKxJz__WTfROL2l1faZDFLKV44RB_j8/) — Deck. Internal. Consideration/Evaluation.
- [Sweeping VRP Playbook](https://docs.google.com/document/d/1hJUHz5OKN-yU7wa-mjsbTKQIqCzis_0QXUGH8wbzKmk/) — Internal guide. UK only.
- [Open banking for identity verification](https://www.yapily.com/blog/open-banking-for-identity-verification) — Blog. Consideration.
- [Yapily supports Google — bank account verification](https://www.yapily.com/blog/yapily-supports-google-to-provide-bank-account-verification-services/) — Blog. Credibility signal. Consideration.
