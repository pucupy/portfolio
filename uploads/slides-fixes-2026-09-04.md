# Interview presentation fixes — 4 September 2026

Target: `INTERVIEW-PRESENTATION.md` (1,798 lines, exported 7 August 2026 from `Interview Presentation.dc.html`). Same file exists at `portfolio-export/md/` and `portfolio-export/html/` — **apply to both**.

Decisions applied here, confirmed 4 September 2026:

- Su4erheroes is the employer, Docomo Digital the principal client.
- Name is spelled **Velazquez**, no accent, everywhere.
- Research volume states **method only, with no session count anywhere**.

Line numbers refer to the 7 August export and will shift as edits are applied. Match on the string, not the line number.

---

## Priority 1 — Remove the session and bank counts

The deck is the only document still carrying these figures. The CV and LinkedIn state method only; the portfolio is being changed to match. "~1,000" and the portfolio's "200+" are a factor of five apart, and "~20 banks" appears in no other document at all.

**These two slides should not be presented until this is applied.**

### 1a. Slide body (~line 383)

Find:
```
Coverage, speed and error rates. Part of ~1,000 end-user sessions, 2023–2026, across ~20 banks.
```

Replace:
```
Coverage, speed and error rates. Part of the 2023–2026 end-user testing programme, moderated and unmoderated.
```

### 1b. Speaker notes (~line 388)

Find:
```
Early rounds were often 10 to 15 users in a market. Around 1,000 end-user sessions ran between 2023 and 2026, moderated and unmoderated, testing usability, market coverage and live bank integrations with real people connecting real accounts.
```

Replace:
```
Early rounds were often 10 to 15 users in a market. The programme ran between 2023 and 2026, moderated and unmoderated, testing usability, market coverage and live bank integrations with real people connecting real accounts.
```

The rest of that note — qualitative work discarding weak ideas quickly, stronger concepts moving into percentage rollouts and live experiments — is unaffected and should stay.

**"10 to 15 users in a market" is retained** because it describes round size rather than programme volume, and it is the kind of figure a researcher can defend. If it is not substantiated either, remove it in the same pass.

---

## Priority 2 — Remove the unsubstantiated release delay

**Slide ~line 482**

Find:
```
We delayed the release by two sprints
```

Replace:
```
We postponed the release to fix it
```

"Two sprints" has been flagged as unsubstantiated since August and has never been evidenced. The decision itself — postponing a release under commercial pressure rather than shipping and correcting later — is the point of the slide and survives intact without a duration attached. If sprint records confirm two sprints, restore it.

---

## Priority 3 — Su4erheroes replaces Docomo Digital as the employer

**~line 46**

Find:
```
Payango, Payfriendz, Docomo Digital, Caremoni, HeadBox.
```

Replace:
```
Payango, Payfriendz, Su4erheroes, HeadBox.
```

Docomo Digital and Caremoni were both Su4erheroes client engagements, not employers. This now matches the corrected CV, LinkedIn and the portfolio.

If any slide elsewhere describes the 2016–2018 period, it should read **Product Design Lead and Co-founder, Su4erheroes, Nov 2016 – Dec 2018, company director from January 2018**, with Docomo Digital named as the principal client.

---

## Priority 4 — Name spelling

Three instances of the accented form: the export header (~line 2), the title slide (~line 12), and the closing slide (~line 187).

```bash
sed -i 's/Velázquez/Velazquez/g' INTERVIEW-PRESENTATION.md
```

Verify `linkedin.com/in/velazquezalejandro` (~line 190) is untouched — it is already unaccented.

---

## Priority 5 — HeadBox dates

**~line 923**

Find:
```
LEAD PRODUCT DESIGNER · 2018 — 2019 · LONDON
```

Replace:
```
LEAD PRODUCT DESIGNER · DEC 2018 – DEC 2019 · LONDON
```

Canonical dates are December 2018 – December 2019, already correct on the CV, LinkedIn and `headbox.html`. The deck is the last document carrying the loose form.

The speaker note at ~line 953 reading "At HeadBox in 2019" is accurate and needs no change.

---

## Verified correct — do not alter

Recorded so a later pass does not undo them.

| Item | Location | Status |
|---|---|---|
| £150,228 | ~lines 125, 933, 1213 | Correct. Arithmetic checks: 117 × £1,284 = £150,228 |
| 45 customers and non-customers, three rounds | ~line 1016 | Correct, matches CV, LinkedIn and portfolio |
| "WCAG 2.1 AA **as the target**" | ~line 1614 | Correct phrasing — a target, never an achievement. Use this wording anywhere else the standard is named |
| ~94 changes across code, contrast and focus behaviour | ~lines 1618, 1620 | Correct, and now also on the CV |
| ~10% marketplace conversion, 90% drop-off | ~lines 974–980 | Consistent with `headbox.html` |
| Roughly 80% of the customer base as smaller customers | ~line 658 | Consistent with `hosted-pages.html` |

---

## Still outstanding from the August audit

### Do the stat values render?

Slides 04, 16, 33, 59, 61 and 106 were reported as exporting with bare `%`, `×` and `+` where a number should be. Either the deck is broken or the export is lossy. **Check this in the live deck before presenting**, not in the Markdown export — the export cannot tell you which of the two it is.

### Yapily start date

Yapily's HR draft reference gives **2 December 2019**. The CV, LinkedIn, portfolio and deck all say January 2020. A background check verifies against the reference, not against your documents.

The likely explanation is that 2 December is a contract or offer date and 7 January the first working day — but that must be confirmed with Yapily HR rather than assumed. If HR's date stands, every document needs revisiting, and the HeadBox end date of December 2019 becomes an overlap.

**This is the only open item that could contradict a formal reference, which makes it the most consequential one left.**

### Build the default presentation path

The 122-slide file is a master library, not a presentation. The recommended 34-slide default path — Opening, Hosted Pages, HeadBox, Close — was specified in August and has not been built. Everything else stays available for Q&A.
