# Skill: Build a Yapily demo from a dropped screen

Use this when someone wants a prospect-ready Yapily demo and gives you **a screenshot of the
prospect's app or checkout** (or just their brand). The point of the skill: the merchant screen is
the only thing that changes. Everything after it — Yapily Connect and the bank — is already
designed, already compliance-approved, and must be reused as-is.

**Start from `Demo Template.dc.html`.** Copy it to `<Prospect> — <Flow>.dc.html` and edit the copy.
Never rebuild the Connect screens from scratch.

---

## 1. What you need before building

| Input | Required | If missing |
| --- | --- | --- |
| Merchant screen (screenshot / logo) | yes | Ask. A logo + brand colour is enough for a placeholder shell. |
| Flow | yes | Ask, or infer from the sector (see §3). |
| Region | yes | UK by default. EU changes the legal entity and currency. |
| Bank to demo | no | Use a bank the prospect's customers actually use; NatWest/Barclays/HSBC for UK, Sparkasse/ING/Commerzbank for DE. |
| Amount, payee name, reference | no | £10.00 / the merchant's name / `12345678`. |

Drop the screenshot into the template's first screen — it is an `<image-slot>`, so the user can drag
it in themselves and it persists.

---

## 2. The three sides — always label them

Every Yapily demo is three parties, and demos fall apart when they get mixed up. Keep the labels in
the step rail:

- **Merchant side** — the prospect's own app. Their brand, their layout. This is the dropped screen.
- **Yapily side** — Yapily Connect / Hosted Pages. Merchant's wordmark in the header, everything
  else is Yapily's design. Browser chrome (`payments.yapily.co…`) visible.
- **Bank side** — the bank's own app or web page. The bank's brand, no Yapily anywhere.

---

## 3. Flow sequences

Pick one and build exactly these screens. `M` = merchant side, `Y` = Yapily side, `B` = bank side.

**Single payment — redirect (default, UK & EU)**
`M` checkout → `Y` choose bank → `Y` review payment → `Y` connecting → `B` login (SCA) →
`B` approve payment → `Y` payment initiated → `M` order confirmed

**Single payment — app-to-app (mobile)**
As above, but the bank step is the bank's *native app* taking over the whole screen (native status
bar, biometric sheet), then straight back to `Y` payment initiated.

**Single payment — embedded / hosted pages**
`M` checkout → `Y` choose bank → `Y` review → `Y` login (IBAN entry) → `Y` confirm identity
(SMS / ChipTan / Push OTP) → `Y` confirmation code → `Y` payment initiated. No bank-side screens —
that is the whole point of embedded.

**Pay by link**
`M` email or invoice → `Y` payment request landing (amount, due date, support block) →
`Y` choose bank → `B` bank login page in the browser → `B` confirm-in-app, phone slides in alongside
for Face ID → `B` approve on phone →
`Y` all done (phone) → `Y` payment initiated (desktop). Show desktop and phone side by side.

**cVRP — mandate setup**
`M` payment options → `M` set up payments (limits, collection date, frequency) → `Y` set up
recurring payments (From / To / per-payment limit / periodic limit / valid to) → `B` biometric login
→ `B` summary with limits → `Y` all done → **`1 month later` interstitial** → `M` payment summary
(first collection taken, next payment date, cancel + settings).

**cVRP — one-click repeat payment**
`M` amount entry → `M` processing → `M` success + bank push notification. No consent screens: the
mandate already exists. This is the payoff screen — always pair it with the setup flow.

**cVRP — cancellation**
`M` manage recurring payments → `M` confirm cancellation → `M` permission cancelled. Show it; buyers
ask "how do they cancel" every time.

**Data / AIS account connection**
`M` prompt to connect → `Y` choose bank → `Y` connect your account (lists exactly what is shared) →
`B` login → `B` set up account access (account picker, balances) → `Y` waiting for bank →
`Y` account connected → `M` result (verified / insights / decision).

**Data Plus (enrichment)**
Not a consent flow — a before/after. Raw bank description on one side, clean merchant name, logo,
category, processor and recurrence on the other, plus a derived insight panel (affordability,
subscriptions, spending by category).

**Bulk payments**
`M` upload / review batch → `Y` choose bank → `Y` consent (per-payment list) → `B` login →
`B` approve → `Y` initiated → `M` batch status.

---

## 4. Rules that are not negotiable

**Don't restyle the Yapily or bank screens.** Change the merchant wordmark in the Connect header and
the accent on the primary button. Nothing else. Layout, type, spacing and copy stay.

**Consent copy is verbatim.** Single payment:

> By clicking "Accept and Continue" you agree to **Yapily Connect Ltd** initiating this payment and
> accept its **Terms & Conditions** and **Privacy Policy**.

cVRP:

> By clicking "Accept and Continue", you agree to **Yapily Connect Ltd** initiating payments within
> the agreed parameters and accept its **Terms & Conditions** and **Privacy Policy**.

AIS:

> By clicking "Accept and Connect", you agree to **Yapily Connect Ltd** accessing your bank data and
> its **Terms & Conditions** and **Privacy Policy**.

Links point to `yapily.com/legal/end-user-terms` and `yapily.com/legal/privacy-policy`.

**Entity by region.** UK → **Yapily Connect Ltd**. EU → **Yapily Connect UAB**. Currency follows:
£ / €.

**One bank per journey.** The same bank name on the review screen, the loader, the login and the
success screen. Mismatches are the most common defect in demos.

**The consent screen must show** payee name, amount + currency, and (where used) the reference —
before any redirect. For cVRP: per-payment limit, periodic limit and validity. Primary action is
"Accept and Continue" with an equally reachable way out (X or Cancel).

**Bank logos.** Use monogram tiles unless you have approved logo assets. A monogram is a placeholder
for a logo, never a substitute for a trademark.

**Always include:** a loader/waiting state (it is real, and it sets expectations), and a
**Restart demo** link on the final screen so the demo can be replayed live.

**Accessibility:** 44px minimum touch targets, no text below 12.5px, links always underlined, never
`#9CA3AF` for text.

---

## 5. Design system

Two systems, and they don't mix:

- **Custard** (`uploads/CUSTARD-DESIGN-SYSTEM.md`) — everything **inside the device**: the hosted
  pages / Yapily Connect screens. Inter, four type steps, neutral greys carrying the interface,
  brand ink reserved for the primary action and the merchant mark, radius 16 card / 12 panel /
  10 button, 16px group gap.
- **Yapily UI** (`uploads/YAPILY-UI-DESIGN-SYSTEM.md`) — everything **around it**: the demo hub, the
  explainer panels, step rails, badges, CTAs. Deep teal `#003839`, mint `#63DFB3` in dark, neutral
  ramp, Inter at 500/600, 4px spacing base, radius 8 controls / 14 cards, 44px targets, Material
  Symbols Outlined icons, badges as pill + dot with a word.

Merchant-side screens use the prospect's own brand — that's the point of the demo.

Positioning copy for the explainer panel: pull from the Yapily product pages
(`yapily.com/product/…`) or run the **yapily-messaging** skill for persona-specific value props, and
the **yapily-tone-of-voice** skill if the copy is going to a customer.

---

## 6. Output shape

One `.dc.html` file: phone (or desktop + phone) on the left, explainer panel on the right, step rail
underneath. The explainer carries the flow name, one paragraph of what the customer experiences, a
three-step "how it works", and any caveats. Add screens as extra `sc-if` blocks and extra entries in
the `STEPS` array — don't fork the file per screen.

---

## 7. Checklist before handing over

- [ ] Merchant screen is the prospect's, not a placeholder
- [ ] Same bank name on every screen
- [ ] Correct entity for the region, correct currency
- [ ] Consent sentence verbatim, links present
- [ ] Amount and payee shown before the redirect
- [ ] Loader state present
- [ ] Restart demo works and returns to screen 1
- [ ] Every side labelled in the rail (merchant / Yapily / bank)
- [ ] No unapproved bank or merchant trademarks
