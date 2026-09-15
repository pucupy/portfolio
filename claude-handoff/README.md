# Portfolio — content handoff for Claude Code

Alejandro Velázquez. Everything here is text: no images, no build output.
The live site is a seven-page static build (`index`, `about`, `hosted-pages`,
`console`, `design-systems`, `research-practice`, `creative-archive`) published
to GitHub Pages. The built HTML embeds its images as base64, so it is deliberately
NOT in this bundle — it would be ~15 MB of data URIs and useless to read.

## content/

- `portfolio-content.md` — all seven pages. Headings, body copy, captions and link
  text in document order, one section per page, with the target filename noted.
  Image placeholders appear inline as `[image slot: description · WIDTHxHEIGHTpx]`
  or `[image: description]` where the picture sits in the layout.
- `interview-presentation.md` — the 25-slide interview deck. Per slide: on-slide
  text in order, image placeholders, then the speaker notes verbatim.

## design-system/

- `design-system.md` — tokens, type scale, spacing, colour and the layout rules the
  site is built on.
- `skill.md` — how the system is meant to be applied.

## Visual system, in short

Ground #0B0D0D, text #F4F6F5, muted #AAB3AF and #7d8683, gold accent #C9A86A.
Space Grotesk for headings, Geist for body, Geist Mono for labels and eyebrows.
Gold is used for accents, rules and emphasis only — never as a fill behind text.
