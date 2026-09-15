# Hosted Pages — flow complexity

*Export for Claude Design. Build Sections 1–2. Section 3 is checks for Ale and should not be built.*

Two diagrams and the prose that sits around them, for the existing Hosted Pages case study. Placement: after the problem framing, before the design decisions — the point of this section is to establish why the flow couldn't be fixed with one redesign.

---

## 1. Build brief

**Assets:** `hosted-pages-variation-space.svg` and `hosted-pages-authentication-branch.svg`.

Both are self-contained: inline `<style>`, no external dependencies, `viewBox` at 680 wide with `width="100%"`, and a `prefers-color-scheme` block so they invert cleanly if the portfolio has a dark mode. Drop them in as `<img>` or inline the markup — inlining is better if you want the text to be selectable and indexed.

**Colour.** Built on `#C9A86A`. Gold marks anything set by the customer's own integration; neutral greys mark everything set by product, market or regulation. That distinction is load-bearing in both diagrams — it's what makes the point that you didn't control the shape of your own flow. Don't recolour to make it prettier.

The supporting ramp, if you need to match other elements: `#F8F3E9` lightest fill, `#E2D2AC` light, `#C9A86A` base, `#9A7C42` mid, `#6B5528` text.

**Typography.** The SVGs specify `'Inter', -apple-system, …`. Swap the first entry for whatever the portfolio actually uses. Text is 14px for labels and 12px for options — at 680 wide these render 1:1, so don't scale the SVG up beyond its container.

**Layout.** Full content width, one above the other, with the prose between them. They are not a pair to sit side by side — the second is a continuation of the first.

**Captions:** each takes a one-line caption below it, in the case study's caption style, not baked into the image.

---

## 2. Content

### One flow, forty-eight-plus versions of itself

Hosted Pages looks like four screens. It is not four screens.

Five decisions branch before a user sees anything, and each one multiplies the ones after it. Two of the five are set by the customer's integration rather than by us — the licence they hold, and whether they passed an institution ID in the API call. The rest follow from the product, the market and the regulation that applies to it.

*[Diagram: hosted-pages-variation-space.svg]*
*Caption: Five branching decisions. Gold marks what the customer's integration decides; grey marks what the product and market decide.*

The grid isn't rectangular, which is the harder problem. cVRP exists only in the UK, so the market dimension doesn't multiply it. Hiding the consent sheet is available to customers on their own licence and to nobody else. A preselected institution on a direct licence skips every screen we make and goes straight to the bank. So the matrix has holes in it, and the holes aren't symmetrical — you can't write a rule that covers every cell, because some cells don't exist and others exist only under one parent.

Then authentication branches again, and this is where the flow stops being ours at all.

*[Diagram: hosted-pages-authentication-branch.svg]*
*Caption: Four authentication models. Which one a user gets depends on their bank and their country.*

Four models. A decoupled QR handoff from desktop to phone. A browser redirect. An embedded login where credentials are entered in our page. And, in Lithuania, the Netherlands and Sweden, no screen from us at all — the flow hands straight off. Which of the four a given user gets is decided by their bank and their market, not by us and not by our customer.

The redirect path adds a further wrinkle: EU payments require additional information, and whether we show a screen to collect it depends on whether the customer included it in their API call. Same product, same market, same bank, different number of screens — determined by how carefully the integration was built. That is one of the clearest arguments for why the documentation and the UX guidance were product work rather than support work. A customer who read them gave their users a shorter journey.

### What this meant for how we worked

Three things follow from the shape above, and they explain most of the decisions in the rest of this case study.

**Prototype testing could only take us so far.** You cannot usefully prototype a flow whose shape is chosen at runtime by someone else's integration and someone else's bank. It's why the experimentation pipeline had to run against production traffic, and why the research programme reached around a thousand real people connecting real accounts rather than a panel working through a mock-up.

**Improvement had to be incremental.** There was never a redesign available that fixed the whole surface, because there was never a whole surface — only a sparse matrix of paths, each of which had to be measured and improved on its own terms. Hundreds of variants across bank selection, the QR handoff and embedded logins, between 2023 and 2026.

**Some of our screens were optional.** Both the consent sheet and the QR screen can be switched off by customers on their own licence. Designing screens a paying customer is explicitly permitted to delete changes what the screen has to do: it has to earn its place in their flow, not just in ours.

---

## 3. Checks — do not build

These diagrams were reconstructed from two screenshots of your source file, not traced from it. Everything below is worth a minute against the original before it publishes.

- [ ] **Is "N/A" a separate branch from the Lithuania / Netherlands / Sweden path?** I've merged them into one "no auth screen" column. If they're distinct, that's a fifth authentication model.
- [ ] **Does Multi SCA have sub-methods** the way Single SCA has SMS and other methods? Currently drawn as a leaf.
- [ ] **UK vs EU result wording.** I've read the confirmation screens as "initiated" versus "scheduled" and described the difference as regulatory. Confirm — if it's a copy choice rather than a regulatory one, that sentence needs to change.
- [ ] **"Yapily Connect"** as the counterpart to a direct licence — confirm that's the customer-facing name and that it's fine to publish.
- [ ] **The UK agent, data-only path.** Treated as an exception. If it's a sixth dimension it belongs in the first diagram instead.
- [ ] **Is there a separate mobile tree?** Your source is titled "Desktop UX flows". If mobile branches differently, the section should say so, and "forty-eight-plus" is a bigger number than it looks.
- [ ] **Payment type and rail** — domestic, scheduled, periodic, bulk; SEPA, FPS, CHAPS, BACS. Not in the first diagram. If they change the screens rather than just the API call, they're a sixth multiplier.
- [ ] **Publication check.** Event names from your source (`hosted_page_view`, `qr_code_generated`, `embedded_type_selected` and the rest) have been left out deliberately — internal instrumentation, no value to a reader. Confirm nothing else in the two diagrams is commercially sensitive.

`[NOTE]` Your source file is 23,119 × 24,182 pixels — around 560 megapixels. It will not render in a browser and most image tools refuse to open it. If you want the original in the portfolio as a "here's the real thing" artifact, it needs re-exporting at something under about 4,000px on the long edge.
