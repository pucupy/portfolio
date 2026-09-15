# Portfolio — complete outstanding work

**This file supersedes** `portfolio-star-reframe.md`, `portfolio-updates.md`, `portfolio-corrections-consolidated.md`, `corrections-2026-08-07b.md`, `research-volume-final.md` and `dates-final.md` for portfolio purposes. Everything still outstanding is here. Ignore the others unless you want the reasoning.

Applied against https://github.com/pucupy/portfolio · 7 August 2026
**All facts confirmed. Nothing is blocked.**

---

## THE ONE RULE

**Only text inside a fenced code block goes on the website.** Everything else is instruction. No note, source line, warning symbol or bracket should ever reach a page.

Numbers and their qualifications travel together. Where copy says "roughly", "directional" or "not a design result", that wording is load-bearing — do not tidy it away.

---

## Already done — do not redo

- STAR blocks on all four case studies. Confirmed present (`<h2 id="star-heading">` in `hosted-pages.html`).
- £150,228 is correct in all four places. **The CV was wrong, not the portfolio.** Confirmed: 117 × £1,284.
- No WCAG conformance claim anywhere. **Keep it that way.** The measured contrast ratios on `design-system-reference.html` are fine.

---

# 1. Publish as static HTML 🔴

**The highest-value task on this list, and not a content change.**

All eleven pages are JavaScript bundler wrappers. The real markup sits as escaped strings inside `<script type="__bundler/…">` tags and is unpacked at runtime, so with JavaScript disabled or failing, nothing renders. The `<noscript>` block shows a notice, not a fallback.

| Page | Size |
|---|---|
| `creative-archive.html` | 7.0 MB |
| `su4erheroes.html` | 5.1 MB |
| `research-practice-np.html` | 4.5 MB |
| `hosted-pages.html` | 3.9 MB |
| `index.html` | 3.7 MB |
| **Whole site** | **42 MB** |

Deep links do work — `hosted-pages.html` is a real file at a real URL. That part is fine.

**Fix:** publish the unwrapped markup as static pages. The content is already clean HTML; only the delivery is the problem. Takes the site to a fraction of 42 MB, works without JavaScript, changes nothing a visitor sees.

---

# 2. `hosted-pages.html`

## 2.1 — Outcomes stat block, replace the research stat

**Before:** `Hundreds` — usability sessions behind the redesign, 2023–2026

**After:**

```
3 yrs
of continuous end-user testing, 2023–2026
```

## 2.2 — "Prototype testing could only take us so far"

**Replace the whole paragraph:**

```
You can't usefully prototype a flow whose shape is chosen at runtime by someone else's integration and someone else's bank. It's why the experimentation pipeline had to run against production traffic, and why the research programme ran with real people connecting real accounts rather than a panel working through a mock-up. The same constraint is why that programme wasn't only testing usability. New markets and new bank integrations couldn't be verified any other way either, so they went through the same channel — real users, real accounts, live.
```

## 2.3 — "Accessibility validation", first sentence

**Replace:**

```
A commissioned external audit identified approximately 94 changes across code, contrast and focus behaviour — contrast failures across multiple screens, and screen readers reading raw SVG markup aloud because alternative text hadn't been implemented properly, which left the flow unnavigable by screen reader.
```

## 2.4 — STAR Task block, delete one sentence

Delete the opening **"There was no brief."** The block then begins at "Working with the product manager…". Nothing else changes.

*Reason: the Console STAR Task opens "Nobody asked me to do this." Two instances of the same move in consecutive case studies reads as a personality trait rather than two facts. Console keeps its version — it is the thesis of that case study.*

## 2.5 — Do not touch

**"Hundreds of variants across bank selection, the QR handoff and embedded logins"** in `### Improvement had to be incremental`. Experiment variants, not sessions. Different unit, already correct.

---

# 3. `headbox.html`

## 3.1 — Dates

`AT A GLANCE` panel:

```
PERIOD
Dec 2018 – Dec 2019
```

## 3.2 — "Both sides were failing, for opposite reasons", opening

**Replace:**

```
Three rounds of research with 45 customers and non-customers, usability sessions, and internal research with the sales and account management teams, alongside observation of the existing journey, support and chat analysis, and a review of thousands of messages between guests and venues. Much of the host research was done on site rather than over video, in venues ranging from local pubs to Kensington Palace and the O2. The picture that came back was symmetrical.
```

## 3.3 — STAR Actions block, first bullet

**Replace:**

```
Ran three rounds of research with 45 customers and non-customers, much of it on site in the venues themselves, plus usability sessions and internal research with the sales and account management teams.
```

## 3.4 — "Testing it before building it", first paragraph

**Replace:**

```
The first prototype of the feed was a spreadsheet: a list of recent enquiries, filtered, shown to twenty venues. Hosts called the guests they matched with, and eighteen of the twenty events became confirmed bookings. That established both things we needed to know — that venues were better at matching than any algorithm we could have written, and that they would pay for access — before anyone built anything.
```

Add the same result to the STAR Actions bullet on cheap prototyping.

## 3.5 — "Venue creation, rebuilt around what the feed needs"

**Insert immediately before "So the form was rebuilt around structured capacity…":**

```
The range is what forced the structure. Host research was run on site, in venues from local pubs to Kensington Palace and the O2, and no single prose description can serve a feed that has to match a pub back room and an arena against the same brief. Capacity, layout and suitability had to stop being copy and become data.
```

## 3.6 — STAR Result block, add after the volume bullets

```
Brief completion improved directionally from roughly 50% to around 75% after the guest flow was simplified.
```

Keep "directionally".

---

# 4. `index.html`

## 4.1 — HeadBox case study header

```
Dec 2018 – Dec 2019
```

## 4.2 — The "CONTINUOUS RESEARCH" capability block

**Replace:**

```
CONTINUOUS RESEARCH
200+ customer interviews since 2020, and three years of continuous end-user testing across usability, market coverage and live bank integrations.
```

*"Plus end-user testing" is the vaguest line in an otherwise specific block.*

---

# 5. Structure — promote Design Systems

`design-systems-np.html` already exists, so this is promotion, not new work.

**Selected Work order:**

1. Yapily Hosted Pages
2. Yapily Console
3. HeadBox
4. Design Systems at Yapily

Move **Brand & Website** into secondary work.

Lead the Design Systems case with the counter-intuitive decision rather than component production:

```
One design system would have made all three products worse
```

Then: Custard white-label and restrained, Yapily UI dense and operational, Mark expressive and marketing-led; shared foundational tokens, separate product-specific components; accessibility encoded into the token architecture; governance owned jointly with frontend.

Add the adoption figure, which currently exists only on LinkedIn and is the best evidence the systems were used rather than merely built:

```
Built against by around 38 engineers and 4 designers.
```

*Brand & Website moves to secondary because Design Systems is more differentiated for Lead and Principal roles — not because it is weak. It now has a CEO mandate, a commercial objective and a met deadline.*

---

# 6. Attribution caveats — say it once

These recur across case studies: "not a design result", "directional", "too early for adoption figures", "exact figures remain confidential", "platform-wide gain".

**The repetition is the problem, not the honesty.** State the attribution model once near the top of each Outcomes section, then present the design-linked figures cleanly.

**One caveat must survive intact:** the 20% → 65–75% conversion figure genuinely is not a design result. Removing that qualification would be a false claim, and it is exactly what an interviewer probes. Your credibility on every other number rests on having been visibly careful with this one.

---

# 7. From the original GDS review — not started

| Item | Detail |
|---|---|
| **Plain English** | Unexplained on `hosted-pages.html`: cVRP, AIS, PIS, SCA, TAN, KYB, KYC, PSP, app-to-app, decoupled flow, direct licence, sub-application. Gloss on first use or add a short glossary. Lighter pass on `console.html`: KYB, SDR, CSM, monolith. |
| **Text density** | STAR blocks fixed the skim. The Hosted Pages narrative still needs collapsible detail and paragraphs broken below five sentences. |
| **First person** | "I" and "we" alternate, sometimes within a paragraph. Decide per instance: led it, say "I"; team did it, keep "we" and it now reads deliberate. |
| **PDF version** | Landscape, under 25 pages, for applications that take attachments only. |
| **Proofread** | Not done. The £150,288 CV error is what this catches. |

---

# 8. Standing warning

**Do not cite any yapily.com blog post as a source for a date.** The 2025 CMS migration appears to have restamped historic posts with the migration date — a May 2019 funding announcement currently displays as 24 September 2025.

---

# Order of work

| # | Task | Section |
|---|---|---|
| 1 | Publish as static HTML | §1 |
| 2 | The three trapped HeadBox facts — 18-of-20, venue range, brief completion | §3.4, §3.5, §3.6 |
| 3 | Accessibility audit scope | §2.3 |
| 4 | Research volume wording | §2.1, §2.2, §4.2 |
| 5 | HeadBox research volume and on-site method | §3.2, §3.3 |
| 6 | Dates | §3.1, §4.1 |
| 7 | Delete "There was no brief" | §2.4 |
| 8 | Promote Design Systems | §5 |
| 9 | Attribution pass | §6 |
| 10 | Plain English, density, first person, proofread | §7 |
