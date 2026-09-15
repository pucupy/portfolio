# Interview deck — corrections

For Claude Code. Applies to the 122-slide master (`Interview Presentation.dc.html` / `INTERVIEW-PRESENTATION.md`).
7 August 2026. Read `cross-document-conflicts.md` first — one item there blocks slides 23 and 33.

---

## THE ONE RULE

**Only text inside a fenced code block is slide or speaker-note content.** Everything else is instruction.

---

# 1. Slides 04 and 13 — the 85% is mislabelled

Confirmed 7 August 2026: the figure is **end-to-end authorisation**, from **platform analytics**, and is a **typical** value, not a peak.

This resolves the apparent contradiction with 65–75%. The two never conflicted — authorisation is whether someone successfully authorises at their bank; end-to-end conversion is the whole funnel around it. Authorisation sitting higher is expected. But both slides currently label it "app-to-app journeys" with no unit, beside a conversion figure, so a reader will assume it is a competing conversion number.

## 1.1 — Slide 13, third column

**Before:** `UK APP-TO-APP` / `Can exceed 85%`

**After:**

```
AUTHORISATION
~85% typical on UK app-to-app journeys
```

## 1.2 — Slide 04, second statistic

**Before:** `85%+` / `UK app-to-app journeys can exceed this`

**After:**

```
~85%
Typical end-to-end authorisation, UK app-to-app
```

## 1.3 — Slide 13 speaker notes, add

```
These measure different things. Authorisation is whether someone successfully authorises at their bank — around 85% typically, on UK app-to-app journeys. End-to-end conversion is the whole funnel around that, which is where the 65 to 75% comes from. Authorisation sits higher because it is one step, not the journey.
```

### Notes

*Not for publication.* "Can exceed" is now the wrong verb — it reads as a best case, which is both inaccurate and weaker. A typical 85% is a better fact than an occasional one.

**Be ready for the ownership question.** End-to-end authorisation on platform analytics is largely bank reliability, app-to-app coverage and API behaviour. It is a platform metric, not a design outcome. An experienced interviewer will ask how much of it is yours; volunteering that first is stronger than being asked, and consistent with how you already handle the conversion figure. **Do not present 85% as an achievement.**

---

# 2. Slide 15A — remove the repetition with Console

Slide 15A opens "There was no brief." Slide 35A opens "Nobody asked me to do this." Two instances of the same move, two case studies apart, reads as a personality trait rather than two separate facts.

**Keep 35A unchanged.** It is the thesis of the Console case — the design work *was* getting it prioritised. Change 15A, where co-origination is a supporting detail rather than the argument.

## 2.1 — Slide 15A heading

```
The product came out of the work, not a brief
```

## 2.2 — Slide 15A body

```
The idea of a widget and an embeddable checkout emerged from trying to solve the integration problem, not from a predefined roadmap item. The PM and I co-originated it.
```

## 2.3 — Slide 15A speaker notes

```
Working with the product manager, we tried the cheaper fix first — better guidance and documentation. It helped, and it didn't hold, because customers were still building bank plumbing instead of their own product. The idea of a widget and an embeddable checkout came out of that work rather than from anyone's roadmap. The two of us co-originated it.
```

## 2.4 — Slide 35A

**No change.** "Nobody asked me to do this. I decided it needed doing." stays exactly as written.

---

# 3. Slide 59A — speaker-note opener is a non-sequitur

The notes open *"This isn't only a Yapily pattern."* That sentence was written for a slide placed at the close of a Yapily-only presentation. Inside Deck 03, which is entirely HeadBox, it refers to nothing that came before it.

**Replace the first sentence with:**

```
I was asked to improve conversion on a two-sided marketplace where one in ten searches turned into anything. The brief assumed the marketplace needed to work harder.
```

Keep the remainder as written. If the same content is later added as a closing slide in a Yapily-only deck, restore the original opener there.

---

# 4. Slide 63 — add the method

Slide 63 correctly shows `45 / interviews`. It was the CV and portfolio that were understating this, not the deck.

Confirmed 7 August 2026: much of the host research was conducted **on site** — pubs, Kensington Palace and the O2.

**Add alongside the 45 figure:**

```
On site — from pubs to Kensington Palace and the O2
```

### Notes

*Not for publication.* Forty-five participants is a quantity. Sitting in a pub back room and then in an arena, asking the same questions, is a method — and it is the method that produced the insight the case study turns on. You do not conclude "hosts are the experts" from a video call where someone describes their job; you conclude it from watching them triage enquiries in the room they are trying to fill.

---

# 5. Slide 64 — caption the photo

Slide 64 already carries an image described as *"an interview in a white-linen event venue, a participant looking at the Enquiry Hub on a laptop"*.

The photograph currently proves something the slide never claims. **Caption it:**

```
Research on site, in the venues themselves
```

---

# 6. Slide 105 — the phrasing here is the model

Slide 105 says **"WCAG 2.1 AA as the target"**, and reports that an external provider identified approximately 94 changes across code, contrast and focus behaviour.

**No change needed.** This is correct: a target, never an achievement, plus a specific audit scope. Use this phrasing anywhere else the standard is named.

**The ~94 figure appears nowhere else** — not the CV, not the portfolio, not LinkedIn. With the WCAG AA conformance claim removed from those documents, the audit is what carries the accessibility section, and a number is far stronger than "a commissioned audit". See `cross-document-conflicts.md` §7.

---

# 🔴 7. Slides 23 and 33 — blocked

Both state "around 1,000 end-user sessions". `linkedin-profile.md` records the real figures as **thousands unmoderated and about 150 moderated**, and notes explicitly that 1,000 matches neither.

**Do not present these slides until the count is settled.** See `cross-document-conflicts.md` §1. Once confirmed, the likely replacement is:

```
around 150 moderated sessions and several thousand unmoderated, across usability, market coverage and live bank integrations
```

Change the deck, CV, portfolio and LinkedIn in the same pass.

---

# 8. Build the default presentation path

The 122-slide file is a master library, not a presentation. Build one canonical path of roughly 30–35 slides and keep the rest for Q&A.

**Recommended default:**

| Section | Slides | Count |
|---|---|---|
| Opening | 00, 01, 02, 03 | 4 |
| Hosted Pages | 13, 14, 15, 15A, 16, 17, 18, 19, 20, 23, 24, 26, 27, 29, 33, 34 | 16 |
| HeadBox | 59, 59A, 61, 63, 65, 67, 68, 69, 76, 77, 79 | 11 |
| Close | 118, 10, 11 | 3 |

**34 slides.** Hosted Pages and HeadBox rather than Hosted Pages and Console, because the two demonstrate different things — complex regulated systems and experimentation on one side, discovery and commercial impact with clean attribution on the other. Console stays in the library for questions about leadership, platform strategy and organisational change, where it is the strongest answer you have.

Keep as Q&A material: the full Console deck (35–57), Appendix A research (91–99), Appendix B systems (100–108), Appendix C guidance (109–112), Appendix D HeadBox artefacts (113–117), and Brand & Website (80–90).

---

# Order of work

| # | Task | Effort |
|---|---|---|
| 1 | Relabel the 85% as authorisation — §1 | Two slides, one speaker note |
| 2 | Slide 15A reframe — §2 | Three fields |
| 3 | Slide 59A opener — §3 | One sentence |
| 4 | Slide 63 method, slide 64 caption — §4, §5 | Two lines |
| 5 | Build the 34-slide default path — §8 | Structural |
| 6 | Slides 23 and 33 — **blocked** on §7 | Pending the session count |
