# Alejandro Velázquez — Portfolio Build Brief

*Single-file handoff. Sections 1–8 are the content and specification to build. Section 9 is a list of open items for Ale and should not be built.*

---

## 1. Brief for the build

A personal portfolio site for a product design lead in fintech and open banking, currently at Yapily.

**Direction:** minimal and typographic. Sparse layout, generous whitespace, strong type hierarchy, restrained colour. Reference point: evilrabbit.com and markhurrell.com. The page should read as confident and unhurried, not as a case-study deck.

**Structure:** a single landing page carrying the hero, eleven numbered work entries, and a pre-2011 section. Two case studies get their own pages (Hosted Pages, Console). An About page. That's it.

**Principle:** the work entries are short by design. Images and annotations carry them, not prose. Do not expand the short entries into case-study templates.

**Pages:**
- `/` — hero, selected work, before 2011
- `/hosted-pages` — full case study
- `/console` — short case study
- `/about`
- CV links out to a PDF

**Navigation:** sticky header. `Alejandro Velázquez | Work · About · CV · Contact`

---

## 2. Visual specification

**Colour — dark theme, high contrast**
- Background: `#0B0D0D`
- Primary text: `#F4F6F5`
- Secondary text: `#AAB3AF`
- Accent: green/turquoise, drawn from the Yapily-era palette
- Dividers: visible but restrained
- All body copy must comfortably meet WCAG AA contrast

**Type scale — desktop**
- Hero: 64–72px
- Section headings: 40–48px
- Case-study titles: 28–32px
- Body: 17–18px, line-height ~1.6
- Metadata: minimum 14px
- Monospaced uppercase reserved for occasional section labels only — never body text

**Type scale — mobile (≤600px)**
- Hero: 36–42px
- Section headings: 26–30px
- Entry titles: 20–22px
- Body: 16–17px, line-height ~1.6
- Single column throughout; no side-by-side comparison layouts — stack them
- Numbered entry markers stay visible; they're the primary wayfinding on mobile

**Layout**
- Two content widths: 680–720px for long-form reading; 1,100–1,200px for images, diagrams and comparison layouts
- Alternate section treatments to avoid monotony: full-width intros, outcome panels, side-by-side decision comparisons, pull quotes, large annotated screens, short reflection passages
- Annotate screenshots — what changed, why, what evidence drove it, what to notice. Never drop unexplained image groups.

**Technical**
- Separate pages rather than one monolithic HTML file
- External CSS and JS
- Individually optimised images (WebP/AVIF), responsive `srcset`, lazy loading
- Target: no page over ~500KB of images on first load

**Icons**
- Material Symbols (the variable-font set, not the legacy Material Icons), weight 300–400, optical size matched to body text
- Note: Material Symbols has no LinkedIn glyph. Either use LinkedIn's official brand asset or — preferred — set all three contact links as plain text with no icons.

---

## 3. Hero

**Alejandro Velázquez**

I'm a product designer and design lead based in the UK. I joined Yapily in 2020 as its first designer and now lead design across its open banking platform — the hosted bank-connection and consent flows, the customer console, and the design systems underneath them. I manage a team of two designers and built the company's UX research practice from scratch.

**2020 — present** · Hosted Pages, Yapily's white-label bank-connection flow, is used by 200 companies including Google, Adyen, Intuit, Ant Financial and Revolut. I've owned it since launch. The work sits inside FCA guidelines, and I've presented to the regulator alongside Yapily's compliance team.

**2012 — 2019** · Lead and senior product design for consumer fintech, payments and marketplaces — Payango, Payfriendz, Docomo Digital, Caremoni, HeadBox. Payfriendz reached 150,000 users and a top-three position in the App Store finance category. Remote from the US at first; moved to London in January 2014.

**2005 — 2011** · Argentina. Enterprise product design at Globant for clients including Google, JP Morgan, PwC, Coca-Cola and Telefónica, alongside interaction and motion design work for clients across Latin America and Europe.

*Lead Product Designer & Design Manager, Yapily*

Contact:
[aleuxuk@gmail.com](mailto:aleuxuk@gmail.com) · [Download CV (PDF)](https://ale-portfolio.github.io/ux/cv.pdf) · [LinkedIn](https://www.linkedin.com/in/velazquezalejandro/)

*No statistics bar above the fold. Numbers live inside the entries below, next to the work that produced them.*

---

## 4. Selected Work

---

**01 — Yapily Hosted Pages**
*Full case study → `/hosted-pages`*

The white-label consent and bank-connection flow behind Yapily's platform. Customers previously built their own consent UI against 1,500+ banks across 10+ countries, each with its own flow and certification requirements — six months to over a year of integration work. Hosted Pages brought that to two weeks. Support tickets fell 47%; conversion rose 25%.

I led strategy and design at launch and have owned the product since, including a 2024–2025 research programme of around 1,000 usability tests, the prototype and accessibility studies that followed, and the resulting roadmap.

---

**02 — Yapily Console**
*Short case study → `/console`*

Customers couldn't onboard themselves: getting scopes took days and several Yapily colleagues, and customisation required staff to make changes on the customer's behalf. I led a January 2026 hackathon — the team role-playing as an outside consultancy, using only what a real customer can access — which surfaced the specific blockers, then led the information architecture of the redesign.

Shipped and self-serve, though still early. The Hosted Pages configurator is live, giving customers granular control over every screen in the flow — previously a support ticket.

---

**03 — Yapily UI, Custard and Mark**

Three design systems built from scratch for three different consumers: Yapily UI (internally "Pipes") for the 20 internal tools staff use across the business; Custard, the white-label foundation underneath the Hosted Pages configurator; and Mark for the marketing site, with Product Marketing.

Design tokens, atoms and molecules, full variant sets, documented in Storybook. I built the approval process governing how components get added and changed, then handed day-to-day maintenance to a designer on my team once each system was established.

---

**04 — Yapily brand and website**

Six rebrands between 2019 and 2026, working with the marketing team and two external agencies. I led the yapily.com homepage redesign — three directions explored, from a problem-first layout to a full-bleed video approach — and led design on customer case study collateral for Kolleno and Pleo.

A designer on my team led creative execution and rollout of the "Go Beyond" launch, which drove a 110% increase in LinkedIn engagement, 24% in brand search and share of voice, and 54% in resource downloads.

---

**05 — Open Banking UX Guidelines**

Seven principles for designing open banking consent screens, written for any team building their own flow rather than documenting Yapily's. Purpose, honest security language rather than absolute claims, grouped data categories, progressive disclosure, access duration and revocability, and a clear way to decline.

Yapily's reference resource for customers designing their own consent experiences.

---

**06 — demo.yapily.com**

An indexed library of open banking demo journeys — mobile payment authorisation, Pay by Link with QR handoff, biometric app-to-app, in-store POS, bulk disbursement, account verification — replacing a single general-purpose demo that couldn't serve sales, pre-sales, implementation and product at once.

I wrote the vision and problem framing, maintain the library with my team, and coded several of the demo and guideline resources myself in HTML/CSS/JS.

---

**07 — HeadBox** · 2018–2019

Lead Product Designer through a leadership transition, with no reliable way to measure product performance. Fifteen customer interviews refocused the team on the enquiry-to-booking funnel, where only 20% of enquiries received a host proposal. We shipped the Enquiry Hub as a deliberately small experiment — London only, capped at £10k — which showed the platform connected hosts and guests well but converted poorly, and led to a pivot from marketplace to SaaS lead generation. £150,288 ARR and 117 customers within three months, four times the prior model.

---

**08 — Caremoni** · 2017–2018

A payment and reporting tool built with My Support Broker, a social enterprise managing personal health budgets. Payments and reconciliation were entirely manual and error-prone, and the NHS needed better reporting on how care budgets were being spent.

I interviewed every party in the chain — MSB's two operators, independent carers, care agencies, and the people receiving care — and mapped the flows. Rather than build first, I ran a concierge version to test whether those flows were right: a plain HTML front end with payments still processed by hand. That surfaced the thing I'd got wrong. I'd assumed people receiving care and their families would be low on digital confidence; most were comfortable. The real problem was time and patience for admin — chasing receipts, chasing MSB for money — which was stressful on both sides.

What shipped: a dashboard for operators to allocate budget, monitor spend and report to the NHS, and an app for carers and customers to request and authorise payments. A pilot with a subset of MSB customers ran successfully; operators cut paperwork and follow-up calls, and NHS reporting became largely automated.

---

**09 — Docomo Digital** · 2016–2018

Senior Product Designer, contracting through Su4erheroes, on a payout solution for marketplaces across Europe and Asia — a dashboard, API documentation and a mobile app, serving internal operations teams, marketplace operators, and the developers integrating the API.

Work included payment widgets for alternative payment methods and for ICO investment, a marketplace dashboard, and the NOMO app, which let marketplace owners track daily earnings.

---

**10 — Keymono** · side project, 2016–2018

A mobile app for collecting and paying debts through shared links. I designed the whole experience. Built to demonstrate the platform and API capabilities behind it.

---

**11 — Payfriendz** · 2013–2016

Lead designer for a peer-to-peer payments app in the UK and Germany, combining transfers with chat. Over £5M transferred, 150,000+ users, top three in the App Store finance category. Two designers and fifteen engineers; I also built the UI component system and mentored support staff into research roles.

---

## 5. Before 2011

*Set as prose, not as a case study. This is the only passage on the site in a personal voice — give it room and don't template it.*

Obama was winning his first election and I was in Argentina, coding and designing websites, landing pages and apps at Globant. Facebook had barely arrived in Latin America. The iPhone was a year old and we had two of them to share between a company of a thousand people. UX wasn't a thing. Designers working in software were decorators. Skeuomorphism was the trend, and we were collaborating between design and engineering with the only tools available — Photoshop, TortoiseSVN, and hand-written HTML, CSS and JavaScript.

**Globant** · 2008–2011 · Argentina
Design Analyst. Enterprise digital products for clients including Google, JP Morgan, PwC, Coca-Cola and Telefónica, with distributed product and engineering teams.

**Bilitee**
A social network for connecting designers and developers and encouraging collaboration between them.

**Creative archive**
Selected illustration, identity and animation work behind the product practice. → *link out to a separate page; do not display a gallery inline.*

---

## 6. About page

I'm a product designer and design lead based in the UK. I've been at Yapily since January 2020, where I was the first designer the company hired.

### What I do

I lead design across Yapily's open banking platform: the hosted bank-connection and consent flows that customers embed in their own products, the console they use to configure and manage their integration, and the design systems underneath both.

I manage two product designers. I hire for the team and run their performance reviews.

Most of what exists in the design function here exists because I built it — the research practice, three design systems, and the approval processes that govern how they change.

### How I lead

I've managed seven designers across six years at Yapily, at different points and in different shapes of team. What I've learned is that the useful thing to build isn't a process, it's independence. Each of the three design systems was handed to a designer on the team once it was established. I built the approval process so that changes don't need me in the room. The point of the system is that it keeps working when I'm not looking at it.

With people, the same principle applies in reverse: knowing when to push and when to get out of the way. I'll challenge a decision hard when it needs challenging, and leave someone alone when they're working something out for themselves. Both are the job.

I run things in the open where I can. In January 2026 I ran a hackathon where the team spent the week role-playing as an outside consultancy, using only what a real customer can access — no internal shortcuts. It surfaced more about our onboarding experience in five days than a quarter of internal review had.

### Working outside design

Open banking is regulated, and Hosted Pages sits inside FCA guidelines. That means design decisions get made alongside compliance rather than sent to them for approval afterwards. I've presented to the regulator alongside Yapily's compliance team.

I own Yapily's relationships with its design and research vendors — two branding agencies and a usability research partner — and the design relationship with customers building on top of us. Over two years I worked with designers at Google as they built their own open banking products on Yapily, including running workshops with their senior teams in London and Mountain View.

### Still hands-on

I design, and I code — HTML, CSS and JavaScript. Several of the demo and reference resources on Yapily's site I built myself. It's not a large part of the job, but being able to build the thing rather than describe it has settled more arguments than any deck I've made.

### Before Yapily

I started my career in Argentina in 2005 and worked there until 2011 — including three years at Globant designing enterprise products for Google, JP Morgan, PwC, Coca-Cola and Telefónica. I spent 2012 and 2013 in the US working remotely, and moved to London in January 2014. I'm a British citizen.

Since then I've worked on peer-to-peer payments across the UK and Germany, marketplace payouts across Europe and Asia, personal health budget payments with the NHS, and a venue-booking marketplace in London.

---

## 7. Case study — Hosted Pages

*Full page. Structure: Context → Problem → Responsibility → Constraints → Decisions → Outcomes → Reflection.*

### Context
Yapily provides open banking infrastructure, connecting businesses to thousands of banks across the UK and Europe. Hosted Pages is Yapily's white-label, pre-built consent and connection flow — letting customers launch payment and data-access journeys without building every bank-specific screen themselves.

### Problem
Every customer connecting to a bank through Yapily had to build and maintain their own consent UI — and with 1,500+ banks across 10+ countries, each with its own consent flow, data quirks and certification requirements, that added up to a full custom integration effort, sometimes six months to over a year. Customer research had already surfaced this as the top adoption barrier: customers wanted an out-of-the-box connection to many banks so they could spend their time building their own product instead of maintaining bank plumbing.

### My responsibility
I led the strategy and design end to end at launch, within FCA guidelines, and have continued to own the product's evolution since — the 2024–2025 usability research programme, the prototype testing that followed, the June 2026 cross-functional workshop, and the resulting improvement roadmap. I also lead my team's work on this and related products from idea through to production, and hold the line on accessibility and usability standards throughout.

### Constraints
The banks themselves couldn't be standardised — each kept its own legacy consent flow and edge cases, outside Yapily's control. Hosted Pages is FCA-regulated, so the flow had to meet open banking compliance guidelines throughout, not just at launch. It had to serve two different licensing models — customers under Yapily's licence needing a fixed, compliant flow, and customers with their own direct licence wanting more flexibility to build their own surrounding experience — support multiple countries and languages, and work across Payments and Data without diverging into separate flows per product.

### Decisions

**Bank discoverability.** A 2024–2025 research programme of around 1,000 usability tests found search was the primary way users found their bank — roughly 70% of users, taking 5–15 seconds, against 1–3 seconds for competitors using brand grouping and a most-popular shortcut. We redesigned bank selection as a bottom sheet, grouped bank branches under one parent brand (critical in markets like Germany, where Sparkasse and Volksbank sit above thousands of sub-branches), and added a popular-banks shortcut.

**Layout for scale.** We tested three prototype variants — an accordion, a dedicated results page, and a hybrid — against small-bank and branch-heavy bank scenarios. The hybrid won: accordion for small result sets, a dedicated page for large ones, plus a branch-highlighting filter. Notably, even the least-preferred variant outperformed the existing production flow, which confirmed the core direction was right regardless of layout details.

**Language assumptions.** Research found language couldn't be inferred from country. The person setting up account access sometimes lived in, or spoke the language of, a different country than the actual accountholder. The initial approach — customers passing country and language via the API at integration time — still assumed the customer could predict the end user's language in advance. We moved to an in-flow language selector and let the actual user choose.

**Accessibility validation.** A follow-up unmoderated study of 21 testers in Germany, including participants with disabilities, tested the new flow against the live demo. 62% preferred the new flow overall, rising to 78% among testers with disabilities. The study also surfaced that a screen reader user couldn't navigate the old flow at all.

### Outcomes
Customer integration effort dropped from around six months — sometimes over a year for complex cases — to two weeks. Related support tickets fell by 47%, and conversion increased by 25%. Hosted Pages is used by 200 companies, including Google, Adyen, Intuit, Ant Financial and Revolut.

### Reflection
Hosted Pages was originally built for customers using Yapily's own licence, so the flow was fairly rigid by design. At the time that felt like the right trade-off: it kept the compliance surface small and got us to market fast. It was only once direct customers started onboarding and asking for more flexibility in their own consent experience that the limitation became clear. If I were starting the product again, I'd build more flexibility into the licensing model from day one — not because the original call was wrong given what we knew then, but because I'd now design for that need earlier rather than retrofitting it later.

### Leadership
Set the research direction for the 2024–2025 usability programme and the follow-up prototype and accessibility studies. Led the June 2026 cross-functional workshop with frontend and design teams to scope the next roadmap. Guided designers at Google over two years as they built their own open banking products on Yapily, including senior workshops in person in London and Mountain View. Collaborated directly with Yapily's compliance team on presentations to the FCA.

---

## 8. Case study — Console

*Short page. Half the length of Hosted Pages.*

### Context
The Console is where Yapily customers sign up, manage applications, and configure their integration with the platform.

### Problem
Clients who wanted to test or onboard with Hosted Pages couldn't do it themselves — getting access took multiple days and required several Yapily colleagues to set them up. Customisation required Yapily staff to make changes on the customer's behalf, and options were limited even then. The Console itself had become too fragile to safely modify, which blocked most of the improvements needed to make Hosted Pages genuinely self-serve.

### My responsibility
I led a January 2026 hackathon that surfaced these problems firsthand, turned the findings into a scoped set of initiatives with clear problem statements, and led the design of the redesigned Console's information architecture and self-serve flows — working with product and engineering to validate feasibility.

### Constraints
The existing codebase was too delicate to modify safely, so the redesign had to start by making the Console modifiable at all before any self-serve feature could ship. This wasn't new: the product had already been through a 2020 sandbox version, a 2022 rebrand from Dashboard to Console, and a 2024 customisation panel with raw hex-code inputs, and the underlying fragility persisted across all of them. Any redesign had to work across very different customer tiers, from small self-serve developers to enterprise clients with dedicated compliance requirements.

### Decisions

**Self-serve blockers.** The January 2026 hackathon — run with the team role-playing as an outside consultancy, using only what a real customer would have access to — surfaced a 403 error because Hosted Pages wasn't enabled by default, requiring a two-day wait for a PM to fix it; sandbox banks that had to be registered manually, with roughly a third of the pre-configured ones not actually working; confusion over which of three returned IDs was the Application User ID; and an undocumented CORS issue forcing customers to build their own backend proxy. We scoped initiatives to default-enable scopes, pre-load genuinely working sandbox banks, surface Hosted Pages status directly in the Console, add self-serve webhook management, and redesign the Console itself.

**What customers actually needed to see.** Persona and journey research, followed by direct customer interviews, found integration journeys stretching months longer than expected, full of undocumented bank-specific trial and error. Customers repeatedly asked for a way to identify banks by auth flow, payer and IBAN requirements, and real conversion and success rates — rather than discovering all of it through failed testing — plus stronger Console security. We built these into the redesigned institutions directory and the Console's security requirements.

### Outcomes
The redesigned Console is live — shipped and self-serve, though still early days. It's too early for adoption metrics. One piece has already shipped: a live Hosted Pages configurator giving customers granular, self-serve control over every screen in the flow — colours, copy, layout and states — replacing what previously required a support ticket to Yapily staff.

---

## 9. Open items — DO NOT BUILD

*For Ale. Resolve before or during the build; not content for the site.*

**Facts to confirm**
- Brand chronology: which agency built which identity, and in which years. The 2024–2025 / 2025–2026 dates in the earlier brief appear to be website rebrand dates applied to the identities. Entry 04 deliberately avoids dating them.
- How many of the six rebrands predate January 2020. If any do, entry 04 should say "six rebrands since 2019, five during my time" rather than implying involvement in all of them.
- Is "200 companies" verified? It appears only in the most recent brief, not in earlier drafts.
- "Su4erheroes" — confirm spelling before this ships.
- Docomo: 2016–2017 or 2016–2018?
- Payango 2012–2013 — currently a name in a list. What was it? It's the hinge between Argentina and London.
- Does `ale-portfolio.github.io/ux/cv.pdf` exist and is it current?
- Career summary in the old design brief still reads "Yapily 2019–2026". Correct to 2020–present wherever it survives.

**Decisions outstanding**
- **Testimonials.** Three LinkedIn recommendations were drafted (Anna Vogel, Julia Fonseka, Jamie Sims). Recommendation: cut the standalone section and place the Jamie Sims quote inline in the Hosted Pages case study. Not currently in this brief either way.
- **Creative archive** needs a destination page and content.
- **Docomo NDA.** The work is under NDA. Text description as written is low risk; screenshots are not. Confirm expiry or get permission before adding images to entry 09.
- **Caremoni deck** currently lives on a public Google Drive link. Host the PDF on your own domain and check it contains nothing MSB would object to.

**Writing still needed**
- Image annotations for every screenshot — what changed, why, what evidence drove it, what to notice. These are the highest-value remaining writing on the site and can't be generated in the design pass.

**Deliberately excluded**
- No availability or "open to new roles" line anywhere. Still employed at Yapily.
- No WhatsApp contact. Replaced by email.
- No statistics bar above the fold.
- No "17+ years", "built a design culture", or "scaled the design function" — the date bands and specific facts do that work without asserting it.
