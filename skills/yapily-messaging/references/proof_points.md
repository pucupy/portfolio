# Proof Points — Confirmed Figures Only

> **Hard rule:** Only use figures from this file. Never estimate, extrapolate, or fill in a metric that is not listed here. If a confirmed figure doesn't exist for a use case, run the metric prompt below to ask the user.
> Sources: Sweeping VRP Playbook, cVRP/VRP Playbook, Data Plus Playbook, docs.yapily.com

---

## Platform / Infrastructure

| Metric | Figure | Source | Notes |
|---|---|---|---|
| Bank connections | 2,000+ | docs.yapily.com | Across 19 countries |
| Countries | 19 | docs.yapily.com | UK + EU |
| Uptime | 99.97% | Internal SLA | Use for internal/commercial discussions |
| Uptime (customer-facing SLA) | 99.5% | Customer contracts | Use this figure in external copy |
| Conversion rate (average) | ~80% | docs.yapily.com | Varies significantly by country and bank; some customers at 95% |
| Consumer accounts reachable | 500M+ | docs.yapily.com | Across UK and EU |
| UK bank coverage | 99.5% | docs.yapily.com | Customer-facing figure |

---

## VRP / Sweeping VRP

| Metric | Figure | Source | Notes |
|---|---|---|---|
| UK banks live on Sweeping VRP | 12 major banks | Sweeping VRP Playbook | Covers 90%+ of UK current accounts |
| UK current account coverage | 90%+ | Sweeping VRP Playbook | Sweeping VRP |

---

## cVRP (Commercial VRP)

| Metric | Figure | Source | Notes |
|---|---|---|---|
| Pricing (per transaction) | 7–10p | cVRP/VRP Playbook | Working figures for Wave 1; FPS settlement fees are separate |
| Yapily UKPI membership | Founding member | cVRP/VRP Playbook | UK Pay by Bank Infrastructure |

---

## Data / AIS

| Metric | Figure | Source | Notes |
|---|---|---|---|
| Data refresh frequency | Up to 4x daily | docs.yapily.com | |
| Transaction history depth (standard) | Up to 12 months | docs.yapily.com | |
| Transaction history depth (lending) | Up to 7 years | Data Plus Playbook | Use case dependent; validate per prospect |
| Consent duration (UK) | 90 days | Regulatory | Hard limit — not a Yapily limitation |
| Consent duration (EU) | 180 days | Regulatory | Hard limit — not a Yapily limitation |

---

## Data Plus

| Metric | Figure | Source | Notes |
|---|---|---|---|
| Categorisation accuracy | 80–95% | Data Plus Playbook | Range depends on use case and market |
| Named client (lending) | Yonder | Data Plus Playbook | Consumer credit use case |
| Named client (expense management) | Pleo | Data Plus Playbook | B2B expense management |
| Named client (accounting/bookkeeping) | Intuit / QuickBooks | Yapily first customer | Strongest credibility signal for accounting vertical |

---

## Named Clients (for "clients like X" framing — never fabricate outcomes)

| Client | Vertical | Use case |
|---|---|---|
| Adyen | PSP | Payment infrastructure — Yapily trusted by Adyen |
| Google | Enterprise | Payment infrastructure — Yapily trusted by Google |
| Intuit / QuickBooks | Accounting & ERP | Bank feed automation, bookkeeping |
| Pleo | Accounting & ERP / B2B Fintech | Expense management, data enrichment |
| Yonder | Lending B2C | Consumer credit decisioning |
| Kolleno | Accounting & ERP | Reconciliation |
| Allica Bank | Banking & EMI | KYC onboarding |
| Emma | Fintech B2C | Account aggregation, PFM |
| Noda | PSP Gaming | Payment acceptance |
| Contiant | PSP Gaming | Payment acceptance |
| Yaspa | PSP Gaming | Payment acceptance |
| Comma | B2B Fintech | Bulk payments, payroll |

> Use named clients only in "Clients like X have used Yapily to [outcome]" framing. Never fabricate a specific outcome metric for a named client unless it has been confirmed in writing.

---

## Metric Prompt Guide — Use When No Confirmed Figure Exists

When a use case needs a proof point and none is available from this file, prompt the user with 2–3 specific metric options tied to the JTBD and outcome. Do not guess or fill in.

| Use case | Metric options to prompt |
|---|---|
| Payment acceptance (PIS) | Conversion rate vs card, cost per transaction (p/£), checkout abandonment reduction |
| Merchant onboarding | Time to onboard (days reduced), manual review rate reduction, merchant activation rate |
| Credit decisioning | Time to decision (days to minutes), approval rate improvement, default rate reduction |
| Consumer affordability | Income verification accuracy, affordability assessment time, drop-off reduction |
| Loan repayments (VRP) | Failed payment rate reduction, collections cost saving, repayment success rate |
| cVRP recurring billing | Mandate completion rate, failed collection reduction, involuntary churn reduction |
| KYC / onboarding (Validate) | Onboarding completion rate, verification time saved, fraud detection rate |
| Account aggregation (AIS) | Accounts connected per user, data refresh frequency achieved, re-consent drop-off rate |
| Bulk payments | Payment run time reduction, manual processing hours saved, error rate reduction |
| B2B credit assessment | Business account coverage %, time to decision, portfolio default rate |
| Bank feed / reconciliation | Data refresh frequency, reconciliation time reduction, manual entry elimination rate |
| Tax reporting | Filing error rate reduction, time saved per filing cycle, manual upload elimination |

**Default prompt (use when use case is unclear):**
"Do you have any proof points for this — for example, conversion rates, cost savings, time saved, or a named client result? Even a rough figure or a named client outcome helps ground the messaging."

**If user cannot provide a proof point:**
Use the nearest case study from content_assets.md and frame as: "Clients like [X] have used Yapily to [outcome]." Never fabricate a metric.

---

## What to Never Do

- Do not use XX%, X days, or placeholder figures in any output — these are guide template remnants, not real figures
- Do not cite GoCardless as a source or benchmark
- Do not cite Volt in any context — no longer operational
- Do not extrapolate from one market to another (e.g. UK conversion rate ≠ EU conversion rate)
- Do not soften or hedge a missing proof point with vague language like "significant cost savings" — either use a confirmed figure, prompt the user, or cite a named client outcome
