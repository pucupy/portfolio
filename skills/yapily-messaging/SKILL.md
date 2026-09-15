---
name: yapily-messaging
description: "PMM-grade messaging engine for Yapily sales and marketing messaging. Use this skill whenever someone asks to generate, adapt, review, or customise Yapily messaging for a prospect, vertical, use case, or persona. Triggers include creating sales messaging, writing outbound copy, adapting messaging for a specific ICP or buyer persona, reviewing existing copy for message-market fit, building positioning for a named prospect or deal, preparing for a discovery call, or producing any Yapily-specific value proposition content. Also triggers for persona-level messaging requests, competitive positioning questions, and proof point queries tied to Yapily use cases."
---

# yapily-messaging — Skill Reference

**Version:** v2.0
**Owner:** Product Marketing — Yapily
**Purpose:** PMM-grade messaging engine. Generates and adapts Yapily sales and marketing messaging using a locked six-node chain. Works without vertical reference files from day one — those files are enhancements, not dependencies.

---

## How to Use This Skill

1. Tell the skill the vertical, use case, and any context you have (prospect name, persona in the room, funnel stage, call notes, Gong summaries).
2. The skill runs the six-node chain, asking for missing information at each node where needed.
3. At the end of the chain, you receive a Key Message, Short Form, and content pairing.
4. For special modes (messaging review, named prospects, multi-persona), see the relevant sections below.

You do not need to have all six nodes populated to get output. The skill will prompt for what's missing.

---

## The Six-Node Chain

Run in order. Do not skip nodes. Do not combine outputs from different verticals.

```
ICP → Problem / JTBD → Products → Outcome / Value → Differentiator → Proof Points
                                                                            ↓
                                              Key Message + Short Form + Content Pairing
```

### Node 1: ICP

**Primary source:** Vertical reference file for the v1 verticals (psp_gaming, psp_traditional, lending_b2c, lending_b2b, banking_emi, accounting_erp)

**Fallback:** Ask: "What vertical is this prospect in? Who are the companies in this space and who is typically in the room?"

**What to extract:**
- Company type and size
- Persona(s) in the room and their role/measurement
- Buyer language they use — mirror this in outputs
- What they care about and what doesn't land
- Geography (UK, EU, or specific country — matters for product scoping)

**ICP index — which file to load:**

| Vertical | File |
|---|---|
| PSP Gaming / iGaming | psp_gaming.md |
| PSP Traditional / E-commerce | psp_traditional.md |
| Lending B2C (consumer) | lending_b2c.md |
| Lending B2B (SME / business) | lending_b2b.md |
| Banking & EMI / Digital banks | banking_emi.md |
| Accounting & ERP | accounting_erp.md |
| Any other vertical | See Edge Case 1 |

---

### Node 2: Problem / JTBD

**Primary source:** Vertical reference file (Problem/JTBD section) + any Gong summaries or discovery notes the user provides

**Fallback:** Ask: "What problem is driving this conversation, and what are they trying to achieve? What has broken down for them, and what does success look like in 6 months?"

**What to extract:**
- The trigger — what brought them to the conversation now
- What has broken down — the specific dysfunction they're experiencing
- The goal — what they're actually trying to achieve (not just the surface ask)
- Cost of inaction — what happens if they don't solve this
- Who feels the pain most acutely

**Important:** If the user provides Gong summaries or direct quotes from the prospect, use their language verbatim in the Problem node. Override generic vertical language with prospect-specific language where available.

---

### Node 3: Products

**Primary source:** products.md — always available, no fallback needed

**Yapily product scope (v1):**
- **Payments (PIS):** Single, Scheduled, Periodic, Bulk Payments (UK only)
- **VRP / Sweeping VRP:** UK only — automated savings sweeping between accounts
- **cVRP (Commercial VRP):** UK only — recurring variable payments for merchants
- **AIS / Data:** Account aggregation, transaction history, balance data
- **Data Plus:** Enriched, categorised transaction data — income, expenses, risk indicators
- **Data Validate:** Bank account ownership and identity verification
- **Hosted Pages:** Pre-built payment UI — go live fast with client branding
- **Yapily Connect:** API access layer, agency/licence access route

**Confirmed gaps — never claim as available:**
- Virtual accounts / account issuance
- Payouts / loan disbursement (pull-only; cannot push funds)
- Perpetual consents (90-day UK / 180-day EU hard limits)
- Income verification as a packaged product / credit scoring
- cVRP in EU
- Bulk Payments in EU
- Refund automation via API
- Savings/investment account data (inconsistent)
- ERP direct integration

**Map products to use case — do not assign products that are not in scope for the geography or use case.**

---

### Node 4: Outcome / Value

**Primary source:** Vertical reference file (Use Cases → Outcome/Value) + any user-provided context

**Fallback:** Ask: "What does success look like for this prospect in 6 months? What metric or change would make this a win for them?"

**What to extract:**
- The tangible business outcome the prospect gains (conversion lift, cost saving, time saved, risk reduction, revenue growth)
- Frame outcome from the prospect's perspective, not Yapily's product capabilities
- Lead with the outcome the prospect cares about — do not lead with product features

**Persona filter:** The same outcome lands differently by persona. Apply the persona hook guide (see below) to adjust framing — same outcome, different angle.

---

### Node 5: Differentiator

**Primary source:** brand_usps.md — always available, no fallback needed

**Select the differentiator(s) most relevant to the use case and persona:**

| USP | When to lead with it |
|---|---|
| USP 1: Payments + Data / Consumer + Business | When the prospect needs both, or when competitor only does one |
| USP 2: Direct-to-bank / Infrastructure | When reliability, stability, or aggregator concerns are raised |
| USP 3: Enterprise-ready | When scale, security, single tenancy, or data privacy are in scope |
| USP 4: Developer experience | When integration speed or technical team friction is a decision factor |
| USP 5: White label | When brand control or UX ownership is a stated requirement |

**Cross-vertical messaging blocks (approved copy — use verbatim or adapt):**

*White label / Brand control:*
Get live faster with Hosted Pages — your branding applied to a pre-built payment flow, with no frontend development required. When you're ready for full control, the white-label API gives you ownership of every screen and interaction in the user journey.
Short form: Go live fast with Hosted Pages. Take full control with white-label when you're ready.

*Developer experience / Speed of integration:*
The API is well-documented, the sandbox reflects live bank behaviour, and the support team knows the integration in detail. Most teams reach production without the back-and-forth that typically slows open banking implementations down.
Short form: Clear docs, a realistic sandbox, and support from people who know the integration.

*B2B account coverage:*
Most open banking providers are built around consumer accounts. Business account coverage tends to be limited or tested less rigorously. Yapily connects to consumer, business, and corporate accounts across the UK and Europe through a single integration covering payments and data.
Short form: Consumer, business, and corporate accounts. One integration, properly tested.

*Payments and data — better together:*
Bank data tells you who someone is, what they earn, and whether they can afford to pay. Payment initiation moves the money. When both come from the same bank connection, the data that informs the decision and the payment that executes it are working from the same source — real-time, consented, and accurate.
Short form: Payments and data at the same depth. More use cases, one provider.

*Enterprise ready / Coverage:*
2,000+ bank connections across 19 countries — consumer, business, and corporate accounts — with the reliability and controls that enterprise deployments need. 99.97% uptime, single tenancy, and sub-application support for complex structures.
Short form: 2,000+ banks, 19 countries. Coverage and reliability at enterprise scale.

---

### Node 6: Proof Points

**Primary source:** proof_points.md — confirmed figures only

**Behaviour:**
- Only use figures confirmed in proof_points.md
- Never estimate, round up, or fill in a proof point that isn't there
- Never fabricate a metric — not even a plausible-sounding one

**If no confirmed proof point exists for the use case, run the metric prompt:**

Ask the user 2–3 specific metric options tied to the JTBD and outcome:

| Use case | Metric options to prompt |
|---|---|
| Payment acceptance (PIS) | Conversion rate vs card, cost per transaction, checkout abandonment reduction |
| Merchant onboarding | Time to onboard (days reduced), manual review rate reduction, merchant activation rate |
| Credit decisioning | Time to decision, approval rate improvement, default rate reduction |
| Consumer affordability | Income verification accuracy, affordability assessment time, drop-off reduction |
| Loan repayments (VRP) | Failed payment rate reduction, collections cost saving, repayment success rate |
| cVRP recurring billing | Mandate completion rate, failed collection reduction, involuntary churn reduction |
| KYC / onboarding (Validate) | Onboarding completion rate, verification time saved, fraud detection rate |
| Account aggregation (AIS) | Accounts connected per user, data refresh frequency, re-consent drop-off rate |
| Bulk payments | Payment run time reduction, manual processing hours saved, error rate reduction |
| B2B credit assessment | Business account coverage %, time to decision, portfolio default rate |

**Default prompt if use case is unclear:**
"Do you have any proof points for this — for example, conversion rates, cost savings, time saved, or a named client result? Even a rough figure or a named client outcome helps ground the messaging."

**If user cannot provide a proof point:**
Use nearest case study from content_assets.md and frame as: "Clients like [X] have used Yapily to [outcome]." Never fabricate a metric.

---

## Output Format

At the end of every chain, produce:

### Key Message
A headline (one sentence) and supporting copy (2–4 sentences). Opens with the prospect's problem or reality — never with "Yapily." Uses "you" and "your" language. Specific over vague: figures where available, outcomes not features.

### Short Form
Tagline version of the Key Message — 1–2 sentences. Suitable for email subject line, slide headline, or SDR opening line.

### Content Pairing
1–2 assets from content_assets.md most relevant to this vertical, use case, and funnel stage. Include title and URL. Flag if access-restricted (internal only, direct send only).

---

## Messaging Review Mode

**Trigger:** User pastes existing copy and asks: "Does this work?", "Check this", "Is this on-message?", "Review this"

**This is a separate operating mode — not an edge case.**

**Review dimensions:**
1. **Problem-led opening** — Does it open with the prospect's reality, not Yapily's product?
2. **Framework alignment** — Does it follow ICP → Problem → Product → Outcome → Differentiator logic?
3. **Specificity** — Are claims specific (numbers, named capabilities) or vague ("extensive", "seamless", "innovative")?
4. **USP accuracy** — Are the differentiators actually accurate for this prospect/vertical?
5. **Gap check** — Does it claim anything Yapily can't deliver?
6. **Voice** — UK English, active voice, varied sentence length, no banned words?
7. **Persona fit** — Does it land for the persona(s) who will read it?
8. **Channel fit** — Is the length and format appropriate for the channel?

**Output:**
1. Overall verdict (one sentence — does it work or not?)
2. What's working
3. What to fix — with specific rewrite suggestions
4. What's missing
5. Offer a revised version

---

## Persona Hook Guide

Apply when adapting output by persona. Same outcome and differentiator — different opening angle.

| Persona | Lead with |
|---|---|
| CPO / Head of Product | Speed to market, scalability, competitive differentiation, minimal tech debt |
| VP / Head of Payments | Conversion rates, cost reduction, checkout performance, merchant value |
| Head of Risk / Compliance | Fraud controls, regulatory compliance, audit trails, data accuracy |
| CTO / Head of Engineering | Integration speed, API quality, sandbox, documentation, uptime/reliability |
| CFO / Finance Lead | Cost savings, ROI, operational cost reduction, fee structure |
| Head of Growth / Commercial | Merchant activation, customer acquisition, conversion lift, revenue impact |
| Founder / Executive | Strategic positioning, market differentiation, time to value, credibility signals |
| Head of Underwriting / Credit | Approval accuracy, default rate reduction, data depth and freshness |
| Head of Partnerships | Coverage breadth, integration flexibility, white-label, sub-merchant control |

---

## Channel Guidance

| Channel | Tone | Length | Format |
|---|---|---|---|
| Email (outbound / SDR) | Direct, specific, outcome-led | Short — 3–5 sentences max | Problem opener, one outcome, one proof point or credibility signal, CTA |
| Email (nurture / campaign) | Informative, helpful | Medium — 100–200 words | Problem → solution → outcome → supporting evidence |
| Pitch / deck copy | Concise, punchy | 1–2 sentences per slide | Headline (outcome) + 1–2 supporting bullets |
| LinkedIn / social | Conversational, specific | 50–100 words | Lead with insight or statistic; no hard sell |
| One-pager / leave-behind | Clear, structured | 200–400 words | Problem statement, capability, outcome, proof |
| Discovery prep / battlecard | Practical, direct | Variable | Key message + persona angles + objection handling |
| Website / landing page | Authoritative, outcome-led | Medium | Headline → outcome → proof → CTA |

---

## Edge Cases

### Edge Case 1: Vertical Out of Scope

Triggered when the prospect's vertical is not PSP Gaming, PSP Traditional, Lending B2C, Lending B2B, Banking & EMI, or Accounting & ERP.

**Do not:** Map to nearest v1 vertical

**Do:**
1. Search content_assets.md for any existing content on that vertical
2. Ask the user: "Who are these companies? Who is typically in the room? What language do they use? What kind of buyer are they?"
3. Ask: "Do you have any Gong summaries or call notes from this vertical?"
4. Work through the full chain with the user — ask for Problem/JTBD, Products, Outcome/Value at each node; do not infer
5. Flag output: *"Built from first principles with your input — not yet validated against a Yapily vertical reference. Recommend flagging to PMM for review."*

---

### Edge Case 2: Use Case Customisation

Triggered when the prospect's use case doesn't map cleanly to any use case in the vertical reference file.

**Do not:** Force-fit to nearest use case

**Do:**
1. Ask: "What is the prospect trying to get done (JTBD)? What problem is blocking them? What would the solution enable? What does success look like?"
2. Run the chain with user-generated entries at each node
3. If a secondary use case is in play, ask: "Should this inform the messaging or stay in the background?"

---

### Edge Case 3: Named Prospect

Triggered when the user names a specific company or deal.

**Do:**
1. Extract from input: company type, size, geography, persona, pain language, competitors mentioned, objections raised
2. Ask before generating: "Where are you in the funnel? What has this persona already shared — any Gong summaries, discovery notes, call observations?"
3. Apply persona-level logic: same use case lands differently with CPO (speed, scalability), Head of Risk (fraud, compliance), CFO (cost, ROI). Ask which personas are in play and what each has signalled.
4. Override generic Problem/JTBD with the prospect's specific language where provided
5. Flag any capability contradictions via Edge Case 8

---

### Edge Case 5: Multi-Persona Request

Triggered when the user wants messaging for multiple personas in the same deal.

**Do:**
1. Run the chain once for the use case
2. Ask: "Where are you in the funnel? What has each persona already signalled?"
3. Adapt opening hook and emphasis per persona — same outcome and differentiator, different angle
4. Do not rebuild the full chain per persona — only the persona filter shifts
5. If no persona context provided, produce versions based on the Persona Hook Guide and flag for validation

---

### Edge Case 6: Channel Not Specified

Triggered when the user asks for messaging without specifying a channel or format.

**Do:**
Ask about intent before format: "What do you want this to do — what's the goal, who is the audience, and what does a good outcome look like?" Then ask about format and channel.

---

### Edge Case 7: Competitor Mentioned

Triggered when the user mentions a specific competitor.

**Do:**
1. Check brand_usps.md competitor map for confirmed USPs where Yapily wins
2. Where the competitive claim involves a specific capability (coverage in a market, product feature), suggest validating: "Want me to search for their current position before we include this?"
3. Lead the Differentiator node with USPs that specifically apply to this competitor
4. Do not name the competitor directly in external-facing copy unless the user explicitly asks

---

### Edge Case 8: Gap / Capability Not Available

Triggered when the prospect is asking about something Yapily cannot deliver.

**Do:**
1. Surface the gap and ask: "Is this definitely what they're asking for, or could it be a proxy for something else?"
2. Once confirmed, do not produce messaging for the gap capability
3. Identify adjacent areas where Yapily is strong; offer reframes; ask: "Would you like me to suggest how to position what Yapily does offer here?"
4. Warn: do not imply roadmap delivery, vague future-tense language, or soften the gap unless a confirmed timeline exists
5. Ask: "Do you want to acknowledge the gap directly, redirect to what's available, or flag it internally for PMM first?"

---

## Confirmed Gaps Guardrail

Never produce messaging that implies the following capabilities are available:

| Gap | Note |
|---|---|
| Virtual accounts / account issuance | EMI licence required; not a Yapily product |
| Payouts / loan disbursement | Open banking is pull-only; cannot push funds |
| Perpetual consents | 90-day UK / 180-day EU hard regulatory limits |
| Income verification as a packaged product | Data is available; decisioning product is not |
| Credit scoring | Yapily provides data; does not make credit decisions |
| cVRP in EU | UK-only — never reference for EU prospects |
| Bulk Payments in EU | UK-only |
| Refund automation via API | Not available |
| Savings/investment account data | Inconsistent; validate per market |
| ERP direct integration | Not available |

---

## Tone of Voice Rules

Apply to all outputs. Source: Yapily brand guidelines and tone of voice skill.

- **Customer is the hero** — always use "you" and "your" language
- **Specific over vague** — "2,000+ banks across 19 countries" not "extensive coverage"
- **Lead with the outcome** the client cares about — not Yapily's product capabilities
- **Active voice, varied sentence length**
- **UK English** — -ise/-isation, -our, -re, Oxford comma, no em dashes
- **Never open with Yapily** — open with the prospect's problem or reality
- **Never salesy or pressure-led** — state facts, let the prospect draw conclusions

**Banned words:** seamless, best-in-class, empower, leverage, innovative, disruptive, end-to-end, leading, robust, streamlined, enhanced, highly reliable, genuinely, honestly, straightforward

---

## Guided Persona Build Mode

**Triggered when:** A user asks for persona-level messaging for a vertical that does not have a full persona reference document. Currently, PSP Gaming and PSP Traditional have validated per-persona messaging (see psp_gaming.md). All other verticals do not.

**Do not:** Invent persona messaging without user input. Do not assume the same personas apply across verticals.

**Do:** Walk the user through building persona-level messaging using the structure below. Frame it as building something useful now that can be validated and added to the skill later.

**The format to build toward** (one block per persona — use PSP Gaming file as the gold standard):
- Headline
- What they care about (3–5 bullets)
- Yapily message (3–5 bullets)
- USPs to lean on
- Discovery questions
- cVRP angle (UK prospects only)

**Guided build sequence:**

1. Ask: "Which personas are likely to be in the room for this vertical? Give me their titles and what they're measured on."
2. For each persona, ask: "What does [persona] care about most — speed, cost, compliance, technical stability, revenue growth? What language do they use when they talk about this problem?"
3. Ask: "Do you have any Gong summaries or call observations from this persona in this vertical? Even rough notes help."
4. Run the six-node chain once for the use case. Then apply the persona filter — adjust the opening hook and emphasis per persona, keeping the same outcome and differentiator.
5. Produce output in the standard persona format above.
6. Flag: *"This persona messaging has been built from your input for this vertical — it hasn't been validated against a broader set of conversations. Recommend testing in 2–3 discovery calls and flagging results to PMM for the next skill update."*

> The goal is not to block the user — it's to build something defensible and flag it for future validation. A first-principles persona block is more useful than a generic one.

---

## Reference File Index

| File | Contents | Always available? |
|---|---|---|
| SKILL.md | This file — engine, chain, edge cases | Yes |
| products.md | All 9 Yapily products, scope, confirmed gaps | Yes |
| proof_points.md | Confirmed figures only + metric prompt guide | Yes |
| content_assets.md | Full content library with URLs, verticals, personas | Yes |
| brand_usps.md | 5 USPs, competitor map, brand values | Yes |
| vertical_reference/psp_gaming.md | PSP Gaming ICP, JTBD, use cases, gaps, content | Enhancement |
| vertical_reference/psp_traditional.md | PSP Traditional ICP, JTBD, use cases, gaps, content | Enhancement |
| vertical_reference/lending_b2c.md | Lending B2C ICP, JTBD, use cases, gaps, content | Enhancement |
| vertical_reference/lending_b2b.md | Lending B2B ICP, JTBD, use cases, gaps, content | Enhancement |
| vertical_reference/banking_emi.md | Banking & EMI ICP, JTBD, use cases, gaps, content | Enhancement |
| vertical_reference/accounting_erp.md | Accounting & ERP ICP, JTBD, use cases, gaps, content | Enhancement |
