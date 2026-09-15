# Interview deck — complete outstanding work

**This file supersedes** `deck-update.md`, `deck-corrections.md`, `corrections-2026-08-07b.md`, `research-volume-final.md` and `dates-final.md` for deck purposes. Everything still outstanding is here.

Applied against the 122-slide master (`Interview Presentation.dc.html` / `INTERVIEW-PRESENTATION.md`) · 7 August 2026
**All facts confirmed. Nothing is blocked.**

---

## THE ONE RULE

**Only text inside a fenced code block is slide or speaker-note content.** Everything else is instruction.

---

## Already done — do not redo

Slides **15A**, **35A** and **59A** exist and carry the origination facts. Only 15A and 59A need edits below. **35A — "Nobody asked me to do this. I decided it needed doing." — stays exactly as written.**

---

# 1. Slides 04 and 13 — the 85% is mislabelled 🔴

Confirmed: it is **end-to-end authorisation**, from **platform analytics**, and a **typical** value.

This resolves the apparent clash with 65–75% — the two measure different things. But both slides currently label it "app-to-app journeys" with no unit, beside a conversion figure, so a reader assumes it is a competing conversion number.

## 1.1 — Slide 13, third column

```
AUTHORISATION
~85% typical on UK app-to-app journeys
```

## 1.2 — Slide 04, second statistic

```
~85%
Typical end-to-end authorisation, UK app-to-app
```

## 1.3 — Slide 13 speaker notes, add

```
These measure different things. Authorisation is whether someone successfully authorises at their bank — around 85% typically, on UK app-to-app journeys. End-to-end conversion is the whole funnel around that, which is where the 65 to 75% comes from. Authorisation sits higher because it is one step, not the journey.
```

**Note.** *Not for publication.* "Can exceed" is now wrong — it reads as a best case, which is inaccurate and weaker. A typical 85% is a better fact than an occasional one.

**Be ready for the ownership question.** End-to-end authorisation on platform analytics is largely bank reliability, app-to-app coverage and API behaviour. It is a platform metric, not a design outcome. Volunteering that is stronger than being asked, and consistent with how you already handle the conversion figure. **Do not present 85% as an achievement.**

---

# 2. Slide 15A — remove the repetition with 35A

## Heading

```
The product came out of the work, not a brief
```

## Body

```
The idea of a widget and an embeddable checkout emerged from trying to solve the integration problem, not from a predefined roadmap item. The PM and I co-originated it.
```

## Speaker notes

```
Working with the product manager, we tried the cheaper fix first — better guidance and documentation. It helped, and it didn't hold, because customers were still building bank plumbing instead of their own product. The idea of a widget and an embeddable checkout came out of that work rather than from anyone's roadmap. The two of us co-originated it.
```

---

# 3. Slide 23 — remove the session count

## 3.1 — The Unmoderated column

```
Unmoderated
Coverage, speed and error rates. Part of a continuous 2023–2026 programme testing usability, market coverage and live bank integrations.
```

## 3.2 — Speaker notes

```
Early rounds were often 10 to 15 users in a market. The programme ran continuously between 2023 and 2026, moderated and unmoderated, testing usability, market coverage and live bank integrations with real people connecting real accounts. Qualitative work discarded weak ideas quickly. Stronger concepts moved into percentage rollouts and live experiments.
```

**Note.** *Not for publication.* Decision: no session counts anywhere. Every figure in circulation contradicted another — "hundreds", "roughly 1,000", "thousands plus about 150 moderated", and a 70/30 split that fitted none of them. The "~20 banks" figure goes with it; if substantiable it can return, since coverage is the more interesting claim.

**Slide 33 needs no change** — it carries no session count. An earlier document said otherwise; that was wrong.

---

# 4. Slide 58 — HeadBox dates

Confirmed: started at Yapily 7 January 2020, having spent the previous year at HeadBox. Contiguous with Su4erheroes ending Dec 2018.

```
LEAD PRODUCT DESIGNER · DEC 2018 – DEC 2019 · LONDON
```

Slide 59A's "At HeadBox in 2019" is accurate — no change.

---

# 5. Slide 59A — speaker-note opener

The notes open *"This isn't only a Yapily pattern."* That was written for a slide at the close of a Yapily-only presentation. Inside Deck 03, which is entirely HeadBox, it refers to nothing.

**Replace the first sentence with:**

```
I was asked to improve conversion on a two-sided marketplace where one in ten searches turned into anything. The brief assumed the marketplace needed to work harder.
```

Keep the remainder.

---

# 6. Slides 63 and 64 — the research method

Slide 63's `45 / interviews` is correct — it was the CV and portfolio that were understating. Confirmed: much of the host research was conducted on site, in pubs, Kensington Palace and the O2.

## 6.1 — Slide 63, add alongside the 45 figure

```
On site — from pubs to Kensington Palace and the O2
```

## 6.2 — Slide 64, caption the existing photo

```
Research on site, in the venues themselves
```

**Note.** *Not for publication.* Slide 64 already shows an interview in an event venue. The photograph currently proves something the deck never claims. Forty-five participants is a quantity; sitting in a pub back room and then in an arena asking the same questions is a method — and it is the method that produced the insight the case study turns on.

---

# 7. Slide 105 — no change, and propagate

Slide 105 says **"WCAG 2.1 AA as the target"** and reports approximately 94 changes across code, contrast and focus behaviour. Both correct: a target never an achievement, plus a specific audit scope. **Use this phrasing anywhere else the standard is named.**

The ~94 figure appears nowhere else. It belongs in the CV, portfolio and LinkedIn, where the WCAG AA conformance claim has been removed and the audit is now what carries the accessibility section.

---

# 8. Build the default presentation path

The 122-slide file is a master library, not a presentation.

| Section | Slides | Count |
|---|---|---|
| Opening | 00, 01, 02, 03 | 4 |
| Hosted Pages | 13, 14, 15, 15A, 16, 17, 18, 19, 20, 23, 24, 26, 27, 29, 33, 34 | 16 |
| HeadBox | 59, 59A, 61, 63, 65, 67, 68, 69, 76, 77, 79 | 11 |
| Close | 118, 10, 11 | 3 |

**34 slides.**

Hosted Pages and HeadBox rather than Hosted Pages and Console, because they demonstrate different things: complex regulated systems and experimentation on one side, discovery and commercial impact with clean attribution on the other. Both Yapily case studies end in beta or shared credit; HeadBox ends in shipped revenue.

**Keep for Q&A:** Console (35–57), Appendix A research (91–99), Appendix B systems (100–108), Appendix C guidance (109–112), Appendix D HeadBox artefacts (113–117), Brand & Website (80–90).

Console is the strongest answer you have to questions about leadership, platform strategy and organisational change — it just doesn't need presenting unprompted.

---

# Order of work

| # | Task | Section | Effort |
|---|---|---|---|
| 1 | Relabel the 85% as authorisation | §1 | Two slides, one note |
| 2 | Slide 23 session count | §3 | Two fields |
| 3 | Slide 15A reframe | §2 | Three fields |
| 4 | Slide 58 dates | §4 | One line |
| 5 | Slide 59A opener | §5 | One sentence |
| 6 | Slides 63 and 64 method | §6 | Two lines |
| 7 | Build the 34-slide default path | §8 | Structural |
