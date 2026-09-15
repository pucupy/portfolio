# Accounting & ERP (Business Accounting Platforms, ERP Providers) — Messaging Reference

> Sources: Gong ICP doc (Apr 2026), Gong Problem/Outcome doc (Apr 2026), Messaging Guide Other Core Verticals xlsx (Accounting tab)
> Bulk Payments is UK-only. cVRP is UK-only.

---

## ICP Identity

**Who are these companies?**
Accounting software providers (Intuit/QuickBooks — Yapily's first customer), ERP systems, expense management platforms (Pleo, Payhawk), and bookkeeping solutions. Serving SMEs and enterprises with financial management needs. Example accounts: Intuit, Iris, Approval Max. Target prospects: Sage, SAP, Oracle, Zoho, MS Dynamics.

**Who is in the room?**
Product managers, heads of partnerships, technical leads, and commercial directors. Measured on user adoption, automation rates, and feature completeness. Success means reducing manual data entry and improving reconciliation accuracy.

**What kind of buyer are they?**
Feature-driven — looking to add bank feed connectivity as a product feature. SME-focused: their customers are small businesses needing automated bookkeeping. Integration-heavy: already have complex tech stacks, need seamless API integration. Competitive pressure drives the conversation ("We want to compete with Payhawk").

**Language they use:**
- "Bank feeds" / "reconciliation" / "expense management" / "receipt matching" / "chart of accounts" / "transaction categorisation"
- "Automated bookkeeping" / "real-time sync" / "four times daily refresh" / "eliminate manual entry"
- "SME customers" / "accountants" / "bookkeepers" / "finance teams"
- "Making Tax Digital" / "MTD compliance"

**What they actually care about:**
- Business account coverage — Intuit/QuickBooks as first customer forced Yapily to cover this comprehensively; use as credibility proof
- Data refresh frequency — 4x daily refresh; accurate books require current data
- Transaction categorisation — automated expense categorisation reduces manual work; chart-of-accounts mapping
- Reliability — 99.5% UK bank account coverage; comprehensive coverage across the UK and EU

---

## Problem / JTBD

**Trigger:** Customer complaints about manual data entry, and the need to compete with platforms offering automated bank feeds. Compliance pressure from Making Tax Digital (MTD) in the UK.

**What has broken down:** Manual CSV uploads and bank statement reconciliation create friction for SME customers. Direct bank integrations are expensive to maintain. When transaction feeds break or lag, forecasting and bookkeeping credibility suffers and support tickets increase.

**What they're really trying to achieve:** Automated bank feeds syncing transactions in real-time, eliminate manual data entry, provide cash flow forecasting, and deliver expense categorisation. Goal: become the financial operating system for SMEs.

**What success looks like:** Connect to 95%+ of business banks, sync transactions 4x daily, high categorisation accuracy so transactions automatically map to the correct accounts. Customer time spent on bookkeeping drops by 50%+.

**Cost of inaction:** Lose customers to competitors offering better automation, higher support costs from manual reconciliation issues, can't offer advanced features like cash flow forecasting. Engineering teams bear the cost of maintaining direct bank integrations in-house.

**Who feels the pain most acutely:** Chief Product Officer, Head of SME Product, Customer Success teams who hear complaints about manual processes. Engineering teams maintaining direct bank integrations.

---

## Use Cases

### Use Case: Automated Bookkeeping / Real-Time Cash Visibility

- **Products:** Data (AIS), Data Plus
- **Outcome / Value:**
  - For the platform: Stronger product proposition with real-time visibility. Ledgers update automatically with standardised bank data. Fewer support tickets related to broken feeds or missing transactions. Ability to offer "always up-to-date books" without maintaining bank integrations.
  - For SME customers: No manual statement uploads. Fewer bookkeeping errors. Faster month-end close. Finance teams see cash positions in one place and make faster decisions on spending, collections, and working capital.
- **Key Message:** Automate your customers' bookkeeping and provide real-time cash flow views with reliable, direct-to-bank data, while Yapily handles the complexity of bank connectivity.
- **Short Form:** Always up-to-date books. No manual feeds, no broken integrations.
- **Persona notes:**
  - Head of Product: competitive differentiation, product stickiness
  - Customer Success: fewer support tickets, higher satisfaction
  - Engineering: no in-house integration maintenance burden
- **Funnel stage:** Awareness, Consideration

### Use Case: Cash Flow Forecasting & Insights

- **Products:** Data (AIS), Data Plus
- **Outcome / Value:**
  - For the platform: Forecasting tools become more accurate with timely, standardised bank data. Consolidated view of cash across all accounts. Stronger product stickiness by becoming the place users trust for cash flow visibility.
  - For SME customers: Better day-to-day liquidity management with fresh, reliable data. Faster, more confident decisions on spending, borrowing, or investing. Earlier visibility of risks such as cash shortfalls or delayed receivables.
- **Key Message:** Give your customers real-time visibility into their cash position with reliable, direct-from-bank data that powers accurate forecasting and confident financial decisions.
- **Short Form:** Real-time cash flow forecasting. Reliable bank data, not manual exports.
- **Funnel stage:** Consideration

### Use Case: Tax Reporting & Compliance (incl. Making Tax Digital)

- **Products:** Data (AIS), Data Plus
- **Outcome / Value:**
  - For the platform: Tax solutions enabled directly by real-time bank data. Cleaner audit trails. Reduced support overhead from data errors. Opportunity to facilitate Pay by Bank tax payments, syncing payment records with accounting records.
  - For SME customers: Tax calculations and submissions contain fewer errors. Cleaner books support faster filing. Reduced risk of penalties caused by missing or mismatched data.
- **Key Message:** Strengthen digital tax flows with live bank data. Use open banking to keep transaction data accurate and up to date for tax reporting — reduced manual work, lower risk of errors, faster route to compliant submissions.
- **Short Form:** MTD-ready bookkeeping. Live bank data, accurate filings.
- **Funnel stage:** Awareness, Consideration

### Use Case: Automated Reconciliation

- **Products:** Data (AIS)
- **Outcome / Value:**
  - For the platform: Reconciliation workflows become automated when bank transaction data is reliable and current. Reduces support demand. Cleaner AP/AR journeys.
  - For SME customers: Less manual reconciliation, fewer errors, faster close cycles, cleaner audit trails.
- **Key Message:** Automate reconciliation inside your accounting/ERP solution by pairing direct-from-bank transaction data, so businesses reduce manual matching, cut errors, and keep their books ready for audits.
- **Short Form:** Automated reconciliation. Bank data matched to invoices in real time.
- **Note:** Full reconciliation (matching to payouts) is NOT COMPLETE without payouts capability — which Yapily does not offer. Flag this scope limitation if prospect needs full AP automation including disbursements.
- **Funnel stage:** Consideration, Evaluation

---

## Gaps to Flag for This Vertical

- **Perpetual consents** — Accounting users want "set once, forget" — 90-day (UK) / 180-day (EU) re-authorisation creates friction; automated re-consent is not available
- **Receipt/invoice matching** — Automated matching of bank transactions to source documents is not a Yapily product capability
- **Payroll integration** — Direct connection to payroll systems for expense reimbursement is not available
- **Richer business insights** — Financial metrics such as average throughput, bad debt frequency, and ERP-level analytics are not packaged products
- **Multi-currency complexity** — Better handling of foreign currency accounts and transactions is a common ask; current handling should be validated per market
- **Switzerland coverage** — Not part of EU regulatory framework; limited connectivity
- **Full reconciliation (with payouts)** — The reconciliation use case is incomplete without payouts capability, which Yapily does not offer

> Never imply perpetual consents or payouts are available or on a near-term roadmap unless confirmed. See Edge Case 8.

---

## Proof Points Available

*From confirmed figures in proof_points.md — do not use any metric not listed there.*

- Intuit/QuickBooks as Yapily's first customer — strongest credibility signal for this vertical
- 4x daily data refresh available
- Consumer, business, and corporate accounts all in scope via single integration
- 2,000+ bank connections across 19 countries
- 99.5% UK bank coverage (customer-facing SLA)
- Named clients: Intuit/QuickBooks, Pleo, Kolleno

*For deal-specific metrics (bookkeeping time reduction, reconciliation error rate, customer time saved): run the metric prompt — ask the user for their figures.*

---

## Content Assets

*Relevant assets from Content Hub for this vertical:*

- [How Pleo & Yapily are changing business spend management](https://www.yapily.com/resources/case-studies/open-banking-case-study-pleo) — Case Study. Consideration.
- [How Kolleno + Yapily are redefining reconciliation and confidence in payments](https://www.yapily.com/resources/case-studies/open-banking-case-study-kolleno) — Case Study. Consideration.
- [8 ways accounting businesses can benefit from open banking](https://www.yapily.com/blog/8-ways-accounting-businesses-can-benefit-from-open-banking) — Blog. Awareness.
- [Making Tax Digital: How open banking can tackle the next challenge for accounting software providers](https://www.yapily.com/blog/making-tax-digital-tackle-challenge-accounting-software-providers) — Blog. Awareness. UK-focused.
- [Open banking for business accounts: what you need to know](https://www.yapily.com/blog/open-banking-for-business-accounts) — Blog. Awareness/Consideration.
- [Data Plus Demo (Lovable)](https://yapily-dataplus-demo.lovable.app/) — Interactive demo. Evaluation. Useful for showing categorisation depth.
- [Data Plus category labels (Lovable)](https://dataplus-category-list.lovable.app/) — Interactive. Shows B2B categorisation granularity.
- [Proof Points interactive (Lovable)](https://openbankingstats.lovable.app/proofpoints) — Consideration/Evaluation.
