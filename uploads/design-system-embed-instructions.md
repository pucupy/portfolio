# Embedding the design system reference

`yapily-design-systems.html` → `design-systems.html`

---

## What the file is

A self-contained bundled page. 500KB. React 18.3.1, seven Inter woff2 files and one PNG are all packed inside it — **no network requests at render time**, same as your portfolio pages. It requires JavaScript.

Because it's a bundled page and so is `design-systems.html`, do **not** try to merge them into one document. Two bundlers unpacking into the same DOM will fight over asset IDs and script order. Use an iframe.

---

## 1. File placement

Put it in a subdirectory so it isn't mistaken for a portfolio page:

```
/embeds/design-system-reference.html
```

Rename it. `yapily-design-systems.html` sitting at the site root will get crawled and indexed as a separate page competing with your case study.

---

## 2. The iframe

Drop this where the screenshot grid currently sits in `design-systems.html`:

```html
<figure class="embed embed--tall">
  <iframe
    src="/embeds/design-system-reference.html"
    title="Interactive reference for the Yapily design systems — palettes, semantic tokens, type, spacing, elevation and components"
    loading="lazy"
    width="100%"
    height="900"
    style="border:1px solid rgba(244,246,245,.16); border-radius:8px; background:#fff; display:block;"
    referrerpolicy="no-referrer">
  </iframe>
  <figcaption>
    Live reference — switch between Yapily UI, Custard and Mark.
    <a href="/embeds/design-system-reference.html" target="_blank" rel="noopener">Open full screen ↗</a>
  </figcaption>
</figure>
```

**Notes on the attributes:**

- `loading="lazy"` matters. The parent page is already ~3MB; don't add 500KB to first paint for something below the fold.
- **No `sandbox` attribute.** The bundler needs `allow-scripts` and `allow-same-origin` together, which browsers warn about as it defeats the sandbox anyway. Since you control the file, omitting it is cleaner than a sandbox that grants everything.
- `height="900"` is a starting point — the prototype is tall. Test it; you may prefer 1000–1100 on desktop.
- The full-screen link is not optional. On a phone, a 900px iframe of a dense reference is unusable, and the link is the escape hatch.

---

## 3. Mobile

Below ~700px the iframe will be a scroll trap — two scroll contexts, neither obviously in charge. Either:

```css
@media (max-width: 700px) {
  .embed--tall iframe { display: none; }
  .embed--tall .embed__fallback { display: block; }
}
```

…with a fallback block that's just the caption plus the open-full-screen link. Or set the iframe to `height: 60vh` on mobile so the page scroll still works around it.

I'd do the first. A design system reference isn't a phone document.

---

## 4. Add a title to the bundled file

Its `<title>` is currently **"Bundled Page"**. Anyone who opens it full screen gets that in their tab. Before deploying, edit the `<title>` in the head of the exported file:

```html
<title>Yapily design systems — reference</title>
```

That's a safe edit — it's outside the bundler payload.

---

## 5. Screenshots to keep

Don't delete all of them. The prototype and the Figma documentation prove **different things**:

- The prototype proves the *system* — tokens, theming, component set.
- The Figma pages prove the *documentation practice* — anatomy, states, dependencies, usage rules.

I've kept three in the case study copy: **bank list anatomy**, **button footer** (twelve variants), and **toasts**. Those show documentation depth the prototype doesn't attempt. The other seven are now redundant.

---

# Discrepancies to fix before this goes public

Ordered by how much they'd cost you.

## 1. It names the typeface — high priority

The Custard section reads *"Type scale · Google Sans, DM Sans fallback"* and *"no teal, no Inter, nothing that reads as Yapily."*

This is the thing I flagged on the case study copy and you deliberately kept out: a proprietary Google typeface named as the default of a white-label system, on a portfolio that also names Google as a customer. Two questions with no upside — the licence, and whether the system was built around one client.

**Fix:** change the heading to `Type scale` and the sample specs to sizes only. The point of that section is the scale, not the family.

## 2. It shows the failing contrast pair — high priority

The status swatches render as *"Success #09893C on #E1FFEB"*, *"Warning #D08700 on #FEFCE8"*. Those are the accent-on-tint combinations your own spec says fail as text at around 4.2:1, which is why the darkened text partners (`#08611F`, `#973C00`, `#C10007`) exist.

A design system reference that claims an AA floor and demonstrates a sub-AA text pairing is exactly what a design-systems-literate interviewer will spot, and it undercuts the accessibility section of the case study.

**Fix:** render the swatch text in the darkened partner and label the saturated value as *accent — bars and icons only*. That turns a bug into a demonstration of the pairing rule.

## 3. "Proposal — three tiers instead of two parallel palettes" — needs a decision

That heading, with its before/after/note columns, reads as a **recommendation**. The case study states the three-tier structure as what was built.

Both can't be right on the same site. Which is it — shipped, or proposed? If proposed, the case study needs correcting and the prototype should be labelled **Concept**. If shipped, change the prototype heading to *"Three tiers, not two parallel palettes"* and keep the before/after as a story of what changed.

## 4. Internal provenance notes are visible — medium

Two blocks of handoff language are on the page:

- *"Not yet verified: the angle and stop percentages below are a reconstruction… paste that rule and these will be corrected."*
- *"Values read directly from the compiled stylesheet. Semantic token values marked as inferred where the theme block was not present in the source."*

Honest, and right for a handoff document. Wrong for a portfolio: it tells a hiring manager you published values you hadn't verified.

**Fix:** either verify the gradient rule and delete both notes, or delete the gradient-stops block entirely. The Mark section works without it.

## 5. It doesn't say components are shared — medium

The prototype frames Custard purely in terms of **tokens** — *"inherits only the 4px spacing base and the 44px touch target."* Nothing says Custard uses Yapily UI's components with the brand tokens overridden, which is the thing you confirmed and which the case study now leads on.

A reader of the prototype alone would conclude Custard is a separate component library. That's the more impressive fact being lost.

**Fix:** one line in the Custard intro — *"Same components as Yapily UI, with every brand-carrying token overridden."*

## 6. Coverage figures — check

The Mark demo shows **2,000 banks / 19 countries**, which matches yapily.com and the reconciled figures across your CV and case studies. No action, just confirming it's consistent.
