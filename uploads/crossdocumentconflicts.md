# Cross-document conflicts — read this first

7 August 2026. Surfaced by comparing `linkedin-profile.md` against the CV, portfolio and 122-slide deck.

**None of these are style questions. Each is one fact stated differently in two or more documents you send to employers.** A recruiter comparing your CV, portfolio and LinkedIn — which is a normal thing to do — will find them.

---

# 🔴 1. The research volume — I need one answer

**This is the most urgent item, because I put a number into your CV today that your own LinkedIn document says is wrong.**

| Source | Claim |
|---|---|
| Deck slide 23 and 33 | "around 1,000 end-user sessions, 2023–2026" |
| CV v7 (built today) | "around 1,000 end-user sessions" |
| Portfolio `hosted-pages.html` | "Hundreds" |
| **`linkedin-profile.md`** | **"Your real figures are thousands unmoderated and about 150 moderated. 1,000 matches neither."** |

If the LinkedIn document is right, "around 1,000" is wrong in both directions at once — it understates the unmoderated work by a large margin and overstates the moderated work by roughly seven times.

**What I have done in the meantime.** CV v8, delivered alongside this document, states the method with no number:

> a 2023–2026 programme of moderated and unmoderated end-user testing across usability, market coverage and live bank integrations, with real people connecting real accounts

That is true under every version of the figures, so the CV is safe to send today.

**What I need.** The actual moderated and unmoderated counts, or your confirmation that "about 150 moderated and several thousand unmoderated" is right. Once settled, this is the strongest available formulation:

```
around 150 moderated sessions and several thousand unmoderated, across usability, market coverage and live bank integrations
```

Two specific numbers with different methods attached is more credible than one round number, and it is a bigger claim than "1,000". It also survives the arithmetic challenge that made you soften this to "hundreds" in the first place.

**Then change it in four places at once:** CV, portfolio (`hosted-pages.html`, two locations), deck (slides 23 and 33), LinkedIn.

---

# 🔴 2. WCAG AA is still claimed on LinkedIn

`linkedin-profile.md`, Yapily experience block:

> Accessibility to WCAG AA.

You confirmed today that AA conformance is an inference, not a certified audit result. It has been removed from the CV and the deck. **It is still on LinkedIn.**

**Replace with:**

```
A commissioned external audit identified approximately 94 changes across code, contrast and focus behaviour, and found the flow wasn't navigable by screen reader. We postponed a release to fix it rather than ship and correct later.
```

---

# 3. HeadBox dates — three documents, three answers

| Source | Dates |
|---|---|
| CV | 2018 – 2019 |
| Portfolio `headbox.html` | Period: 2019 |
| Portfolio `index.html` | 2018 — 2019 |
| `linkedin-profile.md` | Jan 2019 – Jan 2020 |
| Deck slide 58 | 2018 — 2019 |
| Deck slide 59A | "At HeadBox in 2019" |

**Pick one and apply it everywhere.** LinkedIn is the one an employer can check against a reference, so if Jan 2019 – Jan 2020 is right, everything else is wrong.

---

# 4. Career start year — 2005 or 2008?

| Source | Claim |
|---|---|
| CV summary | "20+ years" (implies 2005–2006) |
| CV Early Career | 2005 – 2008 |
| Portfolio About | "I have worked in digital product design since 2005" |
| Deck slide 00 notes | "I have worked in digital product design since 2005" |
| `linkedin-profile.md` About | "Designing professionally since 2008" |

Both can be true if 2005–2008 was freelance or part-time and 2008 marks the first full-time role — but the documents don't say that, so they read as a contradiction. **Decide which start year you stand behind, then make the others consistent with it.** If the distinction is real, state it once: "designing since 2005, professionally full-time since 2008."

---

# 5. Su4erheroes vs Docomo Digital — the CV names the wrong employer

| Source | Claim |
|---|---|
| CV | **Docomo Digital** — Senior Product Designer (Contract), Nov 2016 – Dec 2018 |
| Portfolio | Su4erheroes, 2016 — 2018, co-founded consultancy; "the principal client was Docomo Digital" |
| `linkedin-profile.md` | **Su4erheroes** — Product Design Lead, Nov 2016 – Dec 2018. "Su4erheroes was the employer, Docomo the client." Company director from January 2018. |

**Two of your three documents agree that Su4erheroes was the employer.** The CV names the client instead, and omits that you co-founded a company and were a director of it — which is a stronger fact than a contract role.

**Recommended CV replacement**, drawn from `linkedin-profile.md`. Not applied to v8 — this changes what your CV claims about your employment history and should be your decision:

```
Product Design Lead — Co-founder
Su4erheroes — London — product design consultancy · Nov 2016 – Dec 2018

Co-founded a product design consultancy with former Payfriendz colleagues; company director from January 2018.

Principal client Docomo Digital. Led design on NOMO, a payout platform built so marketplaces could hold third-party money without becoming a licensed payment institution — a licence costing upwards of €200,000 and taking up to 18 months. Four surfaces for four audiences: an internal admin console for onboarding partners and their compliance documents, a dashboard for marketplace owners, a mobile app for the sellers being paid, and API documentation.

Also delivered a cashback app for Huawei customers, and Caremoni, NHS personal health budget payments with a social enterprise, taken to MVP.
```

If applied, the separate Caremoni entry currently on the CV should be folded in or kept as a client line rather than a second employer.

---

# 6. There is a 17-month gap on the CV

The CV runs **Globant, Sep 2008 – Aug 2011**, then **Payango, Jan 2013**. Nothing between.

`linkedin-profile.md` fills it: **Andimol — Designer, Aug 2011 – Nov 2012, Argentina then remote from the USA.** Your portfolio About agrees: *"I moved to the US in January 2012 and spent two years there, finishing the Andimol consultancy work."*

The CV does list Andimol, but inside "Early Career 2005 – 2008" — so the 2011–2012 period is missing entirely.

**Unexplained gaps get asked about.** Add:

```
Designer
Andimol — Argentina, then remote from the USA · Aug 2011 – Nov 2012

Interaction and UX consultancy work, continued remotely after relocating to the United States in January 2012.
```

---

# 7. Orphan facts — good material in only one document

Each of these appears in exactly one place. All are usable and none are currently doing any work.

| Fact | Currently only in | Move to |
|---|---|---|
| ~94 changes identified by the accessibility provider | Deck slide 105 | CV, portfolio, LinkedIn |
| Design systems built against by ~38 engineers and 4 designers | `linkedin-profile.md` | CV, portfolio, deck |
| Spreadsheet prototype: 20 venues → 18 confirmed events | Deck slide 69 | Portfolio, LinkedIn |
| Brief completion ~50% → ~75% | Deck slide 71 | Portfolio |
| On-site research: pubs, Kensington Palace, the O2 | Confirmed today, nowhere written | Portfolio, deck |
| NOMO's licence rationale (€200k, up to 18 months) | `linkedin-profile.md` | CV, if Su4erheroes is added |
| Education end year: 2002 (CV) vs 2004 (LinkedIn profile) | Conflict | Fix LinkedIn to 2002 |

---

# Priority

| # | Item | Why |
|---|---|---|
| 1 | Settle the research volume (§1) | A number I put in your CV today may be wrong; v8 removes it pending your answer |
| 2 | Remove WCAG AA from LinkedIn (§2) | Unsupported conformance claim, live now |
| 3 | Fix HeadBox dates (§3) | Checkable against a reference |
| 4 | Decide the Su4erheroes framing (§5) and close the 2011–2012 gap (§6) | Employment history, gets asked about |
| 5 | Career start year (§4) | Cosmetic until someone notices |
| 6 | Redistribute the orphan facts (§7) | Free evidence already written |
