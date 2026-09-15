# Custard — white-label hosted pages

**Custard · hosted pages** — A white-label journey, themed by four values.

Custard is the end-user consent journey, embedded by customers and skinned to their brand. The contract is deliberately narrow: brand colour, contrast, surface, radius and a logo. Everything else is fixed, which is what keeps one component set serving hundreds of brands.

Interactive reference: `embeds/design-system-reference.html` (Custard tab) · full journey: `embeds/custard-payment-journey.html`

---

## Theme contract

A customer supplies four values and a logo; everything else — spacing, type scale, structure, the 44px targets — is fixed. Widening that contract is how a white-label system stops being one. Every example in the reference is the real shipped composition, re-themed live.

| Token | Applies to | Default |
| --- | --- | --- |
| `--color-action-primary` | Primary button, focus ring, selected row tint | `#111827` |
| `--color-text-inverse` | Label colour on the primary button | `#FFFFFF` |
| `--color-bg-canvas` | Page ground behind the modal | `#F5F6F8` |
| `--layout-modal-radius` | Modal shell — 20px at ≤1199, 0 at ≤599 | `24px` |
| `--logo` | Customer mark, any aspect | SVG or PNG |

The reference ships four preview brands: **Neutral** (the shipped default) plus Northwind, Verdant Bank and Sunhaus — invented, to show the contract works.

---

## Page shell

Nothing in the header belongs to the customer. It carries one line — who is operating the page — and a cancel that is always reachable, because a consent screen the user cannot leave is a consent screen they did not give freely. The modal is 960px at desktop, 760 at tablet and full-bleed with no radius on mobile.

Header copy: "Secure page by Yapily." with a shield glyph, and a 44px cancel at the right.

Spec: modal 960 / 760 / full-bleed · radius 24 / 20 / 0 · header 72 / 68 / 64 · content column 720 · heading 32 / 40 · 700.

---

## Bank list

The most-used surface in open banking, and the one the research programme reshaped most. Rows are 64px with the whole row as the target. Recents are surfaced with the reason they are there — "Used 2 hours ago" rather than an unexplained reordering — and a parent institution with hundreds of branches becomes a drill-in rather than hundreds of rows.

Structure: search field ("Search 12 banks"), then **Recommended banks** — Commerzbank (Used 2 hours ago, Recent), Deutsche Bank AG (Used yesterday, Recent), Sparkassen (Regional banks, drills in), Volksbanken Raiffeisenbanken (700+ local banks, drills in) — then **Other banks A–Z**.

Spec: row 64 / 60 / 56 · logo tile 40, radius 10 · recents state their reason · parent institution drills in · whole row is the target.

---

## Payment summary

A payment modal has one job: let someone check the amount, the payee and the account before they leave for their bank. Amount is the largest thing on the screen, the payee is named twice — once in the summary and once in the authorisation line — and the legal text sits above the button rather than below it, where nobody reads it.

Authorisation line: "By continuing, you authorise Yapily Connect Ltd to initiate this €2.00 payment to ACME and agree to Yapily's Terms and Conditions and Privacy Policy."

Spec: amount 34 · 700 · summary card radius 16 on `#F5F6F8` · legal copy above the button · button 56, radius 14 · cancel is a text action, not a second button.

---

## Account access consent

The regulated screen. Copy varies by market and product, so the layout is fixed and the strings are data — which is what makes twelve footer variants tractable rather than twelve designs. Expiry is mandatory: an access grant with no stated end date is not informed consent.

Heading: "{Brand} would like to access your Commerzbank account". Sub: "Read-only. Nothing can be moved and no payment can be made with this permission."

| Row | Value |
| --- | --- |
| Account details | Name, sort code, number |
| Balances | Current and available |
| Transactions | Last 12 months |
| Access expires | 14 August 2027 |

Footnote: "You can withdraw access at any time from your bank or from {Brand}."

Spec: definition rows on the summary card · expiry mandatory · copy is data, layout is fixed · revocation stated before leaving.

---

## Status screens

Success, waiting and failure share one layout, so a customer theming the journey gets all three rather than one. Success repeats the amount and the account so the user has a record; failure names what did not happen, states that nothing was shared, and offers the next move without blaming anyone.

Success example: "Payment initiated" / "Your €2.00 payment instruction to World Wildlife Fund has been sent to Volksbank." Summary repeats €2.00, the payee, and the account ending 4268. Auto-return line: "Returning you to World Wildlife Fund in 3 seconds…" with a manual button.

Spec: icon 64 · status tint · amount and account repeated as a record · auto-return with a manual override · one layout, three states.

---

## Button footer

The component with the most variants in the system: consent copy differs by product and region, and the layout differs by device. Twelve combinations, one component, documented rather than redrawn.

- AIS · UK · mobile — stacked, full width: "Continue to Commerzbank" then "Cancel".
- PIS · EU · desktop — inline, right-aligned: "Cancel payment" then "Continue to your bank".

Spec: mobile stacked, full width · desktop inline, right · height 56 / 52 · label from product × region.
