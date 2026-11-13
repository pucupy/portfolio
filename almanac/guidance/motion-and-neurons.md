# Motion and the neuron network

Sources: Emil Kowalski's "Animations on the Web" principles via delphi-ai/animate-skill, detail.design (a gallery of interface details), and the v3 visual language.

## General
- Ease-out for entering (cubic-bezier(.2,.8,.2,1)) and ease-in-out for moving. 150–300ms for UI; up to 600ms for brand moments.
- Animate from the origin of the trigger (transform-origin). Use a directional wizard step transition (forward slides left).
- Use height animation only via `grid-template-rows: 0fr → 1fr`, never JS-measured heights.
- Toasts stack, and expand on hover.
- Reduced motion: replace movement with an opacity cross-fade, or remove it.

## Neurons (brand animation)
- Home globe: an even, dense net (420 neurons, 3–4 links each, gentle curves). Credit decisions travel along the network lines from neuron to neuron (4–7 hops), never as free arcs; each neuron lights as the pulse passes, then a tick or cross lands on the last neuron.
- The spark is a **neuron**. Neurons never rotate; they **light up** (brightness: blue → white), react to the cursor by brightening and drifting slightly, and never fade by opacity.
- Lines are 1px and subtle, never crossing and never too close; every neuron is connected.
- **Decision beams:** a short light pulse travels along the lines from the top of the network downwards, lighting each neuron it passes. At the end it resolves as **approved** (tick) or **declined** (cross): a small white 12px disc with a blue glyph, centred on the landing neuron, inside a white pulse ring. The glyph differs, so the outcome doesn't depend on colour. At most 3 beams at once, roughly 1 every 1.1–2.4s, with about 2 in 3 approved.
- Icons: `assets/neuron-approve.svg` and `assets/neuron-reject.svg` (from your uploads, recoloured with currentColor).
- Reduced motion: a static network with no beams.
- Future idea (from the city-and-globe reference): place the network on a faint globe arc over a city at night. Not built; needs an image.

## Details worth borrowing (detail.design)
- The copy button turns into a check for 1.2s.
- Numbers tick up when a KPI changes, using tabular numerals.
- The focused field's label tints to the accent.
- The pressed state scales to 0.98 on touch only.

- Behind the globe: a slow drifting gradient (brand blue, a lighter periwinkle, deep navy and a hint of cream). It loops over about 1 minute, never flashes, and stops under reduced motion. No video.
- No grid under the globe network; the neurons and their lines carry the shape on their own.
