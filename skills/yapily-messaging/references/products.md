# Yapily Products — Reference

> Sources: docs.yapily.com (Payments, Bulk Payments, AIS/Data, Validate, Hosted Pages, Yapily Connect), Data Plus Playbook, Sweeping VRP Playbook, cVRP/VRP Playbook
> Last updated: April 2026

---

## Product Scope Summary

Yapily offers 9 products across payments, data, and connectivity. All are accessed via a single API integration. Products span consumer, business, and corporate accounts across UK and EU (19 countries, 2,000+ institutions).

**What Yapily does NOT offer — confirmed gaps, never claim as available:**
See Confirmed Gaps section at the end of this file.

---

## 1. Payment Initiation Service (PIS)

**What it is:** Direct account-to-account payment initiation. Moves money from a payer's bank account to a payee's account via Faster Payments (UK) or SEPA (EU), without card networks.

**Payment types:**
- **Single payment** — one-time A2A payment, instant settlement
- **Scheduled payment** — payment initiated now, executed at a future date
- **Periodic payment** — fixed recurring payments at set intervals (standing order equivalent)
- **Bulk payments** — batch of payments initiated in a single API call (UK only)

**Key characteristics:**
- Strong Customer Authentication (SCA) via bank app — bank-level security
- No card data involved — eliminates chargebacks
- Instant settlement via Faster Payments (UK) or SEPA Instant where available
- ~80% average conversion; some customers at 95% — varies by country and bank
- 99.97% uptime; 99.5% customer-facing SLA

**Geography:** UK and EU (19 countries). Bulk Payments: UK only.

**Use cases:** Checkout / pay by bank, merchant onboarding payment, loan repayments, wallet top-ups, utility billing, tax payments.

---

## 2. Variable Recurring Payments — Sweeping VRP

**What it is:** Consumer-authorised variable recurring payments between accounts owned by the same person. Regulated under CMA Open Banking rules.

**Key characteristics:**
- Consent granted once by the user; no re-authorisation per payment
- Payment amount and timing can vary within user-set limits
- Covers sweeping use case: moving money between a user's own accounts (e.g. current account to savings, current account to investment)
- 12 major UK banks live; covers 90%+ of UK current accounts
- Uses SCA at consent setup; no friction per individual payment thereafter

**Geography:** UK only. Not available in EU.

**Use cases:** Automated savings sweeping, debt repayment sweeping, cash management between personal accounts.

**Important:** Sweeping VRP is for same-person account transfers only. For merchant-initiated recurring payments, see cVRP.

---

## 3. Commercial VRP (cVRP)

**What it is:** Variable recurring payments where the payer authorises a third party (merchant or platform) to initiate variable payments from their account. The commercial extension of VRP beyond sweeping.

**Key characteristics:**
- Payer grants consent once; merchant can initiate payments within agreed limits (amount, frequency)
- Payment amounts can vary — unlike Direct Debit which is fixed
- Live balance check before payment reduces failed collections
- Strong Customer Authentication at consent setup
- Yapily is a founding member of UKPI (UK Pay by Bank Infrastructure)
- Wave 1 pricing: 7–10p per transaction (working figures); FPS settlement fees separate
- Bank readiness varies — Wave 1 banks live or near-live; check bank readiness tracker for current status

**Geography:** UK only. cVRP does not exist as a regulated product in EU — never reference for EU prospects.

**Use cases:** Subscription billing, recurring utility payments, insurance premiums, loan repayments (merchant-initiated), invoice collections, SaaS billing.

**Gaps:** cVRP in EU (not available), mandate management dashboard (not a packaged product), guaranteed payment status in real time (bank-dependent).

---

## 4. AIS / Data (Account Information Service)

**What it is:** Read access to bank account data — balances, transactions, account details — via consented open banking connection.

**Key characteristics:**
- Covers consumer, business, and corporate accounts
- Transaction history: up to 12 months standard; up to 7 years for some use cases (lender-specific)
- Data refresh: up to 4x daily
- Consent duration: 90 days UK / 180 days EU — re-authorisation required after expiry
- 2,000+ institutions across 19 countries
- 99.5% UK bank coverage (customer-facing)
- Business account coverage: extensively tested — Yapily's first customer (Intuit/QuickBooks) required this

**Geography:** UK and EU (19 countries). Switzerland: limited connectivity — validate per prospect.

**Use cases:** Account aggregation, PFM, credit decisioning (income/expenditure), affordability assessment, KYC/KYB verification, bank feed automation (accounting platforms), cash flow monitoring.

**Gaps:** Perpetual consents (90/180-day hard regulatory limits — not a Yapily limitation), savings/investment account data (inconsistent — validate per market).

---

## 5. Data Plus

**What it is:** Enriched and categorised transaction data layer built on top of AIS. Adds intelligence to raw bank transaction data.

**Key characteristics:**
- Transaction categorisation: income types, expenditure categories, debt obligations, risk indicators
- Income verification: identify income sources, regularity, variability over time
- Red flag detection: gambling transactions, overdraft patterns, penalty charges, irregular behaviour
- Affordability assessment: income-to-expense ratios, liquidity analysis, balance predictions
- Recurring transaction identification
- Localised categorisation per market (not dependent on a single taxonomy across all countries)
- 80–95% categorisation accuracy (use case and market dependent)
- Named clients: Yonder (lending), Pleo (expense management)

**Geography:** UK and EU where AIS is available.

**Use cases:** Consumer credit decisioning, B2B credit decisioning, affordability checks, portfolio monitoring, cash flow forecasting, expense management, financial wellbeing tools.

**Gaps:** Income verification as a packaged decisioning product (data is available; Yapily does not make credit decisions), credit scoring (Yapily provides data inputs; the scoring model is the client's).

---

## 6. Data Validate

**What it is:** Bank account ownership and identity verification using open banking data.

**Key characteristics:**
- Confirms account ownership in real time — name, sort code, account number
- Verifies identity without document uploads or photo checks
- PSD2-compliant KYC/KYB
- Reduces onboarding drop-off vs manual document verification
- Works across consumer and business accounts
- Instant — seconds rather than minutes or days

**Geography:** UK and EU where AIS is available.

**Use cases:** KYC onboarding (consumer), KYB onboarding (merchant, SME), fraud prevention, account verification before payment initiation, gaming operator PSU onboarding.

---

## 7. Hosted Pages

**What it is:** Pre-built payment UI hosted by Yapily, with client branding applied. Allows clients to go live with open banking payments without building their own front-end.

**Key characteristics:**
- Client applies their own branding — logo, colours
- No frontend development required from the client
- Covers bank selection, authentication redirect, and confirmation screens
- Option to move to white-label API later when ready for full UX control
- Faster time to market than building custom payment flows

**Geography:** Available wherever PIS is available.

**Use cases:** Clients who want to go live quickly; clients without frontend resource; phased approach (Hosted Pages first, white-label later).

---

## 8. Yapily Connect

**What it is:** API access layer that allows clients to access open banking infrastructure without holding their own AISP/PISP licence. Yapily acts as the regulated entity; the client integrates via Yapily Connect.

**Key characteristics:**
- Removes the need for clients to apply for FCA AISP/PISP authorisation (2–3 month process)
- Yapily handles regulatory compliance at the infrastructure layer
- Clients can launch open banking products without licence overhead
- Sub-application support: enables more granular risk management and data segregation for complex client structures (e.g. PSPs serving multiple merchants)
- Single tenancy available for enterprise direct customers
- mTLS security
- Data segregation for UK/EU regulatory needs without multiple providers

**Geography:** UK and EU.

**Use cases:** Clients scaling quickly who don't want licence complexity; PSPs and platforms needing sub-merchant support; enterprise clients needing dedicated infrastructure.

---

## 9. Bulk Payments

**What it is:** Batch payment initiation — multiple A2A payments triggered in a single API call.

**Key characteristics:**
- Single API call initiates a batch of payments simultaneously
- Same-day settlement via Faster Payments
- Automated reconciliation
- Reduces manual processing overhead vs individual payment runs

**Geography:** UK only. Not available in EU.

**Use cases:** Payroll runs, supplier payments, invoice settlement, insurance payouts to multiple claimants, bulk refunds (where the client is the payer).

---

## Confirmed Gaps — Never Claim as Available

| Capability | Status | Note |
|---|---|---|
| Virtual accounts / account issuance | Not available | Requires EMI licence — not a Yapily product |
| Payouts / loan disbursement | Not available | Open banking is pull-only; Yapily cannot push funds to third-party accounts |
| Perpetual consents | Not available | 90-day UK / 180-day EU re-authorisation is a regulatory hard limit, not a Yapily limitation |
| Income verification as a packaged product | Not available | Data is available via Data Plus; Yapily does not provide a decisioning product |
| Credit scoring | Not available | Yapily provides data inputs; scoring model is the client's responsibility |
| cVRP in EU | Not available | cVRP is a UK-regulated product only; no EU equivalent exists |
| Bulk Payments in EU | Not available | UK only |
| Refund automation via API | Not available | Yapily cannot initiate refunds from merchant to customer accounts |
| Savings / investment account data | Inconsistent | Validate per market before committing |
| ERP direct integration | Not available | API integration only; no pre-built ERP connectors |
| Instant SEPA everywhere | Not available | ~75% of SEPA banks offer instant; cannot guarantee across all markets |
| Switzerland coverage | Limited | Not part of EU regulatory framework; validate before committing |
