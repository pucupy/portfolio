# Lending B2B (SME and Business Lending) — Messaging Reference

> Sources: Gong ICP doc (Apr 2026), Gong Problem/Outcome doc (Apr 2026), Messaging Guide v1.0
> VRP repayments are UK-only for this vertical.

---

## ICP Identity

**Who are these companies?**
Business lenders including invoice finance (Mondu doing B2B BNPL for €2M+ businesses), dealer finance (LE Capital financing car dealerships), SME lending platforms (Novicap building automated micro-lending for Spanish SMEs), and factoring companies. Serve businesses from micro-SMEs to mid-market enterprises.

**Who is in the room?**
Heads of risk, product managers building decision engines, commercial leads, and technical architects. Measured on accurate risk assessment, fast decisions, and portfolio performance.

**What kind of buyer are they?**
Sophisticated and data-driven — building proprietary underwriting models. Coverage-focused: business account coverage is make-or-break. Integration-experienced: technical teams ready to integrate, asking detailed API questions. Often have tried other providers and know the limitations of the market.

**Language they use:**
- "Invoice financing" / "factoring" / "working capital" / "cash flow analysis" / "SME credit" / "merchant cash advance"
- "We need business account data" / "corporate account coverage" / "B2B categorisation" / "revenue vs expenses"
- "We need to verify invoices" / "detect double invoicing" / "reconciliation" / "merchant onboarding"
- "Can we pull four times a day?" / "real-time cash flow monitoring" / "portfolio monitoring"

**What they actually care about:**
- Business account coverage — consumer-focused providers are a dealbreaker; need consumer, business, and corporate accounts all in scope
- B2B-specific categorisation — not just consumer transaction labels; 110 outgoing categories for business accounts
- Market-specific coverage — local expertise matters, especially Spain, Netherlands, UK
- Data freshness — 4x daily refresh for real-time cash flow monitoring

---

## Problem / JTBD

**Trigger:** Can't access business bank account data for credit assessment, long SME onboarding, can't monitor portfolio health in real-time. Trigger is often a need to scale lending operations or reduce default rates.

**What has broken down:** Business accounts are poorly covered by most open banking providers. Filed accounts are 6–12 months old and often inaccurate. Manual bank statement collection doesn't scale. Many B2B lenders have tried providers who don't prioritise business account data and hit coverage walls.

**What they're really trying to achieve:** Comprehensive business account coverage, ability to rebuild accurate P&Ls from real transaction data, and ongoing monitoring of borrower financial health. Goal: automated underwriting for SME loans.

**What success looks like:** Business account data from 80%+ of SME banks, B2B transaction categorisation with 80%+ accuracy, real-time portfolio monitoring replacing quarterly reviews. Early warning detection: new high-cost debt, declining revenue.

**Cost of inaction:** Credit decisions on outdated information, missed early warning signs of distress, deals lost to competitors with faster onboarding. Default rates increase due to poor data quality. Several competitors in dealer finance have failed by relying solely on filed accounts.

**Who feels the pain most acutely:** Chief Credit Officer, Head of SME Lending, Portfolio Management teams needing real-time visibility into borrower health.

---

## Use Cases

### Use Case: Onboarding / KYB Verification

- **Products:** Data (AIS + Validate)
- **Outcome / Value:** Instant verification of business identity and account ownership. Automates compliant KYB onboarding, cuts manual effort, stops fraudulent entities. Faster merchant go-live with less paperwork.
- **Key Message:** Faster, compliant KYB for business borrowers. Instantly verify business identity and account ownership using open-banking data, cutting out manual KYB checks and speeding up onboarding while meeting AML requirements.
- **Short Form:** KYB in minutes. Open banking confirmed, AML-compliant.
- **Persona notes:**
  - Head of Product: launch lending journeys quickly, minimal tech debt
  - Head of Risk & Credit: higher accuracy, lower fraud
  - Head of Ops: fewer manual steps, faster go-live
  - Head of Engineering: stable performance at high volume, quality documentation
- **Funnel stage:** Consideration, Evaluation

### Use Case: Credit Decisioning

- **Products:** Data Plus
- **Outcome / Value:** Real-time cash-flow, expenses, and revenue data enables faster affordability checks. Credit risk analysis is more accurate. Decision SLA cuts from days to minutes/hours. Beyond filed accounts: live P&L reconstruction from real transaction data.
- **Key Message:** Smarter business lending decisions with live cash flow data. Access to real-time income, expense, and balance insights helps lenders better assess affordability, manage risk, and open lending to underserved segments like SMEs.
- **Short Form:** Better SME credit decisions using live bank data, not 12-month-old filed accounts.
- **Funnel stage:** Consideration, Evaluation

### Use Case: Risk Management / Portfolio Monitoring

- **Products:** Data Plus
- **Outcome / Value:** Continuous structured bank-data feeds provide correct financial information, monitor business health, and flag emerging risks. Ensures compliance, lowers review cost, reduces exposure to high-risk lending. Supplement existing credit models with reliable, comprehensive open banking data to unlock customised lending for underserved segments.
- **Key Message:** Real-time portfolio monitoring replaces quarterly reviews. Live transaction data flags deteriorating cash flows, new high-cost debt, and declining revenue before they become defaults.
- **Short Form:** Spot problems before they become defaults. Live data, not quarterly snapshots.
- **Funnel stage:** Consideration

### Use Case: Repayments

- **Products:** Payments (PIS), VRP *(UK only)*
- **Outcome / Value:** Direct, secure A2A repayments let borrowers settle instantly from their bank app. Automated schedules cut late payments and prevent defaults. Lower processing fees. Improved borrower satisfaction.
- **Key Message:** Flexible, real-time repayments that reduce risk. Variable recurring payments pull repayments directly from business accounts when funds are available, improving repayment success and reducing manual collections.
- **Short Form:** Automated B2B loan repayments. Fewer failed collections, lower cost.
- **Note:** VRP for repayments is UK-only. Do not reference for EU prospects.
- **Funnel stage:** Consideration, Evaluation

---

## Gaps to Flag for This Vertical

- **Loan disbursement / payouts** — Open banking is pull-based; Yapily cannot push funds out to borrowers for loan disbursement. This is a confirmed gap for B2B lenders who need to pay out to clients.
- **Invoice matching** — Automated reconciliation between invoices and bank transactions is not a Yapily product capability
- **Fraud detection tools** — Double-invoicing detection and advanced fraud analytics are not available; raw transaction data only
- **Deeper business insights** — Financial metrics such as average throughput, bad debt frequency, and ERP-level views are not available as packaged products
- **ERP integration** — Direct connections to accounting systems beyond bank data are not available
- **cVRP in EU** — UK only; do not reference for EU B2B lending prospects

> Never imply these are on the roadmap. See Edge Case 8.

---

## Proof Points Available

*From confirmed figures in proof_points.md — do not use any metric not listed there.*

- Business accounts fully in scope — consumer, business, and corporate accounts via single integration
- 110 outgoing transaction categories for B2B accounts (Data Plus)
- 4x daily data refresh available
- 2,000+ bank connections across 19 countries
- Named clients: LE Capital (dealer finance), Mondu (B2B BNPL), Novicap (SME lending Spain)

*For deal-specific metrics (time-to-decision improvement, approval rate uplift, portfolio default rate): run the metric prompt — ask the user for their figures.*

---

## Content Assets

*Relevant assets from Content Hub for this vertical:*

- [Data Plus Playbook (Internal)](https://docs.google.com/document/d/1ydU0Ik3l7lDreFdJe6DJ7xVQnaxsnvPVKhGGbmYSUIA/) — Internal guide. Consideration/Evaluation.
- [Data Plus Battlecard](https://docs.google.com/spreadsheets/d/1zTp2VIyIpMcvV_MIeEKT-oCEbpHhAMdy13tbRU44tw8/) — Internal enablement.
- [Data Plus Demo (Lovable)](https://yapily-dataplus-demo.lovable.app/) — Interactive demo. Evaluation.
- [Open banking for business accounts: what you need to know](https://www.yapily.com/blog/open-banking-for-business-accounts) — Blog. Awareness/Consideration.
- [Open banking for identity verification](https://www.yapily.com/blog/open-banking-for-identity-verification) — Blog. Consideration.
- [Proof Points interactive (Lovable)](https://openbankingstats.lovable.app/proofpoints) — Consideration/Evaluation.
- [Data Plus category labels (Lovable)](https://dataplus-category-list.lovable.app/) — Useful for demonstrating B2B categorisation depth.
