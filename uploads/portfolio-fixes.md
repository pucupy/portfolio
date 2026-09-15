# Portfolio fixes

Four things. All find-and-replace.

---

## 1. Home — opening sentence is broken

The em dash became a comma, so it now says the platform *is* Hosted Pages.

**Find:**

> I joined Yapily in 2020 as its first designer and now lead design across its open banking platform, Hosted Pages, the fastest route onto the platform, a bank-connection and consent flow customers integrate in a fortnight instead of building their own; the customer console; and the design systems underneath them.

**Replace:**

> I joined Yapily in 2020 as its first designer and now lead design across its open banking platform — Hosted Pages, the fastest route onto it, a bank-connection and consent flow customers integrate in a fortnight instead of building their own; the customer console; and the design systems underneath them.

---

## 2. Home — conversion figure has no caveat

The case study handles this properly. The card doesn't, and the card is what gets skimmed.

**Find:**

> End-to-end conversion grew from roughly 20% in the early beta to approximately 65–75%, varying by use case and market.

**Replace:**

> End-to-end conversion grew from roughly 20% in the early beta to approximately 65–75%, varying by use case and market. A platform-wide gain, not a design result — see the case study.

---

## 3. Replace `cv/cv.pdf`

The published file still says £150,288. Your own deck rules say £150,228.

Use `Alejandro-Velazquez-CV.pdf` from this export. Also has "co-founded", UBA 1999–2002, and Su4erheroes as the employer.

---

## 4. Two things to remove

**Phone number** — `api.whatsapp.com` and `wa.me` links carrying `447950452927`, on all eleven pages. Your email is next to it and does the same job.

**`design-system-instructions.html`** — nothing links to it any more, but it's still reachable by direct URL and it isn't in robots.txt. Delete it or add a Disallow line.

---

## One decision, not a fix

Home → Other experience lists **Docomo Digital** and **Su4erheroes** as separate employers. Your CV and LinkedIn say Su4erheroes was the employer and Docomo the client. Either merge Docomo under Su4erheroes on the site, or split them on the CV. Anyone reading both will notice.
