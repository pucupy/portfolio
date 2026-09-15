# Portfolio — corrections

For Claude Code, applied against https://github.com/pucupy/portfolio
7 August 2026. Consolidates everything outstanding. Read `cross-document-conflicts.md` first — one item there blocks §4.

Already applied and not repeated here: the STAR blocks from `claude/portfolio-star-reframe.md`, confirmed present in `hosted-pages.html`.

---

## THE ONE RULE

**Only text inside a fenced code block goes on the website.** Everything else is instruction.

---

# 1. The build — highest priority, and it is not a content change

**Confirmed from the export.** All eleven pages are JavaScript bundler wrappers. The real markup sits as escaped strings inside `<script type="__bundler/…">` tags and is unpacked at runtime. Script content is never rendered, so with JavaScript disabled or failing, nothing appears. The `<noscript>` block hides the loading spinner and shows a notice — it is not a content fallback.

| Page | Size |
|---|---|
| `creative-archive.html` | 7.0 MB |
| `su4erheroes.html` | 5.1 MB |
| `research-practice-np.html` | 4.5 MB |
| `hosted-pages.html` | 3.9 MB |
| `index.html` | 3.7 MB |
| `console.html` | 3.7 MB |
| **Whole site** | **42 MB** |

**Deep links do work** — `hosted-pages.html` is a real file at a real URL. That part is fine.

**What to do.** Publish the unwrapped markup as static pages. The content is already clean HTML; it is only the delivery mechanism that is the problem. This takes the site from 42 MB to a small fraction, makes it work without JavaScript, and changes nothing a visitor sees.

**Why it matters more than it looks.** A hiring manager on a train opens a 3.9 MB page. A recruiter behind a corporate proxy that delays scripts sees nothing. Someone using a screen reader waits through an unpacking step before any landmark exists. For most professions that is a performance footnote. For a portfolio containing a case study about postponing a release over screen-reader failures, it is the work sample contradicting itself.

---

# 2. `headbox.html` — research volume and method

Confirmed 7 August 2026: three rounds, 45 customers and non-customers. Fifteen was one round. Much of the host research was conducted on site — pubs, Kensington Palace and the O2.

## 2.1 — "Both sides were failing, for opposite reasons"

**Before:**

> Fifteen customer interviews, usability sessions, and internal research with the sales and account management teams. The picture that came back was symmetrical.

**After:**

```
Three rounds of research with 45 customers and non-customers, usability sessions, and internal research with the sales and account management teams, alongside observation of the existing journey, support and chat analysis, and a review of thousands of messages between guests and venues. Much of the host research was done on site rather than over video, in venues ranging from local pubs to Kensington Palace and the O2. The picture that came back was symmetrical.
```

## 2.2 — STAR Actions block, first bullet

**Before:**

> Ran fifteen customer interviews, usability sessions, and internal research with the sales and account management teams.

**After:**

```
Ran three rounds of research with 45 customers and non-customers, much of it on site in the venues themselves, plus usability sessions and internal research with the sales and account management teams.
```

### Notes

*Not for publication.* Write "45 customers and non-customers", not "45 interviews". Non-customers are the more interesting half — a marketplace losing 90% of guests before the first call to action learns more from people who did not convert.

---

# 3. `headbox.html` — three facts currently trapped in the deck

## 3.1 — The spreadsheet prototype's result

Deck slide 69: 20 venues → 18 confirmed events. The portfolio mentions the spreadsheet but never says what it produced.

In "Testing it before building it", **before:**

> The first prototype of the feed was a spreadsheet: a list of events a host could pick from. That was enough to establish whether the requirements we captured were sufficient, and whether the idea excited them, before anyone built anything.

**After:**

```
The first prototype of the feed was a spreadsheet: a list of recent enquiries, filtered, shown to twenty venues. Hosts called the guests they matched with, and eighteen of the twenty events became confirmed bookings. That established both things we needed to know — that venues were better at matching than any algorithm we could have written, and that they would pay for access — before anyone built anything.
```

**Notes.** *Not for publication.* Among the strongest single pieces of evidence in the portfolio, and currently absent: a spreadsheet that produced eighteen real bookings, validating the business model before a line of code.

## 3.2 — The venue range is why listings became structured data

Confirmed 7 August 2026. The case study currently presents the listing rebuild as following from the model change alone, which is true but leaves out the interesting part.

In "Venue creation, rebuilt around what the feed needs", immediately before "So the form was rebuilt around structured capacity…":

```
The range is what forced the structure. Host research was run on site, in venues from local pubs to Kensington Palace and the O2, and no single prose description can serve a feed that has to match a pub back room and an arena against the same brief. Capacity, layout and suitability had to stop being copy and become data.
```

**Notes.** *Not for publication.* This converts a form redesign — the least interesting kind of design work to read about — into a decision that follows directly from field research, and stops the venue visits reading as colour.

## 3.3 — Brief completion

Deck slide 71. The HeadBox Result block currently has no design-attributable guest-side outcome; every bullet is revenue or volume.

**Add to the Result block, after the volume bullets:**

```
Brief completion improved directionally from roughly 50% to around 75% after the guest flow was simplified.
```

Keep "directionally" — the deck marks it that way and the qualification travels with the number.

---

# 4. 🔴 `hosted-pages.html` — research volume, BLOCKED

Two locations currently say "hundreds":

- The Outcomes stat block: *"Hundreds — usability sessions behind the redesign, 2023–2026"*
- *"the research programme reached hundreds of real people connecting real accounts"*

**Do not change these yet.** I previously specified replacing them with ~1,000. `linkedin-profile.md` records the real figures as thousands unmoderated and about 150 moderated, and states that 1,000 matches neither. See `cross-document-conflicts.md` §1.

Once settled, the likely wording is `around 150 moderated sessions and several thousand unmoderated`. Change the portfolio, CV, deck and LinkedIn in one pass.

**Do not change** the line "Hundreds of variants across bank selection, the QR handoff and embedded logins" in `### Improvement had to be incremental`. Those are experiment variants, not sessions — a different unit, already correct.

---

# 5. `hosted-pages.html` — accessibility audit scope

Deck slide 105 records that an external provider identified approximately 94 changes across code, contrast and focus behaviour. This appears nowhere in the portfolio.

In "Accessibility validation", **before:**

> A commissioned audit found contrast failures across multiple screens, and screen readers reading raw SVG markup aloud because alternative text hadn't been implemented properly, a screen reader user couldn't navigate the flow at all.

**After:**

```
A commissioned external audit identified approximately 94 changes across code, contrast and focus behaviour — contrast failures across multiple screens, and screen readers reading raw SVG markup aloud because alternative text hadn't been implemented properly, which left the flow unnavigable by screen reader.
```

**Notes.** *Not for publication.* **Do not add a WCAG AA conformance claim to the portfolio.** The portfolio has never made one, which is correct — conformance is an inference, not a certified result. If the standard is named anywhere, the deck's phrasing is the model: "WCAG 2.1 AA as the target." The measured contrast ratios on `design-system-reference.html` are fine as they are.

---

# 6. `hosted-pages.html` — STAR Task, remove "There was no brief"

The Console STAR Task opens "Nobody asked me to do this." Hosted Pages opens "There was no brief." Two instances of the same move in consecutive case studies reads as a personality trait rather than two facts.

**Keep the Console line unchanged.** It is the thesis of that case study. Change this one, where co-origination is a supporting detail.

**Delete the opening sentence** "There was no brief." The Task block then begins at "Working with the product manager…". No other change.

---

# 7. Structure — promote Design Systems, demote Brand & Website

`design-systems-np.html` already exists in the export, so this is promotion, not new work.

**Recommended Selected Work order:**

1. Yapily Hosted Pages
2. Yapily Console
3. HeadBox
4. Design Systems at Yapily

Move Brand & Website into secondary work.

**Notes.** *Not for publication.*

Design Systems is more distinctive for Lead and Principal roles: three systems built for genuinely different product contexts, a shared token architecture rather than a forced universal library, white-label constraints, accessibility encoded into tokens, and governance owned jointly with frontend. Lead it with the counter-intuitive decision — **one design system would have made all three products worse** — rather than with component production.

Brand & Website moving to fourth is not because it is weak. It now has a CEO mandate, a commercially defined objective and a met deadline. It moves because Design Systems is the more differentiated case for the roles being targeted. Four primary case studies with a fifth in secondary stays within the 3–5 range the GDS portfolio guidance recommends.

---

# 8. Attribution caveats — say it once, keep the one that matters

The following currently recur across case studies: "not a design result", "directional", "too early for adoption figures", "exact figures remain confidential", "platform-wide gain", "I can't attribute a clean percentage".

**The repetition is the problem, not the honesty.** State the attribution model once near the top of each Outcomes section, then present the design-linked figures cleanly without repeating it.

**One caveat must survive intact:** the 20% → 65–75% conversion figure genuinely is not a design result. Removing that qualification would not be confidence, it would be a false claim — and it is exactly what an experienced interviewer probes. The portfolio's credibility on every other number rests on you having been visibly careful with this one.

---

# 9. Still outstanding

From `claude/portfolio-gds-review.md`, unaffected by anything above.

| Priority | Item | Status |
|---|---|---|
| 2 | Plain English pass — unexplained cVRP, AIS, PIS, SCA, TAN, KYB, PSP | Not started |
| 3 | Text density on Hosted Pages narrative | STAR blocks help the skim; the prose still needs a pass |
| 6 | First person consistency — "I" vs "we" | Not started |
| 7 | PDF portfolio version | Not started |
| 8 | Proofread | Not started. The £150,288 CV error is what this catches. |

Also: **do not cite any yapily.com blog post as a source for a date.** The 2025 CMS migration appears to have restamped historic posts with the migration date — a 2019 funding announcement currently displays as 24 September 2025.

---

# Order of work

| # | Task | Effort |
|---|---|---|
| 1 | Publish as static HTML — §1 | The one that matters most |
| 2 | The three trapped facts — §3 | Three edits, highest value per keystroke |
| 3 | Research volume and method — §2 | Two edits |
| 4 | Accessibility audit scope — §5 | One edit |
| 5 | Remove "There was no brief" — §6 | One deletion |
| 6 | Promote Design Systems — §7 | Structural |
| 7 | Attribution pass — §8 | Editing |
| 8 | `hosted-pages.html` session count — §4 | **Blocked** |
