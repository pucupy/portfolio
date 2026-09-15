# Real customer UX patterns — mined from live implementations

Source: `uploads/` folders from 18 Yapily customers. Screenshots and signed-off UX docs
only — video recordings are in the folder but not machine-readable here.

Use this as the copy and structure reference for demo templates, so demos match what
customers actually shipped rather than an invented flow.

---

## 1. The Yapily Connect consent accordion (AIS)

**Seen in:** Dezrez (embedded modal), and it is the standard Yapily Connect hosted-page
pattern.

Four collapsible sections, in this order:

| Section | Copy (verbatim) |
|---|---|
| **Data Sharing** | "Yapily Connect will retrieve your bank data based on your request and provide this information to **{Customer Ltd}**." |
| **Secure Connection** | "Data is securely retrieved in read-only format and only for the duration agreed with you. You have the right to withdraw your consent at any time." |
| **FCA Authorisation** | "In order to share your **{Bank}** data with **{Customer Ltd}**, you will now be securely redirected to your bank to confirm your consent for **Yapily Connect** to read the following information:" + scope list |
| **About the access** | (duration / revocation detail) |

Scope list, verbatim:

- Identification details
- Account(s) details
- Balances
- Transaction Statements from the past 12 months
- Credit Card(s) Statements from the past 12 months

Header above the accordion: **Permission** — "To get started, we need to authenticate
your account connection. Scan the QR code with your mobile device and you'll be directed
to your mobile banking app. Then complete the login securely on the bank side."

**Callsign signed-off guidance:** expand the consent detail **by default** — do not make
the user hunt for the scopes. Keep the language light to expedite the transaction. Drop
unnecessary brand references from the body copy.

## 2. QR + desktop escape hatch (desktop AIS/PIS)

Dezrez pairs the QR code with:

**Need help?**
1. Open your mobile phone camera and scan the QR code.
2. Log in and approve access for Yapily Connect.
3. You will then continue back to this screen.

…and a link: **"Or, use the desktop login instead ›"**. Every desktop demo should have
this fallback — it is the single most-asked question on demo calls.

## 3. Dual terms & conditions checkboxes

**Seen in:** De Buck Technologies (mobile), Callsign (signed off with legal + marketing).

Two separate checkboxes, not one:

- ☐ I agree with **terms and conditions** of {Customer}
- ☐ I agree with **terms and conditions** of Yapily Connect

Callsign explicitly added Yapily's T&Cs *and* privacy policy links alongside their own.
Treat this as the compliant default for any consent screen in a demo.

## 4. Trust line on the payment summary

De Buck puts a locked, non-interactive row directly above the payee:

> 🔒 Transfer made with Yapily Connect

Structure of their summary screen, top to bottom: payer name → payer IBAN → large amount
→ reference ("Yapily link") → the locked Yapily Connect row → payee name + IBAN → **Pay**.

De Buck's authorize screen shows the two logos side by side (customer ✕ bank) with:
"To use this service, we need your consent. This regulated service will be provided by
Yapily Connect." Then "You are going to give access to: …" and "You share this data
during: 90 days."

## 5. The callback interstitial — the step most demos skip

**Round** (AIS) shows a full-page state on return from the bank, before any data appears:

> **Almost there!**
> Please wait while we are fetching your account details.

Customer logo + spinner, nothing else. Real flows have this because the data fetch takes
seconds. Demos that jump straight from consent to a populated dashboard feel fake, and
prospects notice.

## 6. Account selection after consent (AIS)

Dezrez, immediately post-consent:

> **Select one of your accounts**
> Now that you have granted us access to your accounts, please select which one you would
> like to use to start matching transactions:

Rows show: account type (`CURRENT`, `CREDIT_CARD`) · sort code · account number · balance
· chevron. Type is shown in raw API form — worth softening in a demo, but the four-column
structure is right.

## 7. Outcome screens are quantified, not congratulatory

Dezrez's end state is a stats row, not a tick:

> **Matched transactions successfully completed** — Below is an overview of the fully,
> partially and not matched transactions:
> Transactions Retrieved **437** · Fully Matched **0** · Partially Matched **0** ·
> Not Matched **25**

Round's is a portfolio: five account cards (bank · currency · balance · masked account
number) above a paginated transactions table with a bank filter — 626 records, 32 pages.
Both make the point that the value is in what happens *after* the connection.

---

## Applied to the demo templates

- Bank approval screen now carries the dual T&C checkboxes, gating Continue (§3).
- Payment review sheet carries the "Transfer made with Yapily Connect" locked row (§4).
- A "Returning to {merchant}" callback interstitial sits between approval and success (§5).
- Desktop template's QR step should gain the numbered Need help? steps and the desktop
  login fallback (§2) — **not yet done**.
- Consent scopes in any AIS demo should use the verbatim five-item list (§1).
