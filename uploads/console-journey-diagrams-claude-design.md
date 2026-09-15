# Console — journey diagrams

*Standalone export for Claude Design. Build Sections 1–3. Section 4 is checks for Ale and should not be built.*

Two diagrams for the Console case study: the journey as it was, and the journey the Console is designed to replace it with. Both are redrawn from the original map with internal commercial detail removed — see Section 4 for what was taken out and why.

---

## 1. Build brief

**Format.** Two horizontal swimlane diagrams, stacked, with the "before" first. Same visual language for both so the comparison is immediate — the reader should be able to see the second is shorter without reading either.

**Structure.** Each diagram has three stages left to right. Within each stage, four stacked bands:

1. **Path** — the steps themselves, as connected boxes
2. **Channels** — the tools and touchpoints the step runs on
3. **Teams** — who is involved
4. **What matters here** — what the person at this stage is trying to understand or achieve

The fourth band is the one that makes it a journey map rather than a process diagram. It should be visually distinct — lighter weight, no boxes, just text.

**Colour.** Stage bands tinted to distinguish the three stages. Manual steps marked consistently in both diagrams — the "before" is dense with them and the "after" is not, and that contrast is the entire argument. Use one accent for manual, nothing else decorative.

**Annotations.** The italicised "the problem here" notes in the before diagram sit below each stage, outside the bands.

**Responsive.** These are wide. On narrow screens, stack by stage rather than shrinking — a diagram nobody can read is worse than three stacked ones.

**Captions.** Each diagram gets a one-line caption in the case study prose, not inside the image.

---

## 2. Diagram A — Before: the assisted journey

**Title:** Getting to production, before
**Subtitle:** Six months to a year, depending on availability, customer type and deal size

### Stage 1 — Evaluating

**Path:** Organic and paid traffic → Website → Contact form → *(becomes an inbound lead)*
Parallel routes from the website: Docs · Dashboard · Support · Chat — each of which can loop back to the website, or exit without converting.
Mark two exit points as **dead ends — no conversion**.

**Channels:** Website · Documentation · Dashboard · Support inbox · Live chat

**Teams:** None assigned. Nobody owns this stage.

**What matters here:**
Understanding coverage for their specific use case · Pricing · Features · How to test the API · The basics of licences, compliance and limitations · How to become a customer · Time to go live and ease of building · What open banking can and can't do · How we compare to other providers · Building trust

*The problem here: we can't identify a user or buyer across the website, docs, dashboard or support, so nothing is tailored to what they're trying to do. They have limited access — mock banks, sandboxes — but they don't know where the limits are, because the experience doesn't tell them.*

### Stage 2 — Becoming a customer

**Path:** Sales funnel → KYC → Contract signed → Customer success onboarding
Every step marked **manual**.

**Channels:** Video calls · Email · PDF forms · Scheduling links · Demos

**Teams:** Sales · SDRs · Pre-sales engineers · Customer success · Support · Technical services · Operations

**What matters here:**
What's in the package · No surprises in the contract · Understanding the limitations · Gathering documentation for legal review

*The problem here: partial access, and no clear picture of what they're allowed to test. The stage moves at the speed of whoever has calendar space.*

### Stage 3 — Live

**Path:** Technical onboarding → Go live *(splits: direct customer / agent)* → Renewal, upsell, expansion
Marked **heavily manual**, for both Yapily and the customer.

**Channels:** Documentation · Dashboard · Website · Support · Chat · Video calls · Shared Slack channels · Public roadmap

**Teams:** Support · Technical services · Customer success · Account managers · Operations

**What matters here:**
Reliability of the service and the banks · Speed · Ease of use · Support for the specific nuances of their use case · An experience that speaks to their use case · Learning what's new and what's coming · Getting help with bugs · Being able to influence the roadmap · Troubleshooting

*The problem here: one path serving two customer types. Agents want the experience to be theirs, not ours. Direct customers need help with registration and portal complexity. Neither is well served by the same journey.*

---

## 3. Diagram B — After: the self-serve journey

**Title:** Getting to production, after
**Subtitle:** Target: weeks to a few months. Around 80% of customers take the self-serve path.

### Stage 1 — Evaluating

**Path:** Traffic → Website → Docs and live demo → **Identify use case and segment** → Console access
The identification step is the pivot the whole redesign turns on, and should be visually emphasised.

**Channels:** Website · Documentation · Live API demo · Console

**Teams:** None required.

**What matters here:**
The same list as before — coverage, pricing, limitations, time to go live. The difference is that it can now be answered by the product rather than by a person.

*The change: knowing who someone is and what they're building means the experience can be tailored, and the limits of sandbox access can be stated rather than discovered.*

### Stage 2 — Onboarding

**The path splits by segment.**

**Self-serve — around 80% of customers.** No scheduled calls required.
Create application and credentials → Invite team and assign roles → Curate bank coverage by market and product → Submit for compliance check via queue → Build against sandbox → Approved → Production

**Assisted — enterprise.** Retained deliberately, because enterprise customers want to be sold to and hand-held. Sales and solution design sit alongside the same Console underneath, so the onboarding steps are shared rather than duplicated.

**Channels:** Console · Documentation · Live demo · *(assisted path adds: sales, solution design)*

**Teams:** Self-serve — none required by default. Assisted — sales and pre-sales.

**What matters here:**
What's in the package · Understanding the limitations · Getting compliance approved without waiting for a meeting · Getting the whole team access, not just the developer

*The change: compliance moves from a scheduled in-person session to a queue. That single step was the most common reason a go-live slipped, and it slipped for scheduling reasons rather than substantive ones.*

### Stage 3 — Live

**Path:** Production → Monitor via in-product analytics → Renewal, expansion
Both segments converge here.

**Channels:** Console · Documentation · Support · Shared Slack channels · Public roadmap

**Teams:** Support and customer success, on exception rather than by default.

**What matters here:**
Reliability · Speed · Their own performance data, current rather than a stale export · Managing their own team and access · Knowing what's coming

*The change: analytics move into the product. Previously customer success exported this manually and sent it as reports — expensive for us, out of date for them.*

### Principles to annotate on Diagram B

Set these as a short list beside or beneath the diagram, not inside it:

- **Identify early.** Nothing can be tailored to a person you can't recognise.
- **Remove scheduling as a dependency.** Most of the delay was calendars, not complexity.
- **Make limits visible.** People hitting an invisible ceiling assume the product can't do it.
- **Serve teams, not individuals.** Engineers, PMs, designers and finance people need different things from the same account.
- **Give customers their own data.** Anything a CSM exports by hand is a queue with a person in it.

---

## 4. Checks — do not build

### What was removed in the redraw

Taken out of the published version, all from the original map:

- The website-to-contact-form conversion rate
- Internal system names and URLs — the admin tool, the internal hub, and the named internal service
- Sales threshold as a factor in journey length *(kept as "deal size", which is generic)*
- The mechanism by which someone is marked as a customer internally
- Internal shorthand for staff
- The verbatim agent quote about not wanting Yapily's logo in their UX *(kept as the general point, which is the part that matters)*

Kept, because it's public or harmless: demo.yapily.com, docs, dashboard, public roadmap, shared Slack channels, the team and channel names, and the "what matters here" content throughout.

`[CHECK]` — read Diagram A once more with a Yapily hat on. I've removed what I could identify as sensitive, but you know what's commercially confidential there better than I do.

### Accuracy

- [ ] **Diagram B is partly a target, not a description.** Confirm which steps exist in the beta today and which are planned. If some are still to come, the caption should say so — "designed to" rather than "does" — and the case study is stronger for the honesty, not weaker.
- [ ] **"Around 80% take the self-serve path"** — is that 80% of the customer base being non-enterprise, or 80% actually going through self-serve in the beta? Those are different sentences. The subtitle currently implies the second.
- [ ] **Compliance queue** — confirm it's live in the beta rather than designed. It's doing a lot of work in the argument.
- [ ] **Your role.** Diagram A is your map. Diagram B represents a product built with PMs and engineering. Worth a line in the case study prose saying which parts you led.
