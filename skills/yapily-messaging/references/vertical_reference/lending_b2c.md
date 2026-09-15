# Lending B2C (Consumer Lending, BNPL, Personal Loans) — Messaging Reference

> Sources: Gong ICP doc (Apr 2026), Gong Problem/Outcome doc (Apr 2026), Messaging Guide v1.0
> cVRP/VRP repayments are UK-only for this vertical.

---

## ICP Identity

**Who are these companies?**
Consumer lenders including BNPL providers (Zilch), personal loan companies (Norwich Trust lending £5–20K to near-prime consumers), guarantor loan providers, and subprime lenders. Range from startups to established players, typically lending to underserved segments where credit files are imperfect.

**Who is in the room?**
Risk managers, heads of underwriting, data science leads, and CTOs. Measured on approval rates, default rates, and speed of credit decisions. Success means balancing risk with customer acquisition.

**What kind of buyer are they?**
Data-hungry and analytical — want raw data to feed proprietary decisioning engines. Most already use an open banking provider (Plaid, Tink, AccountScore) and are evaluating alternatives for better coverage or pricing. Compliance-conscious around consent management, GDPR, and affordability assessment requirements.

**Language they use:**
- "Affordability assessment" / "credit decisioning" / "thin files" / "income verification" / "debt-to-income ratio"
- "We need categorised transactions" / "12 months historical data" / "balance checks" / "regular salary identification"
- "Red flags" / "gambling spend" / "debt repayments" / "disposable income" / "financial profile"
- "Disposable income" / "consent longevity" / "re-consent"

**What they actually care about:**
- Historical data depth — "Can you go back seven years?" — deeper history enables better credit models (Lloyds: up to 7 years)
- Categorisation accuracy — precise income/expense categorisation; "What's the uplift in particular areas?"
- Consent longevity — 90 days in UK (soft re-consent), 180 days in EU; ongoing portfolio monitoring tension
- Business account coverage — relevant where they lend to SME owners as consumers

---

## Problem / JTBD

**Trigger:** Slow credit decisioning (currently 3+ days for manual bank statement review), high drop-off rates during onboarding, and inaccurate credit assessments based solely on credit bureau data. Trigger is often missing a lending target or losing applicants to faster competitors.

**What has broken down:** Manual bank statement uploads and review don't scale. Credit bureau data is outdated (6–7 weeks lag) and doesn't show real-time cash flow or gambling behaviour. Filed accounts are often inaccurate or stale.

**What they're really trying to achieve:** Faster, more accurate credit decisions based on real bank data, reduce fraud, improve conversion rates during onboarding. Goal: automated underwriting that approves loans in minutes rather than days.

**What success looks like:** 12 months of transaction data accessible instantly, 80–95% categorisation accuracy to identify income sources and debt repayments, time-to-decision from days to minutes.

**Cost of inaction:** Poor credit decisions → higher default rates. Lose applicants to faster competitors. Can't detect early warning signs (new high-cost loans, gambling). Competitors who went bust did so by relying solely on outdated accounts data.

**Who feels the pain most acutely:** Chief Risk Officer, Head of Underwriting, Product teams who own conversion rates. Operations teams feel the manual statement review burden.

---

## Use Cases

### Use Case: Onboarding / Account Verification

- **Products:** Data (AIS + Validate)
- **Outcome / Value:** Instant, compliant KYC — verified identity and account checks cut onboarding time from days to minutes. Higher conversion and lower fraud by removing document uploads. Operational efficiency through automated verification.
- **Key Message:** Faster sign-up with bank-verified checks. Instantly verify customer identity and account ownership, cutting out manual uploads and reducing onboarding time and drop-offs.
- **Short Form:** Faster sign-ups with open banking verified identity.
- **Persona notes:**
  - Head of Product: launch lending journeys quickly with minimal tech debt
  - Head of Risk & Credit: higher approval accuracy with lower default and fraud
  - Head of Ops: fewer manual KYB steps, faster go-live
  - Head of Growth: expand addressable market, launch new offerings
- **Funnel stage:** Consideration, Evaluation

### Use Case: Credit Decisioning

- **Products:** Data Plus
- **Outcome / Value:** Real-time financial data enables faster, more accurate credit rating and affordability assessment. Live insights — 90-day income, spend, and stability trends to improve scoring accuracy. Beyond bureau data: detect gambling behaviour, identify income sources, assess debt obligations, evaluate income variability, flag overdrafts, assess liquidity.
- **Key Message:** Smarter credit approvals with real-time data. Access to 90-day income and spending data strengthens affordability checks, helping better-informed credit decisions deliver faster outcomes while reducing risk. Go beyond outdated scoring systems — use live bank data instead of 6–7 week lagged bureau data.
- **Short Form:** Better credit decisions, faster. Real bank data instead of stale bureau scores.
- **Persona notes:** Head of Risk & Credit: approval accuracy, default reduction; Head of Product: speed and conversion
- **Funnel stage:** Consideration, Evaluation

### Use Case: Risk Management / Ongoing Monitoring

- **Products:** Data Plus
- **Outcome / Value:** Continuous bank-data feeds provide ongoing monitoring. Flag emerging risks: income loss, balance drops, new high-cost debt. Ensures compliance, lowers review cost, reduces exposure to high-risk lending. Enables fairer, more inclusive lending for underserved segments.
- **Key Message:** Assess risk more accurately and offer solutions to those with limited or no credit history. Open banking data enables more inclusive options and increased financial inclusion for individuals underserved by mainstream lenders.
- **Short Form:** More inclusive lending. More accurate risk. Live data, not filed accounts.
- **Funnel stage:** Consideration

### Use Case: Repayments

- **Products:** Payments (PIS), VRP *(UK only)*
- **Outcome / Value:** Reduce late payments by offering customers a direct, instant, secure payment option. Variable recurring payments pull funds automatically when balances allow — reducing failed payments, cutting collection costs, improving customer experience.
- **Key Message:** Frictionless repayments that reduce late payments. Variable recurring payments pull funds automatically when balances allow, reducing failed payments, cutting collection costs, and improving customer experience.
- **Short Form:** Fewer missed repayments. Lower collection costs. Better borrower experience.
- **Funnel stage:** Consideration, Evaluation
- **Note:** VRP for repayments is UK-only. Do not reference for EU lending prospects.

---

## Gaps to Flag for This Vertical

- **Income verification as a packaged product** — Yapily provides the data; lenders build their own decisioning. No ready-made affordability score product. Flag honestly: "We provide the data infrastructure; your team builds the decisioning layer."
- **Credit scoring** — Yapily does not make credit decisions or provide credit scores
- **Account aggregation visibility** — No way to know if users have undisclosed accounts at other banks
- **Perpetual/longer consents** — 90 days (UK) / 180 days (EU) feels short for ongoing portfolio monitoring; automated re-consent not available
- **Loan disbursement** — Open banking is pull-based; cannot disburse loan funds via the Yapily API
- **cVRP in EU** — UK only; do not reference for EU lenders

> Never claim income verification or credit scoring as solved capabilities. See Edge Case 8.

---

## Proof Points Available

*From confirmed figures in proof_points.md — do not use any metric not listed there.*

- Up to 7 years of historical transaction data (Lloyds and select banks — not universal)
- 2,000+ bank connections across 19 countries
- 90-day consent UK / 180-day EU
- Data Plus: enriched categorisation — income sources, expenditure types, debt obligations, risk indicators, recurring transactions
- Named clients: Yonder (credit), Zilch (BNPL), Norwich Trust (near-prime lending)

*For deal-specific metrics (time-to-decision improvement, approval rate uplift, default rate reduction): run the metric prompt — ask the user for their figures.*

---

## Content Assets

*Relevant assets from Content Hub for this vertical:*

- [How Yonder + Yapily are making credit more inclusive](https://www.yapily.com/resources/case-studies/open-banking-case-study-yonder) — Case Study. Consideration.
- [Data Plus Playbook (Internal)](https://docs.google.com/document/d/1ydU0Ik3l7lDreFdJe6DJ7xVQnaxsnvPVKhGGbmYSUIA/) — Internal guide. Consideration/Evaluation.
- [Data Plus Battlecard](https://docs.google.com/spreadsheets/d/1zTp2VIyIpMcvV_MIeEKT-oCEbpHhAMdy13tbRU44tw8/) — Internal enablement. Consideration/Evaluation.
- [Data Plus Demo (Lovable)](https://yapily-dataplus-demo.lovable.app/) — Interactive demo. Consideration/Evaluation.
- [Data Plus Slides](https://docs.google.com/presentation/d/1d5C703ZZlOdmqxJLeORgfVKIZk6uNMmOJQcPnpwSXzo/) — Deck. Consideration/Evaluation.
- [Open banking for identity verification](https://www.yapily.com/blog/open-banking-for-identity-verification) — Blog. Consideration.
- [Instant bank account verification: How to choose the right service](https://www.yapily.com/blog/instant-bank-account-verification) — Blog. Consideration/Evaluation.
- [Proof Points interactive (Lovable)](https://openbankingstats.lovable.app/proofpoints) — Consideration/Evaluation.
