# Design system reference — change brief

For `design-system-reference.html` (the Claude Design source that exports to `/embeds/`).

Ordered: accuracy fixes first, then the one structural change that's worth more than everything else, then polish.

---

## Before anything else — two facts to confirm

These aren't design changes. They're claims currently published that I can't verify, and both are on a page a hiring manager may read closely.

### A. The efficiency numbers

The Shared core page shows four before/after cards:

- 46 hard-coded colour values → 16 primitives + 11 semantic aliases
- Two separate dark themes → one inverse mode
- Three radius scales → one 2 / 6 / 8 / 10 / 14 / pill scale
- Per-system easing and duration → 150ms standard, 200ms enter, 300ms overlay

**Confirm these were counted, not estimated.** If they came from reading compiled stylesheets rather than a measured before-and-after, either mark them approximate or remove the "before" column and present only the current structure.

### B. The gradient heading values

The Mark page now shows:

```
linear-gradient(96deg, #FFFFFF 18%, #63DFB3 92%)
linear-gradient(96deg, #003839 20%, #014444 95%)
```

An earlier version carried a note saying these were a reconstruction and the real rule had not been seen. That note is gone.

**If the values were verified against the live stylesheet, nothing to do.** If the note was removed without verifying, either restore a short caveat or delete the two code lines and keep only the visual demonstration. Publishing reconstructed values as fact is the one thing on this page that could be shown to be wrong.

---

## Tense fix — proposal vs. shipped

The before/after cards read as a recommendation rather than a history. The note under the first card:

> "Mark's inline hexes and Pipes' theme block collapse into one source"

Present tense, with the "before" values struck through, reads as *this is what we should do*.

**If the three-tier structure shipped**, change all four notes to past tense:

- "collapsed into one source"
- "were the same mapping — now defined once"
- "were three scales — now one"
- "were identical curves already, just unnamed — now named"

**If it's a proposal**, say so in the section intro and flag it — because the case study currently states three tiers as built, and the two would contradict each other.

---

## 1. The change worth making — a live re-skin

**This is the highest-value item on the list. Everything below is polish by comparison.**

The whole argument of the page is *components read semantic tokens, so swapping the token values re-skins everything without touching a component*. Right now that argument is made in a table, and the proof is a small dark-mode strip in the bottom corner of the Pipes page.

Make it a control.

### 1a. Theme toggle on Pipes

Put a **Light / Dark** toggle in the Pipes section header, next to the sub-nav chips. Flipping it should re-render the entire Pipes section — palette, semantic token table, components, card, data table, sidebar — by swapping token values only.

Then the existing "Dark mode — same components, remapped tokens" strip can be deleted, because the whole page becomes the demonstration.

The semantic token table should visibly track the toggle: whichever column is active gets a highlight. That connects the abstraction to what the reader is looking at.

### 1b. Brand switcher on Custard

Same idea, aimed at the white-label claim. Above the hosted login composition, three or four preset brand chips:

`Neutral (default)` · `Brand A` · `Brand B` · `Brand C`

Each preset overrides only the four values the real configurator exposes:

- brand colour
- text colour
- button text colour
- page background

Everything else — spacing, type scale, component structure, the 44px targets — stays put. Use invented brand names and colours, **not** real customers.

Under it, one line:

> Four values. No component edited. This is what the Hosted Pages configurator writes into.

That single interaction proves the architecture better than the entire token table above it, and it links the design system directly to a shipped product.

---

## 2. Default the embed to Shared core

The iframe is 900px tall on a page where the visitor may not scroll. Whatever loads first is most of what they see.

**Load "Shared core" by default, not "Yapily UI · Pipes."** Shared core carries the argument — what cascades, what doesn't, and why Custard is excluded. Pipes is the inventory, and inventory is what people expect from a design system page. Lead with the thinking.

---

## 3. Accessibility — the page must pass its own rules

The reference claims an AA floor and visible focus on every interactive element. It will be read by people who check.

- **Keyboard test the whole thing.** System chips, sub-nav chips, any new toggles. Every one reachable by Tab, with a visible focus ring — the 3px @ 35% ring the page documents.
- **The chips are the risk.** If they're rendered as `div` with a click handler they won't be focusable. They need to be `button` elements, or have `role`, `tabindex` and key handling.
- **Contrast-check the new toggles** against whichever ground they sit on, in both states.
- **Reduced motion:** if the theme toggle animates, wrap the transition in `@media (prefers-reduced-motion: reduce)`.

---

## 4. Print the contrast ratios

On each status pair, show the number:

```
Success
#08611F text · 7.1:1        ← text colour, with its ratio
#09893C accent · 4.2:1      ← accent, labelled non-text
```

The prose already explains the rule. Printing the ratios turns the claim into a receipt, and it's the detail that separates "we care about accessibility" from "we measured it."

Use the real computed values, not approximations.

---

## 5. Name the neutrals

The Pipes ramps show bare hex — `FFFFFF`, `F9FAFB`, `F5F5F5`. The Shared core page names the same values `neutral-0`, `neutral-50`, `neutral-100`.

Add the token name above each hex on the Pipes ramps. Right now the two pages look like separate documents describing the same colours; naming them connects the tiers.

---

## 6. Fix "Neutrals — dark surfaces"

That ramp ends `A3A3A3` and `63DFB3` — a light grey and the mint. Neither is a dark surface, and mint isn't a neutral.

Rename to **"Neutrals — dark mode"**, and either move the mint out or label it explicitly as the dark-mode primary. In a reference about precision, a mislabelled ramp is the kind of thing that gets noticed.

---

## 7. Copy-to-clipboard on token names

Click any token name or hex to copy it. Small, cheap, and it signals the artefact was built to be used rather than displayed.

Confirmation should be a brief inline state, not a toast.

---

## 8. Fill the product card media well

The Payments card on the Mark page has an empty gradient rectangle where media would sit. It reads as unfinished rather than as a placeholder.

Either put something in it, crop the card so the well isn't shown, or label it `media well · 16:9`.

---

## 9. Page title

Confirm the exported `<title>` isn't still **"Bundled Page."** Anyone who opens the reference full-screen gets it in their tab.

Set it to:

```
Yapily design systems — reference
```

---

## What to leave alone

Worth saying, because it's already right:

- The three-panel "what cascades" layout on Shared core. Clear, and the Custard panel being visually distinct from the other two carries the asymmetry without explanation.
- The "Deliberately not shared" list with per-item reasoning. The strongest content on the page.
- The brand primitives table with *In Mark* / *In Pipes* columns — one definition, two consumers, shown rather than described.
- The hosted login composition. It's the only place a real end-user surface appears, and it anchors an otherwise abstract page.
- The typography specimen with live specs on the right.
- The neutral-by-contract framing throughout Custard.
