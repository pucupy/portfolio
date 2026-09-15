# PSP Traditional (E-commerce / High-Volume Payment Processors) — Messaging Reference

> Sources: Gong ICP doc (Apr 2026), Gong Problem/Outcome doc (Apr 2026), Messaging Guide v1.0
> cVRP is UK-only — never reference for EU prospects in this vertical.

---

## ICP Identity

**Who are these companies?**
Payment service providers serving e-commerce merchants — mid-to-large enterprises processing millions in GDP annually. Examples: Global Primex (multi-vertical), Moneff (launching open banking for merchants), EcomPay (full-stack payment ecosystem). Handle both low-risk e-commerce and selected high-risk verticals.

**Who is in the room?**
Product owners, partnership leads, technical architects, and commercial directors. Measured on merchant acquisition, transaction volume growth, and product launch timelines. Success means adding new payment methods that merchants actually adopt.

**What kind of buyer are they?**
Technical and commercial blend — understand APIs and integration complexity but need commercial viability. Often comparing 2–3 providers simultaneously. Questions centre on API documentation, hosted vs direct integration, and time-to-market. Risk-segment merchants into low/medium/high with different pricing tiers.

**Language they use:**
- "Hosted pages vs direct API" / "white label solution" / "iframe embedding" / "webhook notifications"
- "Our sub-merchants" / "merchant onboarding" / "reconciliation" / "settlement accounts" / "C2B accounts"
- "We want to offer this to our merchants" / "additional payment method" / "checkout solution" / "payment orchestration"

**What they actually care about:**
- Time to market — integration speed is critical for product launches
- Merchant flexibility — they want to control their merchant relationships, not have Yapily onboard their merchants directly
- Coverage breadth — Germany, Netherlands, UK as priority markets; conversion rates by country matter
- White-label capability — invisible infrastructure in their own branding
- Pricing predictability — concerns about minimum commitments vs actual volumes during ramp-up

---

## Problem / JTBD

**Trigger:** Mounting pressure from card scheme fees, reconciliation complexity with multiple merchants, and the need to offer competitive pricing to retain merchants. Often triggered by a large merchant demanding A2A payment options, or the PSP losing deals due to high card processing costs.

**What has broken down:** Card processing fees (1.2% + 20p typical) become prohibitive at scale, especially for high-value transactions. Manual reconciliation processes don't scale. Merchants increasingly demand instant settlement.

**What they're really trying to achieve:** Offer a complete payment stack including cost-effective A2A payments, reduce operational overhead from reconciliation, differentiate from competitors. Goal: one-stop payment orchestration platform.

**What success looks like:** Processing thousands of transactions daily with perfect reconciliation (pre-populated payment references), offering merchants 50–70% cost savings versus cards, achieving 80–90% conversion rates in mature markets (Netherlands, UK).

**Cost of inaction:** Lose merchant deals to competitors offering lower-cost alternatives, face margin pressure from card schemes, struggle to serve high-ATV merchants (travel, B2B) where card fees are prohibitive.

**Who feels the pain most acutely:** Head of Partnerships, Chief Product Officer, commercial teams facing merchant churn due to pricing. Finance teams feel reconciliation complexity pain.

---

## Use Cases

### Use Case: Payment Acceptance (PIS)

- **Products:** Payments (PIS) — A2A Single; Commercial VRP (longer term, UK only)
- **Outcome / Value:**
  - For PSPs: Increased competitive edge; low-cost secure A2A alternative. Instant checkouts without card fees at scale. 50–70% cost savings vs cards in mature markets.
  - For merchants/end users: Smoother checkout, lower fraud risk, instant settlement, real-time cash flow
- **Key Message:** With a single integration to Yapily's open banking APIs, users pay straight from their bank in seconds — lifting conversion rates with secure, scalable payment experiences. Card fees (1.2% + 20p) become prohibitive at scale. Yapily's direct-to-bank A2A payments eliminate chargebacks and deliver fixed, low transaction costs even at high volumes.
- **Short Form:** Enhance your payment method portfolio with instant, low-cost, highly secure A2A payments that boost success rates.
- **Persona notes:**
  - Head of Product: launch and iterate payment flows fast, minimal tech debt
  - VP / Head of Payments: maximise checkout conversion while lowering cost
  - Head of Risk & Compliance: minimise fraud, stay compliant at scale
  - Head of Engineering: fast integration, clear docs, reliable for high-volume transactions
- **Funnel stage:** Awareness, Consideration

### Use Case: Merchant Onboarding (KYB)

- **Products:** Data (Validate + AIS)
- **Outcome / Value:** Speed and operational cost reduction. Real-time account checks to automate compliant onboarding, cut operational cost, and unlock revenue sooner. Merchants go live faster with less manual review.
- **Key Message:** Open banking verified onboarding gets merchants live in minutes. Yapily instantly confirms business identity and account ownership using open-banking data, replacing document uploads and reducing review time so new merchants can start trading sooner.
- **Short Form:** Offer a streamlined onboarding experience that gets merchants accepting payments in minutes with automated open banking-powered account ownership checks.
- **Funnel stage:** Consideration, Evaluation

### Use Case: Merchant Credit Assessment

- **Products:** Data (AIS), Data Plus
- **Outcome / Value:** Faster credit decisions with higher accuracy. Real-time cash-flow, expenses, and revenue data enables faster affordability checks. Better risk management and lower operational cost through continuous structured bank-data feeds.
- **Key Message:** Real-time credit assessment with a single API integration for data and payments. Continuous access to live banking data monitors cash-flow trends and flags risks for better-informed and faster credit assessment. Powered by extensive B2B account coverage across 19 countries.
- **Short Form:** Better-informed, faster merchant credit decisions using live bank data.
- **Funnel stage:** Consideration, Evaluation

### Use Case: Developer Experience / Integration

- **Products:** Payments & Data, Hosted Pages
- **Outcome / Value:** Get live faster. Clear docs, realistic sandbox, responsive support. Most teams reach production without the back-and-forth that typically slows open banking implementations.
- **Key Message:** Get live faster with Hosted Pages — your branding applied to a pre-built payment flow, with no frontend development required. When you're ready for full control, the white-label API gives you ownership of every screen and interaction. Your customers see your brand throughout, at whichever pace works for your build.
- **Short Form:** Go live fast with Hosted Pages. Take full control with white-label when you're ready.
- **Funnel stage:** Consideration (competitive evaluation)

---

## Gaps to Flag for This Vertical

- **Scheduled/recurring payments in EU** — only available in UK, not EU
- **Refund automation** — no automated refund capability via open banking API
- **Flexible contract terms** — Yapily has standard contract structures; flag early if startup needs rolling terms during pilot
- **cVRP in EU** — commercial VRP is UK-only; never reference for EU prospects
- **Payment status certainty** — edge cases where payment state can be ambiguous; be honest about this

> Never imply these are on the roadmap unless a confirmed timeline exists. See Edge Case 8.

---

## Proof Points Available

*From confirmed figures in proof_points.md — do not use any metric not listed there.*

- 2,000+ bank connections across 19 countries
- 99.97% uptime (99.5% customer-facing SLA)
- Conversion rates approx. 80% average; some customers at 95% — country-dependent
- 50–70% cost savings vs cards (working figure for mature markets — flag as "typical" not guaranteed)
- Named clients: Adyen (data services across Europe), Volume, Crezco

*For deal-specific conversion uplift vs card, cost per transaction: run the metric prompt — ask the user for their figures or nearest client example.*

---

## Content Assets

*Relevant assets from Content Hub for this vertical:*

- [How Volume + Yapily are killing hidden fees](https://www.yapily.com/resources/case-studies/open-banking-case-study-volume) — Case Study. Consideration. PSP Traditional.
- [How Crezco + Yapily optimise payments for 5,000+ businesses](https://www.yapily.com/resources/case-studies/open-banking-case-study-crezco) — Case Study. Consideration.
- [Go beyond the checkout: The Growth Flywheel for PSPs](https://drive.google.com/drive/folders/1p1T7lnpQOpHRUIioAnICJapOAqPn1o2z) — 1-Pager, Thought Leadership. Consideration/Awareness.
- [Beyond the checkout: How PSPs deliver deeper value](https://www.yapily.com/blog/beyond-checkout-psps-deliver-value-with-open-banking-payments-and-data) — Blog. Consideration.
- [How to offer Pay by Bank](https://www.yapily.com/blog/how-to-offer-pay-by-bank) — Blog, How-to. Consideration/Evaluation.
- [The next evolution in open banking payments: A guide to cVRP](https://www.yapily.com/blog/what-are-commercial-vrps) — Blog. UK-only. Consideration.
- [PSP focused messaging — persona level](https://docs.google.com/document/d/1h5D69Bfcbesl0Zj36BykegG8bVmqHYPfPORQUaD-jQg/) — Internal guide. All funnel stages.
- [ROI Template: PSP Margin](https://roitemplate.lovable.app/psp) — Interactive ROI tool. Proof-point support.
- [Open Banking Payments Product Portfolio](https://www.yapily.com/resources/product-information/open-banking-payments-product-portfolio) — 1-Pager. Consideration.
- [Adyen chooses Yapily announcement](https://www.yapily.com/blog/yapily-adyen-announcement) — Press. Consideration/Evaluation. Strong credibility signal.

---

## Persona-Level Messaging (PSP Traditional)

> Source: PSP Personas Messaging doc (Apr 2026). Shared with PSP Gaming — same buyer committee, same personas. Apply vertical-specific language from ICP Identity section above (e-commerce context, reconciliation complexity, card scheme pressure at scale).

> The full per-persona breakdown is documented in psp_gaming.md. Use that file as the authoritative source for all 7 personas. The notes below flag PSP Traditional-specific emphasis where it differs.

**PSP Traditional persona emphasis differences:**

- **CCO / Commercial lead:** Card scheme fees mounting and large merchant demanding A2A is the primary commercial trigger — lead with 50–70% cost savings vs cards and "thousands of daily transactions with perfect reconciliation" as the success benchmark
- **Head of Product:** Merchant flexibility and reconciliation automation are more prominent here than in gaming — focus on white-label and sub-merchant control
- **CFO:** Card costs at scale (1.2% + 20p per transaction) are the financial pain point — ROI framing is more concrete; quantify the savings for their transaction volume
- **Head of Partnerships:** Losing merchant deals to competitors with A2A offerings is the cost-of-inaction — lean into competitive threat angle more directly than in gaming

For all other personas (CPO, CTO, Head of Risk, Head of Compliance), use the PSP Gaming persona section verbatim — the messaging is directly applicable.

---

## Guided Persona Build Note

> If a user asks for persona-level messaging in PSP Traditional beyond the above, the PSP Gaming persona file has the full per-persona structure. Apply it with the Traditional-specific emphasis notes above. For other verticals (Banking & EMI, Lending, Accounting), run the guided persona build mode — see SKILL.md, Guided Persona Build section.
