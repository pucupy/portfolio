# v3 (proposed): whole prototype

`Almanac Prototype v3.dc.html` is the full click-through (site, supplier portal, buyer portal, platform) with the v2 style and principles applied across it. v1 (`Almanac Prototype.dc.html` and the `Proto *.dc.html` files) is unchanged.

The v3 root loads `Proto * v3.dc.html` copies of every section, and uses `Proto Buyer Wizard v3.dc.html` as its wizard (copied from v2; v2 is frozen). Progress is saved separately from v1 (`alm-proto-v1-v3`).

## What changed

### Design system layer (applies everywhere, via stylesheets)
| Change | Where | Status |
|---|---|---|
| v2 contrast tokens (`--accent-strong`, `--danger`, `--placeholder`, `--input`, `--ring`) | `Design System v2 Tokens.css` | Agreed |
| Brand palette: blue #2f45d0, cream #ece3d5 (muted), ink #1a1a1a, warm borders #e2d8c9, `--topbar` | `Almanac v3 Theme.css` | Trial |
| Dark theme accent #8a99ff, top bar #1f2a80 | `Almanac v3 Theme.css` | Trial, not reviewed |
| Work Sans (UI) + Newsreader (`h1`, `h2`) | `Almanac v3 Theme.css` | Trial |
| Mobile rule: below 640px, primary actions are full width; paired actions stack with the primary on top (`data-mobile-full`, `data-mobile-stack`) | `Almanac v3 Theme.css` | Proposed |
| Reduced motion (spinners keep spinning), `touch-action: manipulation`, 16px inputs below 640px, kerning | `Almanac v3 Theme.css` | Agreed |

Engineer: these fold into `packages/ui/src/styles/tokens.css` and `theme.css`; see `v2 Engineering Changes.md` §1 and `ai-ready/tokens/`.

### UI layer (content in the v3 copies)
| Change | Files |
|---|---|
| One demo pair (A3): supplier **BrewDog** (workspace and organization name), buyer **Kelly & Rose Taverns Ltd** (reg 11482036, 24 Gloucester Road, Bristol BS7 8AE, VAT GB284716390, kellyandrose.example; directors Dan Kelly and Hannah Rose). Referees are Clifton Fresh Produce Ltd and Harbourside Meats Ltd. Company facts match the wizard. This also fixes the invitation that had the supplier and buyer swapped | All v3 files |
| "Credit Portfolio" → "Credit portfolio" (D7, sentence case) | Supplier portal |
| New Almanac logo everywhere: wordmark (`assets/almanac-wordmark.svg`) on the site, in the wizard header and in "Powered by"; the symbol only (`assets/almanac-symbol.svg`, cropped from the wordmark) in the buyer and platform portal sidebars and the collapsed rail. Black SVG, inverted in dark mode and on the blue wizard bar. `AlmanacLogo` in packages/ui needs replacing | All v3 files |
| Supplier portal sidebar: the supplier's logo replaces the Almanac mark. A small "Powered by Almanac" line sits below the user menu (mark only when collapsed). This needs a `footer` slot in `MainLayout`; the prototype overlays it | `Almanac Prototype v3` |
| Buyer wizard = v3 copy of v2 (all B and C items, BrewDog logo, responsive) | `Proto Buyer Wizard v3` |

Other customers in lists (Acme Manufacturing, Northwind Retail, Contoso and so on) keep their names as background data.

## Not yet applied in v3 (needs design work, not a reskin)
These are in `uploads/almanac-v2-design-recommendations.md` and need screens designed:
- D2: the wizard follows the supplier's step configuration
- D4: Customers list columns, search, sort and filters
- D5: "Create customer and invite"; the dropdown overlap; explaining why Create is disabled
- D6: decision screen shows reasons first and names who decides; CCJ and rating drop moved up
- D8: marketing site headline and claims (sanctions screening to be verified)
- D1 and D3: the returning-buyer path and sole traders (New, need sign-off)
- Money to two decimals across the supplier and buyer portals (some figures round today)

## QA
- v3 loads with no console errors.
- The wizard flow passed 48 of 48 checks (`v2 QA Report.md`).
- The other sections are not yet regression-tested in v3.

## Engineering handover: exclude the prototype nav
The dark bar at the top of `Almanac Prototype v3.dc.html` is a review tool, not product UI. Don't build it, and don't reference it in tickets, specs or the handoff. It covers:
- version selector (v1 / v2 / v3), All screens drawer, journey rail and Prev/Next
- "Viewing as" and User switches, State selector, Light/Dark, Minimise, Hide (Alt H)
- device switch (mobile, tablet, desktop), orientation toggle, device frames, and `?frame=1`
- `localStorage` keys `alm-proto-v1` and `alm-proto-v1-v3`, and the `storage` sync between frames

Build from the screens inside it (`Proto * v3.dc.html`, `Proto Buyer Wizard v3.dc.html`) and `Almanac v3 Theme.css`. When you re-export a handoff folder, leave the root prototype file out, or label it "review tool only".
