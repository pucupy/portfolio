# Web Interface Guidelines

## Purpose

Use these guidelines whenever designing, reviewing, or implementing a web interface.

The goal is to create interfaces that are:

- Accessible
- Keyboard-operable
- Responsive
- Fast
- Forgiving
- Predictable
- Visually polished
- Robust across browsers and devices
- Consistent with the project's existing design system

These guidelines complement the project's design system. **Always follow the existing design tokens, components, patterns, and brand rules before introducing new ones.**

When reviewing an interface, do not only evaluate the happy path. Consider loading, empty, error, disabled, focus, hover, active, responsive, long-content, and accessibility states.

---

# 1. Accessibility

## Keyboard

- Every interactive flow must be fully keyboard-operable.
- Follow WAI-ARIA Authoring Practices where applicable.
- Never create interactions that require a pointer when a keyboard equivalent is expected.
- Ensure logical tab order.
- Never remove browser keyboard behaviour unnecessarily.

## Focus

- Every focusable element must have a visible focus indicator.
- Prefer `:focus-visible` over `:focus`.
- Use `:focus-within` for grouped controls where appropriate.
- Never remove focus outlines without providing an equally visible alternative.
- When opening dialogs, drawers, or other modal interactions:
  - Move focus into the component.
  - Trap focus where appropriate.
  - Return focus to the triggering element when the interaction closes.
- Focus the first invalid form field after failed submission.

## Semantics

Prefer native HTML elements before ARIA:

- `<button>` for actions
- `<a>` / `<Link>` for navigation
- `<label>` for form labels
- `<input>`, `<select>`, `<textarea>` for inputs
- `<table>` for tabular data

Use ARIA to improve semantics, not to replace appropriate native HTML.

## Accessible names

- Every interactive control must have an accessible name.
- Icon-only buttons must have a descriptive `aria-label`.
- Decorative icons should use `aria-hidden="true"`.
- Visual labels and accessible labels must communicate the same meaning.
- Do not rely exclusively on visual context.

## Headings

- Maintain a logical heading hierarchy from `<h1>` through `<h6>`.
- Provide a "Skip to content" link.
- Use `scroll-margin-top` when headings are deep-linked beneath sticky headers.

## Status and errors

Never communicate meaning using colour alone.

Use:

- Text
- Icons
- Labels
- Appropriate ARIA semantics

Use `aria-live="polite"` for non-critical asynchronous updates such as:

- Toasts
- Inline validation
- Status updates

---

# 2. Touch & Interaction

## Hit targets

- Interactive elements should have generous hit areas.
- If a visual target is smaller than 24px, provide a hit target of at least 24px.
- On mobile, target at least **44px** where practical.
- Avoid tiny controls that require precision.

If the visual element must remain small, expand the interactive area rather than enlarging the visual itself.

## No dead zones

If an area visually appears interactive, make the whole appropriate area interactive.

Examples:

- Checkbox + label
- Radio + label
- List item + navigation affordance
- Card actions

Do not make users guess where they can click.

## Links

Use real links for navigation:

```html
<a href="/settings">Settings</a>
```

or the framework equivalent.

Do not use:

```html
<div onClick={...}>Settings</div>
```

for navigation.

Links must preserve standard browser behaviour:

- Cmd/Ctrl + click
- Middle click
- Open in new tab
- Copy link
- Browser history

## Forgiving interactions

Interactions should be forgiving rather than finicky.

Prefer:

- Larger hit areas
- Clear affordances
- Predictable behaviour
- Generous spacing
- Obvious hover/focus states

## Mobile interaction

- Prevent accidental double-tap zoom on controls where appropriate using `touch-action: manipulation`.
- Set `-webkit-tap-highlight-color` intentionally.
- Respect device safe areas and insets.

---

# 3. Forms & Inputs

## Labels

Every form control must have an accessible label.

Use an explicit relationship:

```html
<label for="email">Email</label>
<input id="email" name="email" />
```

Do not rely on placeholder text as the only label.

## Mobile inputs

On mobile:

- Input text should generally be at least `16px`.
- Use the correct `inputmode`.
- Use the correct HTML `type`.
- Avoid triggering unwanted iOS zoom.

## Autocomplete

Use meaningful:

- `name`
- `autocomplete`
- `type`

values to support browser autofill and password managers.

## Typing

Never aggressively block user input.

For example, if a field expects numbers:

- Allow the user to type.
- Validate the value.
- Explain the error.

Do not prevent keystrokes without giving the user a useful explanation.

## Paste

Never disable paste in:

- `<input>`
- `<textarea>`
- Authentication fields
- One-time-password fields

Support password managers and 2FA workflows.

## Submit behaviour

- Keep submit enabled until submission begins.
- Once submission starts, prevent duplicate submissions.
- Show a loading state.
- Preserve the original button label.
- Use an idempotency key where appropriate.

Do not pre-disable submit simply because a form is incomplete.

Allow users to submit so validation can explain what needs fixing.

## Enter

For simple single-input forms:

- Enter should submit.

For multi-field forms:

- Enter should behave predictably.
- In a textarea:
  - Enter creates a new line.
  - Cmd/Ctrl + Enter can submit.

## Validation

- Show errors next to the relevant field.
- Clearly explain how to fix the problem.
- On submission, focus the first invalid field.
- Do not rely on colour alone.

## Placeholders

Use placeholders only as supporting examples.

Good:

```text
+44 7700 900123…
```

Bad:

```text
Phone number
```

Use the actual label for the field name.

Use the ellipsis character `…`, not three periods `...`.

## Unsaved changes

Warn users before navigating away when meaningful data could be lost.

---

# 4. Loading & Async States

## Buttons

When an action is processing:

- Show a loading indicator.
- Keep the original button label.
- Prevent duplicate submissions.

Example:

```text
Save
```

becomes:

```text
Saving…
```

rather than:

```text
Loading…
```

where possible.

## Loading states

Avoid flickering spinners and skeletons.

Recommended behaviour:

- Delay showing transient loading indicators by roughly 150–300ms.
- Keep them visible for roughly 300–500ms once shown.

Use skeletons when they meaningfully communicate the structure of the upcoming content.

## Skeletons

Skeleton layouts should closely mirror the final content.

Avoid skeletons that cause the page to jump when real content arrives.

## Optimistic updates

Use optimistic updates when success is highly likely.

Pattern:

1. Update UI immediately.
2. Send request.
3. Reconcile with server response.
4. If the request fails:
   - Roll back, or
   - Provide an Undo/recovery action.
5. Clearly communicate the failure.

## Async announcements

Use polite live regions for relevant asynchronous status changes.

---

# 5. Navigation & State

## URL as state

Persist meaningful interface state in the URL when appropriate.

Examples:

- Filters
- Tabs
- Pagination
- Search queries
- Expanded sections
- Sort order

This enables:

- Sharing
- Refreshing
- Browser Back/Forward
- Deep linking

Do not unnecessarily keep shareable state exclusively in `useState`.

## Deep linking

Anything users reasonably expect to link to should be deep-linkable.

## Scroll position

Browser Back/Forward navigation should restore the user's previous scroll position.

## Page titles

`<title>` should reflect the current page/context.

Example:

```text
Settings — Acme
```

rather than:

```text
Acme
```

---

# 6. Destructive Actions

Destructive actions must be difficult to trigger accidentally.

Use either:

- Confirmation
- Undo with a safe recovery window

Examples:

- Delete
- Remove
- Cancel subscription
- Permanently discard

For reversible actions, prefer Undo where it provides a faster experience.

---

# 7. Tooltips & Help

Prefer inline explanations over tooltips.

Use tooltips as a last resort.

For tooltip groups:

- Delay the first tooltip.
- Once the user has entered the tooltip interaction context, subsequent related tooltips can appear immediately.

Do not hide essential information exclusively inside tooltips.

---

# 8. Animation & Motion

Animation should communicate:

- Cause and effect
- Hierarchy
- Spatial relationships
- State changes

Never animate simply because you can.

## Reduced motion

Always respect:

```css
prefers-reduced-motion
```

Provide a reduced-motion variant.

## Implementation

Prefer:

1. CSS
2. Web Animations API
3. JavaScript animation libraries

Avoid main-thread JavaScript animation when CSS can achieve the same result.

## Performance

Prefer compositor-friendly properties:

- `transform`
- `opacity`

Avoid animating layout-heavy properties such as:

- `width`
- `height`
- `top`
- `left`

## Easing

Choose easing based on what is moving and why.

Motion should feel physically appropriate to the interaction.

## Interruptibility

Animations should be interruptible by user interaction.

Avoid animations that trap the user or delay interaction unnecessarily.

## Input-driven

Avoid unnecessary autoplay.

Prefer animations triggered by meaningful user actions.

## Transform origin

Anchor animation to where the object visually originates.

## CSS transitions

Never use:

```css
transition: all;
```

Explicitly define the properties being animated.

Prefer:

```css
transition: transform 200ms ease, opacity 200ms ease;
```

## SVG

For animated SVG elements:

- Prefer wrapper `<g>` elements.
- Use appropriate `transform-box`.
- Set an explicit `transform-origin`.

---

# 9. Layout

## Alignment

Every element should align intentionally with something:

- Grid
- Baseline
- Edge
- Container
- Optical centre

Avoid arbitrary positioning.

## Optical alignment

Mathematical alignment is not always visual alignment.

It is acceptable to adjust positioning by approximately 1px when optical perception requires it.

## Responsive design

Test interfaces at:

- Mobile
- Laptop
- Desktop
- Ultra-wide

For ultra-wide testing, zoom out to approximately 50% to expose layout problems.

## Layout implementation

Prefer CSS layout systems:

- Flexbox
- CSS Grid
- Intrinsic sizing

Avoid measuring layout in JavaScript unless necessary.

Let the browser calculate:

- Wrapping
- Flow
- Alignment
- Sizing

## Overflow

Do not introduce unnecessary scrollbars.

Investigate unexpected overflow rather than hiding it blindly.

## Safe areas

Support device safe areas and notches where required.

---

# 10. Content & UX Writing

## Inline help

Prefer concise inline explanations over hidden help.

The user should not need to hunt for an explanation of an unfamiliar action.

## No dead ends

Every screen should provide either:

- A useful next step
- A recovery path
- Navigation elsewhere

Avoid screens that leave users stuck.

## Design all states

Every major component/page should account for:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Empty
- Sparse
- Dense
- Error
- Success
- Long content

## Long content

Design for:

- Short labels
- Typical labels
- Very long labels
- User-generated content

Never assume text will always fit the ideal example.

## Typography

- Use curly quotation marks where appropriate: `“ ”`
- Avoid widows and orphans.
- Use tabular numbers when comparing numerical values.

Example:

```css
font-variant-numeric: tabular-nums;
```

## Ellipsis

Use:

```text
…
```

not:

```text
...
```

Use ellipses for:

- Actions that open further input: `Rename…`
- Processing states: `Saving…`
- Generation states: `Generating…`

---

# 11. Internationalisation

## Locale-aware formatting

Respect the user's locale for:

- Dates
- Times
- Numbers
- Currency
- Delimiters

Do not hard-code one country's formatting rules.

## Language detection

Prefer language settings:

- `Accept-Language`
- `navigator.languages`

Do not use IP address or GPS location as a proxy for language preference.

## Translation protection

Protect brand names, product names, code tokens, and technical identifiers from automatic browser translation where appropriate:

```html
<span translate="no">ProductName</span>
```

## Non-breaking terms

Keep terms together when breaking them would reduce readability.

Examples:

```html
10&nbsp;MB
```

```html
⌘&nbsp;+&nbsp;K
```

```html
Vercel&nbsp;SDK
```

---

# 12. Performance

## Browser/device testing

Test at minimum across:

- iOS Safari
- macOS Safari
- Chromium-based browsers
- Different viewport sizes
- Constrained CPU
- Constrained network

Also test iOS Low Power Mode where relevant.

## Measure realistically

When profiling performance:

- Disable browser extensions that affect runtime.
- Use CPU throttling.
- Use network throttling.
- Inspect React re-renders.

## React performance

Keep re-renders:

- Minimal
- Cheap
- Predictable

Use tools such as React DevTools or React Scan where appropriate.

## Network

Aim for POST/PATCH/DELETE operations to complete in approximately:

**<500ms**

where technically and operationally achievable.

## Inputs

Prefer uncontrolled inputs when appropriate.

Avoid expensive controlled-input render loops.

## Large lists

Virtualize large datasets where appropriate.

Potential approaches include:

- Virtualized lists
- `content-visibility: auto`

## Images

- Preload only above-the-fold critical images.
- Lazy-load images below the fold.
- Always reserve image dimensions.
- Avoid layout shifts caused by images.

Example:

```html
<img
  src="..."
  width="800"
  height="600"
  alt="..."
/>
```

## Network optimisation

Use:

```html
<link rel="preconnect">
```

for important external asset/CDN origins when appropriate.

## Fonts

For critical fonts:

- Preload when justified.
- Subset fonts.
- Limit variable-font axes to those actually used.
- Use `unicode-range` where appropriate.

Avoid loading an unnecessarily large font payload.

## Expensive work

Do not block the main thread with expensive computation.

Move particularly long-running tasks to Web Workers where appropriate.

---

# 13. Visual Design

## Shadows

Prefer layered shadows that simulate ambient and direct light rather than a single heavy shadow.

## Borders

Combine borders and shadows when appropriate.

Semi-transparent borders can improve edge clarity without looking visually heavy.

## Border radius

Nested components should use coherent radii.

The child radius should generally be less than or equal to the parent radius and should visually follow the same curve.

## Colour consistency

When using non-neutral surfaces:

- Tint borders toward the surface hue.
- Tint shadows appropriately.
- Maintain a coherent colour temperature.

## Contrast

Prioritise accessible contrast.

Where appropriate, evaluate contrast using APCA in addition to traditional WCAG contrast ratios.

Interactive states should generally provide stronger visual contrast than the resting state:

- Hover
- Active
- Focus

## Charts

Charts must remain understandable for colour-blind users.

Never communicate a chart distinction using colour alone.

Use:

- Labels
- Shapes
- Patterns
- Position
- Annotations

where appropriate.

## Browser UI

Ensure browser/device UI matches the interface theme.

For dark interfaces, consider:

```html
<meta name="theme-color" content="#000000">
```

and:

```css
html {
  color-scheme: dark;
}
```

Use the actual project theme colours rather than blindly copying these examples.

## Text rendering

Avoid scaling text directly during animation.

Prefer animating a wrapper.

If rendering artefacts occur, investigate compositing using techniques such as:

```css
transform: translateZ(0);
```

or:

```css
will-change: transform;
```

Use these deliberately rather than everywhere.

## Gradients

Watch for gradient banding, particularly when fading into dark surfaces using CSS masks.

Use alternative rendering approaches, including background images, when they produce a cleaner result.

---

# 14. Implementation Review Checklist

Before considering an interface complete, verify:

## Accessibility

- [ ] Fully keyboard-operable
- [ ] Visible focus states
- [ ] Logical focus management
- [ ] Correct semantic HTML
- [ ] Accessible names for controls
- [ ] Icon-only controls have labels
- [ ] Colour is not the only status indicator
- [ ] Heading hierarchy is correct
- [ ] Skip link exists where appropriate

## Interaction

- [ ] Hit targets are sufficiently large
- [ ] No dead zones
- [ ] Navigation uses links
- [ ] Interactions are forgiving
- [ ] Mobile interactions are touch-friendly
- [ ] Browser zoom remains available

## Forms

- [ ] Every input has a label
- [ ] Correct input types
- [ ] Correct input modes
- [ ] Autocomplete configured
- [ ] Paste works
- [ ] Password managers work
- [ ] Validation is clear
- [ ] First error receives focus
- [ ] Duplicate submission is prevented
- [ ] Unsaved changes are handled

## States

- [ ] Loading
- [ ] Empty
- [ ] Error
- [ ] Success
- [ ] Disabled
- [ ] Hover
- [ ] Focus
- [ ] Active
- [ ] Sparse
- [ ] Dense
- [ ] Long-content states

## Responsive

- [ ] Mobile
- [ ] Tablet where relevant
- [ ] Laptop
- [ ] Desktop
- [ ] Ultra-wide
- [ ] Safe areas
- [ ] No unexpected overflow

## Performance

- [ ] No unnecessary re-renders
- [ ] Images do not cause CLS
- [ ] Large lists are handled efficiently
- [ ] Critical assets are prioritised
- [ ] Fonts are optimised
- [ ] Expensive work does not block the main thread
- [ ] Network latency has been considered

## Motion

- [ ] Reduced motion supported
- [ ] Animations are purposeful
- [ ] Animations are interruptible
- [ ] CSS preferred where possible
- [ ] Layout-heavy properties are not animated unnecessarily
- [ ] `transition: all` is avoided

## Visual quality

- [ ] Alignment is intentional
- [ ] Optical alignment considered
- [ ] Spacing is consistent
- [ ] Borders and shadows are coherent
- [ ] Nested radii align
- [ ] Contrast is accessible
- [ ] Interactive states are clearly differentiated
- [ ] Typography handles long content
- [ ] No gradient banding or rendering artefacts

---

# 15. Rules for Claude

When creating or modifying an interface:

1. **Inspect the existing design system first.**
2. Reuse existing tokens and components before creating new ones.
3. Do not introduce arbitrary colours, spacing, radii, typography, or shadows.
4. Prefer native browser behaviour over custom implementations.
5. Prefer semantic HTML over unnecessary ARIA.
6. Design all meaningful UI states, not only the happy path.
7. Treat accessibility as part of the implementation, not a final QA step.
8. Consider mobile and keyboard interaction from the beginning.
9. Preserve browser behaviours such as Back, Forward, refresh, copy link, and open in new tab.
10. Avoid unnecessary JavaScript when CSS or native browser behaviour can solve the problem.
11. Prioritise performance without compromising usability.
12. Keep interactions predictable and forgiving.
13. Never introduce a pattern that violates these guidelines without a clear technical or product reason.
14. When reviewing existing UI, identify violations explicitly and recommend the smallest appropriate improvement.
15. When implementing a fix, check adjacent states and responsive behaviour rather than fixing only the visible example.

## Priority order

When making implementation decisions, use this hierarchy:

**Accessibility → Usability → Existing Design System → Performance → Responsive behaviour → Visual polish → Delight**

A visually impressive interface that is inaccessible, confusing, slow, or inconsistent with the design system is not considered successful.

---

# Final principle

Interfaces succeed because of hundreds of small choices.

**Make each choice deliberate.**