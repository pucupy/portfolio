# Portfolio update — July 2026

*Sections 1–3 are content to build. Section 4 is corrections to apply to pages that already exist. Section 5 is open items and should not be built.*

---

## 1. New section — Research practice

*Suggested placement: a standalone entry alongside Hosted Pages and Console, which both link into it.*

### Research practice at Yapily
**2020–2026 · Founding designer → design lead**

#### The constraint

Yapily never had a dedicated researcher. Designers did the research, alongside the design work — a small company where everyone wears several hats.

That constraint shaped what the practice became. With no researcher to hand a question to, research had to be cheap to run, continuous rather than project-gated, and legible to people outside design. It also had to lean on the people already talking to customers every day, rather than treating research as something only design did.

#### Continuous discovery

I ran my first customer conversation in 2020 and my most recent one last week. Between those, at least three customer interviews a month, sustained — over two hundred conversations across six years.

The questions changed as the company did. Early sessions were broad: what are you trying to do, where does it hurt, what's missing. As the products matured, the sessions narrowed to specific surfaces — Console, the documentation, Hosted Pages — and the purpose shifted from finding the problem to validating a direction.

Alongside the scheduled interviews, I ran informal Slack channels with customers — a direct line for the observations that never make it into a formal session because they're too small to raise a ticket over.

**The practice worth naming:** a fixed cadence rather than a project-triggered one. Research booked as a standing commitment means you're never starting a discovery phase from zero, and you notice a shift in what customers are saying before it becomes a roadmap problem.

#### Two audiences

Yapily's customers are businesses. Hosted Pages' users are consumers connecting their bank accounts. Research had to reach both, and the two needed different methods.

The interview cadence covered the first group — the PMs, developers and operations people integrating with us, who could tell us what was hard to build against and what their own customers complained about, but who were not themselves using the flow. For the second group, the usability testing programme running from 2023 to 2026 put the flow in front of roughly a thousand ordinary people going through the act of connecting a bank account.

**The practice worth naming:** in a B2B2C product it's easy to research only the buyer, because the buyer is who you talk to every week. The buyer can tell you about their integration problems; they cannot tell you why someone abandoned at the QR screen. Both channels had to exist for the same reason the qualitative and quantitative work did — each answers a question the other can't.

#### Feedback loops with the people closest to customers

Support and Customer Success hear things design never will. The loop existed to get that into the product.

- **A bi-weekly forum** with PMs, CSMs, design and engineering, focused on trending feedback rather than individual tickets.
- **A shared board** where that feedback was consolidated and prioritised, so the same issue raised by four different customers surfaced as one item with weight behind it, not four disconnected complaints.
- **Beta programmes** — around 150 customers took part between 2023 and 2026, giving us a population to test with that already had context and stake.

I set the loop up. Prioritisation itself was a joint call with PMs and engineering, which is the part that made it hold: a board design owns is a wishlist, and a board the three functions prioritise together is a queue people act on.

**The practice worth naming:** support and CSM as a research channel rather than an escalation channel. The bi-weekly cadence mattered as much as the board — a recurring meeting turns feedback into a habit instead of a fire drill.

#### Building shared understanding

Research that only designers understand doesn't change anything. Two formats did most of that work:

- **Problem-framing workshops** with PMs, engineering and wider teams, to get everyone to the same understanding of the customer problem before anyone proposed a solution.
- **Prioritisation sessions** run off the back of them, so what got built was argued from the same evidence base.

**Card sorting on the documentation** sat slightly apart. We used it to restructure the information architecture of the docs — and tested findability and task flows both before and after the change, so the improvement was demonstrated rather than assumed.

**The practice worth naming:** the before-and-after measurement. Most IA work ships on the strength of the argument that made it. Testing the same tasks against the old and new structure is what turns a redesign into a result.

#### External validation

Guerrilla sessions for early iterations — fast, cheap, run on whoever was available, used to kill bad directions before they were expensive.

Commissioned studies for the decisions that warranted them. We ran usability and accessibility work on both Hosted Pages and Console through Testbirds and Applause. On accessibility, the standard was WCAG AA; I wrote up the findings as a document for the frontend team to work from, and the system now meets AA.

**The practice worth naming:** matching method cost to decision cost. Guerrilla testing where the question is "is this direction obviously wrong," commissioned panels where the question is "does this meet a standard we can be held to." Running everything through an external provider is slow and expensive; running everything guerrilla-style doesn't survive scrutiny.

#### Instrumentation

Working with engineering and product, we mapped the events needed to measure customer journeys accurately — deciding what to track, and where, so that journey performance was a measurable thing rather than an inferred one.

This is the unglamorous half. Without it there's no funnel, no baseline, and no experiment — you can't test what you can't measure, and event schemas designed after the fact are always worse than event schemas designed alongside the flow.

#### Experimentation

With PMs, I defined the testing pipeline; with engineering, we built it in-house, so features could be tested against real traffic in production rather than in a prototype. We ran results sessions to communicate outcomes to the wider team.

On Hosted Pages, that pipeline tested copy and layout variants on the two screens that carry the most drop-off risk — bank selection, and the QR code page. On the QR screen, the version that won gave users more guidance and a clearer layout, and reduced both drop-offs and user error on that step. On bank selection, the winning variant improved conversion by 8% — on a flow carrying enterprise volume, a single-digit gain on one screen is a large absolute number.

For context on scale: Hosted Pages converted at around 20% in the 2023 beta. End to end today it runs at roughly 65–75%, varying by use case, country and other dimensions. That gain was made incrementally, over three years, by UX, frontend and backend working the same problem from different sides — not by one redesign. Design was one of the three disciplines that moved it, and the experiments described above are part of how.

**The practice worth naming:** the results meeting. An experimentation pipeline that only its operators read is a reporting tool. Socialising results across the team is what makes the next set of design arguments start from evidence rather than opinion.

#### What the practice added up to

Qualitative work told us what customers were trying to do and where it broke. Instrumentation told us how often, and where in the journey. Experimentation told us whether the fix worked. Each answered a question the others couldn't, and the loop ran continuously rather than being spun up per project.

Built and run by designers with no dedicated research function — which is the honest version, and a more useful one for anyone hiring into a team of a similar size.

---

## 2. New short entry — demo.yapily.com

*Suggested placement: a short entry in the numbered work list, near Console.*

**Yapily demo**

A live, API-connected demo of the data and payment products. Not a mockup — it runs real end-to-end flows against both mock and live banks, and surfaces the actual API requests and responses alongside the interface.

That made it two things at once: an implementation aid for customers building against the platform, who could see exactly what a call returns before writing it, and an asset in sales and RFI conversations, where showing a real flow beats describing one.

I led design.

---

## 3. New entry — UX guidance for customers building their own flows

*Suggested placement: a medium entry. It pairs naturally with the Research practice section, since both are about design work that scales past what one team can draw.*

**Open banking UX guidance**

Customers operating under their own licence build their own consent experience rather than using ours. That makes the quality of those flows a business problem as much as a design one: a poor consent screen loses the connection, and the loss lands on the customer and on Yapily's numbers alike.

There is no single right answer to design toward. A one-off account verification and a recurring bulk disbursement are not the same product moment, and a flow tuned for one is wrong for the other. So the guidance had to teach judgement rather than hand over a template.

**What it covered.** Seven principles for consent screen design, and equivalent guidance for checkouts, payments and data product consent dashboards — the surrounding experiences that determine whether a consent screen is even reached in good shape. The consent principles covered stating the purpose data is being requested for; using honest security language rather than absolute claims; grouping data categories rather than listing raw scopes; progressive disclosure; making access duration and revocability visible; and giving people a clear way to decline.

**How it was delivered.** Written documentation, plus interactive demos customers could work through directly rather than read about. Deliberately written for any team building an open banking flow, not as documentation of how Yapily's own product works — guidance that only makes sense if you already use our UI is marketing, not guidance.

**The choice worth pointing at:** honest security language, and a clear way to decline. Both are the harder option commercially — "bank-grade security, we never see your data" converts better in the short term than an accurate description, and a prominent decline route is a visible exit from the funnel. Recommending them anyway is the position the guidance had to take to be worth following, and it is the part that will hold up in an interview.

`[CONFIRM]` — six principles are listed above and you said seven. Which is the missing one?

---

## 4. Corrections to existing pages

**Hosted Pages case study — conversion figure.** Replace the 25% conversion increase. It is a stale figure captured partway through the arc. Use instead: around 20% at the 2023 beta, 65–75% end to end today, varying by use case and market. Carry the attribution language — incremental gains over three years by UX, frontend and backend, with design as one of three contributing disciplines.

**Hosted Pages case study — integration effort.** The site currently carries two versions of this claim: a 70% reduction in integration time, and six months down to two weeks. Six months to two weeks is roughly a 92% reduction, so the two contradict each other. Standardise on six months → two weeks, which is concrete and matches the CV.

**Hosted Pages case study — support tickets.** The 47% reduction was a target, never a measured result, and has been removed from the CV. Remove or re-label it here too.

**Customer number consistency.** Three figures now appear across the site: 200 companies using Hosted Pages, 20+ customers in earlier material, and 150 beta programme participants between 2023 and 2026. These are probably three different populations, but they need to read as such rather than as three answers to the same question.

**Console.** The 35% onboarding and 38% support ticket figures are targets, not results. Keep the "targeting" framing consistent between the case study and the CV.

**Job title.** Three variants are in circulation — "Lead UX Designer & Manager", "Lead Product Designer and Design Manager", "Lead Product UX Designer". The CV now uses *Lead Product Designer & Design Manager — Founding Designer*. Make LinkedIn, the CV and the portfolio agree.

**Years of experience.** Career starts 2005, so 20+ years, and 13+ in payments and fintech. The CV previously said 17+ and 10+, both of which understated it.

**Early career dates.** 2005–2008, not 2005–2012 — Globant runs September 2008 to August 2011 and was overlapping.

---

## 5. Open items — do not build

- [ ] **The seventh consent principle** — you named seven, six are written up. Which is missing?
- [ ] **Where the guidance lives, and whether it's public.** If it's on a URL you can link, that changes it from a described artifact into a citable one, which is much stronger.
- [ ] **Did you write it alone?** If product marketing, compliance or legal shaped the security-language guidance, that's worth naming rather than absorbing.
- [ ] **Any evidence customers used it** — adoption, requests for it, its use in onboarding or sales. Not required, but it's the difference between "I wrote guidance" and "I wrote guidance people followed."
- [ ] **Bank selection 8%** — relative or absolute? All traffic, or specific customers' flows? Relative on a screen that already converts well is a very different result from eight percentage points, and it's the first thing a numerate interviewer asks.
- [ ] **WCAG AA conformance** — how was it established? A retest by Applause or Testbirds, a formal audit report, or an internal assessment against the checklist? All three are respectable, but they are not the same claim, and this is now the most checkable sentence across both the CV and the portfolio.
- [ ] **The ~1,000 usability sessions** — production, or a sandbox/prototype flow through testing panels? As written, "a thousand people connecting a bank account" reads as production.
- [ ] **Documentation card sort** — any before/after findability numbers, or is this directional only? Currently written as directional, which is safe.
- [ ] **demo.yapily.com role** — "led design" is the conservative reading of what you told me. If design drove the initiative itself rather than just designing it, that's a stronger and different claim worth making.
- [ ] **HeadBox and Docomo overlap** — Docomo runs to December 2018, HeadBox starts 2018. Add months to HeadBox, or explain the overlap.
- [ ] **Team arc** — the CV says seven designers managed across six years, currently two. Earlier portfolio material describes it as one to three to two. Make sure both describe the same history.
