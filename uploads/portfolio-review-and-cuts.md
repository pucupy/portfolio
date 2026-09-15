# Portfolio review — length, balance and what to cut

Reviewed against `PORTFOLIO-CONTENT.md` (21,075 words) and `Portfolio.zip` (24MB, 8 pages plus 2 embeds).

---

## Short answer

**Yes, it's too long — but the problem is imbalance, not total volume.**

| Page | Words | Read time |
|---|---|---|
| Console | **5,340** | ~22 min |
| Hosted Pages | **4,579** | ~19 min |
| Home | 2,327 | ~9 min |
| HeadBox | 1,924 | ~8 min |
| Research practice | 1,647 | ~7 min |
| About | 690 | ~3 min |
| **Design systems** | **751** | ~3 min |
| Creative archive | 421 | ~2 min |

A hiring manager gives a portfolio **3–8 minutes total**, and reads one case study properly at most. Console alone is a 22-minute read. The two largest are **seven times** the length of the design systems page.

Nobody reads 5,000 words about a console. They read the first screen and decide.

---

## The bigger problem: you cut the wrong page

Design systems went from ~1,900 words to **751** — and the material that went was the strongest in the portfolio:

- **What we deliberately didn't share** — lime too loud for six-hour sessions, eight greys for dense data versus three for marketing, gradients in Mark so console surfaces stay flat. Reasoned exclusions are rare and they're what separates someone who has *run* a system from someone who has *made* one.
- **Custard shares components but inherits no brand** — the architectural claim, and the thing that explains why the configurator works.
- **The three-tier structure and the delete-redundant-tokens rule.**
- **Status colours as pairs, mint as dark-mode-only** — accessibility encoded in tokens rather than checked afterwards.

What's left is three paragraphs describing three systems. That's a page anyone could write. Meanwhile the Console keeps 5,340 words, much of which is history.

**Recommendation: rebalance rather than cut further.** Take ~1,000 words out of Console, put ~600 back into design systems. Target every case study at 1,200–1,800.

---

## Two things to fix before anything else

### 1. `design-system-instructions.html` is published

It's live in the export, 0.5MB, and it's a **working brief** — "a standing brief for creating, reviewing or extending a product design system… the decisions I want made the same way every time."

It isn't linked from the nav, so nobody will land on it by accident. But it's crawlable, and it's internal working material — the equivalent of publishing your notes. Either delete it, or `noindex` it and treat it as a deliberate extra.

### 2. Two different design-system artefacts, no explanation

The export contains both:

- `/design-system/` — a hand-coded system with real token CSS files
- `/embeds/design-system-reference.html` — the Claude Design reference

A reader who finds both won't know which is the real one. Pick the canonical artefact, link only that, and delete or clearly label the other.

---

## Weight

24MB across eight pages. `console.html` alone is **5.21MB**, `index.html` 3.67MB, `creative-archive.html` 4.17MB.

The README acknowledges the tradeoff, and it's defensible for a self-contained static site. But a hiring manager opening this on mobile data waits several seconds per page. If there's a quick win, it's the fonts — several pages bundle seven woff2 files where one or two would do.

---

## What to cut, by page

### Console — remove ~1,000 words

The history is the culprit. You merged it into one narrative, which was right, but it's still five dated beats with full detail each.

- **Compress 2020 and 2022–2025.** Keep 2021 (it's the research chapter) and 2025 (it's the pivot). The other two can be a paragraph each.
- **"Mapping it before changing it"** is the longest section and it's research evidence rather than argument. Cut to half; the service map image does the work.
- **"What the Console does" and "The beta, screen by screen"** overlap. Merge.

Keep untouched: the hackathon, the four-times pattern, the decisions, the status split.

### Hosted Pages — remove ~800 words

- **The variant descriptions** under Variant 1 and Variant 2 repeat what the surrounding paragraph already said. Cut to captions.
- **Language assumptions** is three paragraphs for one decision. One paragraph.
- With the payment-journey embed going in, several screen descriptions become redundant — the reader can see them.

### Home — remove ~600 words

2,327 words on a landing page is too many. The five featured cards now carry role/period/status/outcome plus 100+ words of prose each. **Cut each card to its metadata row plus two sentences.** The card's job is to make someone click, not to substitute for the case study.

### Design systems — add ~600 words

Restore, in priority order: the exclusions list, the Custard component-sharing paragraph, the status-colour pairing, and the three-tier delete rule.

---

# CV — no changes needed

Three pages, 1,900 words, PDF with metadata, ATS-clean. It's the tightest artefact you have and it doesn't have the length problem.

**One optional addition.** If the design systems page gets its architecture material back, the CV line could carry the same distinction — it currently says "three-tier token layer," which is right.

**Still outstanding**, unchanged from before:
- Client-name clearance (Google, Adyen, Intuit, Ant Financial, Revolut)
- The regulated-entity wording
- Whether the design-system efficiency numbers (46 → 16+11) are counted or estimated

---

# Slide deck — one change worth making

28 slides is long for most interview slots. Time it against what you're actually given — if it's 20 minutes plus questions, you need roughly 15 slides, not 28.

**Suggested cut set**, in the order I'd drop them:

1. **The 2021 Console redesign detail** — interesting, but it's the third act of a story that already has two.
2. **One of the two Hosted Pages decision slides** — bank selection and the decoupled handoff make the same structural point.
3. **The design systems governance detail** — keep the three-systems slide, drop the process breakdown.
4. **The creative archive slide**, if there is one — it's a portfolio page, not a talking point.

**Keep as the spine:** open → Hosted Pages problem → two decisions → outcomes with the honest caveat → Console problem → hackathon → the bet → status → design systems → HeadBox inversion → through-line → close.

That's about 15 and it tells the whole story.

**One addition worth considering:** you now have two live interactive artefacts. A single slide that says *"these are browsable — the payment journey and the design system reference are both live"* gives an interviewer something to open afterwards, which is worth more than another content slide.

---

## What's genuinely good, and shouldn't change

Saying this because cut lists read as though everything is wrong.

- **The four-times cardinality pattern.** The most senior thing in the portfolio and the hardest to fake.
- **The honesty about attribution** — "I can't give you a clean percentage for design's share, and I'd distrust anyone who could." Rare, and it makes every number you *do* claim more credible.
- **The failure states in the payment journey.** Most portfolios show the happy path. Yours shows the retry count and the bank that never answers.
- **HeadBox's persistence claim** — the wizard still being the front door seven years later is checkable in a browser, which almost nothing in a portfolio is.
- **"Secure page by Yapily" — the one place our name has to appear.** Turns an apparent inconsistency into evidence you understand the regulatory constraint.
