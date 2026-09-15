# PSP Gaming (iGaming PSPs) — Messaging Reference

> Sources: Gong ICP doc (Apr 2026), Gong Problem/Outcome doc (Apr 2026), Messaging Guide v1.0
> cVRP is UK-only — never reference for EU prospects in this vertical.

---

## ICP Identity

**Who are these companies?**
Payment service providers and EMIs serving the online gambling and iGaming sector. Malta-based entities (e.g. Guru Pay processing gaming transactions), companies handling Curacao-licensed casinos (e.g. Klyme), and PSPs serving gambling merchants (e.g. PayOp, Easy Exchange/Macropay). Typically processing high volumes — 100,000+ transactions monthly — with average transaction values around €5–50 for slots, higher for sports betting.

**Who is in the room?**
Compliance officers, risk managers, commercial directors, and CEOs of smaller operations. Roles include Head of Compliance, commercial partnership leads. Day-to-day: merchant onboarding, transaction monitoring, managing relationships with gambling operators.

**What kind of buyer are they?**
Highly compliance-focused and risk-aware. Arrive with clear briefs around licensing restrictions and geographic limitations. Most have existing open banking experience and are comparing providers. Understand technical requirements but need reassurance on compliance appetite.

**Language they use:**
- "What's your risk appetite?" / "Do you accept Curacao licenses?"
- "We need to exclude UK, Germany, and Lithuania"
- "Blacklisted merchants" / "GGL compliance"
- "High risk merchants" / "sub-merchants" / "merchant onboarding flow"
- "Transaction monitoring" / "chargeback rates" / "settlement times"
- "100,000 transactions per month" / "average ticket size" / "conversion rates"

**What they actually care about:**
- Geographic flexibility — which countries they can process in with which licences
- Licence acceptance — whether Yapily accepts Curacao, Isle of Man, Gibraltar licences
- Merchant autonomy — self-regulate after initial compliance alignment, not merchant-by-merchant approval
- Speed and pricing — fixed per-transaction pricing vs percentage-based models

---

## Problem / JTBD

**Trigger:** Licensing restrictions, compliance requirements, and the need to support high-risk merchants while maintaining regulatory compliance. Immediate trigger is often needing payment alternatives that work for merchants with Curaçao licences operating in restricted markets.

**What has broken down:** Traditional card payments are expensive (2–3%) for gaming transactions. PSPs struggle to balance risk appetite with regulatory requirements. Key restrictions: Germany, UK, and Lithuania are prohibited for Curaçao-licensed gaming merchants.

**What they're really trying to achieve:** Expand their merchant base while maintaining compliance, reduce transaction costs, provide instant settlement. Goal: become the preferred payment infrastructure for regulated and semi-regulated gaming operators across Europe.

**What success looks like:** Processing high volumes (often low ATV of €5–50) with instant settlement, maintaining compliance across multiple jurisdictions, offering merchants a cost-effective alternative to cards. Success metrics: 100k+ transactions/month, instant settlement, compliance across jurisdictions, cost-effective vs cards.

**Cost of inaction:** Lose merchant opportunities to competitors, pay higher card processing fees (2–3%), face chargebacks, struggle to serve merchants in key markets.

**Who feels the pain most acutely:** Chief Commercial Officers, Heads of Product, Compliance teams — who must balance growth with regulatory requirements.

---

## Use Cases

### Use Case: Payment Acceptance (PIS)

- **Products:** Payments (PIS) — A2A Single, Scheduled, Periodic
- **Outcome / Value:**
  - For PSPs: Increased competitive edge; low-cost, secure A2A alternative to cards with instant settlement; iGaming-compliant payments backed by compliance expertise and bank-level fraud controls
  - For end users: Lower fraud risk, instant settlement via Faster Payments, smoother checkout without card friction
- **Key Message:** Traditional card flows lead to drop-offs, high costs, and fraud risk. Yapily's direct-to-bank API settles pay-ins in seconds, cutting fees and eliminating chargebacks. With 2,000+ bank connections across 19 countries and enterprise-grade performance, offer a seamless payment experience — single integration across payments and data — while lifting conversion and reducing processing cost.
- **Short Form:** Add pay by bank to your payment method portfolio — faster, safer, lower cost, higher conversion.
- **Persona notes:**
  - CPO / Head of Product: scalable, compliant player flows; values coverage and reliability across markets
  - VP / Head of Payments: conversion rates and operational cost reduction
  - Head of Risk / Compliance: fraud detection, onboarding accuracy, real-time risk visibility — values direct-to-bank data angle
  - VP Engineering / Dev: speed to integration, technical stability, support — "single integration" and "developer-first"
- **Funnel stage:** Consideration, Evaluation

### Use Case: PSU Onboarding / Account Verification

- **Products:** Data (Validate + AIS)
- **Outcome / Value:** Faster and seamless onboarding, reducing friction and supporting compliance. Instant confirmation of customer and account details. Smooth experience → players ready sooner, increased satisfaction. Income checks, source-of-funds validation, and red flag pattern recognition help iGaming operators fulfil duty of care obligations throughout the customer lifecycle.
- **Key Message:** Instant, PSD2-compliant onboarding for gaming PSPs. Yapily's single API verifies identity and bank ownership in real time at 2,000+ UK/EU banks, eliminating manual checks or document uploads, cutting onboarding time and keeping conversion high.
- **Short Form:** Boost operators' First-Time Depositor rates with instant, secure, smooth onboarding powered by open banking data.
- **Persona notes:** Same as above — compliance angle leads for Head of Risk; product/UX angle leads for CPO
- **Funnel stage:** Consideration, Evaluation

### Use Case: Developer Experience / Integration

- **Products:** Payments & Data, Yapily Connect, Hosted Pages
- **Outcome / Value:** Faster time to production. Clear documentation, realistic sandbox, responsive support. Most teams reach production without the back-and-forth that typically slows open banking implementations.
- **Key Message:** Launch open-banking payments fast with your own brand experience across 19 EU countries. Single integration, well-documented API, best-in-class developer experience and real-time support. Flexible go-live options: launch quickly with Hosted Pages or take full control with white-label UX.
- **Short Form:** Grow, expand, and diversify at your own pace with broad open banking coverage across Europe and the UK.
- **Funnel stage:** Consideration (competitive evaluation)

---

## Gaps to Flag for This Vertical

- **Bulk payouts in EU** — mass payout capabilities only available in UK, not across Europe
- **Real-time payment status** — banks don't always provide final transaction status; creates reconciliation challenges
- **Poland coverage** — available but conversion rates are not strong; flag honestly
- **Instant SEPA everywhere** — only ~75% of SEPA banks offer instant; cannot guarantee 100%
- **cVRP in EU** — commercial VRP is UK-only; never reference for EU gaming prospects

> Never imply these gaps are on the roadmap or soften them unless a confirmed timeline exists. See Edge Case 8.

---

## Proof Points Available

*From confirmed figures in proof_points.md — do not use any metric not listed there.*

- 2,000+ bank connections across 19 countries
- 99.97% uptime (use 99.5% for customer-facing SLA references)
- Conversion rates approx. 80% average; some customers at 95% — country-dependent
- Sub-application support for granular risk management

*For use-case-specific metrics (conversion uplift vs card, cost per transaction), run the metric prompt at the Proof Points node — ask the user for their figures.*

---

## Content Assets

*Relevant assets from Content Hub for this vertical:*

- [iGaming Infographic / One Pager](Yapily iGaming One Pager.pdf) — direct send only, not for socials. Awareness/Consideration. Payments Lead, Founder.
- [Transforming iGaming payments: How Pay by Bank can unlock new revenue streams for PSPs](https://www.yapily.com/blog/igaming-payments-pay-by-bank-unlock-revenue) — Blog, Consideration. Product Leadership, Payments Lead.
- [PSPs for iGaming Sales Enablement Slides](https://docs.google.com/presentation/d/1ldKiBSULG7lFy4QYvAdGyHeXdVW0kTYMBYEIugRzVKw/) — Deck, internal enablement. Consideration/Evaluation.
- [How payment platforms can leverage open banking to simplify the B2B payments experience](https://www.yapily.com/blog/how-payment-platforms-can-leverage-open-banking) — Blog, Awareness. PSP Gaming applicable.
- [Open Banking Payments Product Portfolio](https://www.yapily.com/resources/product-information/open-banking-payments-product-portfolio) — 1-Pager. Consideration. Product Leadership, Engineering.
- [Yapily Commercial VRP Product Portfolio](https://www.yapily.com/resources/product-information/open-banking-cvrp) — 1-Pager. Consideration. UK only.
- [ROI Template: PSP Margin](https://roitemplate.lovable.app/psp) — Interactive. Proof-point support for commercial conversations.
- [VRP use case checker](https://vrp-usecase-checker.lovable.app/) — Interactive. Use for cVRP scoping (UK only).

---

## Persona-Level Messaging (PSP Gaming)

> Source: PSP Personas Messaging doc (Apr 2026). Shared with PSP Traditional — same buyer committee, same personas. Apply vertical-specific language from ICP Identity section above.

### CPO — Chief Product Officer (Champion)

**Headline:** Turn payments and merchant data into a growth lever you can scale — even when you already have an open banking partner.

**What they care about:**
- Payment performance at checkout — conversion and drop-off
- Time to launch new use cases without fragmenting the product stack
- Scalability and resilience as volumes, countries, and merchants grow

**Yapily message:**
- Use both payments and data as core product levers — simple integration for Pay by Bank plus merchant data use cases like onboarding
- Shift volume to low-cost, instant A2A payments to improve conversion and protect margins
- Build on direct-to-bank APIs that prioritise speed, stability, and performance — handle growing transaction volumes without constant firefighting
- Enterprise-ready platform designed for resilience and high availability — commit to roadmap and SLAs with confidence
- If already using an OB provider: add Yapily for wider coverage and resilience, or switch if hitting performance, support, or roadmap limits

**USPs to lean on:** Payments + data + consumer + business coverage in one place; direct-to-bank connectivity for performance and control; enterprise-ready platform trusted by Adyen & Google; true white-label

**Discovery questions:** Where do you see the biggest friction today? What would you change about your current OB setup if you could?

**cVRP angle (UK only):** Make recurring Pay by Bank a product you can ship with confidence — one that won't become a rebuild when the market scales. Infrastructure-first approach and implementation flexibility (API or hosted journeys) matters most as adoption grows.

---

### CCO — Chief Commercial Officer

**Headline:** Grow high-margin revenue by pairing low-cost A2A payments with richer data for onboarding and credit.

**What they care about:**
- Revenue growth and commercial differentiation vs other PSPs
- Margin protection as payment costs and fraud pressure increase
- Stickiness and retention of key clients
- Growing existing customer revenue via value-added services

**Yapily message:**
- From cost centre to growth lever: offer merchants a lower-cost alternative that still converts — help them improve margin and price more competitively
- Combine payment acceptance, merchant onboarding, and merchant credit decisioning into one proposition — merchants see you as a partner in growth
- Use payments + data to open new revenue streams around credit, risk insights, and merchant services
- If already using an OB provider: use Yapily to expand what you can sell beyond payments, and reduce risk from single provider dependency

**USPs to lean on:** Single integration for data and payments; extensive UK + EU consumer and business coverage; infrastructure that performs at scale; trusted by Adyen & Google

**Discovery questions:** What is missing in your OB proposition that you wish you could sell?

**cVRP angle (UK only):** cVRP will make Pay by Bank more mainstream — the commercial edge shifts to who can offer it reliably and scale it with merchants. Build recurring Pay by Bank on infrastructure that holds up as volumes grow, so your merchant proposition stays strong.

---

### Head of Product (Payments / Checkout)

**Headline:** Improve Pay by Bank performance and resilience. Add a high-performing Pay by Bank option and richer data flows without compromising your UX or roadmap.

**What they care about:**
- Checkout conversion rates
- Operational control, incident risk, and day-to-day support
- Ability to add new payment methods and data capabilities with minimal UX disruption
- Scaling into new countries and banks without tech debt

**Yapily message:**
- Embed seamless payment acceptance via open banking that operates behind the scenes — with the option of Hosted Pages so you keep full control of the UX
- Use one infrastructure layer and a single integration to support payment acceptance, aggregation, and credit decisioning rather than bolting on separate point solutions
- Built on a secure, scalable, enterprise-ready platform — new flows (e.g. recurring payments) don't force major architecture shifts as they grow
- Scale with confidence across markets with direct-to-bank connectivity and broad coverage

**USPs to lean on:** Direct bank connectivity for performance and stability; single integration for data and payments; great developer experience and documentation; enterprise-grade reliability trusted by Adyen and Google

**cVRP angle (UK only):** Reliable connectivity and predictable execution for recurring flows.

---

### Head of Compliance & Risk

**Headline:** Strengthen merchant onboarding and credit decisions with reliable, real-time data delivered through a compliant, resilient infrastructure.

**What they care about:**
- Accuracy and reliability of data used in onboarding and credit assessment
- Reducing compliance failures and manual checks
- Infrastructure resilience, auditability, and predictable performance

**Yapily message:**
- Use real-time financial data to strengthen merchant onboarding and credit decisioning with accurate, up-to-date information — not manual documents
- Rely on direct-to-bank connectivity for stable, predictable data access that reduces risk of incomplete or inconsistent data
- Build on an enterprise-ready platform designed with resilience, high availability, and clear operational processes that support audit and regulatory needs
- Reduce failure points by consolidating data and payments under a single integration, simplifying risk oversight

**USPs to lean on:** Data + payments in one place — fewer vendors, simpler compliance oversight; direct-to-bank stable connectivity for consistent data; enterprise-grade infrastructure for audit trails and predictable performance

**cVRP angle (UK only):** cVRP raises the bar on control and governance — it introduces repeat payments that can vary within customer-agreed limits. Priority is having a partner with expertise so controls are enforced cleanly and payment outcomes are transparent.

---

### CTO / Head of Engineering

**Headline:** Ship faster and reduce maintenance overhead with a simple integration, direct-to-bank APIs, and a single integration for data and payments.

**What they care about:**
- Ease and speed of integration
- Stability, uptime, clear observability
- Timely expert support and less maintenance overhead

**Yapily message:**
- Integrate across both payment and data use cases instead of maintaining multiple providers and systems
- Move faster with documentation, sandbox tooling, and practical support designed for teams shipping at pace and scale
- Rely on a resilient, scalable, enterprise-ready platform
- If already using an OB provider: use Yapily to reduce risk from single provider dependency and cover gaps without custom workarounds

**USPs to lean on:** Simple direct-to-bank APIs; great developer experience — faster onboarding and reduced errors; enterprise-grade stability and uptime

**Discovery questions:** Where does your team spend the most time today — integration work, incident handling, or edge case routing? What would "good" look like for developer experience and ongoing maintenance?

**cVRP angle (UK only):** cVRP is a reliability and operability consideration — recurring flows amplify any weakness in connectivity, error handling, and visibility. Yapily's infrastructure-led approach delivers predictable behaviour and clear outcomes so teams can integrate cVRP cleanly and run it with confidence.

---

### Head of Partnerships / Key Account Manager

**Headline:** Improve conversion and reduce retries with high-performing, direct-to-bank infrastructure behind every A2A payment.

**What they care about:**
- Day-to-day performance of payment flows — uptime, latency, conversion, retries
- Operational simplicity — fewer providers, fewer failure points
- Coverage across priority markets and banks

**Yapily message:**
- Enable low-cost, instant payments for payment acceptance with direct-to-bank PIS/VRP, improving conversion and reducing transaction costs
- Use one API that supports multiple use cases (payment acceptance, reconciliation, repayments) instead of stitching together different providers
- Build on direct-to-bank APIs that avoid aggregation bottlenecks, reducing instability at peak times

**USPs to lean on:** Direct-to-bank simple APIs focused on speed, stability, and performance; extensive consumer and business coverage across UK and Europe; scalable platform built for resilience aligned with your SLAs

**cVRP angle (UK only):** cVRP is becoming a market expectation in the UK for merchants with repeat billing and subscription journeys. As the rollout progresses, enterprise merchants will want a dependable capability that goes beyond the pilots.

---

### CFO / Finance Director

**Headline:** Improve unit economics and reduce operational risk by strengthening Pay by Bank performance and adding data-led value-added services into your proposition.

**What they care about:**
- Gross margin and payment cost mix over time
- Cost to serve — support and operational workload
- Concentration risk and resilience — provider dependency

**Yapily message:**
- Support a shift toward lower-cost A2A payments where it makes sense for your mix
- Reduce operational cost by using one integration for payments plus data use cases like verification and onboarding
- If already using an OB provider: add Yapily to reduce concentration risk, or switch if the current setup is driving hidden operational and support costs

**USPs to lean on:** Single integration forming the basis for OB-focused revenue growth; strong business account coverage; trusted by Adyen and Google

**Discovery questions:** Where is cost rising fastest today — scheme fees, disputes, support load, or onboarding operations?

**cVRP angle (UK only):** cVRP is about unit economics and controllable cost as recurring Pay by Bank becomes more common in the UK. The upside is a scalable recurring payments capability that can reduce dependency on higher-cost card flows — but only if it performs consistently and doesn't create hidden operational overhead.

---

## Guided Persona Build Note

> The PSP buyer committee above is sourced and validated. For Banking & EMI, Lending, and Accounting verticals, persona-level messaging at this depth does not yet exist. If a user asks for persona-level messaging in those verticals, run the guided persona build mode — see SKILL.md, Guided Persona Build section.
