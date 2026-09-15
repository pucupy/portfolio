# Research practice at Yapily

*2020–2026 · Founding designer → design lead*

> Draft. Items marked `[CONFIRM]` need your answer before this is publishable. Everything else comes from what you've told me.

---

## The constraint

Yapily never had a dedicated researcher. Designers did the research, alongside the design work — a small company where everyone wears several hats.

That constraint shaped what the practice became. With no researcher to hand a question to, research had to be cheap to run, continuous rather than project-gated, and legible to people outside design. It also had to lean on the people already talking to customers every day, rather than treating research as something only design did.

---

## Continuous discovery

I ran my first customer conversation in 2020 and my most recent one last week. Between those, at least three customer interviews a month, sustained — over two hundred conversations across six years.

The questions changed as the company did. Early sessions were broad: what are you trying to do, where does it hurt, what's missing. As the products matured, the sessions narrowed to specific surfaces — Console, the documentation, Hosted Pages — and the purpose shifted from finding the problem to validating a direction.

**The practice worth naming:** a fixed cadence rather than a project-triggered one. Research booked as a standing commitment means you're never starting a discovery phase from zero, and you notice a shift in what customers are saying before it becomes a roadmap problem.

Alongside the scheduled interviews, I ran informal Slack channels with customers — a direct line for the observations that never make it into a formal session because they're too small to raise a ticket over.

---

## Two audiences

Yapily's customers are businesses. Hosted Pages' users are consumers connecting their bank accounts. Research had to reach both, and the two needed different methods.

The interview cadence above covered the first group — the PMs, developers and operations people integrating with us, who could tell us what was hard to build against and what their own customers complained about, but who were not themselves using the flow. For the second group, the usability testing programme running from 2023 to 2026 put the flow in front of roughly a thousand ordinary people going through the act of connecting a bank account.

**The practice worth naming:** in a B2B2C product it's easy to research only the buyer, because the buyer is who you talk to every week. The buyer can tell you about their integration problems; they cannot tell you why someone abandoned at the QR screen. Both channels had to exist for the same reason the qualitative and quantitative work did — each answers a question the other can't.

`[CONFIRM] — were those thousand sessions run through testing panels against a sandbox or prototype flow, or were they real users in production? Both are legitimate; they just describe different things, and "roughly a thousand people connecting bank accounts" reads as production unless you say otherwise.`

---

## Feedback loops with the people closest to customers


Support and Customer Success hear things design never will. The loop existed to get that into the product.

- **A bi-weekly forum** with PMs, CSMs, design, and engineering, focused on trending feedback rather than individual tickets.
- **A shared board** where that feedback was consolidated and prioritised, so the same issue raised by four different customers surfaced as one item with weight behind it, not four disconnected complaints.
- **Beta programmes** — around 150 customers took part between 2023 and 2026, giving us a population to test with that already had context and stake.

I set the loop up. Prioritisation itself was a joint call with PMs and engineering, which is the part that made it hold: a board design owns is a wishlist, and a board the three functions prioritise together is a queue people act on.

**The practice worth naming:** support and CSM as a research channel rather than an escalation channel. The bi-weekly cadence mattered as much as the board — a recurring meeting turns feedback into a habit instead of a fire drill.

---

## Building shared understanding

Research that only designers understand doesn't change anything. Two formats did most of that work:

- **Problem-framing workshops** with PMs, engineering and wider teams, to get everyone to the same understanding of the customer problem before anyone proposed a solution.
- **Prioritisation sessions** run off the back of them, so what got built was argued from the same evidence base.

**Card sorting on the documentation** sat slightly apart. We used it to restructure the information architecture of the docs — and tested findability and task flows both before and after the change, so the improvement was demonstrated rather than assumed.

**The practice worth naming:** the before-and-after measurement. Most IA work ships on the strength of the argument that made it. Testing the same tasks against the old and new structure is what turns a redesign into a result — and it's the single most quotable thing in this section for an interview.

`[CONFIRM] — do you have the findability numbers, or a directional summary? Even "task success improved across every tested flow" is stronger than nothing, and safer than a percentage you can't source.`

---

## External validation

Guerrilla sessions for early iterations — fast, cheap, run on whoever was available, used to kill bad directions before they were expensive.

Commissioned studies for the decisions that warranted them. We ran usability and accessibility work on both Hosted Pages and Console through Testbirds and Applause. On accessibility, the standard was WCAG AA; I wrote up the findings as a document for the frontend team to work from, and the system now meets AA.

`[CONFIRM] — how was AA conformance established? A retest by Applause or Testbirds, an audit report, or an internal assessment against the checklist? All three are worth stating; they just aren't the same claim, and this is the most checkable sentence on the page.`

**The practice worth naming:** matching method cost to decision cost. Guerrilla testing where the question is "is this direction obviously wrong," commissioned panels where the question is "does this meet a standard we can be held to." Running everything through an external provider is slow and expensive; running everything guerrilla-style doesn't survive scrutiny.

---

## Instrumentation

Working with engineering and product, we mapped the events needed to measure customer journeys accurately — deciding what to track, and where, so that journey performance was a measurable thing rather than an inferred one.

This is the unglamorous half. Without it there's no funnel, no baseline, and no experiment — you can't test what you can't measure, and event schemas designed after the fact are always worse than event schemas designed alongside the flow.

---

## Experimentation

With PMs, I defined the testing pipeline; with engineering, we built it in-house, so features could be tested against real traffic in production rather than in a prototype. We ran results sessions to communicate outcomes to the wider team.

On Hosted Pages, that pipeline tested copy and layout variants on the two screens that carry the most drop-off risk — bank selection, and the QR code page. On the QR screen, the version that won gave users more guidance and a clearer layout, and reduced both drop-offs and user error on that step. On bank selection, the winning variant improved conversion by 8% — on a flow carrying enterprise volume, a single-digit gain on one screen is a large absolute number.

`[CONFIRM] — is the 8% relative or absolute? Relative on a screen that already converts well is a very different result from eight percentage points, and it's the first thing anyone numerate will ask. Also: was the test run across all traffic, or on specific customers' flows?`

For context on scale: Hosted Pages converted at around 20% in the 2023 beta. End to end today it runs at roughly 65–75%, varying by use case, country and other dimensions.

That gain was made incrementally, over three years, by UX, frontend and backend working the same problem from different sides — not by one redesign. Design was one of the three disciplines that moved it, and the experiments described above are part of how. The reason to say "we" rather than "I" here isn't modesty: in open banking a meaningful share of end-to-end conversion is infrastructure — bank API reliability, redirect success, coverage — and anyone who knows the domain will assume as much. Claiming the whole number invites that challenge; naming the split pre-empts it, and the sustained three-year arc is the more interesting story for a lead role anyway.

`[DECIDED] — the 25% conversion figure in the Hosted Pages case study is stale, captured partway through the arc. Replace it there with the 20% (2023 beta) → 65–75% (today) range, carrying the same attribution language used above. That edit needs making on the Hosted Pages page itself; it isn't in this file.`

**The practice worth naming:** the results meeting. An experimentation pipeline that only its operators read is a reporting tool. Socialising results across the team is what makes the next set of design arguments start from evidence rather than opinion.

---

## What the practice added up to

Qualitative work told us what customers were trying to do and where it broke. Instrumentation told us how often, and where in the journey. Experimentation told us whether the fix worked. Each answered a question the others couldn't, and the loop ran continuously rather than being spun up per project.

Built and run by designers with no dedicated research function — which is the honest version, and a more useful one for anyone hiring into a team of a similar size.

---

## Open items

- [ ] Bank selection: is 8% relative or absolute? All traffic, or specific customers?
- [ ] **Action on another page:** replace the 25% conversion figure in the Hosted Pages case study with 20% → 65–75%, plus the attribution language. Also check the CV and any presentation drafts for the same stale number
- [ ] How WCAG AA conformance was established (retest, audit report, or internal assessment)
- [ ] Whether the ~1,000 sessions ran in production or against a sandbox/prototype flow
- [ ] Documentation card sort: any before/after numbers, or directional only
- [ ] Beta figure of 150 — sits alongside "20+ customers" and "200 companies" elsewhere on the site. Probably consistent (different products, different periods), but check the three read coherently together
- [ ] Overlap with the Hosted Pages case study: that page currently carries the 2023–2026 usability testing programme. Decide whether the programme stays there (recommended) with this section covering the operating system around it, or moves here wholesale.
