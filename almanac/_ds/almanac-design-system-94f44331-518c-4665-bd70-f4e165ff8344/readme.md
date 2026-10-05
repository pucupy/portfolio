# Almanac Design System

Almanac is a **trade credit verification platform for European F&B suppliers**. Suppliers use it to onboard buyers (their customers), verify them (Companies House / registry data, Creditsafe credit bureau reports, open banking, sanctions/KYC), make credit decisions with an audit trail, collect via payment mandates (direct debit / card), and monitor portfolio risk. Product tagline in the app: *"Faster onboarding. Smarter credit decisions."*

## Products / surfaces
- **Supplier portal** — the core app: Customers, Credit applications, Invoices, Transactions, Credit policy, Credit Portfolio, Billing, Notifications, Settings. *(UI kit: `ui_kits/supplier-portal/`)*
- **Buyer portal** — buyers complete multi-step credit applications (company, contacts, open banking, payment mandate, credit terms, references, documents, review), see suppliers, invoices, bank connections. *(not recreated yet)*
- **Platform portal** — internal admin for users, workspaces, audit, credit prices. *(not recreated)*
- **Site** — sign-in (OTP + passkey), accept invite, home. *(sign-in is in the supplier kit)*
- **Transactional email** (React Email, previewed in Storybook). *(not recreated)*

Domain nouns are strict (from `docs/general/DOMAIN.md` via the UI AGENTS.md): **Workspace** = login group (never "team"/"account"); **Organization** = one legal company ("company" in copy); **User** = a person; **Supplier/buyer** are roles, shown to suppliers as **Customers**.

## Sources
- Codebase (attached locally, read-only): `almanac-platform/` monorepo — Next.js 16, Tailwind 4, shadcn-derived kit.
  - Tokens: `packages/ui/src/styles/tokens.css`, `theme.css`
  - Primitives: `packages/ui/src/components/*.tsx`; compositions: `packages/ui/src/compositions/*.tsx`; shells: `packages/ui/src/layouts/`; page sketches: `packages/ui/src/pages/`
  - Kit rules: `packages/ui/AGENTS.md` (copy, icon, table and card rules quoted below)
  - Logo: `apps/web/src/components/brand/almanac-logo.tsx`, `apps/web/public/favicon.svg`
  - App shell wiring: `apps/web/src/components/supplier-portal/supplier-portal-layout-client.tsx`, login: `apps/web/src/app/(site)/login/login-client.tsx`
- No Figma file or slide deck was provided.

---

## CONTENT FUNDAMENTALS

**Voice.** Plain, precise, operational British English for finance/credit people. Calm and factual, never salesy inside the app. The product speaks as **"we"** and addresses the user as **"you"** ("Enter your work email. We will send a one-time code."). Marketing lines are short declaratives: "Faster onboarding. Smarter credit decisions."

**Casing.** Sentence case everywhere — page titles ("Credit applications"), buttons ("Create customer", "Import from Xero", "Refresh information"), table headers (rendered uppercase by CSS, authored in sentence case), badges ("Awaiting decision", "Not linked"). One legacy exception in nav: "Credit Portfolio".

**Spelling & format.** en-GB: *utilisation, organisation-level, authorised*. Dates `12 Jan 2026`, timestamps `7 Aug 2026, 16:18`. Money always 2 decimals with symbol: `£1,200.00` (KPI tiles may round: `£243,000`). Short relative notes: `+£7,000 vs last month`, `59% of approved`, `across 3 customers`.

**Punctuation rules (enforced in code review).**
- **No em dash as a sentence separator** — restructure with a comma, colon, semicolon or full stop. The em dash `—` is used *only* as the lone placeholder for an unavailable figure.
- **Empty-state titles have no trailing full stop** ("No invoices yet"); descriptions are full sentences with one ("Create a credit application for an existing customer.").
- Progress labels use the ellipsis character: "Creating…", "Refreshing…", "Import in progress…".
- Back links: "← Back to Customers". Pager: "← Prev", "Next →", "« First", "Last »".

**Permissions copy.** Never hide things; explain. "You cannot view invoices" / "Your role does not include supplier:invoices:read." — the raw permission key is shown.

**Errors.** Direct and actionable: "Please enter a valid email address", "Sign-in failed. Check your code, or try the passkey option below.", "That sign-in link has expired. Enter your email to get a fresh code."

**Emoji:** never. **Exclamation marks:** essentially never. **Unicode glyphs:** only `←` `→` `«` `»` `▲▼` (sort indicator) and `—` placeholder.

---

## VISUAL FOUNDATIONS

**Overall vibe.** Clean, neutral, dense-but-airy enterprise fintech. White canvas, near-black text, hairline `#e8e8e8` borders, one teal accent (`#00b3c0`). Information is carried by tables, KPI tiles and tinted status chips — not imagery. Light and dark themes are both first-class (`.dark` on `<html>`).

**Colour.** Semantic tokens only (`--background`, `--card`, `--muted`, `--accent`, `--success`, `--warning`, `--danger`, `--border`, `--input`, `--ring`, `--placeholder`). Status is expressed as **tints**: 10% fill + 30% border + full-strength text (Badge, CountCircle, status Cards at 5%). Warning `#ee9d28` carries black foreground; others carry white. The deep teal gradient (`#0f766e → #2dd4bf`) is **reserved for the logo**. Source note: `tokens.css` calls the current palette a "high-contrast debug palette" pending final brand colours — treat values as current truth but expect change.

**Type.** No webfonts — the OS UI stack (`ui-sans-serif, system-ui, sans-serif`) and OS mono stack. (apps/web loads Inter + Poppins via `next/font` but never wires them into a token.) Scale is Tailwind's: page title 20/700, heading 24/600 tight, section title 20/**300** (light), card title 18/600 line-height 1, body 16, UI/table 14, caption 12, KPI figure 24/**300**, eyebrow .65rem uppercase +0.05em. Mono is used for money, IDs and gauge figures at `0.9em` with tabular numerals.

**Spacing & layout.** Tailwind 4px base. Stack gaps 6/10/20/28/40. Page body padding `28px 24px 24px`; PageHeader `24px` with a bottom border and `position: sticky`. Sidebar 238px (collapses to a 64px rail by clicking the logo; 300ms width transition). Main column owns scrolling; shell is viewport-locked.

**Corners.** One scale: xs 4.8px, sm 6.4px, md 9.6px, lg 12.8px, xl 19.2px, 2xl 22.4px. Controls step radius with size (xs button → xs radius … lg → lg). Cards & dropdowns = lg; tooltips/inputs md; sheets xl; avatars/switches/meters full.

**Cards.** Default: 1px border, flat, 24px padding. `elevated`: `shadow-sm`, no border (KPI + dashboard cards). `plain`: `#fafafa`, no border (Empty). Status variants tint surface + text. Optional `wash`: a 5rem top gradient in the status colour fading into the card. No coloured left-border accents.

**Shadows.** Minimal: `shadow-sm` for elevated cards, menus, tooltips, active tab/toggle; `shadow-lg` only for Sheets. No inner shadows.

**Borders.** Hairlines everywhere (`--border` #e8e8e8, inputs `--input` #dfdfdf). Table rows separated by 1px rules; headers uppercase muted.

**Backgrounds & imagery.** Almost none. The only decorative background is the sign-in brand panel: a diagonal accent/15 → background gradient, a faint 2.5rem grid of border-coloured lines at 50% opacity, and a 4px accent bar on top. No photography, illustration, textures or grain in the product.

**Motion.** Quiet. 150ms colour/opacity transitions on hover; 300ms ease-out slide for Sheets and sidebar width; `animate-pulse` skeletons; `animate-spin` on RefreshCw/Loader during work. Respects `prefers-reduced-motion` (spinners keep spinning). No bounces.

**Hover.** Filled buttons → `opacity: .9`. Outline buttons, menu items, nav rows → `bg-muted`. Table rows → `muted/20`. Text links → shift from muted to foreground. ChoiceCard → accent border + accent/5 fill + chevron nudges 2px right.

**Press / focus.** No press-shrink. Focus is a 2px `--ring` ring offset 2px from the background on every interactive control. Disabled = 50% opacity, no pointer events.

**Transparency & blur.** Scrims are `foreground/40` (`black/60` in dark). No backdrop blur anywhere.

**Selection states.** Selected = accent: sidebar row accent/10 + accent text; PageNavbar 2px accent underline; Option/Checkbox cards accent border + accent/5; tabs/toggles lift to background + shadow-sm on a muted track.

---

## ICONOGRAPHY

- **Lucide only** (`lucide-react` in production). No other icon library, no custom SVG icons, no icon font, no PNG icons, **no emoji**. Stroke 2, `currentColor`, coloured via token text colours.
- Sizes: **18** sidebar nav, **16** inline/locks/close in modal, **14** inside sm buttons and menu items, **12** inside badges, **20–28** sheet/focus-pane close, **24** Empty/Restricted icon.
- Common glyphs: nav `BookUser, ListTodo, FileText, CreditCard, ShieldCheck, PieChart, Coins, Bell, Settings`; actions `RefreshCw, Link2Off, Lock, X, ChevronDown, ChevronRight, SquareArrowOutUpRight, Moon/Sun, Fingerprint, Loader`; sign-in `Shield, FileCheck, CheckCircle`.
- In this design system icons render through the `Icon` component, which reads the **Lucide UMD build from CDN** (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`) — load it before `_ds_bundle.js`.
- First-party SVG is limited to the **brand mark** and primitive chrome (the Checkbox tick).
- Brand mark: `assets/logo-mark.svg` (copied from `apps/web/public/favicon.svg`) and the `AlmanacLogo` component (transcribed from `almanac-logo.tsx`, variants gradient/mono/white/dark/outline, optional "Almanac / BUYER VERIFICATION" wordmark).

---

## Index

- `styles.css` — entry point (imports only)
- `tokens/` — `colors.css` (light + `.dark`, tints, aliases), `typography.css`, `radius.css`, `spacing.css`, `effects.css`, `base.css`
- `components/components.css` — class-level port of the kit's Tailwind/cva strings (`alm-*`)
- `components/<group>/` — React primitives (`.jsx` + `.d.ts` + `.prompt.md` + one card `.html`)
- `guidelines/` — foundation specimen cards (colours, type, spacing, radii, elevation, iconography, logo)
- `ui_kits/supplier-portal/` — click-through Supplier portal recreation
- `assets/logo-mark.svg` — brand mark
- `SKILL.md` — Agent Skill entry point
- `thumbnail.html` — project tile

### Components
- **actions/** — Button, NoStyleButton, Icon
- **forms/** — Input, Textarea, Label, Field, Checkbox, Radio, Switch, Dropdown, ToggleGroup, ToggleGroupItem
- **display/** — Text, Stack, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Skeleton, CountCircle, Tooltip, Markdown
- **data/** — Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption, TableRowLink, Pagination, MetricCard, Meter, RadialMeter, SparkBars, LineChart, BarChart
- **overlays/** — Modal, Sheet, FocusPane, FocusPaneHost, Collapsible, Tabs, TabsList, TabsTrigger, TabsContent
- **navigation/** — MainLayout, SidebarNavItem, SidebarUserMenu, PageHeader, PageNavbar, PageSectionHeader, BackLink
- **patterns/** — Empty, Restricted, PermissionLock, SnapshotLock, RefreshButton, SettingsConnectionRow, OptionCard, CheckboxCard, ChoiceCard
- **brand/** — AlmanacLogo

### Intentional additions
- **Icon** — wrapper that renders Lucide by name from the CDN build (production imports `lucide-react` directly; not possible bundler-less).
- **TableRowLink** — the kit's whole-row `Link` + `after:inset-0` pattern, packaged since `next/link` is unavailable.
- `money` / `muted` props on **TableCell** — shorthand for the kit's required `font-mono text-right` and `whitespace-nowrap text-muted-foreground` call-site utilities.
- `onNavigate` on MainLayout / PageHeader / PageNavbar — prototype hook replacing Next navigation.

### Not yet built (present in source)
Generic compositions: SearchSelect, MultiSelect, Chat, MetricTable, ExpandableTable, VersionHistory, Contacts, Passkeys, PermissionTable, RoleAssignmentTable, WorkspaceMemberTable, OrganizationRoleTable. Domain compositions: CreditDecision, CreditDecisionCta, CreditDecisionSheet, CreditAdvisorRecommendationCard, SuggestedCreditPolicyRules, CreditBureauReport, CreditBureauChangesNotice, CompanyInformation, PaymentMandate, SupplierBuyerTimeline, SupplierBuyerCreditSummary. Layouts: BuyerCreditApplicationLayout, SupplierCreditApplicationLayout, SupplierCustomerLayout, SettingsLayout.

### Porting notes
- LineChart/BarChart are hand-rolled SVG matching the Recharts styling (dashed horizontal grid, 11px muted ticks, card tooltip).
- Markdown covers headings, paragraphs, lists, bold, code, links, quotes (production: react-markdown + GFM).
- Modal/Sheet render `position: fixed` in place instead of portalling.
