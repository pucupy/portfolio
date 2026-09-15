# Interview presentation — update specification

For Claude Code, applied against `slide-deck-content.md` and `claude/interview-presentation-spine.md`.
7 August 2026. Companion to `claude/portfolio-star-reframe.md` and `claude/cv-corrections.md`.

---

## THE ONE RULE

**Only text inside a fenced code block is speaker-facing content.** Everything else is instruction and must not reach a slide or a script.

---

## What this document does

Three things, in priority order:

1. **Removes an unsupported conformance claim.** Confirmed with Alejandro on 7 August 2026 that WCAG AA conformance is an inference, not a certified audit result. It currently appears twice in the spine.
2. **Adds three confirmed facts** about how each piece of work originated. These are the same facts added to the portfolio in `portfolio-star-reframe.md`, and they matter more in a live talk than on a page.
3. **Removes the layout-variant material**, which conflicts with the portfolio and is not supported.

STAR itself is **not** imported into the deck. Four labelled sections is a skim device for a page. In a 30-minute talk, Situation and Task compress into one spoken frame per act, Actions are the body, and Result is the outcomes slide — which is what the spine already does.

---

# 1. Remove the WCAG AA conformance claim

**Priority: highest. Do this before anything else.**

Two locations in `interview-presentation-spine.md`:

- Under *Restructured outcomes slide* → *Owned and defensible*: "Accessibility: the product now meets WCAG AA. In a follow-up unmoderated study…"
- Under *The release that was postponed*: "The product now meets WCAG AA."

### Replacement for the outcomes slide bullet

```
Accessibility: a commissioned audit found contrast failures across multiple screens and screen readers announcing raw SVG markup, which left the flow unnavigable by screen reader. We postponed a release to fix both rather than shipping and correcting afterwards. In a separate unmoderated study of 21 testers in Germany including participants with disabilities, 62% preferred the new flow overall, rising to 78% among testers with disabilities.
```

### Replacement for "The release that was postponed"

```
A commissioned accessibility study found insufficient colour contrast in multiple places, and screen readers reading raw SVG markup aloud because alternative text had not been implemented correctly — meaning a screen reader user could not navigate the flow. A release was postponed to fix both rather than shipping and correcting later. I wrote the findings up as a document for the frontend team to work from.
```

### Implementation notes

*Not for publication.*

- The word "conformance" and the string "WCAG AA" must not appear as a claim about the product anywhere in the deck.
- Conformance is a specific, testable claim. Fixing an audit's findings is not the same as meeting AA. An interviewer who knows accessibility may ask which success criteria were tested, by whom, and against which version — and for a lead role that is a fair question.
- The story is strong without the claim. A postponed release is a decision under commercial pressure, which is what a hiring panel is actually assessing. Conformance would only be a compliance fact.
- If Alejandro later obtains an audit report that certifies AA, the claim can be restored with the vendor and date attached. Not before.

---

# 2. Add the origination facts

All three confirmed by Alejandro on 7 August 2026. None currently appear in the deck.

## 2.1 — Act 1, after point 2 ("the cheaper fix attempted first")

```
There was no brief for this. Working with the product manager, we tried the cheaper fix first — better guidance and documentation. It helped, and it didn't hold, because customers were still building bank plumbing instead of their own product. The idea of a widget and an embeddable checkout came out of that, not from anyone's roadmap. The two of us co-originated it.
```

**Notes.** *Not for publication.* Currently the deck opens Act 1 as though Hosted Pages was a given. This is one spoken beat and it reframes the act as something he started. Do not overclaim — "the two of us co-originated it" is the confirmed wording and it shares credit correctly.

## 2.2 — Act 2, as the opening line of the act

Act 2's stated argument is already "the most expensive design problem in the company was a tool nobody owned, and most of the design work was getting it prioritised at all." It never says he started it.

```
Nobody asked me to do this. I decided it needed doing.

The Console wasn't on the roadmap. The priority was launching integrations in more regions — the growth engine, and what customers asked for in sales conversations. The resistance came from senior management on the platform side, and their objection was fair: Console work takes capacity away from that. So the first task wasn't design. It was making the case, with evidence rather than opinion, that a deprioritised internal tool was one of the more expensive things in the business. Earlier attempts had failed because the case had only ever been made by design, to product. It needed to be made by five functions at once. Senior management made the decision to reprioritise.
```

**Notes.** *Not for publication.* This is the strongest single passage available for Act 2 and it is currently missing entirely. Delivered as the opening line, "Nobody asked me to do this" sets up everything that follows — the three instruments, the coalition, the reprioritisation. Keep it as the first thing said in the act.

## 2.3 — Act 3, close

The HeadBox origination fact — briefed to improve conversion, concluded the model was wrong — has no home in the current structure, since the deck covers only Hosted Pages and the Console.

Two options, Alejandro's call:

**Option A — leave the deck as is.** The through-line already carries the argument. HeadBox stays a portfolio and Q&A asset.

**Option B — add one slide to Act 3** as evidence the pattern isn't Yapily-specific:

```
This isn't only a Yapily pattern. At HeadBox in 2019 I was asked to improve conversion on a two-sided marketplace where one in ten searches turned into anything. The brief assumed the marketplace needed to work harder. The research said the shape was wrong: guests who plan one event a year were making expert decisions, while hosts who do it daily were handed a queue they couldn't act on. What I proposed was inverting who does the difficult part. The company changed its revenue model as a consequence — £150,228 ARR from 117 paying venues in three months, four times the prior model. The wizard is still their front door in 2026.
```

**Notes.** *Not for publication.* Option B costs about 90 seconds and closes the deck on a shipped, measured business outcome rather than two products still in beta. Given both Yapily case studies end with "too early for adoption metrics" or a shared-credit conversion figure, that is worth considering. The ARR figure is £150,228 — see the resolution note at the end of this document.

---

# 3. Remove the layout-variant material

Delete Act 1 point 8 in its entirety: *"Layout for scale — three variants tested, hybrid won; the more valuable finding was that every variant beat production, which changed the question from which to how fast."*

### Implementation notes

*Not for publication.*

- Confirmed for removal by Alejandro, 7 August 2026.
- It conflicted with the portfolio, which describes two variants and says the grid lost because tiles couldn't display full bank names and near-identical icons made entries ambiguous. The claim that every variant beat production appears nowhere else and is not supported.
- **Deck only.** The portfolio's two-variant account in "Layout for scale" stays as written — it is the accurate version and the finding earns its place.
- Act 1 loses one point and runs slightly shorter. No renumbering issues; points 9 onward shift up by one.

---

# 4. Session count — restore ~1,000, and rename what it counts

Where the spine says *"Evidence base: around 1,000 end-user usability sessions (date range to be confirmed)"*:

```
Evidence base: around 1,000 end-user sessions between 2023 and 2026, moderated and unmoderated, testing usability, market coverage and live bank integrations with real people connecting real accounts.
```

### Implementation notes

*Not for publication.*

- Confirmed by Alejandro, 7 August 2026: the figure is substantiable, it includes unmoderated sessions, and the programme tested market coverage and integrations as well as usability.
- **Do not call these 1,000 "usability sessions".** That was the original error and it fails in both directions: it overclaims on usability, and it understates the programme, which was also how bank integrations and new markets were validated against real end users. "End-user sessions… testing usability, market coverage and live bank integrations" is accurate and describes something more substantial than a usability programme.
- **This also disposes of the arithmetic challenge.** CV v6 had softened the figure to "hundreds" specifically because *"'1,000 tests' invited an arithmetic challenge"* — a thousand moderated usability sessions in three years is implausible on its face. A programme that is moderated *and* unmoderated, and that runs integration and market validation through the same channel, plainly reaches that volume. Naming the composition in the same sentence answers the question before it is asked.
- **Make this change in three places at once**: this deck, the CV, and the portfolio. The portfolio currently says "hundreds" in two places on `hosted-pages.html` — the Outcomes stat block ("Hundreds — usability sessions behind the redesign, 2023–2026") and "the research programme reached hundreds of real people connecting real accounts". Both need the new wording. A CV saying one thing and a portfolio saying another is worse than either figure alone.
- This connects to an argument the deck already makes. Act 1 point 5 says prototyping had limited reach because the flow's shape is decided at runtime by someone else's integration and someone else's bank. A research programme that tests integrations and markets with live end users is the direct consequence of that constraint — not a separate fact. Consider placing them adjacent.
- Be ready to give the split if asked. If the moderated/unmoderated or usability/integration breakdown is retrievable, knowing it before an interview is worth more than the headline number.

---

# 5. Remaining open items from the spine

These pre-date this document and are unchanged. Recorded so they aren't lost.

| Item | Status |
|---|---|
| The five branching decisions and their values | Still needed to draw the Act 1 centrepiece. Two are set by the customer's integration (licence held; whether an institution ID was passed); three follow from product, market and regulation. Also whether "48+" is calculated or estimated — the portfolio says "more than forty". |
| Conflicting dates for the usability programme | **Resolved.** Portfolio and CV now both say 2023–2026. |
| The 8% on bank selection | **Resolved by removal.** Not in the current portfolio, and removed from CV v6. Verify it is absent from the PDF actually being sent. |
| The commissioned competitor benchmarking study | Vendor, date, sample size and which competitors, if retrievable. |
| The accessibility audit | Vendor and sample size not recorded anywhere. Worth retrieving — and now more important, since the AA claim has been removed and the audit is what carries this section. |

---

# Resolved: the HeadBox ARR figure is £150,228

The CV said £150,288; the portfolio says £150,228 in four places. Resolved by arithmetic on 7 August 2026:

| Figure | ÷ 117 customers | Exact? |
|---|---|---|
| **£150,228** | **£1,284.00** | **Yes — remainder 0** |
| £150,288 | £1,284.51 | No — remainder 60 |

£150,228 divides exactly into 117 annual subscriptions of £1,284. £150,288 does not divide cleanly by anything meaningful. Combined with the portfolio stating £150,228 consistently in four places against the CV's single instance, **£150,228 is correct and the CV contains a digit transposition.**

Not absolute proof — customers could in principle have paid different amounts — but a uniform £1,284 annual price across 117 venues on an access-fee product is exactly what the case study describes. Use £150,228 everywhere. Correct the CV.

---

# Open items

**1. Act 3 — Option A or B.** Alejandro's call. Option B costs 90 seconds and closes on a shipped, measured outcome.

**2. The five branching decisions.** Still the main blocker on building the Act 1 centrepiece slide. See the table in section 5.

**3. The accessibility audit's vendor and sample size.** More important now that the AA conformance claim has been removed — the audit is what carries that section, and "a commissioned audit" is weaker than a named one.
