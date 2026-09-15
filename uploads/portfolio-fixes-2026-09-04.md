# Portfolio fixes — 4 September 2026

Target: `https://pucupy.github.io/portfolio/` (local source: `portfolio-export/html/`)

All strings below appear **exactly once** in their target file and are present as plain text in the raw HTML, so a literal find/replace works. Verify each match count is 1 before replacing.

Decisions applied here, confirmed 4 September 2026:

- Su4erheroes is the employer, Docomo Digital the principal client.
- Name is spelled **Velazquez**, no accent, everywhere.
- Research volume states **method only, with no session count anywhere**.

---

## Priority 1 — Remove the WCAG AA conformance claim

**This is the highest-risk item on the site.** AA conformance is an inference, not a certified audit result. It was removed from the CV and LinkedIn and survived here.

**File:** `research-practice-np.html`

Find:
```
I wrote the findings up as a document for the frontend team to work from, and the system now meets AA.
```

Replace:
```
I wrote the findings up as a document for the frontend team to work from.
```

The surrounding paragraph already carries the stronger evidence — a commissioned audit, contrast failures, alternative text implemented badly enough that a screen reader user could not navigate the flow, and a release postponed to fix it. That is a decision made under commercial pressure, which is what a panel is assessing. Conformance was only ever a compliance assertion.

---

## Priority 2 — Remove the session counts

Four documents currently give four different answers for the same 2023–2026 programme. The confirmed position is method only, no number.

### 2a. `research-practice-np.html` — stat panel

Find:
```
200+
```

Replace with the method statement, matching the panel's existing label pattern:
```
2023–2026
```

And change the accompanying label from:
```
end-user usability sessions, 2023–2026
```
to:
```
continuous end-user testing, moderated and unmoderated
```

### 2b. `research-practice-np.html` — body text

Find:
```
the 2023–2026 usability programme ran hundreds of sessions with ordinary people going through the act of connecting a bank account
```

Replace:
```
the 2023–2026 usability programme ran moderated and unmoderated sessions with ordinary people going through the act of connecting a bank account
```

### 2c. Check for survivors

After the two edits above, run across all pages:

```bash
grep -rniE "[0-9,]+\+? (end-user |usability )?sessions" *.html
```

Any remaining numeric session count must be removed or substantiated. Counts of *experiment variants* (`hosted-pages.html`: "hundreds of variants across bank selection, the QR handoff and embedded logins") are a different claim and are out of scope for this fix — but see the open question at the end of this document.

---

## Priority 3 — Name spelling

Replace the accented form with the unaccented form across all pages. Each page contains both: the accented display name and unaccented instances in the CV filename and the LinkedIn URL. A targeted replace of the accented string only is therefore safe.

```bash
cd portfolio-export/html
grep -rl 'Velázquez' . | xargs sed -i 's/Velázquez/Velazquez/g'
```

**Affected files and instance counts before the change:**

| File | Accented instances |
|---|---|
| `index.html` | 6 |
| `about.html` | 6 |
| `hosted-pages.html` | 5 |
| `headbox.html` | 5 |
| `console.html` | 5 |
| `su4erheroes.html` | 5 |
| `design-systems-np.html` | 5 |
| `research-practice-np.html` | 5 |
| `brand-website.html` | 5 |
| `creative-archive.html` | 5 |
| `interview-presentation.html` | 4 |
| `design-system-reference.html` | 2 |

Total 58. Verify afterwards that `Alejandro-Velazquez-CV.pdf` and `linkedin.com/in/velazquezalejandro` are untouched.

---

## Priority 4 — Internal contradiction on integration timeframe

`hosted-pages.html` states the figure three times and disagrees with itself once. The CV, LinkedIn and the other two instances all say four to six months.

**File:** `hosted-pages.html`

Find:
```
Customer integration effort dropped from around six months, sometimes over a year for complex cases, to two weeks.
```

Replace:
```
Customer integration effort dropped from four to six months, sometimes over a year for complex cases, to around two weeks.
```

The stat panel on the same page reads `integration effort, from ~6 months`. Change to:
```
integration effort, from 4–6 months
```

---

## Priority 5 — HeadBox date format on the index

`headbox.html` already carries the canonical `December 2018 – December 2019`. The index does not.

**File:** `index.html`

Find the case study 04 header value:
```
2018: 2019
```

Replace:
```
Dec 2018 – Dec 2019
```

Note: `2018: 2019` may appear in more than one context on this page. Confirm the match is inside the HeadBox card before replacing.

---

## Priority 6 — Su4erheroes on the index timeline

The 2012–2019 timeline block names two clients as if they were employers, which now contradicts the CV.

**File:** `index.html`

Find:
```
Lead and senior product design for consumer fintech, payments and marketplaces, Payango, Payfriendz, Docomo Digital, Caremoni, HeadBox.
```

Replace:
```
Lead and senior product design for consumer fintech, payments and marketplaces, Payango, Payfriendz, Su4erheroes, HeadBox.
```

The Su4erheroes card lower down already carries Docomo and Caremoni as client work, so nothing is lost.

---

## Priority 7 — Replace the served CV

`cv/Alejandro-Velazquez-CV.pdf` and `cv/cv.pdf` are byte-identical copies of the old CV. Replace **both** with the corrected PDF issued alongside this document, keeping both filenames — `index.html` and `about.html` link to `cv/Alejandro-Velazquez-CV.pdf`.

```bash
cp Alejandro-Velazquez-CV.pdf portfolio-export/html/cv/Alejandro-Velazquez-CV.pdf
cp Alejandro-Velazquez-CV.pdf portfolio-export/html/cv/cv.pdf
```

---

## Open questions — do not guess

These require an answer before the affected copy is correct. Each is currently inconsistent across documents.

### Q1. HeadBox first month: leads or enquiries?

| Source | Says |
|---|---|
| `index.html` | "More than 1,500 **enquiries** in the first month" |
| `headbox.html` | "More than 1,500 **leads** in the first month" |
| LinkedIn | "Over 1,500 **leads** in the first month" |

Two of three say leads, and the corrected CV uses leads. If that is right, change `index.html`:

Find: `More than 1,500 enquiries in the first month.`
Replace: `More than 1,500 leads in the first month.`

**Do not apply until confirmed** — an enquiry and a lead are different units in this product, and the distinction is exactly what a product interviewer would probe.

### Q2. When did you move to London?

`about.html` says: *"I moved to the US in January 2012 and spent two years there... I moved to London in January 2014."*

The CV and LinkedIn both place you at Payfriendz in London from October 2013. That is three months where the two accounts disagree about which country you were in.

Either the Payfriendz start was remote and should say so, or the January 2014 date in `about.html` is wrong. Both are easy fixes; guessing which is not acceptable.

### Q3. Company name — Su4erheroes or Su4rheroes?

The portfolio uses **Su4erheroes**. LinkedIn uses **Su4rheroes**. One is wrong. Check the Companies House registration and make all four documents match it.

### Q4. "Hundreds of variants"

`hosted-pages.html` claims hundreds of experiment variants across bank selection, the QR handoff and embedded logins between 2023 and 2026. This has not been substantiated anywhere. It is a defensible claim if the experimentation pipeline's records support it. If they don't, replace with an unquantified statement of method.

---

## Known technical issue, unchanged

Every case study page still requires JavaScript to render — the content sits inside a `__bundler/template` payload and the no-JS fallback shows only "This page requires JavaScript to display." The bundle is 46 MB.

This is not a content issue, so it is out of scope here, but it remains the highest-value technical task on the site: anything that reads the page without executing JavaScript — some ATS previewers, link unfurlers, and search crawlers — sees nothing.
