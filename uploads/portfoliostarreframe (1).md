# Portfolio — STAR reframe specification

For Claude Code, applied against https://github.com/pucupy/portfolio
Version 2, 7 August 2026. Companion to `claude/portfolio-gds-review.md`.

Reference: [gov.uk — A brief guide to competencies, The STAR method](https://www.gov.uk/guidance/a-brief-guide-to-competencies#the-star-method)

**Status: ready to apply.** All Task and Result sections are written and confirmed. Nothing is blocked.

---

## THE ONE RULE

**Only text inside a fenced code block goes on the website.**

Everything else in this document — headings, tables, notes, sources, warnings, this sentence — is instruction for the person applying the spec. None of it is publishable. Every case study below is laid out the same way:

- `### Situation` / `### Task` / `### Actions` / `### Result` — each contains one fenced block. That block is the finished copy. Paste it, don't edit it.
- `### Implementation notes` — never published. Provenance, warnings, and decisions about placement.

If any note, source line, arrow, warning symbol or square bracket reaches the live site, the spec has been applied wrongly.

---

## Other rules

1. **Every word inside a fenced block is drawn from existing portfolio content in `CONTENT.md`, or from facts Alejandro confirmed on 7 August 2026.** Nothing is speculative. Do not add, embellish or "improve" the copy.
2. **Do not delete existing narrative.** The STAR block is additive. The deep sections below it stay exactly as they are.
3. **Numbers and their qualifications travel together.** Where copy says "roughly", "approximately", "directional" or "not a design result", that wording is load-bearing. Do not tidy it away.
4. **If applying this creates a factual conflict with the page, stop and flag it.** Do not resolve it.

---

## The principle

The gov.uk guide says: *"Keep the situation and task parts brief. Concentrate on the action and the result."* That is written for a ~250-word application answer.

A portfolio is read in two passes — a 90-second skim that decides whether there's a second pass, then the real read. STAR goes on top as the skim layer; the existing analytical narrative stays below as the evidence layer.

Density reduction of the narrative itself is a separate job, specified in `portfolio-gds-review.md` Priority 3.

---

## Component spec

### Placement

Immediately below the `AT A GLANCE` panel, above the first narrative section.

Current state is inconsistent and must be normalised first:

| Case study | Current | Action |
|---|---|---|
| `hosted-pages.html` | `AT A GLANCE` with ROLE, PERIOD, WORKING WITH, STATUS, OUTCOME | Remove ROLE and OUTCOME rows — Task and Result now carry them |
| `console.html` | Same | Same treatment |
| `brand-website.html` | Inline prose: "Role: … · Period: …" | Convert to a matching `AT A GLANCE` panel |
| `headbox.html` | Inline prose: "Role: … · Period: … · Company: …", plus Status and Outcome lines | Convert to a matching `AT A GLANCE` panel; drop the Outcome line |

After normalisation `AT A GLANCE` carries metadata only: PERIOD, WORKING WITH, STATUS.

### Markup

```html
<section class="star" aria-labelledby="star-heading">
  <h2 id="star-heading" class="visually-hidden">Summary</h2>

  <div class="star__item">
    <h3>Situation</h3>
    <p>…</p>
  </div>

  <div class="star__item">
    <h3>Task</h3>
    <p>…</p>
  </div>

  <div class="star__item">
    <h3>Actions</h3>
    <ul>…</ul>
  </div>

  <div class="star__item">
    <h3>Result</h3>
    <ul>…</ul>
  </div>
</section>
```

Constraints:

- Real headings, correctly nested. No skipped levels.
- Situation / Task / Actions / Result are visible labels.
- No icons, no numbered circles, no progress indicators.
- Readable as plain text with CSS disabled; keyboard-reachable in document order.

---

# 1. `hosted-pages.html` — Yapily Hosted Pages

### Situation

```
Yapily's open banking API offered almost no abstraction, so customers built and maintained their own bank-connection and consent journey one bank at a time — across 1,500+ banks in 10+ countries at the time, since grown to over 2,000 across 19, each with its own consent flow, data quirks and certification requirements. A custom integration took four to six months in many European cases, and sometimes over a year. Around 80% of early customers were SMEs, so that cost decided whether they could adopt at all.
```

### Task

```
There was no brief. Working with the product manager, we first tried the cheaper fix — better guidance and documentation — which helped but didn't change the underlying problem, because customers were still building bank plumbing instead of their own product. The idea of a widget and an embeddable checkout came out of that work rather than from anyone's roadmap; the PM and I co-originated it. I then led the product strategy, research and design end to end at launch, within FCA guidelines, across two licensing models, ten-plus markets, multiple languages, and both payments and data — and have owned its evolution since, including the 2023–2026 usability research programme, the June 2026 cross-functional workshop, and the resulting improvement roadmap.
```

### Actions

```
Built the research and experimentation apparatus before attempting improvements, because the flow is generated at runtime from five decisions made before the user arrives — there was never one surface to redesign.

Redesigned bank selection: grouped branches under parent brands, added a popular-banks shortcut, and changed display names to match what people call their bank rather than the name it registers under.

Passed search-index gaps to engineering as a data problem rather than a screen problem, after sessions repeatedly showed aliases and old brand names returning nothing.

Replaced API-passed language with an in-flow selector, after establishing that language cannot be inferred from country.

Removed the QR handoff entirely in markets where app-to-app coverage was thin or banks presented competing QR codes; improved guidance and layout in the regions where it genuinely helped.

Corrected embedded login: mapped fields to what each bank actually asks for, A/B tested trust signals including the customer's own logo, and had engineering build per-bank retry behaviour to replace an assumed universal rule.

Postponed a release to fix contrast failures and screen readers announcing raw SVG markup, rather than shipping and correcting afterwards.
```

### Result

```
Customer integration effort down from around four to six months — sometimes over a year for complex cases — to around two weeks.

Used by 200 companies, from a customer base including Google, Adyen, Intuit, Ant Financial and Revolut.

Time to find a bank down from 5–15 seconds to 1–3 seconds in most markets, and 3–5 seconds in branch-heavy markets like Germany.

Embedded login conversion improved by roughly 13%; the decoupled handoff by roughly 10% in the regions where it was retained. Both directional, from overlapping production experiments rather than isolated tests.

End-to-end conversion moved from around 20% in the 2023 beta to roughly 65–75% today, varying by use case and market — a platform-wide gain made by UX, frontend and backend together alongside expanding bank coverage, not a design result.

In an unmoderated study of 21 testers in Germany, 62% preferred the new flow overall, rising to 78% among testers with disabilities.
```

### Implementation notes

*Not for publication.*

- Situation from "Problem" and the opening summary. Actions from "Decisions", all sub-sections. Result from "Outcomes" and "Accessibility validation".
- Task: co-origination with the PM confirmed by Alejandro, 7 August 2026. This is the new material. Currently a reader assumes he was handed the product. "The PM and I co-originated it" shares the credit correctly and is not a claim of sole authorship.
- The accessibility result currently sits three-quarters down the page. Promoting it into the Result block resolves `portfolio-gds-review.md` Priority 4 for this case study.
- The final Result bullet's qualification is deliberate. Do not shorten it.

---

# 2. `console.html` — Yapily Console

### Situation

```
The Console began as a certificate vault and application manager built for a handful of enterprise customers on one licensing model. As Yapily added products, customer types and markets, everything the Console couldn't do was absorbed by people — support enabling features by hand, engineers making configuration changes, customer success exporting reports. Becoming a customer took six months to a year, and around 80% of the customer base is non-enterprise, on customer success's figures, sitting through a sales-led onboarding built for somebody else.
```

### Task

```
Nobody asked me to do this. I decided it needed doing. The Console was not on the roadmap — the standing priority was launching integrations in more regions, the growth engine and what customers asked for in sales conversations — and the main resistance came from senior management on the platform side, whose objection was a fair one: Console work would take capacity away from it. So the first task wasn't design. It was making the case, with evidence rather than opinion, that a deprioritised internal tool was one of the more expensive things in the business. Earlier attempts had failed not because the problem was unclear, but because the case had only ever been made by design, to product. Senior management made the decision to reprioritise.
```

### Actions

```
Ran customer interviews to establish what people were actually blocked on, rather than restating a known complaint.

Ran a workshop with VPs, PMs, engineering, support, design and customer success to produce one shared account of the problem instead of five departmental versions.

Ran a two-day hackathon in which engineering, PMs, design and the implementation team worked as an outside consultancy, using only what a real customer can access.

Mapped the journey end to end from anonymous visitor to renewal — across sales, customer success, technical services, support and operations — deliberately not a design artifact, because no single team could see the whole of it.

Led the information architecture for a self-serve Console, and the strategic decision to split the path rather than replace it: enterprise keeps an assisted journey, everyone else self-serves.
```

### Result

```
The Console was prioritised, after earlier attempts had failed. The workshop is what changed it, because the cost stopped being a design opinion and became a visible amount of several teams' time.

The Hosted Pages configurator shipped in full, giving customers self-serve control over colours, copy, layout and states. Theming requests that previously consumed a support person and an engineer per request stopped.

Two hackathon findings were fixed directly: engineering resolved the CORS issue that had forced customers to build their own backend proxy, and the sandbox was rebuilt to contain every authentication flow — which also gave automated testing a complete environment to run against.

The new Console is in beta, targeting weeks to a few months from first contact to go live against the previous six months to a year. It is too early for adoption figures.
```

### Implementation notes

*Not for publication.*

- Situation from the opening summary, "The problem was operational, not cosmetic" and "2022–2025 · REBRANDED, NOT REBUILT". Actions from "How I made the hidden cost visible", "Mapping it before changing it", "Running it as an outsider", "The strategic decision: split the path". Result from the same sections plus "Where it stands".
- Task: initiation and the prioritisation decision both confirmed by Alejandro, 7 August 2026.
- "Nobody asked me to do this. I decided it needed doing" is the load-bearing sentence and appears nowhere on the current page. Without it a reader assumes he was assigned an internal tool redesign. With it, the case study is about identifying an unowned business cost and building a coalition to fund it — which is what the rest of the page already describes.
- The final Result bullet is deliberately unflattering. "Too early for adoption figures" is more credible than an inferred number and is consistent with how the rest of the portfolio handles unproven outcomes. Keep it.

---

# 3. `brand-website.html` — Yapily Brand & Website

### Situation

```
Yapily changed how it explained itself five times between 2020 and 2026 — from an API-first, deliberately invisible infrastructure provider, through clearer products around the API, open banking infrastructure and open finance, to an open banking platform for frictionless finance. Competitor analysis showed a category problem: many open banking websites looked and sounded the same, making it difficult to distinguish providers or understand where one product ended and another began. At the same time the existing CMS was expensive and difficult to operate, and publishing had become unnecessarily slow.
```

### Task

```
The mandate came from the CEO, and success was defined commercially rather than in design terms: launch the new website before the company's funding announcement. That fixed the date, and everything else — the positioning work, the information architecture, the agency relationship, the design system and the CMS migration — was subordinate to hitting it. I held creative direction and design leadership across all of it.
```

### Actions

```
Shaped positioning through workshops with Marketing, Sales and senior leadership, supported by competitor analysis.

Designed the first concepts and visual directions, and produced the wireframes.

Created dedicated product sections, giving customers a clearer view of the offering and the site a stronger information architecture.

Managed the relationships with two external branding agencies, who produced the final visual designs, while retaining responsibility for direction, system and implementation quality.

Built and governed Mark, the website design system — deliberately separate from the product systems, sharing foundational tokens but keeping its own components, so marketing refreshes would not ripple into production tooling.

Worked with Yapily's frontend team to translate the final agency designs into a live system on a new platform.
```

### Result

```
The site launched ahead of the funding announcement it was timed against, which is how success was defined.

The rebuild produced more than fifty templates in under two months, which was only possible because the component system already existed.

Migration from an expensive, difficult CMS improved publishing speed and ease of use across thousands of links, landing pages and articles, and gave Marketing more independence.

A clearer product architecture helped customers understand the offering.

A visual identity designed to stand apart in a category where competitor websites looked increasingly interchangeable.

The brand was extended beyond the website into sales, marketing and company collateral, with the team.
```

### Implementation notes

*Not for publication.*

- Situation from "Positioning changed five times" and "The category had converged". Actions from "My role", "Mark, the website design system", "Build and launch". Result from "Build and launch" and "Outcome".
- Task: CEO mandate, deadline, and that this is the 2025 rebuild — all confirmed by Alejandro, 7 August 2026.
- **Do not name the funding round or state an amount.** Confirmed with Alejandro that the round was not public information. "The funding announcement it was timed against" is the correct level of detail. Do not link to any Yapily funding blog post as supporting evidence — see the accuracy warning at the end of this document.
- The existing page carries the line "Commercial pipeline and enquiry data are confidential and are not published here." Leave it in the narrative below; it does not belong in the Result block.
- The first two Result bullets are the substantive change. The deadline result did not exist on the page at all. The templates figure existed but was buried under "Build and launch", where it read as a productivity statistic; directly beneath a stated CEO deadline, the same sentence becomes evidence of delivering against it.
- With a commercial objective and a met deadline this is no longer the weakest of the four on Result. It can stay third on `index.html` — HeadBox's revenue figures still outrank it.

---

# 4. `headbox.html` — HeadBox

### Situation

```
HeadBox was a two-sided marketplace where guests searched a directory of venues, filtered, messaged two to four of them and waited. Around one in ten searches turned into anything. Guests aren't event experts — most plan one event a year — so faced with a directory they shortlisted a few venues, googled them and rang them directly, off the platform entirely. Hosts received enquiries from every direction with almost none matched to their venue, and only 20% of enquiries ever received a proposal. Around 80% of the company was sales and account managers matching enquiries to venues by hand out of spreadsheets and slides.
```

### Task

```
As Lead Product Designer I was asked to improve conversion. The brief assumed the marketplace needed to work harder — a better directory, better search, better matching — which is what every previous attempt had assumed too. The research took me somewhere else. What I concluded, and proposed, was that the shape of the marketplace was the problem rather than its execution, and that fixing conversion meant inverting who did the difficult part. The company changed its revenue model as a consequence.
```

### Actions

```
Ran fifteen customer interviews, usability sessions, and internal research with the sales and account management teams.

Identified that the expertise was on the wrong side: guests who do this once a year were being asked to make expert decisions, while hosts who do it daily were handed a queue they couldn't act on.

Designed the inversion — guests complete a short wizard capturing what they need, enquiries pool into a central feed, and hosts choose the events they want.

Rebuilt venue creation around structured capacity, layout and suitability rather than prose, in resumable steps, with the fields the feed depends on made unavoidable.

Tested the cheapest thing that produced real evidence at each stage: the Enquiry Hub shipped London-only capped at £10k; the feed's first prototype was a spreadsheet; guest-side prototyping started as a Google Form, before moving through Figma into coded prototypes.

Established the design system, governance framework and research practice used across the organisation.
```

### Result

```
£150,228 ARR from 117 paying venues within three months — four times the prior revenue model, and the company's first scalable, profitable product.

More than 1,500 leads in the first month.

Hosts logged in every day from launch, which is the exact thing every previous attempt had failed to achieve.

The company pivoted its business model on the result, moving from commission on the sale to venues paying for access to the feed — which also designed out the off-platform leakage, because there was no percentage left to avoid.

Approximately 90% of the original product structure remains in the current experience, and the wizard is still HeadBox's front door in 2026.
```

### Implementation notes

*Not for publication.*

- Situation from "An Airbnb for event spaces, converting at 10%", "Both sides were failing, for opposite reasons", "And the company was absorbing the difference". Actions from "The insight", "The bet", "Venue creation, rebuilt around what the feed needs", "Testing it before building it", "Credit, precisely". Result from "What it produced", "The bet", "The model outlived me".
- Task: the brief — improve conversion — confirmed by Alejandro, 7 August 2026.
- **This is the most consequential change in the document.** The gap between the brief he was given and what he delivered — a business model change the company adopted, still running seven years later — is the strongest leadership claim available anywhere in this portfolio, and it is currently not made at all. A reader today cannot tell whether he was asked to do this or worked it out. Protect this Task section in any later editing pass.
- The existing "Credit, precisely" section must stay where it is, near the end: *"I designed the inversion and the first version of the flow, and led the research that produced it… I'd claim the structure, not the screens."* It qualifies the fifth Result bullet. Add a link from that bullet to the section rather than moving the text up — the claim is strong, and the qualification is what makes it credible.

---

# Cross-cutting effect

| `portfolio-gds-review.md` item | Effect |
|---|---|
| Priority 4 — accessibility evidence buried | Resolved for Hosted Pages |
| Priority 5 — STAR shape not visible | Resolved for all four |
| Priority 3 — text density | Partly addressed. A skimmer no longer has to read the full narrative to get the argument; the narrative still needs its own pass. |

Still outstanding, not addressed here: Priority 1 (site accessibility verification), Priority 2 (plain English pass), Priority 6 (first person consistency), Priority 7 (PDF), Priority 8 (proofread).

---

# Confirmed inputs

All supplied by Alejandro on 7 August 2026.

| Case study | Question | Answer |
|---|---|---|
| Hosted Pages | Assigned or proposed? | Co-originated with the PM |
| Console | Did you initiate it? | Nobody asked; he decided it needed doing |
| Console | Who prioritised it? | Senior management decided to reprioritise |
| Brand & Website | What was the objective, who set it? | CEO mandate — launch before the funding announcement |
| Brand & Website | Did it launch on time? Which rebuild? Which round? | Yes; the 2025 rebuild; round not public — do not name it |
| HeadBox | What was the brief? | Improve conversion |

Standing rule: what actually happened, not what sounds strongest.

---

# ⚠️ Accuracy warning — dates on yapily.com

Recorded here because it affects how this portfolio should be fact-checked, and because an interviewer might hit it.

**The finding.** The Yapily blog post "Open banking fintech Yapily secures $5.4m funding" displays a publication date of **24 September 2025**. That round — $5.4m seed, led by HV Holtzbrinck Ventures and LocalGlobe — was announced on **30 May 2019**, as covered by TechCrunch, UKTN and FinSMEs at the time.

**Likely cause.** The 2025 CMS migration appears to have restamped historic posts with the migration date rather than preserving original publication dates. That migration is part of the work described in case study 3.

**Consequences:**

1. **Do not cite any yapily.com blog post as a source for a date.** Displayed dates are unreliable for pre-2025 content. Use contemporaneous third-party coverage instead.
2. **Alejandro joined Yapily in 2020.** Any Yapily event a page dates to 2025 but which actually occurred earlier may predate his employment. Cross-check before referencing.
3. **Anticipate it in interviews.** Someone verifying the case study timeline against the live site will find dates that don't match. Explaining it as a known migration artifact is better than being surprised by it.

**Out of scope but worth raising:** if this affects the whole blog archive rather than one post, it is a content-integrity problem on a site Alejandro led. Whether to raise it internally at Yapily is his call.

*Verified 7 August 2026 against [TechCrunch](https://techcrunch.com/2019/05/30/yapily/), [UKTN](https://www.uktech.news/news/uk-fintech-yapily-raises-5-4m-in-seed-funding-20190530) and [FinSMEs](https://www.finsmes.com/2019/06/yapily-raises-5-4m-in-seed-funding.html).*
