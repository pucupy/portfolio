# meisai website — deploy notes

Static HTML, no build step. Copy everything in this folder into the root of the meisai-website repo (work on a branch, keep a backup of the current site).

## What's here
- index.html, about-us.html, contact.html, 404.html — English pages
- es/index.html, es/about-us.html, es/contact.html — Spanish pages (EN/ES switch in the headers)
- mz-runtime.js — small script that runs the interactions (scroll effects, night shift, tabs, menu, cookie banner, chat, contact form)
- assets/ — videos (muted, looping, play only when visible), photos, og-image.png, apple-touch-icon.png
- favicon.svg, robots.txt, sitemap.xml (EN + ES with hreflang)

Every page has its full text in the HTML (readable by Google without JavaScript), plus title, description, canonical, hreflang, Open Graph/Twitter preview tags. The homepage has Organization structured data.

## Merging into the current repo (checked against lucasarg00-76/meisai-website)
Copy this folder over the repo root. It overwrites: index.html, about-us.html, contact.html, sitemap.xml, robots.txt, and the same three pages in es/.
- services.html, how-we-work.html, use-cases.html (EN + ES) become redirects to the matching homepage sections, so old links and Google results keep working.
- Legal pages (privacy, terms, cookies, EN + ES) are included in the new design with the same text and URLs. Their source text is in tools/legal/.
- Keep everything else in the repo: css/, js/, assets/ (logo.png is used by Google), .claude/, prof_lkdn.png.
- Spanish URLs are the same as the live site (es/about-us.html, es/contact.html). Spanish footers link to the Spanish legal pages.
- The contact form posts to the live Formspree form (mojgywdr). Botpress uses the live bot.

## Calendly
Booking links open Calendly in a popup on tablet and desktop (new tab on phones). Copy says 30 minutes to match the link.

## Cookies and chat
The cookie banner appears on first visit. The Botpress chat only loads after "Accept all". "Open chat" / "Chat with us" re-opens the banner if the visitor chose "Essential only". Make sure cookie-policy.html names Botpress and Calendly.

## Before pushing to main
- Test on a real iPhone (Safari) and an Android phone: video autoplay, scroll effects, bottom booking bar, menu.
- After deploy, submit https://meisai.io/sitemap.xml in Google Search Console and check a link preview (paste the URL into LinkedIn or WhatsApp).

## Editing later
The source designs are the .dc.html files in the design project. Rebuild with tools/build-config.txt (English text lives in the designs, Spanish in tools/es.json).
