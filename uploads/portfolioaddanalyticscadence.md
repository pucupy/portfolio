# Portfolio — add the weekly performance session

For Claude Code. 20 August 2026.
Small addition. Everything in `PORTFOLIO-TODO.md` and `FIXES-2026-08-12.md` still applies separately.

---

## THE ONE RULE

**Only text inside a fenced code block goes on the website.** Everything else is instruction.

---

## What this adds, and why

Confirmed by Alejandro: he sits in a **weekly session with product managers and customer success**, reviewing bank performance and customer performance, and that session feeds the strategic roadmap.

This appears nowhere in the portfolio, the CV, the deck or LinkedIn.

It matters because the Hosted Pages case study already makes the argument — *"Research was often the part that found the problem rather than the part that fixed it, and the fix frequently belonged to engineering"* — but never shows the mechanism that produces those decisions. Right now the observation is asserted. This gives it a forum.

It is also the direct answer to a question employers ask constantly and designers usually answer badly: how do you use data to set strategy. Most candidates describe reading a dashboard. This describes a standing cross-functional decision-making cadence where design is one of three voices.

---

## The edit

**File:** `hosted-pages.html`
**Section:** `## Decisions`, the preamble
**Position:** immediately after the existing paragraph ending *"…and it's more useful than a set of before-and-after screens."*

**Add as a new paragraph:**

```
Every week I go through bank and customer performance with product and customer success. That session sets the roadmap rather than reviewing it, and most of it is an argument about what kind of problem we're looking at. Bank reliability varies enough that it moves conversion more than any screen does, so the useful question is usually whether something is a design problem, a coverage problem or a reliability one — and design is only one of those three.
```

---

## Implementation notes

*Not for publication.*

- **Placement is deliberate.** The Decisions preamble already claims that research found problems whose fixes belonged elsewhere. This paragraph shows where that call actually gets made, so the claim stops being an assertion. Putting it in "How this was tested" instead would file it as process, which is weaker — it belongs with decisions because it decides things.

- **Do not repeat the bank performance figures here.** The Console case study already says bank performance "runs from the low nineties to the low seventies". Restating the numbers in Hosted Pages would read as a stock line. This paragraph deliberately refers to the variance without quantifying it.

- **Do not add it to the STAR blocks.** The Actions block is already at its length budget and this is supporting detail rather than a headline action.

- **"Sets the roadmap rather than reviewing it"** is the load-bearing clause. It is the difference between attending a meeting about data and using data to decide what gets built. If anything gets trimmed, trim elsewhere.

---

## Same fact, other documents

Worth adding at the next revision of each. Not urgent, but it is currently a single-document fact, which is the pattern that has caused most of the inconsistencies found so far.

| Document | Where | Suggested line |
|---|---|---|
| **CV** | Research bullet, Yapily | `Sits in a weekly performance session with product and customer success, reviewing bank and customer performance to set the strategic roadmap.` |
| **Deck** | Appendix A, Research — alongside slide 93 "Continuous discovery" | `Weekly performance session with product and customer success — bank and customer performance, feeding the roadmap` |
| **LinkedIn** | Yapily experience block | Only if something else is cut. The block is at 1,994 of 2,000 characters. |

---

## Verification

| Check | Expected |
|---|---|
| Search `hosted-pages.html` for `weekly` | One hit, in the Decisions preamble |
| Search for `low nineties` | Only in the Console case study, not in Hosted Pages |
