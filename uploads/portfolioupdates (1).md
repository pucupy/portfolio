# Portfolio updates — research programme

For Claude Code, applied against https://github.com/pucupy/portfolio
7 August 2026. Apply alongside `claude/portfolio-star-reframe.md`, not instead of it.

---

## THE ONE RULE

**Only text inside a fenced code block goes on the website.** Everything else is instruction.

---

## Why this exists

While correcting the CV, Alejandro confirmed two things about the 2023–2026 research programme:

1. The volume is around 1,000 end-user sessions, substantiable, once unmoderated sessions are counted.
2. **The programme was not only usability testing.** It also tested market coverage and live bank integrations with real end users.

The portfolio currently says "hundreds" and describes the programme as usability work. Both understate it — and the second one matters more than the first, because the portfolio is already making an argument that this fact completes.

**The argument it completes.** `hosted-pages.html` states that you cannot usefully prototype a flow whose shape is chosen at runtime by someone else's integration and someone else's bank. The unstated consequence is that integrations and market coverage had to be validated the same way — with real people, on real accounts, in production. The research programme wasn't a usability programme that happened to be large. It was the only instrument available for testing a system nobody could prototype. That is a stronger claim than a bigger number, and the portfolio currently makes neither.

Same change goes to the CV and the deck. All three must agree.

---

# Change 1 — the Outcomes stat block

**File:** `hosted-pages.html` → `## Outcomes` → the four-stat block.

**Before:**

> **Hundreds** — usability sessions behind the redesign, 2023–2026

**After:**

```
~1,000
end-user sessions behind the work, 2023–2026
```

### Implementation notes

*Not for publication.*

- The other three stats in this block are `2 wks`, `200` and `20 → 65–75%`. `~1,000` matches that register; "Hundreds" was the only word among four numbers.
- "behind the work" rather than "behind the redesign" — the case study is explicit that there was never a single redesign, so "redesign" contradicts its own argument two screens earlier.
- Do not write "usability sessions". See Change 3.

---

# Change 2 — the prototyping consequence

**File:** `hosted-pages.html` → `## What this meant for how we worked` → `### Prototype testing could only take us so far`.

**Before:**

> You can't usefully prototype a flow whose shape is chosen at runtime by someone else's integration and someone else's bank. It's why the experimentation pipeline had to run against production traffic, and why the research programme reached hundreds of real people connecting real accounts rather than a panel working through a mock-up.

**After:**

```
You can't usefully prototype a flow whose shape is chosen at runtime by someone else's integration and someone else's bank. It's why the experimentation pipeline had to run against production traffic, and why the research programme reached around a thousand real people connecting real accounts rather than a panel working through a mock-up. The same constraint is why that programme wasn't only testing usability. New markets and new bank integrations couldn't be verified any other way either, so they went through the same channel — real users, real accounts, live.
```

### Implementation notes

*Not for publication.*

- This is the most important edit in this document. The added sentences turn a volume statistic into an explanation of why the volume exists.
- "around a thousand" in prose, "~1,000" in the stat block. Deliberate — the stat block is scanned, the prose is read.

---

# Change 3 — how it was tested

**File:** `hosted-pages.html` → `## How this was tested`, first sentence.

**Before:**

> Sessions were sized to the decision rather than to a standard, small and fast where the question was whether a direction was obviously wrong, larger where more variants had to be covered.

**After:**

```
Sessions were sized to the decision rather than to a standard, small and fast where the question was whether a direction was obviously wrong, larger where more variants had to be covered. Some were moderated and some unmoderated, and not all of them were usability sessions — a share of the programme existed to verify that a market or a bank integration behaved for real users the way we thought it did.
```

### Implementation notes

*Not for publication.*

- This is the methods section, so it is the right place to state the moderated/unmoderated split and the non-usability purpose plainly.
- Be ready to give the actual breakdown if asked in an interview. If the moderated/unmoderated or usability/integration split is retrievable from the Testbirds or Applause accounts, knowing it is worth more than the headline number.

---

# Change 4 — the homepage claim

**File:** `index.html` → the four capability blocks under the intro.

**Before:**

> CONTINUOUS RESEARCH — 200+ customer interviews since 2020, plus end-user testing.

**After:**

```
CONTINUOUS RESEARCH
200+ customer interviews since 2020, and around 1,000 end-user sessions across usability, market coverage and live bank integrations.
```

### Implementation notes

*Not for publication.* "Plus end-user testing" is the vaguest line in an otherwise specific block. The other three blocks name concrete things — founding designer, regulated products, strategy through to code. This one should too.

---

# ⚠️ Do not change these

Three things that look similar and are not.

**1. "Hundreds of variants".** In `### Improvement had to be incremental`:

> Hundreds of variants across bank selection, the QR handoff and embedded logins, between 2023 and 2026.

These are **experiment variants**, not sessions. Different unit, different number, already correct. Leave it exactly as it is. Changing it to ~1,000 would be a fabrication.

**2. £150,228 on `headbox.html` and `index.html`.** Correct in all four places. Verified 7 August 2026: £150,228 ÷ 117 customers = £1,284.00 exactly, where £150,288 leaves a remainder. **The CV was wrong, not the portfolio.** Do not "correct" the portfolio to match an older CV.

**3. The absence of any WCAG conformance claim.** The portfolio describes the audit findings, the postponed release, and the 21-tester study — and never claims the product meets WCAG AA. That is correct and deliberate: conformance is an inference, not a certified result. The contrast ratios listed on `design-system-reference.html` (7.2:1, 4.2:1 non-text, and so on) are measured values and are fine. **Do not add a conformance claim to the portfolio**, and if one is ever added elsewhere, it needs a named auditor and date attached.

---

# Still outstanding on the portfolio

Unchanged by this document. From `claude/portfolio-gds-review.md`.

| Priority | Item | Status |
|---|---|---|
| 1 | Site accessibility verification — does it work without JS, do case studies deep-link, does a screen reader work | **Not started. Highest priority.** A job application already links to this portfolio. |
| 2 | Plain English pass — unexplained cVRP, AIS, PIS, SCA, TAN, KYB, PSP and others | Not started |
| 3 | Text density on Hosted Pages | Partly addressed by the STAR blocks; the narrative still needs its own pass |
| 4 | Accessibility evidence buried | Resolved by the STAR spec |
| 5 | STAR shape not visible | Resolved by the STAR spec |
| 6 | First person consistency — "I" vs "we" | Not started |
| 7 | PDF version | Not started |
| 8 | Proofread | Not started. The £150,288 error found on the CV is exactly what this catches. |

Also from `claude/portfolio-star-reframe.md`: the yapily.com date artifact. Blog posts appear to carry the 2025 migration date rather than their original publication date. Do not cite any yapily.com post as a source for a date.
