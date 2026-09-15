# Corrected screens

Text-only retouches of the original screenshots. Drop-in replacements — same
filenames, same dimensions, same crops. Nothing but the text has changed.

## Colly — 10 files
`btc1 btc2 btc3 btc4 btc5 btc6 btc9 btc10 btc11 btc14`

- **SDG → SGD** everywhere it appeared: balance headers, transaction rows,
  "Amount SGD" labels, contact totals. SDG is the Sudanese pound; the Singapore
  dollar is SGD.
- **btc11** — the profile line now reads "$ SGD (Singapore dollar)".
- **btc1, btc9** — screen header "Londgon" → "Longdon".

## Keymono — 3 files
`key2 key3 key15`

- **key3** — "How does it works?" → "How does it work?"
- **key3** — "People follows the link, contributes" → "People follow the link, contribute"
- **key2** — "Help Richard collecting for Dinner" → "Help Richard collect for Dinner"
- **key15** — "want collect some of the money spent" → "want to collect…", with
  the two lines re-wrapped to fit.

## Huawei — 1 file
`nissan8`

- "On it's way to you" → "On its way to you". The apostrophe was deleted and the
  following glyphs shifted left, so the original letterforms are untouched.

## Not done

**`nissan4` / `nissan5`** — "Please let us know where should we pay your earnings"
should read "where we should pay your earnings". This is a word-order change
across a line break, and the Huawei typeface isn't available here, so any
re-render would be visibly the wrong font. Fix it in the source file.

## Method, and its limits

Colly and Keymono use Roboto, which matched the originals exactly — text was
cleared and re-rendered at the measured size, colour and position. The Huawei
fix moves existing pixels rather than redrawing them.

Every file was checked at full resolution. But this is a repair, not an edit: if
you still have the source files, correcting the text there will always be better.

## Still to do on these images, by hand

- **Real photographs** — Colly (7 screens), the NOMO seller app, the Caremoni
  mobile screens, the Su4erheroes studio page.
- **Real brands in mockups** — Airbnb, Miramax and Paysafe in the NOMO admin;
  Monzo as the sample bank in the Huawei flow.
- **The Su4erheroes studio hero** — derivative Marvel and DC characters. It's
  currently published on su4erheroes.html.
