---
name: Yapily Brand Design System and Product UI Guidelines
version: "2.0-merged"
description: >
  Single source of truth for Yapily product interfaces, AI design agents,
  coding agents, designers, and frontend engineers. The brand design tokens
  from the Yapily Brand Design System are the primary authority. Product UX,
  accessibility, interaction, and implementation guidance is merged from the
  Yapily Apps Design System, with conflicts removed.
source_of_truth:
  primary: "Yapily Brand Design System / pasted markdown"
  secondary: "DESIGN.md / Yapily Apps Design System"
conflict_resolution:
  - "Use brand tokens from the primary file whenever token values conflict."
  - "Keep light mode backgrounds light at all times. Never use dark green or dark teal as a page background in light mode."
  - "Use #003839 as the primary brand colour. Use #333333 as secondary brand colour. Use #63dfb3 as accent/teal highlight, not as the secondary token."
  - "Use the primary spacing scale, including 2xs for 4px and xs for 8px."
  - "Use the primary radius scale."
  - "All interactive elements must meet a 44px minimum touch target across desktop and mobile unless there is a documented technical exception."
  - "Use semantic tokens in components; do not hardcode raw colours where tokens exist."
colors:
  primary: "#003839"
  secondary: "#333333"
  accent: "#63dfb3"
  teal-100: "#63dfb440"
  teal-400: "#63dfb3"
  teal-500: "#2db89a"
  teal-600: "#1a9d88"
  teal-700: "#007474"
  teal-800: "#004a52"
  teal-900: "#003839"
  gray-50: "#f8f8f9"
  gray-100: "#f5f7f7"
  gray-200: "#f0f3f3"
  gray-300: "#e0e7e7"
  gray-400: "#d1d4da"
  gray-450: "#9ca3af"
  gray-500: "#9ca2b0"
  gray-600: "#666666"
  gray-650: "#545454"
  gray-700: "#444444"
  gray-800: "#333333"
  gray-900: "#191919"
  red-25: "#fef5f5"
  red-50: "#fef2f2"
  red-100: "#feebeb"
  red-200: "#fecaca"
  red-500: "#f23839"
  red-700: "#e70001"
  red-900: "#ad0000"
  green-50: "#f0fdf4"
  green-200: "#bbf7d0"
  green-600: "#16a34a"
  green-700: "#00aa39"
  green-800: "#166534"
  green-900: "#005e20"
  green-bg: "#f2fbf5"
  blue-50: "#eff6ff"
  blue-200: "#bfdbfe"
  blue-500: "#3b82f6"
  blue-700: "#1e40af"
  blue-outline: "#8db8f8"
  yellow-50: "#fffbf2"
  yellow-200: "#fed7aa"
  yellow-300: "#fab300"
  yellow-500: "#f59e0b"
  yellow-700: "#92400e"
  yellow-800: "#726942"
  yellow-900: "#6b4d00"
  white: "#ffffff"
  black: "#000000"
typography:
  fontFamily: "Inter, system-ui, sans-serif"
  sizeXs: "0.75rem"
  sizeSm: "0.875rem"
  sizeMd: "1rem"
  sizeLg: "1.25rem"
  sizeXl: "1.5rem"
  size2xl: "2.25rem"
  weightNormal: 400
  weightMedium: 500
  weightSemibold: 600
  weightBold: 700
  lineHeightXs: 1
  lineHeightSm: 1.25
  lineHeightMd: 1.5
  lineHeightLg: 1.75
rounded:
  xs: "0.125rem"
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.6rem"
  xl: "1.5rem"
  pill: "9999px"
spacing:
  2xs: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "1.5rem"
  2xl: "2rem"
  3xl: "2.5rem"
  4xl: "3rem"
sizing:
  iconXs: "0.75rem"
  iconSm: "1rem"
  iconMd: "1.25rem"
  iconLg: "1.5rem"
  iconXl: "2rem"
  icon2xl: "2.5rem"
  icon3xl: "3rem"
  icon4xl: "4rem"
  touchMinHeight: "44px"
accessibility:
  standard: "WCAG 2.1 AA minimum"
  textContrast: "4.5:1"
  largeTextAndUiContrast: "3:1"
  minTouchTarget: "44x44px"
  focusVisible: true
  keyboardNavigation: true
  reducedMotion: true
---

# Yapily Brand Design System and Product UI Guidelines

## 0. Purpose

This file is the single source of truth for Yapily product design and frontend implementation. Use it before generating UI, copy, components, layouts, prototypes, or implementation code.

It merges:

- The Yapily brand token system.
- Enterprise product design principles for Yapily applications.
- Accessibility requirements.
- Component and interaction guidance.
- Frontend implementation defaults for React, Tailwind, CSS variables, and the Yapily UI Library.

The brand token system is the primary source. When token values conflict, use the values in the YAML front matter of this file.

## 1. How AI Agents, Designers, and Engineers Should Use This File

When designing or coding Yapily product UI:

1. Prioritise clarity over visual novelty.
2. Use enterprise-grade patterns from SaaS, developer tooling, cloud infrastructure, security tooling, and banking dashboards.
3. Design for technical and operational users first.
4. Default to calm, spacious layouts. Increase density only when users need to manage large operational datasets.
5. Avoid playful, gimmicky, consumer-app, or marketing-heavy UI inside product surfaces.
6. Respect accessibility by default. WCAG AA is the minimum.
7. Support light and dark themes intentionally. Do not simply invert colours.
8. Keep light mode backgrounds light at all times.
9. Use predictable, reliable interaction patterns over clever ones.
10. Make all important states explicit: loading, success, failure, disabled, empty, warning, destructive, and permission-limited.
11. Reduce support burden by preventing errors, explaining consequences, and guiding recovery.

If a request conflicts with this file, preserve the Yapily design principles and explain the trade-off.

## 2. Product Context

Yapily is an open banking infrastructure platform serving fintechs, enterprises, banks, and regulated institutions across the UK and Europe.

Yapily product interfaces support teams managing:

- Open banking applications.
- Institutions and bank coverage.
- Certificates and security configuration.
- RBAC, roles, permissions, and access management.
- API integrations.
- Multi-region deployments.
- Sandbox and production environments.
- Payment and data flows.
- Operational monitoring and troubleshooting.

The product must feel suitable for teams operating regulated financial infrastructure.

## 3. Product Personality

Yapily product UI should feel:

- Calm.
- Intelligent.
- Technical.
- Modern.
- Reliable.
- Efficient.
- Human-centred.
- Enterprise-grade.
- Precise.
- Trustworthy.

Yapily product UI must not feel:

- Playful.
- Gimmicky.
- Decorative.
- Consumer-app casual.
- Over-animated.
- Over-designed.
- Visually noisy.
- Marketing-led.

Final personality rule: good infrastructure UX feels almost invisible. Users should focus on their goals, systems, and operations, not on learning the interface.

## 4. Core Design Philosophy

### 4.1 Clarity over density

Every UI element must earn its place.

Do:

- Remove before adding.
- Prioritise comprehension over feature exposure.
- Reduce cognitive load.
- Use clear hierarchy.
- Make the next action obvious.

Avoid:

- Decorative noise.
- Showing all configuration upfront.
- Dense dashboards without hierarchy.
- Competing primary actions.

### 4.2 Professional minimalism

This is infrastructure software, not marketing software.

Use:

- Clean surfaces.
- Strong hierarchy.
- Generous whitespace.
- Restrained colour.
- Subtle motion.
- Predictable layouts.

Avoid:

- Excessive gradients.
- Heavy shadows.
- Decorative illustrations.
- Over-animation.
- Visual clutter.

### 4.3 Consistency creates trust

Users operate critical financial infrastructure. Consistency reduces errors, hesitation, support requests, and cognitive fatigue.

Keep consistent:

- Spacing.
- Typography.
- Component behaviour.
- Interaction patterns.
- Naming.
- Navigation.
- Form structure.
- Error handling.
- State handling.

The same action should behave the same way everywhere.

## 5. Users and Mental Models

### 5.1 Primary users

Design primarily for:

- Developers.
- CTOs.
- Heads of Engineering.
- Technical leads.
- Engineering managers.
- Product owners.
- Security engineers.
- Infrastructure engineers.
- Operations managers.
- Enterprise stakeholders.

### 5.2 Enterprise security roles

Enterprise customers often separate responsibilities.

Examples:

- SRE teams manage certificates.
- Security teams manage SSO and access.
- Operations teams monitor applications.
- Read-only stakeholders monitor activity.

Design for:

- Granular permissions.
- Visibility controls.
- Shared operational ownership.
- Clear auditability.

### 5.3 Multi-region customers

Customers may operate multiple legal entities, applications, countries, and teams.

Support:

- Multi-region visibility.
- Environment separation.
- Ownership boundaries.
- Clear switching between sandbox and production.

### 5.4 Mental model alignment

The product should behave as users expect from enterprise tooling.

Examples:

- Environment switching is explicit and predictable.
- Production is visually and behaviourally separated from sandbox.
- RBAC follows familiar enterprise conventions.
- Destructive actions require confirmation.
- Audit logs are discoverable and trustworthy.

## 6. Colour System

Yapily's colour system is built on semantic meaning and visual hierarchy. Use teal as the primary brand colour, grays for neutral UI, and status colours for feedback and state communication.

### 6.1 Primary brand colours

| Token | Value | Use |
| --- | --- | --- |
| Primary | `#003839` | Main brand colour, primary actions, links, active states, brand anchor |
| Secondary | `#333333` | Supporting brand colour for secondary actions and emphasis |
| Accent / Teal 400 | `#63dfb3` | Highlights, selected states, dark-mode primary, subtle emphasis |

Do not redefine secondary as `#63dfb3`. Use `accent` or `teal-400` for that value.

### 6.2 Light mode background rule

Light mode backgrounds must always be light.

Use these values for light mode page and surface backgrounds:

- App background: `#f8f8f9`, `#f5f7f7`, or `#f5f5f5`.
- Card and panel background: `#ffffff`, `#f8f8f9`, or `#f5f7f7`.
- Muted sections: `#f0f3f3`.
- Success background: `#f2fbf5`.
- Error background: `#fef5f5` or `#fef2f2`.
- Info background: `#eff6ff`.
- Warning background: `#fffbf2`.

Never use `#003839`, `#004a52`, dark green, or dark teal as the full-page background in light mode. Dark brand colours can be used for text, primary actions, navigation accents, or small emphasis areas only.

### 6.3 Teal scale

| Token | Value | Use |
| --- | --- | --- |
| Teal 100 | `#63dfb440` | Very subtle highlights and tinted backgrounds |
| Teal 400 | `#63dfb3` | Bright accent and selected states |
| Teal 500 | `#2db89a` | Hover states and mid-emphasis |
| Teal 600 | `#1a9d88` | Stronger interaction states |
| Teal 700 | `#007474` | Active states and deep accents |
| Teal 800 | `#004a52` | Strong depth, dark surfaces only |
| Teal 900 | `#003839` | Primary brand anchor |

### 6.4 Gray scale

| Token | Value | Use |
| --- | --- | --- |
| Gray 50 | `#f8f8f9` | Light app background |
| Gray 100 | `#f5f7f7` | Light surfaces |
| Gray 200 | `#f0f3f3` | Subtle backgrounds |
| Gray 300 | `#e0e7e7` | Borders and dividers |
| Gray 400 | `#d1d4da` | Disabled borders and UI |
| Gray 450 | `#9ca3af` | Placeholder text |
| Gray 500 | `#9ca2b0` | Secondary UI elements |
| Gray 600 | `#666666` | Secondary text |
| Gray 650 | `#545454` | Supporting text |
| Gray 700 | `#444444` | Strong text |
| Gray 800 | `#333333` | Secondary brand and strong neutral |
| Gray 900 | `#191919` | Highest contrast text |

### 6.5 Status colours

Use status colours only for semantic meaning. Pair colour with text, icon, label, or pattern.

| Status | Primary token | Supporting tokens | Use |
| --- | --- | --- | --- |
| Error | `red-500` `#f23839` | `red-25`, `red-50`, `red-700`, `red-900` | Error states, destructive actions, validation failures |
| Success | `green-600` `#16a34a` | `green-50`, `green-700`, `green-800`, `green-900`, `green-bg` | Success states, confirmations, valid data |
| Warning | `yellow-500` `#f59e0b` | `yellow-50`, `yellow-200`, `yellow-300`, `yellow-700`, `yellow-900` | Warnings, cautions, pending states |
| Info | `blue-500` `#3b82f6` | `blue-50`, `blue-200`, `blue-700`, `blue-outline` | Information, links, focus outlines |

### 6.6 Colour usage principles

Use colour to communicate:

- Brand identity.
- Interaction.
- Status.
- Risk.
- Environment.
- Selection.

Do not use colour alone to communicate meaning. Pair colour with labels, icons, or text.

## 7. Theme System

Dark and light themes have equal importance. Validate both independently.

### 7.1 Theme requirements

- Keep light mode backgrounds light.
- Use dark backgrounds only in dark mode.
- Avoid simply inverting colours.
- Maintain hierarchy in both themes.
- Tune borders and elevation separately for each theme.
- Keep interactive states clear.
- Validate contrast for default, hover, focus, active, disabled, warning, and error states.

### 7.2 Semantic CSS variables

Use semantic tokens in components instead of raw colours.

```css
:root {
  /* Light theme: backgrounds must remain light */
  --background: #f8f8f9;
  --foreground: #191919;
  --card: #ffffff;
  --card-foreground: #191919;
  --muted: #f5f7f7;
  --muted-foreground: #666666;
  --border: #e0e7e7;
  --input: #d1d4da;

  --primary: #003839;
  --primary-foreground: #ffffff;
  --secondary: #333333;
  --secondary-foreground: #ffffff;
  --accent: #63dfb3;
  --accent-foreground: #003839;

  --destructive: #f23839;
  --destructive-foreground: #ffffff;
  --warning: #f59e0b;
  --warning-foreground: #6b4d00;
  --success: #16a34a;
  --success-foreground: #ffffff;
  --info: #3b82f6;
  --info-foreground: #ffffff;

  --ring: #8db8f8;
  --radius: 0.5rem;
}

[data-theme="dark"],
.dark {
  --background: #061b1c;
  --foreground: #f2f7f5;
  --card: #0b2425;
  --card-foreground: #f2f7f5;
  --muted: #102f31;
  --muted-foreground: #b6c7c2;
  --border: #254244;
  --input: #254244;

  --primary: #63dfb3;
  --primary-foreground: #003839;
  --secondary: #d1d4da;
  --secondary-foreground: #003839;
  --accent: #63dfb3;
  --accent-foreground: #003839;

  --destructive: #f23839;
  --destructive-foreground: #ffffff;
  --warning: #fab300;
  --warning-foreground: #6b4d00;
  --success: #00aa39;
  --success-foreground: #ffffff;
  --info: #8db8f8;
  --info-foreground: #003839;

  --ring: #63dfb3;
}
```

### 7.3 Yapily UI Library CSS variables

When consuming the Yapily UI Library, expose custom properties with the `--yp-ui-*` prefix.

```css
:root {
  --yp-ui-color-primary: #003839;
  --yp-ui-color-secondary: #333333;
  --yp-ui-color-accent: #63dfb3;
  --yp-ui-color-white: #ffffff;
  --yp-ui-color-bg: #f8f8f9;
  --yp-ui-color-surface: #ffffff;
  --yp-ui-color-muted: #f5f7f7;
  --yp-ui-color-error: #f23839;
  --yp-ui-color-warning: #f59e0b;
  --yp-ui-color-success: #16a34a;
  --yp-ui-color-info: #3b82f6;
  --yp-ui-color-text-primary: #191919;
  --yp-ui-color-text-secondary: #666666;
  --yp-ui-color-text-tertiary: #9ca3af;
  --yp-ui-color-border: #e0e7e7;
}

[data-theme="dark"] {
  --yp-ui-color-primary: #63dfb3;
  --yp-ui-color-secondary: #d1d4da;
  --yp-ui-color-accent: #63dfb3;
  --yp-ui-color-bg: #061b1c;
  --yp-ui-color-surface: #0b2425;
  --yp-ui-color-muted: #102f31;
  --yp-ui-color-text-primary: #f2f7f5;
  --yp-ui-color-text-secondary: #b6c7c2;
  --yp-ui-color-text-tertiary: #8ba09a;
  --yp-ui-color-border: #254244;
}
```

## 8. Typography

Typography creates hierarchy and guides user attention. Yapily uses Inter for product interfaces.

### 8.1 Font family

- Primary: `Inter, system-ui, sans-serif`.
- Fallback: system UI and sans-serif.

Import Inter from Google Fonts when needed:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### 8.2 Font sizes

| Token | Size | Use |
| --- | --- | --- |
| `xs` | `0.75rem` / 12px | Captions, metadata, small helper text |
| `sm` | `0.875rem` / 14px | Form labels, secondary text, small UI |
| `md` | `1rem` / 16px | Body text, default size |
| `lg` | `1.25rem` / 20px | Subheadings, larger inputs, emphasis |
| `xl` | `1.5rem` / 24px | Page headings and major sections |
| `2xl` | `2.25rem` / 36px | Main titles and hero headings outside dense app surfaces |

### 8.3 Font weights

| Token | Weight | Use |
| --- | --- | --- |
| `normal` | 400 | Body text and default content |
| `medium` | 500 | Form labels and light emphasis |
| `semibold` | 600 | Subheadings and moderate emphasis |
| `bold` | 700 | Headings, strong emphasis, button text |

Most text should use 400 or 500. Use 700 sparingly.

### 8.4 Line heights

| Token | Value | Use |
| --- | --- | --- |
| `xs` | 1 | Single-line controls, badges, short labels |
| `sm` | 1.25 | Compact text |
| `md` | 1.5 | Body text and standard reading |
| `lg` | 1.75 | Long-form content |

### 8.5 Product hierarchy

Use a restrained scale. Avoid oversized marketing headings inside product UI.

| Role | Recommended class pattern |
| --- | --- |
| Page title | `text-xl font-semibold tracking-tight` or `text-2xl font-semibold tracking-tight` |
| Section title | `text-lg font-semibold` |
| Card title | `text-base font-semibold` |
| Body | `text-sm leading-6` or `text-base leading-6` |
| Helper text | `text-sm text-muted-foreground` |
| Metadata | `text-xs text-muted-foreground` |

### 8.6 Copy style

Use:

- Plain English.
- Direct instructions.
- Human error messages.
- Task-oriented labels.

Avoid:

- Internal engineering jargon.
- Banking acronyms without context.
- Clever labels.
- Overly casual tone.
- Vague messages such as “Something went wrong”.

## 9. Spacing, Layout, and Density

### 9.1 Spacing scale

Use the primary brand spacing scale. Do not substitute a different scale.

| Token | Size | Use |
| --- | --- | --- |
| `2xs` | `0.25rem` / 4px | Micro-spacing and text adjustments |
| `xs` | `0.5rem` / 8px | Tight spacing and small gaps |
| `sm` | `0.75rem` / 12px | Component padding and compact spacing |
| `md` | `1rem` / 16px | Standard spacing and default padding |
| `lg` | `1.25rem` / 20px | Section spacing and component gaps |
| `xl` | `1.5rem` / 24px | Large gaps and major spacing |
| `2xl` | `2rem` / 32px | Container spacing and sections |
| `3xl` | `2.5rem` / 40px | Large layout sections |
| `4xl` | `3rem` / 48px | Major layout divisions |

### 9.2 Layout rules

Use:

- Clear page title and summary.
- Persistent navigation.
- Breadcrumbs for deep flows.
- Cards for grouped content.
- Tables for comparable datasets.
- Stepper or checklist patterns for onboarding.
- Side panels for contextual details where appropriate.

Avoid:

- Modals for complex workflows.
- Overloaded dashboards.
- Deeply nested navigation.
- Multiple competing primary CTAs.
- Layouts that change dramatically between states.

### 9.3 Density modes

Default product pages should be comfortable. Operational pages may use compact density only when scanning large datasets.

Compact density is acceptable for:

- Logs.
- Audit trails.
- Institution lists.
- User lists.
- Application lists.
- Certificate tables.

Compact density is not acceptable for:

- Onboarding.
- Destructive confirmations.
- Permission changes.
- Compliance tasks.
- Complex forms.

## 10. Shapes, Borders, Elevation, and Icons

### 10.1 Border radius

Use the primary brand radius scale.

| Token | Radius | Use |
| --- | --- | --- |
| `xs` | `0.125rem` / 2px | Minimal rounding for precision elements |
| `sm` | `0.375rem` / 6px | Checkboxes, badges, small elements |
| `md` | `0.5rem` / 8px | Buttons, inputs, cards |
| `lg` | `0.6rem` / 10px | Containers, panels, modals |
| `xl` | `1.5rem` / 24px | Distinctive large elements only |
| `pill` | `9999px` | Pills and badges |

### 10.2 Border width

| Token | Width | Use |
| --- | --- | --- |
| `sm` | `0.06rem` / 1px | Subtle dividers and light borders |
| `md` | `0.13rem` / 2px | Standard borders and focus-adjacent states |
| `lg` | `0.19rem` / 3px | Strong outlines and emphasis |

### 10.3 Elevation

Use subtle shadows only where they clarify hierarchy.

- No shadow: default surfaces and inline sections.
- Small shadow: cards and slightly elevated containers.
- Medium shadow: dropdowns, popovers, and modals.
- Large shadow: rare full-screen overlays or critical dialogs.

Avoid heavy shadows that make the UI feel decorative or consumer-led.

### 10.4 Icon sizes

| Token | Size | Use |
| --- | --- | --- |
| `iconXs` | `0.75rem` / 12px | Tiny inline icons |
| `iconSm` | `1rem` / 16px | Inline icons and small controls |
| `iconMd` | `1.25rem` / 20px | Standard icons and form controls |
| `iconLg` | `1.5rem` / 24px | Large icons and emphasis |
| `iconXl` | `2rem` / 32px | Featured icons |
| `icon2xl` | `2.5rem` / 40px | Medium avatars |
| `icon3xl` | `3rem` / 48px | Large avatars |
| `icon4xl` | `4rem` / 64px | Hero icons |

Use icons to support recognition, not decoration.

## 11. Accessibility Requirements

Accessibility is mandatory, not optional.

### 11.1 Contrast

Minimum requirements:

- WCAG AA.
- 4.5:1 contrast for body text.
- 3:1 contrast for large text and UI elements.

Validate contrast in:

- Light theme.
- Dark theme.
- Hover states.
- Disabled states.
- Focus states.
- Warning and error states.

### 11.2 Focus indicators

Never remove focus outlines.

Preferred Tailwind pattern:

```tsx
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
```

Focus states must be:

- Clearly visible.
- High contrast.
- Consistent across components.
- Keyboard-first friendly.

### 11.3 Keyboard navigation

All interactive elements must:

- Be reachable via `Tab`.
- Follow logical tab order.
- Support keyboard interaction.
- Support `Escape` to close overlays.

Required behaviours:

- Modals trap focus.
- Dialogs restore focus after close.
- Dropdowns support arrow keys.
- Tables support keyboard navigation where interactive.
- Tooltips must not hide essential information from keyboard users.

### 11.4 Touch targets

All interactive elements must have a minimum target size of `44px x 44px`.

This applies to:

- Buttons.
- Links with interactive behaviour.
- Icon buttons.
- Checkboxes.
- Radio buttons.
- Selects.
- Tabs.
- Menu items.
- Any clickable or tappable element.

### 11.5 Screen readers

Use semantic HTML whenever possible.

Preferred elements:

- `nav`.
- `main`.
- `section`.
- `button`.
- `label`.
- `table`.
- `form`.
- `fieldset`.
- `legend`.

Requirements:

- Add `aria-label` only when visual context is missing.
- Use proper heading hierarchy.
- Avoid nested interactive elements.
- Avoid text wrappers that interrupt reading flow.
- Ensure form inputs have associated labels.
- Decorative icons must be hidden from assistive technology.

Decorative SVG pattern:

```html
<svg aria-hidden="true" focusable="false">...</svg>
```

### 11.6 Reduced motion

Respect `prefers-reduced-motion`.

Use motion only to clarify state, not decorate.

Avoid:

- Large parallax motion.
- Excessive animation.
- Auto-playing transitions.
- Motion-heavy onboarding.

Tailwind pattern:

```tsx
motion-safe:transition motion-safe:duration-150 motion-reduce:transition-none
```

## 12. Component Rules

### 12.1 Buttons

Use one primary action per section.

Button hierarchy:

1. Primary: main page or section action.
2. Secondary: safe alternative action.
3. Ghost: low-emphasis utility action.
4. Destructive: irreversible or high-risk action.

Rules:

- Primary buttons use `#003839` in light mode and `#63dfb3` in dark mode through semantic tokens.
- Secondary buttons use neutral styling with clear contrast.
- Destructive buttons must be clearly labelled.
- Disabled buttons need explanatory helper text when the reason is not obvious.
- Loading buttons must preserve width to prevent layout shift.
- Buttons must meet a `44px` minimum target size.
- Use `md` radius by default.
- Use 600 or 700 font weight.

Recommended base:

```tsx
const buttonBase =
  "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold motion-safe:transition-colors motion-safe:duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
```

### 12.2 Forms

Forms should prevent errors before submission.

Rules:

- Use visible labels, not placeholder-only labels.
- Group related fields.
- Use inline validation.
- Preserve user input on error.
- Explain technical fields with helper text.
- Use smart defaults where safe.
- Avoid massive forms. Chunk complex forms into sections or steps.

Recommended field pattern:

```tsx
<label className="text-sm font-medium text-foreground" htmlFor="field-id">
  Field label
</label>
<input
  id="field-id"
  className="min-h-11 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
/>
<p className="text-sm text-muted-foreground">Helpful guidance goes here.</p>
```

Error pattern:

```txt
What happened: The certificate expiry date is required.
How to fix it: Select an expiry date before continuing.
```

### 12.3 Tables

Tables are for scanning and comparing data.

Rules:

- Keep columns purposeful.
- Freeze or repeat important context where needed.
- Support sorting and filtering for large datasets.
- Include empty, loading, error, and permission-limited states.
- Use row actions consistently.
- Avoid hiding critical actions only inside hover states.

### 12.4 Cards

Cards group related information.

Rules:

- Use cards for summaries, setup tasks, configuration groups, and status modules.
- Keep card titles clear.
- Avoid card grids when comparison is required. Use tables instead.
- Do not overuse cards inside cards.
- In light mode, cards must use white or light-gray surfaces only.

Recommended card shell:

```tsx
className="rounded-lg border bg-card text-card-foreground shadow-sm"
```

### 12.5 Navigation

Users must always know:

- Where they are.
- What environment they are in.
- What entity they are editing.
- How to go back.

Use:

- Persistent global navigation.
- Clear active states.
- Breadcrumbs for deep hierarchy.
- Environment badges.
- Organisation/application context switchers where relevant.

### 12.6 Modals and dialogs

Use modals only for focused decisions.

Good modal uses:

- Confirm destructive action.
- Short form.
- Focused selection.
- Critical warning.

Avoid modals for:

- Long configuration flows.
- Multi-step onboarding.
- Dense documentation.
- Complex data review.

### 12.7 Toasts

Use toasts for lightweight feedback only.

Good:

- “Application created.”
- “Settings saved.”
- “Invite sent.”

Do not use toasts for:

- Critical errors.
- Destructive consequences.
- Long messages.
- Required user decisions.

### 12.8 Badges and status indicators

Status must be explicit.

Use short labels:

- Live.
- Sandbox.
- Pending.
- Connected.
- Failed.
- Expiring soon.
- Disabled.
- Read-only.

Pair colour with text and icon where useful.

### 12.9 Empty states

Never show blank pages.

Every empty state needs:

- A clear title.
- A helpful explanation.
- A next action.
- Optional documentation link.
- Optional icon, used sparingly.

Example:

```txt
No applications yet
Create your first sandbox application to start testing Yapily payments and data flows.
[Create application]
```

### 12.10 Loading states

Use skeleton loaders.

Rules:

- Match the final layout structure.
- Prevent layout shifts.
- Avoid full-page spinners where possible.
- Preserve hierarchy while loading.

### 12.11 Error states

Errors must:

- Explain the problem.
- Suggest a solution.
- Use human language.
- Avoid raw backend errors.
- Avoid stack traces.

Critical errors should be inline or page-level, not toast-only.

## 13. Product Patterns

### 13.1 Onboarding

Onboarding should accelerate first success.

Use:

- Guided checklists.
- Clear progress.
- Smart defaults.
- Sandbox-first paths.
- Documentation links at point of need.
- Clear “what happens next” copy.

Avoid:

- Long undifferentiated setup forms.
- Exposing advanced configuration upfront.
- Making users choose from unfamiliar concepts too early.

### 13.2 Sandbox and production separation

Sandbox and production must feel clearly distinct.

Use:

- Environment badges.
- Persistent context labels.
- Confirmation before production-impacting actions.
- Clear copy explaining impact.

Never allow users to accidentally perform production changes because the environment was unclear.

### 13.3 RBAC and permissions

Permission UX must be transparent.

Rules:

- Explain what each role can do.
- Preview consequences before saving.
- Show permission-limited states clearly.
- Avoid hiding features without explanation.
- Provide auditability for sensitive changes.

### 13.4 Certificates and security

Security flows must feel precise and serious.

Use:

- Clear expiry states.
- Warnings before operational impact.
- Strong confirmation for revocation or deletion.
- Plain-language recovery guidance.

### 13.5 Institutions and bank search

Institution search should optimise recognition and selection speed.

Use:

- Search with aliases and forgiving matching.
- User-friendly institution names.
- Clear country and region context.
- Popular or recommended institutions only where meaningful.
- A-Z ordering for scannability in larger lists.

Avoid:

- Internal institution names exposed to customers.
- Ambiguous branch names without context.
- Over-prioritising popularity when it reduces findability.

### 13.6 Documentation and help

Help should be task-oriented and contextual.

Use:

- Clear links to relevant documentation.
- Inline hints for technical setup.
- Examples close to implementation steps.
- Troubleshooting paths from error states.

Avoid:

- Generic “Learn more” links without context.
- Sending users to documentation when the UI can explain the issue.

## 14. Interaction Behaviour

### 14.1 Immediate feedback

Every interaction should produce visible feedback within `100ms`.

Use:

- Optimistic UI where safe.
- Loading indicators.
- Disabled states.
- Progress indicators.
- Inline validation.

### 14.2 Confirmation over assumption

Destructive actions require confirmation.

Examples:

- Delete application.
- Revoke certificate.
- Disconnect institution.
- Remove user access.
- Change production configuration.

Confirmation dialogs must:

- Explain consequences.
- Clarify irreversibility.
- Use explicit action labels.
- Avoid vague wording.

### 14.3 User control and freedom

Provide:

- Undo where safe.
- Cancel.
- Back navigation.
- Draft preservation.
- Safe exits.

Avoid irreversible flows without warning.

## 15. Naming and Content Rules

### 15.1 Voice

The product voice is:

- Clear.
- Calm.
- Professional.
- Helpful.
- Direct.

### 15.2 Preferred terms

Use:

- Application.
- Organisation.
- Environment.
- Sandbox.
- Production.
- Institution.
- Permission.
- Role.
- Certificate.
- Connection.

Avoid exposing internal engineering names unless the audience is explicitly technical and the term is necessary.

### 15.3 Error copy formula

Use this structure:

1. What happened.
2. Why it matters.
3. What the user can do next.

Example:

```txt
We could not save this role because one permission is no longer available. Review the selected permissions and try again.
```

### 15.4 Destructive action copy

Be specific.

Bad:

```txt
Are you sure?
```

Good:

```txt
Delete production application?
This will permanently remove the application and stop any integrations using it. This action cannot be undone.
```

## 16. Yapily UI Library Implementation Defaults

The Yapily UI Library is a React component library following atomic design principles. Components should be reusable, testable, accessible, tree-shakeable, and easy to maintain.

### 16.1 Library principles

- Atomic design: atoms -> molecules -> organisms.
- CSS variable theming using `--yp-ui-*` variables.
- TypeScript support for all components.
- Semantic HTML and ARIA best practices.
- Keyboard support throughout.
- Tree-shakeable imports.
- No runtime CSS-in-JS unless explicitly required by the application.

### 16.2 Imports

Good:

```tsx
import { Button } from "@yapily/yapily-ui-lib";
import "@yapily/yapily-ui-lib/dist/yapily-ui-lib.css";
```

Avoid importing the entire library when only a small set of components is required.

### 16.3 Component composition

Prefer composition over modification.

Good:

```tsx
function MyCustomButton(props) {
  return <Button className="my-custom-class" {...props} />;
}
```

Avoid cloning and modifying component internals.

### 16.4 Page shell default

Use this pattern for product surfaces. In light mode, `bg-background` must resolve to a light background.

```tsx
<main className="min-h-screen bg-background text-foreground">
  <div className="mx-auto max-w-7xl px-6 py-8">
    {/* Page content */}
  </div>
</main>
```

### 16.5 Standard focus style

```tsx
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
```

### 16.6 Standard transition

```tsx
className="motion-safe:transition-colors motion-safe:duration-150 motion-reduce:transition-none"
```

### 16.7 Component defaults

#### Button

- Background: primary token.
- Text colour: primary foreground token.
- Padding: `0.5rem 1rem`.
- Border radius: `0.5rem`.
- Font weight: `600` or `700`.
- Minimum target: `44px x 44px`.

#### Input

- Background: surface/background token.
- Border: input/border token.
- Text colour: foreground token.
- Padding: `0.5rem 0.75rem`.
- Border radius: `0.5rem`.
- Minimum target: `44px x 44px`.

States:

- Default: neutral border.
- Focus: primary/accent ring.
- Error: error border and message.
- Disabled: muted background and disabled cursor.

#### Avatar

- Use circular avatars for users.
- Use square or rounded-square avatars for organisations or brands.
- Use initials only when no image is available.
- Ensure accessible labels are present where needed.

#### Badge

- Use badges for status, counts, labels, and metadata.
- Keep text short.
- Pair colour with text.
- Avoid decorative badges.

#### Select, radio, and checkbox

- Use standard input styling adapted to the control.
- Maintain minimum target sizes.
- Preserve visible focus states.
- Support keyboard interaction.

## 17. CSS Variable Reference

```css
:root {
  /* Brand colours */
  --yp-color-primary: #003839;
  --yp-color-secondary: #333333;
  --yp-color-accent: #63dfb3;
  --yp-color-teal-100: #63dfb440;
  --yp-color-teal-400: #63dfb3;
  --yp-color-teal-500: #2db89a;
  --yp-color-teal-600: #1a9d88;
  --yp-color-teal-700: #007474;
  --yp-color-teal-800: #004a52;
  --yp-color-teal-900: #003839;

  /* Neutrals */
  --yp-color-gray-50: #f8f8f9;
  --yp-color-gray-100: #f5f7f7;
  --yp-color-gray-200: #f0f3f3;
  --yp-color-gray-300: #e0e7e7;
  --yp-color-gray-400: #d1d4da;
  --yp-color-gray-450: #9ca3af;
  --yp-color-gray-500: #9ca2b0;
  --yp-color-gray-600: #666666;
  --yp-color-gray-650: #545454;
  --yp-color-gray-700: #444444;
  --yp-color-gray-800: #333333;
  --yp-color-gray-900: #191919;

  /* Status */
  --yp-color-red-25: #fef5f5;
  --yp-color-red-50: #fef2f2;
  --yp-color-red-100: #feebeb;
  --yp-color-red-200: #fecaca;
  --yp-color-red-500: #f23839;
  --yp-color-red-700: #e70001;
  --yp-color-red-900: #ad0000;
  --yp-color-green-50: #f0fdf4;
  --yp-color-green-200: #bbf7d0;
  --yp-color-green-600: #16a34a;
  --yp-color-green-700: #00aa39;
  --yp-color-green-800: #166534;
  --yp-color-green-900: #005e20;
  --yp-color-green-bg: #f2fbf5;
  --yp-color-blue-50: #eff6ff;
  --yp-color-blue-200: #bfdbfe;
  --yp-color-blue-500: #3b82f6;
  --yp-color-blue-700: #1e40af;
  --yp-color-blue-outline: #8db8f8;
  --yp-color-yellow-50: #fffbf2;
  --yp-color-yellow-200: #fed7aa;
  --yp-color-yellow-300: #fab300;
  --yp-color-yellow-500: #f59e0b;
  --yp-color-yellow-700: #92400e;
  --yp-color-yellow-800: #726942;
  --yp-color-yellow-900: #6b4d00;

  /* Typography */
  --yp-font-family: "Inter", system-ui, sans-serif;
  --yp-font-size-xs: 0.75rem;
  --yp-font-size-sm: 0.875rem;
  --yp-font-size-md: 1rem;
  --yp-font-size-lg: 1.25rem;
  --yp-font-size-xl: 1.5rem;
  --yp-font-size-2xl: 2.25rem;
  --yp-font-weight-normal: 400;
  --yp-font-weight-medium: 500;
  --yp-font-weight-semibold: 600;
  --yp-font-weight-bold: 700;
  --yp-line-height-xs: 1;
  --yp-line-height-sm: 1.25;
  --yp-line-height-md: 1.5;
  --yp-line-height-lg: 1.75;

  /* Spacing */
  --yp-space-2xs: 0.25rem;
  --yp-space-xs: 0.5rem;
  --yp-space-sm: 0.75rem;
  --yp-space-md: 1rem;
  --yp-space-lg: 1.25rem;
  --yp-space-xl: 1.5rem;
  --yp-space-2xl: 2rem;
  --yp-space-3xl: 2.5rem;
  --yp-space-4xl: 3rem;

  /* Shape */
  --yp-radius-xs: 0.125rem;
  --yp-radius-sm: 0.375rem;
  --yp-radius-md: 0.5rem;
  --yp-radius-lg: 0.6rem;
  --yp-radius-xl: 1.5rem;
  --yp-radius-pill: 9999px;
  --yp-border-width-sm: 0.06rem;
  --yp-border-width-md: 0.13rem;
  --yp-border-width-lg: 0.19rem;

  /* Sizing */
  --yp-icon-size-xs: 0.75rem;
  --yp-icon-size-sm: 1rem;
  --yp-icon-size-md: 1.25rem;
  --yp-icon-size-lg: 1.5rem;
  --yp-icon-size-xl: 2rem;
  --yp-icon-size-2xl: 2.5rem;
  --yp-icon-size-3xl: 3rem;
  --yp-icon-size-4xl: 4rem;
  --yp-touch-min-height: 44px;
}
```

## 18. Do / Don't Summary

### Do

- Use brand tokens from this file.
- Keep light mode backgrounds light.
- Use semantic tokens in components.
- Use accessible components.
- Use familiar enterprise patterns.
- Keep layout calm and structured.
- Make environment and entity context visible.
- Include all important UI states.
- Write plain, useful copy.
- Prefer inline guidance over hidden help.
- Preserve user progress.
- Design for long-session technical users.
- Import only required components.
- Extend components via CSS variables or composition.

### Don't

- Use dark green or dark teal as a full-page background in light mode.
- Create decorative dashboards.
- Use colour without text meaning.
- Hide critical actions only on hover.
- Use placeholder-only form labels.
- Use toasts for critical errors.
- Use generic error messages.
- Remove focus outlines.
- Overload pages with metrics.
- Invent new interaction patterns unnecessarily.
- Make production and sandbox look interchangeable.
- Hardcode colours where tokens exist.
- Modify UI library internals unless unavoidable.
- Disable accessibility features.
- Use hardcoded pixel values outside the spacing system.

## 19. Quality Checklist

Before shipping or generating a design, verify:

- [ ] The main user goal is clear.
- [ ] Light mode backgrounds are light.
- [ ] There is only one primary action per section.
- [ ] The current organisation, application, and environment are clear where relevant.
- [ ] Empty, loading, error, success, disabled, and permission-limited states are covered.
- [ ] Forms have visible labels and inline validation.
- [ ] Destructive actions require confirmation.
- [ ] Focus states are visible.
- [ ] Keyboard navigation works.
- [ ] Screen-reader semantics are correct.
- [ ] Colour contrast meets WCAG AA.
- [ ] Light and dark themes have been checked independently.
- [ ] Copy is plain, helpful, and specific.
- [ ] No raw backend errors are exposed.
- [ ] The UI avoids unnecessary novelty.
- [ ] The design reduces cognitive load and support burden.
- [ ] Components are composed rather than duplicated.
- [ ] CSS variables are used for theming.
- [ ] Production-impacting actions are clearly labelled and confirmed.

## 20. Final Rule

When uncertain, choose the option that is:

1. Clearer.
2. Safer.
3. More accessible.
4. More predictable.
5. Easier to maintain.
6. More respectful of users operating critical financial infrastructure.
