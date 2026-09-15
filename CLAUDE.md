# Project rules — portfolio

## Web interface guidelines
`web-interface-guidelines.md` at the project root applies to **everything in this project** — every portfolio page, every case-study prototype, the interview deck, and every design system reference. Read it before designing or reviewing any interface, and follow its priority order: accessibility → usability → existing design system → performance → responsive behaviour → visual polish → delight.

Practical consequences for this project specifically:
- Focus is `:focus-visible` with a visible indicator; hit targets 44px minimum; icon-only controls carry `aria-label` and decorative icons `aria-hidden="true"`.
- Never state meaning by colour alone — pair every status colour with a word or icon.
- Design all states, not the happy path: loading, empty, sparse, dense, error, disabled, long content.
- Curly quotes, `…` not `...`, `font-variant-numeric: tabular-nums` on compared figures, `&nbsp;` in unbreakable terms.
- No `transition: all`; animate `transform`/`opacity`; honour `prefers-reduced-motion`.
- Reuse existing tokens and components before inventing any; nested radii follow the parent curve.

## Writing — no AI tells
Applies to portfolio copy, case-study text, deck text, alt text, commit notes, and chat replies. Reference: pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns.

Banned words and constructions (non-exhaustive, but treat as hard rules):
- Nouns/verbs: delve, dive into, journey, landscape, realm, lens, tapestry, testament, interplay, nuance, insight(s), facet, showcase, unlock, unleash, harness, foster, elevate, embark, navigate, leverage, craft/crafted, curate/curated, underscore, highlight, illuminate, transform(ative), revolutionise, empower, resonate, embody, seamless, robust, holistic, bespoke.
- Adjectives/adverbs: compelling, meticulous, vibrant, profound, pivotal, crucial, essential, invaluable, innovative, cutting-edge, dynamic, thoughtful, intentional, deeply, seamlessly, meticulously, notably, significantly, relentlessly.
- Phrases: “is a testament to”, “sheds light on”, “paving the way”, “when it comes to”, “at its core”, “it’s worth noting”, “in today’s … world”, “not just X but Y”, “it’s not about X, it’s about Y”, “X meets Y”, “more than just”, “here’s the thing”, “the result?”, “In conclusion / Overall / In summary”.

Form:
- No em-dash asides. Use a full stop, a comma, a colon, or brackets.
- Vary sentence length. Fragments are fine. Starting with And or But is fine.
- Contractions on. British spelling (organise, colour, behaviour, optimise).
- No tricolons (“faster, cleaner, simpler”), no rhetorical questions as headings, no one-line dramatic sentence for emphasis.
- No bolded lead-ins on every bullet. No emoji.
- Say the specific thing: real numbers, real dates, real product names, real constraints. If a sentence would still be true of a different project, cut or replace it.
- Don’t explain why something matters. State what it is and what happened.
- Close by stopping. No summary paragraph that restates the page.

## Image naming
Uploaded images arrive with throwaway names (`1.png`, `4ss.png`, `am.png`) that collide and say nothing about content. Rules:

1. **Never keep an upload filename.** Rename to `<subject>-<what-it-shows>.<ext>` in kebab-case, e.g. `console-organisation-team.png`, `cuvva-oxford-circus-ad.jpg`, `shirt-rosalind.webp`.
2. **Check before writing.** `ls` the destination folder first. On a collision, append `-2`, `-3`, … — never overwrite an existing image.
3. **Name from what's in the picture, not from what the upload was called.** Upload names have been wrong before (a "dog logo" that was a Sketch template, three Cuvva files shuffled between each other). Look at the image, then name it.
4. Durable copies of source images live in `archive/`. Images placed into `image-slot` elements are embedded as base64 in each page's `image-slots-data` block and keyed by slot id, so they don't depend on filenames — but still archive the original under a proper name.
5. Convert large PNG/JPEG to WebP and cap the long edge (1400px for stills, 1600px for tall artwork) before embedding. Keep GIFs as GIFs so animation survives.
