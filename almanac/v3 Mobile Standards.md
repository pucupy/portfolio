# v3 mobile standards

Sources: Apple Human Interface Guidelines and Material Design 3. Both sites need JavaScript and couldn't be read directly, so these are their long-standing, published core rules rather than quotes. Check against the live pages before sign-off.

## Rules for Almanac v3

| # | Rule | HIG | M3 | v3 status |
|---|---|---|---|---|
| 1 | Touch targets at least 44×44px (M3 asks 48). Use 44 as the floor and 48 where space allows | 44pt | 48dp | **Applied** in the theme CSS: buttons, inputs and selects below 640px |
| 2 | Primary actions full width on phones; paired actions stack with the primary on top | Prominent, reachable buttons | Full-width buttons in compact windows | **Applied** (`data-mobile-full`, `data-mobile-stack`) |
| 3 | Inputs 16px or larger so iOS doesn't zoom on focus | Body 17pt | Body large 16sp | **Applied** |
| 4 | Respect safe areas (notch, home indicator) | Safe areas | Window insets | **Applied**, including the bottom inset on the wizard action bar and on sheets |
| 5 | Breakpoints by window class: compact below 600, medium 600–839, expanded 840 and up | Size classes | Window size classes | **Applied**: compact below 600 (phone patterns), two columns from 840 (wizard rail, sign-in split, hero rectangle) |
| 6 | 16px side margins on compact screens; 8px spacing grid | Layout margins | 16dp margins, 8dp grid | **Applied**: site uses `clamp(16px,4vw,56px)`, wizard 16px |
| 7 | Primary action within thumb reach (lower half) on long forms | Reachability | Bottom app bar and FAB | **Applied**: sticky bottom action bar in the wizard on compact screens |
| 8 | Text scales with user settings; no fixed heights on text boxes | Dynamic Type | Font scaling | **Partly**: the 200% zoom check is still to do (see QA report) |
| 9 | Contrast 4.5:1 for text, 3:1 for UI and large text | Accessibility | Accessibility | **Applied** across the v3 palette |
| 10 | Motion respects reduced motion; no motion needed to understand the UI | Reduce Motion | Motion accessibility | **Applied** |
| 11 | Sheets and dialogs on phones come up from the bottom, full width, with a visible close | Sheets | Bottom sheets | **Applied**: every design-system Modal becomes a bottom sheet below 600px, with full-width buttons |
| 12 | One clear navigation pattern per app: tab bar or drawer, not both | Tab bars | Navigation bar or drawer | **Interim**: the sidebar collapses to the 64px icon rail below 600px. A bottom tab bar is the proposed final pattern and needs design sign-off |

## Still open
- Portals: bottom tab bar (up to 5 items) to replace the collapsed rail on phones.
- The 200% zoom and screen reader checks (see `v2 QA Report.md`).

## Mobile design principles (provided 4 October 2026)
Apply these to every v3 mobile screen. Gaps they show in v3 today:

| Principle | v3 gap | Proposed fix |
|---|---|---|
| 5 Content over chrome | The wizard on phones keeps the card border and radius around the whole form | Drop the card frame below 600px; whitespace only |
| 16 Visible labels | Sign-in uses visible labels; OK | None |
| 17–18 Validate at the right moment, errors by the field | Wizard validates on Continue with a summary plus field errors; OK | Add validation when leaving a field for email, postcode and VAT |
| 19 Keyboard | The sticky action bar can cover the focused field when the keyboard is open | Scroll the focused field above the bar (`scroll-margin-bottom` = bar height) |
| 21–22 Sheets vs dialogs | The skip confirmation is now a bottom sheet; OK | None |
| 26–27 Responsive, max widths | Tablet (600–839) shows phone layouts stretched | Cap the content at 640px and centre it on medium screens |
| 28 Orientation | Not tested in landscape | Add to manual QA |
| 36 Empty states | Trade references has a helpful empty state; OK | None |
| 40 States | Offline and permission-denied states aren't designed | Design an offline banner and a bank-permission-denied state |
| iOS: avoid unnecessary full-width buttons | Conflicts with our full-width rule on iOS | Keep full width for the primary form action; inline secondary links stay inline |
