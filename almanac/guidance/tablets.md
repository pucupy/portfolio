# Tablet layouts

Sources: the uxcel lesson "Design for tablets" (it returned no readable text, so this is general practice), Apple HIG on iPad, Material 3 on window size classes, and the ceorkm mobile-app-ui-design README. Binding rules are in the guardrails.

## Size classes (match the prototype switcher)
- Compact under 600px (phones): one column, bottom tab bar.
- Medium 600–839px (tablet portrait): one wide column, or list and detail stacked. A navigation rail, not a bottom bar or a full sidebar.
- Expanded 840px and up (tablet landscape, desktop): two panes (list | detail), full sidebar.

## Material 3 large-screen guidance (the blog page needs JavaScript and returned nothing readable, so this is the published M3 layout guidance as known)
- **Window size classes:** compact under 600, medium 600–839, expanded 840–1199, large 1200–1599, extra-large 1600 and up. Design per class, not per device.
- **Canonical layouts:** (1) **list-detail**: list | detail side by side from expanded, stacked on compact and medium. This fits Customers, Applications, Invoices and Notifications. (2) **supporting pane**: main content plus a narrower contextual pane (about 1/3). This fits credit application review with the bureau summary, and the wizard step with a summary of the application. (3) **feed**: a grid of cards. This fits only the home page How it works.
- **Navigation by class:** a bottom navigation bar on compact, a navigation rail on medium (and optionally expanded), and a navigation drawer (our sidebar) on large and up.
- **Panes:** at most 2 panes on expanded and large. A fixed pane is about 360px, the other flexible. 24px spacers between panes, and margins of 24px on medium and up.
- **Spacing:** margins of 16 on compact, 24 on medium and expanded. Content stays on the 4/8 grid.
- **Don't stretch:** cap reading width; let content reflow into columns or panes instead of growing wider.
- **Input:** support touch, mouse, keyboard and stylus together; hover and focus states are mandatory on large screens.

## Rules
- A tablet isn't a big phone. Use the width: two columns of fields where they're related (first and last name, city and postcode), side-by-side KPI tiles, and list | detail on landscape.
- Reading measure stays 60–75 characters. Cap text columns (about 640px) and put the freed width to work, e.g. a summary panel or a second column. Don't add margins.
- Padding is 24px on medium and 32px on expanded. Gaps follow the 8-point grid.
- Touch targets stay at 44px or more. Tablet users touch too, and may also use a pointer, so hover states are needed.
- Reach: on tablets, both hands hold the sides. Put primary actions at the top right or bottom right of the content, not centred at the bottom.
- Sheets become centred dialogs or side panels on tablet, not full-width bottom sheets.
- Orientation switches preserve state and scroll position.
- Keyboard and pointer: support Tab focus and shortcuts, because iPads often have keyboards.

## From ceorkm/mobile-app-ui-design (useful for Almanac)
- At most 4 type sizes and 2 weights per screen. The v3 portal screens should be checked against this.
- 60/30/10 colour: about 60% neutral (page, cards), 30% cream surfaces, and 10% blue (actions, selection). This matches the v3 language.
- Peak-end rule: make the credit decision, and the "Application submitted" end state, the most polished moments.
- Finance conventions: calm, trust-led design, numbers given prominence, no gamification.
- The "thumb zone, primary actions in the bottom third" rule is for phones only. On tablets, see Reach above.

## Already applied in v3
- Sign-in on tablet portrait: the brand headline is kept, and the form is top-aligned with a 480px measure.
- The home hero is a band on portrait and a side panel on landscape.
- How it works is 2×2 on medium and 4 across on expanded.

## Built in v3 (4 Oct 2026)
- Portals on medium (600–839): the sidebar shows as a collapsed icon rail.
- Customers, Applications and Invoices at 1200 and up: clicking a row opens a 360px preview pane on the right (key fields and an "Open" button). The list keeps its context. Below 1200, a click opens the page as before.

## Still to check (proposed for v3)
- Portals on medium (600–839): replace the sidebar with a rail of 72–80px of icons with labels, with More for the rest.
- Customers, Applications and Invoices from expanded: list-detail (the list keeps its context; the row opens in the right pane instead of a new page).
- Buyer wizard from expanded: a supporting pane on the right with the application summary and progress.
- Credit application overview: a supporting pane with the bureau score, the decision and the next action.
