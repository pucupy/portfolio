# Portfolio — content

Alejandro Velázquez · Lead product designer, open banking
Static site · pucupy.github.io/portfolio

Working source of truth for the site copy. Page filenames are in each section
heading. Images are marked `[image: …]`, built diagrams `[diagram: …]`.
Navigation and footer chrome are omitted — this is the content.

---

## Home (index.html)

I'm a product designer and design lead based in the UK. I joined Yapily in 2020 as its first designer and now lead design across its open banking platform — the hosted bank-connection and consent flows, the customer console, and the design systems underneath them. I manage a team of two designers and built the company's UX research practice from scratch.

**2020 — PRESENT**

Yapily. Joined as the first designer and built the design function from scratch — three design systems, a UX research practice, and the governance behind both. I led strategy and design for Hosted Pages at launch and have owned the product design since; the white-label bank-connection flow is now used by 200 companies including Google, Adyen, Intuit, Ant Financial and Revolut. I designed the first versions of the Customer Console and the website, and worked with the strategy team on product direction. The work sits inside FCA guidelines, and I've supported Yapily's compliance team in preparing presentations to the regulator. I lead a team of two designers producing the brand and sales collateral behind go-to-market — ads, ebooks, tailored demos, reports and landing pages.

**2012 — 2019**

Lead and senior product design for consumer fintech, payments and marketplaces — Payango, Payfriendz, Docomo Digital, Caremoni, HeadBox. Payfriendz reached 150,000 users and a top-three position in the App Store finance category. Remote from the US at first; moved to London in January 2014.

**2005 — 2011**

Argentina. Started freelance, then at small agencies, before joining Globant in 2008 — enterprise product design for clients including Google, JP Morgan, PwC, Coca-Cola and Telefónica, alongside interaction and motion design work for clients across Latin America and Europe.

- Lead Product Designer & Design Manager — Founding Designer, Yapily

### Selected work

- **Yapily Hosted Pages**

The white-label consent and bank-connection flow behind Yapily's platform. Customers previously built their own consent UI against 1,500+ banks across 10+ countries, each with its own flow and certification requirements — six months to over a year of integration work. Hosted Pages brought that to two weeks. Conversion went from around 20% in the 2023 beta to roughly 65–75% end to end today, varying by use case and market — moved incrementally over three years by UX, frontend and backend together, alongside expanding bank coverage. Design's contribution was concentrated in bank discoverability: display names matched to what people actually call their bank, search alias gaps found in testing, and the grouping and shortcut redesign of bank selection.

Design's contribution ran through three findings that weren't screen problems at all: bank naming and search resolution, regional app-to-app coverage, and per-bank retry limits. I led strategy and design at launch and have owned the product since, including a sustained 2023–2026 research programme of hundreds of end-user usability sessions, the prototype and accessibility studies that followed, and the resulting roadmap.

- `[image: Hosted Pages — bank selection, redesigned · 2200×920px]`
- **Yapily Console**

Customers couldn't onboard themselves: getting scopes took days and several Yapily colleagues, and customisation required staff to make changes on the customer's behalf. I led a two-day hackathon — engineering, PMs, design and the implementation team role-playing as an outside consultancy, using only what a real customer can access — which surfaced the specific blockers, then led the information architecture of the redesign.

In beta, and self-serve where it's live. The Hosted Pages configurator has shipped in full, giving customers granular control over every screen in the flow — previously a support ticket and an engineer, per request.

- `[image: Console — redesigned dashboard or configurator · 2200×920px]`
- **Yapily UI, Custard and Mark**

Three design systems built from scratch for three different consumers: Yapily UI (internally "Pipes") for the 20 internal tools staff use across the business; Custard, the white-label foundation underneath the Hosted Pages configurator; and Mark for the marketing site, with Product Marketing.

Design tokens, atoms and molecules, full variant sets, documented in Storybook and Figma. I built the approval process governing how components get added and changed, then handed day-to-day maintenance to a designer on my team once each system was established.

Yapily is going through an AI transformation, and we're migrating these systems into AI tooling so more people can create on-brand material without a designer in the loop. We've already built skills for branding, demos and sales slides.

- `[image: Three design systems — components, tokens and templates · 2200×952px]`
- **Research practice**
- 2020–2026

Yapily never had a dedicated researcher. I built the research practice from scratch and ran it for six years alongside the design work — a fixed cadence of customer interviews rather than project-triggered discovery, over two hundred conversations, and informal Slack channels for the observations too small to raise a ticket over.

Two audiences needed two methods: the businesses integrating with us, and the consumers who tested the bank-connection flow across hundreds of sessions between 2023 and 2026. Around that sat a bi-weekly feedback forum with Support, CS, product and engineering, a jointly prioritised board, beta programmes with 150 customers, event instrumentation built with engineering, and an in-house experimentation pipeline testing variants against production traffic.

Guerrilla sessions where the question was whether a direction was obviously wrong; commissioned panels through Testbirds and Applause where it was whether something met a standard we could be held to.

- **HeadBox**
- 2019

£150,288 ARR from 117 customers in three months — four times the prior model, and a change of revenue model.

HeadBox was an Airbnb for event spaces: search a directory, filter, message a few venues, wait. It converted at around 10%, and the research explained why from both sides at once. Guests were overwhelmed rather than underserved — they aren't event experts, and a page of results asks them to be. Hosts had the opposite problem: too many leads, almost none matched to their venue, so they stopped logging in.

The expertise was on the wrong side of the transaction, so we inverted it. Guests describe the event in a short wizard instead of browsing; briefs pool into a feed; hosts choose the events they want. Venues then pay for access to the feed rather than a commission on the sale — marketplace to SaaS, as a consequence of the design rather than the goal.

`[image: The lead feed — hosts choosing events, rather than events choosing hosts · 2200×840px]`

- **Yapily brand and website**

Six rebrands between 2019 and 2026, working with the marketing team and two external agencies. I led the yapily.com homepage redesign — three directions explored, from a problem-first layout to a full-bleed video approach — and led design on customer case studies, personalised demos and other collateral.

A designer on my team led execution and rollout of the "Go Beyond" launch, which drove a 110% increase in LinkedIn engagement, 24% in brand search and share of voice, and 54% in resource downloads.

- `[image: Homepage directions, or Go Beyond identity · 2200×920px]`
- **Open banking UX guidance**

Customers operating under their own licence build their own experience rather than using ours. That makes the quality of those flows a business problem as much as a design one: a poor flow loses the connection, and the loss lands on the customer and on Yapily's numbers alike. There's no single right answer to design toward either. A one-off account verification and a recurring bulk disbursement aren't the same product moment, and a flow tuned for one is wrong for the other. So the guidance had to teach judgement rather than hand over a template.

Not just the consent screen. The guidance spanned the full set of surfaces a team building on open banking has to get right:

- End-to-end flows
- — how the pieces sequence, and what the user should understand at each point.
- Consent screens

— seven principles, including stating the purpose data is requested for, honest security language rather than absolute claims, grouped data categories rather than raw scopes, progressive disclosure, visible access duration and revocability, and a clear way to decline.

- Consent dashboards
- — where people see and manage what they have already granted.
- Return experiences

— what happens when the user comes back from the bank, which is where flows most often break.

- Re-consent journeys
- — renewing access when it expires, a recurring moment rather than a one-off.
- Checkouts
- — payment initiation as a commercial flow, not just a compliance step.

A lot of open banking design is about moments the designer doesn't control. The user leaves for their bank's own interface and comes back, access lapses on a schedule set by regulation, and the handoffs are where people drop out. The guidance concentrated on those seams, because that's where the design work actually is. Delivered as written documentation plus interactive demos customers could work through directly, and written for any team building an open banking flow rather than as documentation of our own product — guidance that only makes sense if you already use our UI is marketing, not guidance.

Two of the recommendations were commercially awkward: accurate security language, and a prominent way to decline. Both are the harder option — "bank-grade security, we never see your data" converts better in the short term than an accurate description, and a prominent decline route is a visible exit from the funnel. Recommending them anyway is the position the guidance had to take to be worth following.

- `[image: Guidelines — a principle page with do/don't examples · 2200×840px]`
- **Sales demos**

An indexed library of open banking demo journeys — mobile payment authorisation, Pay by Link with QR handoff, biometric app-to-app, in-store POS, bulk disbursement, account verification — replacing a single general-purpose demo that couldn't serve sales, pre-sales, implementation and product at once.

It isn't a mockup — it runs real end-to-end flows against both mock and live banks, and surfaces the actual API requests and responses alongside the interface. That made it two things at once — an implementation aid for customers building against the platform, who could see exactly what a call returns before writing it, and an asset in sales and RFI conversations, where showing a real flow beats describing one.

I wrote the vision and problem framing, led design, and maintain the library with my team.

**`[image: Demo library index · 1600×905px]`**

`[image: Sales demos — German accounts journey, bank selection alongside the live JSON response]`

- **Caremoni**
- 2017–2018

A payment and reporting tool built with My Support Broker, a social enterprise managing personal health budgets. Payments and reconciliation were entirely manual and error-prone, and the NHS needed better reporting on how care budgets were being spent.

I interviewed every party in the chain — MSB's two operators, independent carers, care agencies, and the people receiving care — and mapped the flows. Rather than build first, I ran a concierge version to test whether those flows were right: a plain HTML front end with payments still processed by hand. That surfaced the thing I'd got wrong. I'd assumed people receiving care and their families would be low on digital confidence; most were comfortable. The real problem was time and patience for admin — chasing receipts, chasing MSB for money — which was stressful on both sides.

What was built: a dashboard for operators to allocate budget, monitor spend and report to the NHS, and an app for carers and customers to request and authorise payments, designed to take the manual work out of reconciliation and NHS returns. It reached MVP and ran as a pilot with a subset of MSB customers, and didn't go further while I was involved.

- Full deck (Google Slides) →
- `[image: Operator dashboard, or the carer payment app · 2200×840px]`
- 10
- **Docomo Digital**
- 2016–2018

Senior Product Designer, contracting through Su4erheroes, on a payout solution for marketplaces across Europe and Asia — a dashboard, API documentation and a mobile app, serving internal operations teams, marketplace operators, and the developers integrating the API.

Work included payment widgets for alternative payment methods and for ICO investment, a marketplace dashboard, and the NOMO app, which let marketplace owners track daily earnings.

- `[image: NOMO — payout platform site and admin features · 2200×952px]`
- 11
- **Payfriendz**
- 2013–2016

Lead designer for a peer-to-peer payments app in the UK and Germany, combining transfers with chat. Over £5M transferred, 150,000+ users, top three in the App Store finance category. Two designers and fifteen engineers; I also built the UI component system and mentored support staff into research roles.

- `[image: Payfriendz — virtual Mastercard and App Store ranking · 2200×952px]`

### Before 2011

Obama was winning his first election and I was in Argentina, coding and designing websites, landing pages and apps at Globant. Facebook had barely arrived in Latin America. The iPhone was a year old and we had two of them to share between a company of a thousand people. UX wasn't a thing. Designers working in software were decorators. Skeuomorphism was the trend, and we were collaborating between design and engineering with the only tools available — Photoshop, TortoiseSVN, and hand-written HTML, CSS and JavaScript.

- **Globant**
- 2008–2011 · Argentina

Design Analyst. Enterprise digital products for clients including Google, JP Morgan, PwC, Coca-Cola and Telefónica, with distributed product and engineering teams.

****Creative archive****

Illustration, identity and animation from before all this — drawn by hand, for fun, in the pre-AI era.

- View the archive →

---

## About (about.html)

- `[image: Alejandro Velázquez]`

I'm a product designer and design lead based in the UK. I've been at Yapily since January 2020, where I was the first designer the company hired.

### What I do

I lead design across Yapily's open banking platform: the hosted bank-connection and consent flows that customers embed in their own products, the console they use to configure and manage their integration, and the design systems underneath both.

**I manage two product designers. I hire for the team and run their performance reviews.**

Most of what exists in the design function here is there because I built it — the research practice, three design systems, and the approval processes that govern how they change.

### How I lead

I've managed seven designers across six years at Yapily, at different points and in different shapes of team. What I've learned is that the thing worth building isn't really a process, it's independence. Each of the three design systems went to a designer on the team once it was established, and I built the approval process so that changes don't need me in the room. It should keep working when I'm not looking at it.

With people it's the same thing in reverse — knowing when to push and when to get out of the way. I'll challenge a decision hard when it needs it, and leave someone alone when they're working something out for themselves. You need both.

I try to run things in the open. I ran a hackathon where the team spent two days role-playing as an outside consultancy — engineering, PMs, design and the implementation team, using only what a real customer can access, no internal shortcuts. It surfaced more about our onboarding experience in two days than a quarter of internal review had.

### Working outside design

Open banking is regulated, and Hosted Pages sits inside FCA guidelines. That means design decisions get made alongside compliance, rather than sent over for approval afterwards. I've supported Yapily's compliance team in preparing presentations to the regulator.

I own Yapily's relationships with its design and research vendors — two branding agencies and a usability research partner — and the design relationship with customers building on top of us. Over two years I worked with designers and product managers at Google as they built their own open banking products on Yapily. The first year went into helping them build their own bank selection and authentication flows. They kept those for their core journeys, and used Hosted Pages where building it themselves wasn't worth it — account verification, and markets where the complexity meant a longer build. That split is the clearest statement of what Hosted Pages is for: not a replacement for a team's own design, but the option that wins wherever the per-market complexity outweighs the value of owning the screen.

### Still hands-on

I design, and I code — HTML, CSS and JavaScript. Several of the demo and reference resources on Yapily's site I built myself. It's not a big part of the job, but being able to build the thing rather than describe it has settled more arguments than any deck I've made.

### Before Yapily

I started my career in Argentina in 2005 and worked there until the end of 2011 — including three years at Globant designing enterprise products for Google, JP Morgan, PwC, Coca-Cola and Telefónica. I moved to the US in January 2012 and spent two years there, finishing the Andimol consultancy work and then contracting for Payango in Berlin, both remotely. I moved to London in January 2014. I'm a British citizen.

Since then I've worked on peer-to-peer payments across the UK and Germany, marketplace payouts across Europe and Asia, personal health budget payments with the NHS, and a venue-booking marketplace in London.

---

## Case study 01 — Yapily Hosted Pages (hosted-pages.html)

- 01 — CASE STUDY

### Yapily Hosted Pages

Yapily provides open banking infrastructure, connecting businesses to thousands of banks across the UK and Europe. Hosted Pages is Yapily's white-label, pre-built consent and connection flow — letting customers launch payment and data-access journeys without building every bank-specific screen themselves.

- `[image: Hosted Pages — the flow end to end · 1600×692px]`

### Problem

When I joined Yapily in 2020, one of the first things I did was talk to our customers. A pattern emerged fast. The API offered almost no abstraction — everything was raw, and integrating was slow and difficult. With 1,500+ banks across 10+ countries — each with its own consent flow, data quirks and certification requirements — building and maintaining a consent UI meant a full custom integration, sometimes six months to over a year. For some companies that was just more work than they could take on. Around 80% of our early customers were SMEs, so integration speed wasn't a convenience; it decided whether they could adopt at all.

Working with the PM, we started with the cheaper fix: better guidance and documentation. It helped, but it didn't change the underlying problem — customers were still building bank plumbing instead of their own product. That's when we started talking about widgets and an embeddable checkout as a way to remove the integration work rather than document it.

### My responsibility

I led the strategy and design end to end at launch, within FCA guidelines, and have continued to own the product's evolution since — the 2023–2026 usability research programme, the prototype testing that followed, the June 2026 cross-functional workshop, and the resulting improvement roadmap. I also lead my team's work on this and related products from idea through to production. When a commissioned accessibility study found contrast failures and screen readers announcing raw SVG markup — meaning a screen reader user couldn't navigate the flow — we postponed a release to fix both rather than ship and correct afterwards.

### Constraints

The banks themselves couldn't be standardised — each kept its own legacy consent flow and edge cases, outside Yapily's control. Hosted Pages is FCA-regulated, so the flow had to meet open banking compliance guidelines throughout, not just at launch. It had to serve two different licensing models — customers under Yapily's licence needing a fixed, compliant flow, and customers with their own direct licence wanting more flexibility to build their own surrounding experience — support multiple countries and languages, and work across Payments and Data without diverging into separate flows per product.

### One flow, more than forty versions of itself

**Hosted Pages looks like four screens, but it isn't.**

Five decisions branch before the user sees anything, and each one multiplies the ones after it. Two of the five are set by the customer's integration rather than by us — the licence they hold, and whether they passed an institution ID in the API call. The other three follow from the market, the device and the product: region and country across ten-plus markets, mobile or desktop, and payments, data or cVRP.

- acme.com/checkout
- ACME
- Pay with your bank
- No card details. You’ll approve the payment in your own banking app.
- ORDER
- Subtotal
- £248.00
- Total
- £248.00
- Pay by bank
- Merchant checkout

The customer’s own page. Hosted Pages has not opened yet — everything after this is decided by how they integrated.

- pay.yapily.com
- ACME
- Secure page hosted by Yapily
- Choose your bank
- EN
- Search 2,000 banks
- POPULAR BANKS
- Commerzbank
- Used 2 hours ago
- RECENT
- Sparkassen
- Regional banks
- Volksbanken Raiffeisenbanken
- 700+ local banks
- OTHER BANKS A–Z
- ABN AMRO
- Choose your bank

Hosted Pages opens over the merchant page. Search, popular banks and recents — the screen most of the research went into.

- pay.yapily.com
- ACME
- Secure page hosted by Yapily
- Authorise data access
- Scan the code to continue with Commerzbank on your phone.
- Open your phone camera
- Point it at the code
- Tap the link
- It opens Commerzbank
- Confirm and come back
- We’ll pick up here
- No app needed
- OR
- Continue on this device
- Handoff to the bank app

Desktop only: the QR code moves the user to their phone, with the option to stay on this device. Removed entirely in markets where app-to-app was thin.

- pay.yapily.com
- ACME
- Secure page hosted by Yapily
- Sign in to Commerzbank
- You’re signing in through Yapily so ACME can connect to your account.
- Commerzbank
- Online banking ID
- Your banking ID
- PIN
- Never enter a one-time code here.
- Enter your PIN
- Encrypted and passed securely to your bank.
- Continue securely
- Authenticate

Bank redirect, or embedded login — the bank named, the regulated entity stated, and the fields mapped to what that bank actually asks for.

- pay.yapily.com
- ACME
- Secure page hosted by Yapily
- Payment approved
- Returning you to ACME
- £248.00 · Commerzbank
- Reference 4419-KD
- Back to the merchant
- Consent granted and control handed back — the point the whole flow is measured against.

The desktop path, where the QR handoff exists at all. Which of these a user actually sees, in what order, on which device and in what language is decided before the first screen renders — by licensing model, market, bank capability and the customer's own integration.

**Hosted Pages: the decision points that multiply**

Five branching decisions — licence model, whether the institution is preselected, product, market, and whether the consent sheet is shown — multiply out across the desktop flow, alongside five exception paths that sit outside the grid.

- Set by the customer's integration
- Set by product and market
- Licence model
- Direct licence
- Yapily Connect
- ×2
- Institution ID
- Preselected
- Bank selection
- ×2
- Product
- Payments
- Data
- cVRP (UK)
- ×3
- Market
- UK
- EU
- ×2
- Consent sheet
- Shown
- Hidden
- ×2
- Exception paths outside the grid
- Link expiry · Bank not found · Preselected skips all screens
- UK agent, data only · cVRP without bank button

Five branching decisions. Gold marks what the customer's integration decides; grey marks what the product, market and device decide.

The grid isn't rectangular, which is the harder problem. cVRP exists only in the UK, so the market dimension doesn't multiply it. Hiding the consent sheet is available to customers on their own licence and to nobody else. A preselected institution on a direct licence skips every screen we make and goes straight to the bank. So the matrix has holes in it, and the holes aren't symmetrical — you can't write a rule that covers every cell, because some cells don't exist and others exist only under one parent.

- Then authentication branches again, and this is where the flow stops being ours at all.
- Hosted Pages: the authentication branch

After consent the flow splits four ways — decoupled QR, browser redirect, embedded login, or no Yapily screen at all — each with its own sub-variants, before converging on a result screen and returning to the merchant.

- Redirecting to bank
- Decoupled (QR)
- Can be hidden
- Redirect
- Browser handoff
- Embedded
- In-page login
- No auth screen
- Skips to bank
- Scan on mobile
- Mobile web
- App-to-app
- Desktop path
- Payments EU
- Extra info req.
- Payments UK
- Data
- Single SCA
- SMS code
- Other methods
- Multi SCA
- Lithuania
- Netherlands
- Sweden
- Bank's own flow
- All four converge on the result screen
- Payments or data, success or failed, UK or EU wording — then back to the merchant

Four authentication models. Which one a user gets depends on their bank and their country.

Four models. A decoupled QR handoff from desktop to phone. A browser redirect. An embedded login where credentials are entered in our page. And, in Lithuania, the Netherlands and Sweden, no screen from us at all — the flow hands straight off. Which of the four a given user gets is decided by their bank and their market, not by us and not by our customer.

The redirect path adds a further wrinkle: EU payments require additional information, and whether we show a screen to collect it depends on whether the customer included it in their API call. Same product, same market, same bank, different number of screens — determined by how carefully the integration was built. That's one of the clearest arguments for why the documentation and the UX guidance were product work rather than support work: a customer who read them gave their users a shorter journey.

### What this meant for how we worked

Three things follow from the shape above, and they explain most of the decisions in the rest of this case study.

****Prototype testing could only take us so far****

You can't usefully prototype a flow whose shape is chosen at runtime by someone else's integration and someone else's bank. It's why the experimentation pipeline had to run against production traffic, and why the research programme reached hundreds of real people connecting real accounts rather than a panel working through a mock-up.

****Improvement had to be incremental****

There was never a redesign available that fixed the whole surface, because there was never a whole surface — only a sparse matrix of paths, each of which had to be measured and improved on its own terms. Hundreds of variants across bank selection, the QR handoff and embedded logins, between 2023 and 2026.

****Some of our screens were optional****

Both the consent sheet and the QR screen can be switched off by customers on their own licence. Designing screens a paying customer is explicitly allowed to delete changes what the screen has to do — it has to earn its place in their flow, not just in ours.

### Decisions

**The decisions below, and a pattern that runs through all of them.**

In each case what presented as an interface problem turned out to be a data or intelligence problem — bank names held in a search index, a regional capability we had assumed was universal, a retry limit we had invented rather than looked up. Research was often the part that found the problem rather than the part that fixed it, and the fix frequently belonged to engineering. That is the honest description of where design added value on this product, and it's more useful than a set of before-and-after screens.

****Bank discoverability****

Across the 2023–2026 usability sessions, search was consistently the primary way users found their bank rather than browsing, taking 5–15 seconds. Commissioned competitor benchmarking put the equivalent at 1–3 seconds, using brand grouping and a most-popular shortcut. Three changes came out of it, and only one was a layout change. We redesigned bank selection, grouped bank branches under one parent brand (critical in markets like Germany, where Sparkasse and Volksbank sit above thousands of sub-branches), and added a popular-banks shortcut. We changed the naming convention: we had been listing banks under the names institutions register under, and users recognise the name on their card and in their app instead, so we matched the display names to that. And we found gaps in our own search index — session after session, people typed aliases, informal names and old brand names that returned nothing. That went to engineering as a change to how search resolved queries rather than as a change to a screen.

Post-launch, time to find a bank came down to 1–3 seconds in most markets, and 3–5 seconds in the branch-heavy ones where the list is longest. That closes the gap the benchmarking opened: the first figure matches what competitors were achieving, and the second is the honest cost of markets like Germany, where even a grouped list has thousands of entries behind it.

- `[image: A flat alphabetical list of every institution]`
- BEFORE
- A flat alphabetical list of every institution
- `[image: Popular banks, brand grouping and shortcuts]`
- AFTER
- Popular banks, brand grouping and shortcuts
- **Layout for scale**

Bank selection has to work in two conditions that pull in opposite directions. A customer connecting to a handful of institutions needs something compact. A customer facing a branch-heavy market needs to find one entry among hundreds. One layout optimised for either case fails the other.

An earlier round settled the basic form. We tested a grid against a list, and the grid lost for a reason that only surfaced in session: it couldn't display full bank names, and because many institutions share near-identical icons, participants couldn't reliably tell entries apart. The density a grid bought us cost more in ambiguity than it saved in scrolling.

From there we prototyped three variants and tested them against both scenarios: a two-column grid, a two-column grid paired with a full list, and a hybrid that switched behaviour as the list grew.

The more useful finding was the one we weren't testing for. Every variant, including the one participants liked least, beat the flow already in production. That reframed the decision: the question stopped being which of the three to ship and became how quickly we could ship any of them. The direction was validated independently of the layout details, which is a stronger result than picking a winner.

- `[image: Two-column grid · 915×640px]`
- VARIANT 1
- Two-column grid

Every institution in a two-up grid of logo tiles. The densest option — more banks visible without scrolling, and the shortest path in small portfolios. It was also where the naming problem bit: tiles leave no room for a full bank name, so in branch-heavy markets participants were choosing between near-identical icons.

- `[image: Two-column grid and list · 1046×714px]`
- VARIANT 2
- Two-column grid and list

A short grid of the most likely banks above a full alphabetical list. The grid carries the shortcut, the list carries scale and full names, so neither condition is served at the expense of the other — the same split that later became Popular banks.

****Language assumptions****

Research found language couldn't be inferred from country. The person setting up account access sometimes lived in, or spoke the language of, a different country than the actual accountholder. The initial approach — customers passing country and language via the API at integration time — still assumed the customer could predict the end user's language in advance. We moved to an in-flow language selector and let the actual user choose.

- `[image: In-flow language selector · 1600×692px]`
- **Accessibility validation**

Two studies did different jobs. A commissioned audit found contrast failures across multiple screens, and screen readers reading raw SVG markup aloud because alternative text hadn't been implemented properly — a screen reader user couldn't navigate the flow at all. We postponed a release to fix both rather than shipping and correcting afterwards, and I documented the findings for the frontend team to work from. A separate unmoderated study of 21 testers in Germany, including participants with disabilities, tested the new flow against the live demo. 62% preferred the new flow overall, rising to 78% among testers with disabilities. The study also surfaced that a screen reader user couldn't navigate the old flow at all.

- 21
- testers in Germany, including participants with disabilities
- 62%
- preferred the new flow overall
- 78%
- preferred it among testers with disabilities
- **Returning users, and two optimisations fighting for the same space**

A large share of our customers are PSPs and checkout providers, which means a large share of end users come back — same person, same merchant, often the same bank. They were repeating the full first-time journey every time, and customer feedback kept landing on it.

Working with product and with customers directly, we scoped what could reasonably be reused: pre-filling account details such as IBANs where the customer already held them, and surfacing recently used banks so selection could be skipped rather than repeated.

The first design had two blocks — recently used, then popular banks. It failed in a way that only became obvious once assembled. A bank could qualify for both, so the same logo appeared twice within a few rows. And the popular block, which existed to speed up first-time selection, got pushed down the screen by a feature built to speed up repeat selection. Two optimisations competing for the same real estate, each making the other worse.

We merged them into a single block — Recommended banks — with the most recent bank held in a dedicated slot at the top, popular banks filling the rest, and de-duplication so no institution appears twice. One component, both conditions, which is the same conclusion the layout testing had reached by a different route.

The harder problem was that the same screen has to serve customers who want opposite things from it. A customer running a KYC journey wants the bank locked, because the point is verifying one specific account and letting the user wander is a failure. An ecommerce merchant wants the reverse — default to the recent bank, but let the user get back to the full list. Both are correct for their use case, so neither can be the design; it has to be configuration.

- This is in build rather than shipped, so there are no outcomes to report yet.
- FIRST DESIGN
- Two blocks, stacked
- RECENTLY USED
- Commerzbank
- Used 2 hours ago
- RECENT
- Deutsche Bank AG
- Used yesterday
- RECENT
- POPULAR BANKS
- Deutsche Bank AG
- DUPLICATE
- Sparkassen
- Regional banks
- Volksbanken Raiffeisenbanken
- 700+ local banks
- A bank can qualify for both, so the same logo appears twice within a few rows.
- Popular banks — the first-time shortcut — gets pushed down by the repeat-visit shortcut.
- Two optimisations competing for the same space, each making the other worse.
- SHIPPED
- One block, both conditions
- RECOMMENDED BANKS
- Commerzbank
- Used 2 hours ago
- RECENT
- Sparkassen
- Regional banks
- Volksbanken Raiffeisenbanken
- 700+ local banks
- Deutsche Bank AG
- Most recent bank held in a dedicated slot at the top.
- Popular banks fill the remaining slots, so the first-time shortcut stays above the fold.
- De-duplication means no institution can appear twice.

Merging the two blocks resolves the duplication and the competition for position at once — the same conclusion the layout testing reached by a different route.

- `[image: Popular banks only]`
- FIRST VISIT
- Popular banks only

Nothing is known about the user, so the block carries the market shortcut alone — the most likely institutions and the parent brands that stand in for thousands of branches.

- The same component, in its empty-recents state.
- `[image: Recents promoted into the same block]`
- RETURNING USER
- Recents promoted into the same block

The bank used most recently takes the top slot and is marked with when it was used, so a repeat payment is one tap.

Popular banks fall in behind it and fill the rest — the first-time shortcut is never displaced, only shortened.

De-duplication means a bank that is both recent and popular appears once, in the recent position.

****The decoupled flow, and the assumption underneath it****

The decoupled flow starts on desktop, hands off to the bank's mobile app, and comes back. It was built on an assumption: that mobile bank logins are more usable than desktop ones, so moving the user to their phone should improve completion wherever app-to-app is supported.

That makes it one of the two points in the flow with the most drop-off risk — handoffs are where people leave. The user has to pick up a second device, do something in an app we don't control, and return to a browser tab they may have already lost. It's also the step where the screen can give the least help, because for most of it the user isn't looking at our screen at all.

- Testing didn't support the assumption, for two reasons.
- Coverage.

Outside the UK, app-to-app support was thin. Far fewer banks offered it than the design had assumed, so the flow was being applied to markets where the payoff largely didn't exist.

**Competing QR codes.**

In some markets, banks presented their own QR code inside their app. Users arriving at our QR screen were looking at two codes with no indication of which one to scan, or in which direction. That confusion showed up as drop-off.

So the change in those regions wasn't a better-explained QR screen. It was no QR screen — we removed the step, and conversion improved.

In the regions where the handoff genuinely helped, the mechanism wasn't the problem; knowing how to act on it was. We looked at established cross-device authentication patterns for reference — 3D Secure, and the phone-based sign-in used when installing apps on a TV. Both solve the same problem of making a device handoff feel deliberate rather than accidental, and both had conventions users had already learned elsewhere. We tested copy and layout variants against live traffic through the in-house experimentation pipeline. The version that won gave the user more guidance through the step and a clearer layout to carry it, and moved conversion in those regions by roughly 10%.

Neither change is a redesign. Both came out of running variants against real users rather than arguing about it internally. They were two of hundreds of variants the programme worked through between 2023 and 2026, because when the screens are this constrained and the compliance requirements this fixed there is no single redesign available.

- `[image: A code and an instruction to scan it]`
- BEFORE
- A code and an instruction to scan it

One sentence of instruction, with no account of what happens after the scan or where the user comes back to.

Where the bank showed its own QR code in-app, the user faced two codes and nothing to say which to scan, or in which direction.

- Continuing on the same device sits under the code as a plain link, easy to miss.
- `[image: The handoff described as three steps]`
- AFTER
- The handoff described as three steps

Camera, link, confirm — the whole handoff is stated up front, including the return to this tab, so picking up a phone is a deliberate step rather than a guess.

The bank is named and marked beside the code, which is what separates it from a code the bank presents itself.

Continue on this device is given equal weight as a card, so users who can’t switch device have a visible route.

- Won on live traffic — roughly 10% in the regions where the QR step was retained.
- **Embedded login**

Embedded login lets someone authorise a bank consent without leaving Hosted Pages. It removes the redirect — and with it, the reassurance of landing on a domain the user recognises. That trade sat at the centre of everything difficult about this flow.

**Getting the fields right.**

Each bank expects specific credentials in a specific form, and our mapping of labels and inputs didn't reliably match what users were being asked for elsewhere. Testing drove that mapping to accuracy — the right labels, the right inputs, matching what people saw in their own banking app. This had to be fixed before anything else was worth attempting; no amount of trust-building compensates for a form that asks for the wrong thing.

**Trust.**

The harder problem: we were asking people to enter bank credentials into a page they didn't recognise, for data they treat as highly sensitive. Once the fields were correct we worked on the surrounding signals — iconography, explicit wording identifying Yapily as a regulated open banking entity, and the customer's own logo, anchoring the page in a brand the user already had a relationship with. The logo was A/B tested rather than shipped on judgement, and it earned its place. Embedded conversion improved by roughly 13% over the course of this work.

That didn't solve the underlying problem. Asking someone to type bank credentials into an unfamiliar interface has a floor that visual design can't lift on its own, and I'd be overstating the work to claim otherwise.

**Retries.**

A quieter issue surfaced in testing. Our flows assumed three retries when someone entered credentials incorrectly — but banks didn't agree with that assumption or with each other, and some allowed more. On SCA code entry the mismatch ran the other way: we permitted a single retry where the bank allowed several, so we were ending sessions the bank would have let continue. Testing surfaced the discrepancy; engineering built the mapping of per-bank retry behaviour so the flow could reflect what each institution actually permitted rather than a single assumed rule. That also improved conversion.

The flow could only ever be as accurate as our model of how each bank behaves — and that model was wrong in ways only watching real people could surface.

- `[image: A login form with nothing to place it]`
- BEFORE
- A login form with nothing to place it

Titled Login, with no statement of who is asking, on whose behalf, or why the bank’s own page never appeared.

The bank is named in small text and the fields are generic, so there is nothing to check the labels against.

No encryption or regulatory wording, and no merchant brand — the page the user recognises least is the one asking for their credentials.

- `[image: The same fields, placed and accounted for]`
- AFTER
- The same fields, placed and accounted for

The title names the bank, and the sentence under it names Yapily as the regulated entity and the merchant it is acting for — the A/B tested change that carried most of the gain.

Field labels and helper text match what the bank asks for, including the warning not to enter a one-time code where a PIN belongs — the mapping work testing forced before anything else was worth trying.

Encryption wording sits directly above the action, and Why am I signing in here? answers the question in place rather than sending the user away.

Roughly 13% improvement in embedded conversion across this work — with the caveat that typing bank credentials into an unfamiliar page has a floor visual design can’t lift.

****How this was tested****

Sessions were sized to the decision rather than to a standard — small and fast where the question was whether a direction was obviously wrong, larger where more variants had to be covered. Findings that survived qualitative testing went into quantitative experiments in production, run against a percentage of live customer traffic through the in-house pipeline, which is where the numbers came from. The per-decision figures above come from that pipeline and are directional: the work ran as a sequence of overlapping experiments rather than as isolated tests, so I'd treat them as the size of a movement rather than a clean attribution.

### Outcomes

Customer integration effort dropped from around six months — sometimes over a year for complex cases — to two weeks. Hosted Pages is used by 200 companies, including Google, Adyen, Intuit, Ant Financial and Revolut.

Conversion went from around 20% in the 2023 beta to roughly 65–75% end to end today, varying by use case and country. That gain was made incrementally over three years by UX, frontend and backend working the same problem from different sides, alongside expanding bank coverage — not by one redesign. In open banking a meaningful share of end-to-end conversion is infrastructure: bank API reliability, redirect success, coverage. I can't give a clean percentage for design's share of it, and I'd distrust anyone who could.

- Where design was one of the levers, the movements were:
- Bank discoverability

— time to find a bank fell from 5–15 seconds to 1–3 in most markets and 3–5 in branch-heavy ones, through display naming matched to what people call their bank, search alias gaps found in testing and passed to engineering, and the grouping and shortcut redesign of bank selection.

**Embedded login**

— roughly 13%, across field mapping, A/B tested trust signals and the per-bank retry corrections.

**The decoupled handoff**

— roughly 10% in the regions where QR was retained, plus an improvement in the regions where the step was removed entirely.

Those figures are directional and come from overlapping production experiments rather than isolated tests. Taken together the work improved end-to-end conversion across the flow; the individual numbers describe the size of a movement, not a clean attribution.

- 2 wks
- integration effort, from ~6 months
- 200
- companies using Hosted Pages
- Hundreds
- usability sessions behind the redesign, 2023–2026
- 20 → 65–75%
- conversion, 2023 beta to today — UX, frontend and backend together

### Reflection

Hosted Pages was originally built for customers using Yapily's own licence, so the flow was fairly rigid by design. At the time that felt like the right trade-off — it kept the compliance surface small and got us to market fast. It was only once direct customers started onboarding and asking for more flexibility in their own consent experience that the limitation became clear. If I were starting the product again, I'd build more flexibility into the licensing model from day one — not because the original call was wrong given what we knew then, but because I'd now design for that need earlier rather than retrofitting it later.

### Leadership

Set the research and product design direction for the programme that took Hosted Pages from MVP to general availability at the end of 2025, and for the usability, prototype and accessibility work that has continued through 2026. Led the June 2026 cross-functional workshop with frontend and design teams to scope the next roadmap. Worked with designers and product managers at Google over two years as they built their own open banking products on Yapily — the first year spent helping them build their own bank selection and authentication flows, after which they adopted Hosted Pages for account verification and for markets where the complexity made building it themselves uneconomic. Supported Yapily's compliance team in preparing presentations to the FCA.

- ← All work
- Yapily Console →

---

## Case study 02 — The Yapily Console (console.html)

- 02 — CASE STUDY

### Turning a sales-led onboarding into a self-serve one

The Console is where Yapily customers sign up, manage applications, and configure their integration with the platform. Becoming a customer used to take six months to a year. This is the work to make most of that self-served — six years of a tool built for one customer type, left behind by the API it sat on top of, and then rebuilt around the customers it had never really served.

- `[image: Console — redesigned dashboard · 2200×1120px]`

### How it got that way

**2020 · The Dashboard**

It wasn't called the Console. The first version was the Dashboard, built for a handful of customers who held their own open banking licence — connecting them to our API and a few hundred banks. Functionally it was two things: a certificate vault, and application management. At the size the company was then that was the right scope. Yapily had five customers in 2020, Intuit among them.

What it couldn't tell a customer was anything about how their integration was performing. Hosted Pages didn't exist yet as a concept, and neither did Yapily Connect.

`[diagram: console-evolution-1-2020.svg — one licence model, the application as container]`

One licensing model. Customers with their own licence create an application, manage certificates, register banks and enable a few hundred institutions. The application is the container, and analytics are API logs only.

`[image: The Dashboard, 2020 — applications, certificates and links out to documentation · 2200×1120px]` · **Superseded**

**2021 · The first redesign**

The Dashboard predated me, so the first real piece of work was establishing what was wrong with it — not by opinion but through fourteen interviews with engineers, usability sessions with developers, internal research with customer success and support, and analytics.

Three findings shaped the response. We weren't tailoring anything to customer type: someone evaluating the API got the same experience as a customer running in production. The documentation didn't let people successfully test the API, which is the one thing an evaluating engineer is trying to do. And the dashboard didn't guide anyone through their first steps.

The audit list matters less item by item than as a pattern. Critical information lived in modals that appeared at the wrong moment and got dismissed. Password rules were revealed only after you'd broken them. Terms could be accepted but not declined. The institution list had no pagination, which makes a list of banks unusable at any real scale. And downloading your application secret also closed the window — a sudden, unrequested action at the most sensitive point in the flow.

None of it exotic. It's the accumulation you get when a tool grows without anyone owning the whole of it. So the redesign went after the sequence rather than the screens: password rules stated before you type them, error messages that say how to fix the problem, registration with a choice of email or Google, and a quickstart guide answering *what do I do next* in four steps.

`[image: Before — a welcome screen with no next step. After — quickstart guide, and password rules stated up front · 2200×1120px]` · **Superseded**

What the redesign didn't change was the shape. Still a certificate vault and an application manager, made considerably better. Whether that was the right scope for the company Yapily was becoming wasn't a question anyone asked for another four years.

**2022 · A second licensing model, and Germany**

Two things arrived at once. Yapily Connect let customers operate under our licence instead of holding their own, creating a second customer type with different needs. And new markets — Germany above all — took coverage from a few hundred institutions to thousands. A new version launched for both, and the Dashboard became the Console.

Scale changed what the old screens were being asked to do. A certificate list built for a handful of registrations is a different object at nineteen thousand rows, and the work was as much about making volume navigable as about adding features.

`[diagram: console-evolution-2-2022.svg — two licensing models, one container]`

Yapily Connect customers skip certificate management and bank registration entirely and reach thousands of banks. The application is still the only container — a second customer type fitted into a shape built for the first.

**2022–2025 · Rebranded, not rebuilt**

What followed was several rebrands and almost no new functionality. Yapily was migrating from a monolith to microservices, and Console work was deprioritised behind it each time.

The consequence was gradual and then obvious. The API kept moving; the Console didn't. New platform capability shipped with no way to reach it from the interface customers actually logged into, and a tool that had been adequate became one that couldn't do the job — not because anyone decided that, but because everything around it changed and it stayed still.

Every gap between what it did and what customers needed got absorbed by a person. CSMs, PMs and support staff manually enabled features, curated bank coverage on a customer's behalf, and told customers which banks supported what. None of that looked like a design problem. It looked like we needed more people.

`[diagram: console-evolution-3-2022-2025.svg — guidance that ends at a sales form]`

Guidance improved, then handed the customer to a person: the get-started guide ends at a sales form. Hosted Pages configuration and scope enablement stayed support-led — a ticket, a support person and an engineer, per customer, per request.

**2025 · A reason to rethink it, not just repair it**

Being that far behind turned out to be the opportunity. The question stopped being what to add back and became what the tool was for.

The clearest version of the problem was in how onboarding ran: human-driven end to end, through sales, pre-sales, implementation and customer success. For corporate customers that's appropriate — they expect hand-holding and their complexity warrants it. For SMEs, who are the large majority, it was slow and inefficient, and they were sitting through a process built for somebody else.

### How I made the hidden cost visible

The first task wasn't design. It was making the case that a deprioritised internal tool was one of the more expensive things in the business — and making it with evidence rather than opinion, because "the Console needs work" had been said before and hadn't moved anything.

So I ran three things, each doing a different job. Customer interviews, to establish what people were actually blocked on. A workshop with VPs, PMs, engineering, support, design and customer success, to get to a shared account of the problem rather than five departmental versions of it. And a hackathon, to make the friction concrete for people who had never experienced it — because it's easy to disagree with a research finding, and much harder to disagree with two days your own team just spent failing to onboard.

- Two things became impossible to argue with.
- Nobody could get live without us.

Onboarding needed so much hand-holding that there was no path through it without several people at Yapily being personally involved. Not one blocking step — a sequence of them, each requiring a different person.

**Everyone got the same journey.**

Google and a corner shop went through an identical process. The largest customers weren't getting the attention their complexity warranted, and the smallest were being made to sit through a sales-led onboarding they neither needed nor wanted.

Both showed up in the same place: customers told us the timeline was a problem, and some of them acted on it.

The main resistance came from senior management on the platform side, and the objection was a fair one. The priority was launching integrations in more regions — the growth engine, and what customers asked for in sales conversations. Console work would take capacity away from it. That was a concrete bet against a vaguer one.

The workshop is what changed it. Once sales, support, customer success and engineering were in one room describing the same journey, the cost stopped being a design opinion and became a visible amount of several teams' time. The Console was prioritised, and the journey mapping and self-serve direction that follow came out of that.

Earlier attempts had failed not because the problem was unclear, but because the case had only ever been made by design, to product. It needed to be made by five functions at once.

### The problem was operational, not cosmetic

That bottleneck had a shape. A visitor found the website, filled in a form, and was contacted by an SDR. From there: pre-sales conversations, KYC, contract, customer success onboarding, technical onboarding, go-live. Six months to a year from first contact to a customer in production, depending on the customer type, the sales threshold, and whose calendar had space.

That was fine for enterprise customers, who want to be sold to and expect hand-holding. It was badly wrong for everyone else — and everyone else is around 80% of the customer base, on customer success's figures.

### Mapping it before changing it

I mapped the whole journey end to end: every stage from anonymous visitor through to renewal and expansion, every team that touched it, every tool it ran on, and what mattered to the person at each stage — split three ways, because a buyer evaluating providers, a signed-but-not-live customer, and a customer in production don't want the same things.

It was deliberately not a design artifact. It covered sales, customer success, technical services, support and operations, because the experience customers were actually having was assembled from all of them, and no single team could see the whole of it.

- Getting to production, before
- Six months to a year, depending on availability, customer type and deal size.
- STAGE 1
- Evaluating
- PATH
- Organic and paid traffic
- Website
- Docs · Dashboard · Support · Chat — each loops back or exits
- Contact form → inbound lead
- Two routes end in no conversion
- CHANNELS
- Website · Documentation · Dashboard · Support inbox · Live chat
- TEAMS
- None assigned. Nobody owns this stage.
- WHAT MATTERS HERE

Coverage for their specific use case · pricing · features · how to test the API · the basics of licences, compliance and limitations · how to become a customer · time to go live · what open banking can and can't do · how we compare · building trust

Limited access to mock banks and sandboxes, but no way to know where the limits are, because the experience doesn't tell them.

- STAGE 2
- Becoming a customer
- PATH
- Sales funnel
- KYC
- Contract signed
- Customer success onboarding
- CHANNELS
- Video calls · email · PDF forms · scheduling links · demos
- TEAMS

Sales · SDRs · pre-sales engineers · customer success · support · technical services · operations

**WHAT MATTERS HERE**

What's in the package · no surprises in the contract · understanding the limitations · gathering documentation for legal review

Partial access, and no clear picture of what they're allowed to test. The stage moves at the speed of whoever has calendar space.

- STAGE 3
- Live
- PATH
- Technical onboarding
- Go live — splits into direct customer or agent
- Renewal, upsell, expansion
- CHANNELS

Documentation · dashboard · website · support · chat · video calls · shared Slack channels · public roadmap

- TEAMS
- Support · technical services · customer success · account managers · operations
- WHAT MATTERS HERE

Reliability of the service and the banks · speed · ease of use · support for the nuances of their use case · learning what's new and coming · getting help with bugs · influencing the roadmap · troubleshooting

One path serving two customer types. Agents want the experience to be theirs, not ours. Direct customers need help with registration and portal complexity. Neither is well served by the same journey.

- Manual — depends on someone being available
- Automated or self-served
- Dead end — no conversion

The journey as it was. Redrawn from the original map, with internal commercial detail removed.

****The manual work was structural, not incidental****

Nearly every stage past the contact form was annotated as manual, for Yapily staff and customers alike. The delay wasn't one broken step; it was that the whole path depended on people being available.

****Users and buyers were invisible to us****

Before someone became a customer, we couldn't identify them across the website, docs, dashboard or support — so we couldn't tailor anything to what they were trying to do. People evaluating us hit limits they didn't know existed and had no way to understand.

****Two customer types were being served by one path****

Direct customers and agents have materially different needs — one agent's note in the research was simply that they didn't want to see our logo in their experience — and the single assisted funnel served neither of them well.

### Running it as an outsider

The map showed where the path depended on people. A hackathon showed what it actually felt like: two days with engineering, PMs, design and the implementation team, role-playing as an outside consultancy and using only what a real customer can access. It surfaced a 403 error because Hosted Pages wasn't enabled by default, requiring a two-day wait for a PM to fix it; sandbox banks that had to be registered manually, with roughly a third of the pre-configured ones not working; confusion over which of three returned IDs was the Application User ID; and an undocumented CORS issue forcing customers to build their own backend proxy. None of it was new to the customers experiencing it. What was new was that our own engineers and PMs had now experienced it.

Two of the four were fixed directly off the back of it. Engineering resolved the CORS issue, removing the need for customers to build their own backend proxy. And the sandbox was rebuilt to contain every authentication flow, so a customer could exercise the whole surface without asking us to enable anything — which turned out to pay a second dividend nobody had scoped for, because it also gave automated testing a complete environment to run against.

- `[image: Hackathon output — the friction log, or the scoped initiatives · 2200×920px]`

### The strategic decision: split the path

Split the path. Enterprise customers keep the assisted journey, because that's what they want and it's worth doing. Everyone else gets a self-serve one: find the site, get access to the Console, and onboard and implement using the product and the documentation, without waiting on a calendar.

The target is weeks to a few months from first contact to go live, against six months to a year.

**Getting to production, after**

Target: weeks to a few months. Around 80% of the customer base is non-enterprise, on customer success's figures, and takes the self-serve path.

- STAGE 1
- Evaluating
- PATH
- Traffic
- Website
- Docs and live demo
- Identify use case and segment
- Console access
- CHANNELS
- Website · documentation · live API demo · Console
- TEAMS
- None required.
- WHAT MATTERS HERE

The same list as before — coverage, pricing, limitations, time to go live. The difference is that it can now be answered by the product rather than by a person.

Knowing who someone is and what they're building means the experience can be tailored, and the limits of sandbox access can be stated rather than discovered.

- STAGE 2
- Onboarding
- PATH
- Create application and credentials
- Invite team and assign roles
- Curate bank coverage by market and product
- Submit for compliance check via queue
- Build against sandbox → approved → production
- Enterprise keeps the assisted path, on the same Console underneath
- CHANNELS
- Console · documentation · live demo — the assisted path adds sales and solution design
- TEAMS
- Self-serve: none required by default. Assisted: sales and pre-sales.
- WHAT MATTERS HERE

What's in the package · understanding the limitations · getting compliance approved without waiting for a meeting · getting the whole team access, not just the developer

Compliance moves from a scheduled in-person session to a queue. That single step was the most common reason a go-live slipped, and it slipped for scheduling reasons rather than substantive ones.

- STAGE 3
- Live
- PATH
- Production
- Monitor via in-product analytics
- Renewal, expansion
- CHANNELS
- Console · documentation · support · shared Slack channels · public roadmap
- TEAMS
- Support and customer success, on exception rather than by default.
- WHAT MATTERS HERE

Reliability · speed · their own performance data, current rather than a stale export · managing their own team and access · knowing what's coming

Analytics move into the product. Previously customer success exported this manually and sent it as reports — expensive for us, out of date for them.

- Assisted — retained deliberately for enterprise
- Automated or self-served

The journey the Console is designed to replace it with. Some steps are live in the beta and some are still to come.

### Principles behind it

- Identify early.
- Nothing can be tailored to a person you can't recognise.
- Remove scheduling as a dependency.
- Most of the delay was calendars, not complexity.
- Make limits visible.
- People hitting an invisible ceiling assume the product can't do it.
- Serve teams, not individuals.
- Engineers, PMs, designers and finance people need different things from the same account.
- Give customers their own data.
- Anything a CSM exports by hand is a queue with a person in it.

### What the Console does

****Applications and credentials****

Customers create their own applications and manage credentials across sandbox and production, with product scope and status visible on each — so the first thing a developer needs is self-served rather than requested.

****Teams and roles****

Our customers are businesses, not individuals: engineers, PMs, designers and finance people, who need genuinely different things from the same account. Customers can now invite their own team members — a long-standing request, and one of the more consistent pieces of feedback across the interview programme. Roles are scoped accordingly — owner, admin, billing, developer — so a finance person isn't navigating API keys and a developer isn't blocked waiting for someone else to grant access.

****KYB without a meeting****

Customers complete know-your-business checks online and receive approvals through the product, replacing scheduled in-person sessions. This is the step that most often stalled a go-live, and it stalled for scheduling reasons rather than substantive ones.

****Bank coverage they curate themselves****

Customers filter the institution list by market, product, payment type and rail, and select the coverage that matches their use case — rather than asking us which banks support what.

****Analytics and billing in the product****

Conversion funnels, drop-off, bank performance, session data and billing, visible to the customer directly. Previously this was exported manually by CSMs and sent as reports, which cost us time and gave customers a stale picture.

### The beta, screen by screen

The path a customer now takes, in order: get in, test against a sandbox, verify the business, then operate what they've built. Every screen below is from the beta build.

The first three groups are what a non-customer can reach without speaking to anyone. The last is the same product once they're live.

**01 · GETTING IN**

Registration used to be a contact form and a wait. It is now an account, an organisation and a working sandbox — no scheduling, and nothing enabled by a person at Yapily.

- `[image: Sign in]`
- Sign in

Email, Google, GitHub or SAML SSO. The 2021 audit found registration offered one path; an evaluating engineer now takes whichever they already have.

- `[image: Create your account]`
- Create your account

What the product is for, stated beside the form. The value proposition belongs at the point of commitment, not only on the marketing site.

- `[image: Complete your profile]`
- Complete your profile

Two fields after a federated sign-in. Everything not needed to create the account was moved out of the account creation.

- `[image: Set up your organisation]`
- Set up your organisation

The organisation, not the application, is the container — the modelling decision the 2022 retrofit made unavoidable. Named here because it appears on invoices later.

- `[image: First run]`
- First run

Three routes out of an empty state: open the sandbox app, read the docs, or start verification. Plus team invites, because integrations are done by teams.

- `[image: Switching organisations]`
- Switching organisations

A customer operating across regions holds several organisations. Cardinality assumed from the start this time.

**02 · START TESTING**

A preconfigured sandbox from signup, with mock data and every authentication flow available — the environment the hackathon proved we did not have. Production is an explicit upgrade rather than the only door.

- `[image: Applications]`
- Applications

The sandbox app exists before the customer asks for it. Production sits alongside it as a clearly-marked upgrade rather than a hidden capability.

- `[image: Application overview]`
- Application overview

Scopes granted, environment, status. Metrics are visibly present but gated, so the ceiling is legible rather than invisible — a direct answer to a 2021 finding.

- `[image: Credentials]`
- Credentials

Labelled by sensitivity: application and client ID marked safe for client-side code, the secret handled differently. Regenerating issues a new secret with a 24-hour grace period on the old.

- `[image: Scopes and institutions]`
- Scopes and institutions

Read-only in sandbox, and said so plainly. A disabled control that explains itself is a different object from one that just fails.

- `[image: Hosted Pages configurator]`
- Hosted Pages configurator

The one piece shipped in full. Four values against a live preview of the customer’s own consent screen — the theming request that used to be a ticket and an engineer.

- `[image: Institutions]`
- Institutions

Bank capability as a filter rather than a question for a human: product, account type, payment type and rail, app-to-app, SEPA Instant, and a toggle to hide banks with active incidents.

- `[image: Webhooks]`
- Webhooks

Test events, delivery logs, success rates and replay. Sandbox fires simulated events for every subscribed type, so the integration can be exercised end to end.

- `[image: Analytics, before there is data]`
- Analytics, before there is data

An empty state that says what will fill it and what to do next. Zeroes with an explanation beat a blank panel.

**03 · MOVE TO PRODUCTION**

Seven steps, saveable and resumable, ending in a signed agreement rather than a scheduled meeting. Verification was the most common reason a go-live slipped, and usually for scheduling reasons rather than substantive ones.

- `[image: Step one of seven]`
- Step one of seven

Products, markets, and the licence question — asked before anything is configured. Two expensive retrofits are the reason it comes first.

- `[image: KYB, not started]`
- KYB, not started

Four named states instead of a black box: business information, company documents, authorised signatory, agreement signing.

- `[image: KYB, in progress]`
- KYB, in progress

Each step carries its own status, so a customer can see what is blocking them without asking. Compliance becomes an asynchronous queue rather than a calendar.

- `[image: Billing, before production]`
- Billing, before production

Plan, payment method and invoices, visible while still free. A finance person can prepare without a developer relaying screenshots.

- `[image: Inviting the team]`
- Inviting the team

Roles described by what they can do — admin, developer, billing — so the choice is made from consequence rather than from a permissions matrix.

- `[image: Team, at the start]`
- Team, at the start

One owner, and an obvious way to add people. The long-standing request across the interview programme was simply to let customers invite their own colleagues.

**04 · OPERATING IT**

The same product once the customer is live. The apparatus here — funnels, drop-off, per-bank performance, session monitoring — was built so

**we**

could tell whether a change had worked. It turned out to be what customers most wanted to see.

- `[image: Home, in production]`
- Home, in production

Consent volumes with movement, and a quickstart that persists and ticks off rather than a welcome mat you walk over once.

- `[image: Applications, in production]`
- Applications, in production

Sandbox and production applications side by side, filterable, each carrying its environment and status. Disabled is a state, not a gap.

- `[image: Application overview]`
- Application overview

Scopes, markets and live metrics in one place — the same layout as the sandbox view, with the gates removed rather than a different screen.

- `[image: Scopes and countries]`
- Scopes and countries

What a bank supports is a fact about the bank; what an application connects to is a decision about the product. Kept separate deliberately.

- `[image: Conversion funnel]`
- Conversion funnel

Institution selected, authorisation started, completed, payment confirmed — with the drop-off flagged and a suggestion attached. Analytics that only display are analytics most people do not act on.

- `[image: Bank performance]`
- Bank performance

The spread runs from the low nineties to the low seventies. Design did not cause that range and cannot close it — which is exactly why the customer should be able to see it.

- `[image: Sessions]`
- Sessions

Request ID, bank, duration, completed or failed. A developer debugs a specific failure instead of inferring it from a rate.

- `[image: Webhooks, in production]`
- Webhooks, in production

The same operational tooling, now against real traffic: last delivery, success rate, replay for anything that failed.

- `[image: Sub-applications]`
- Sub-applications

One construct for two problems — a reseller’s merchants and a customer’s regional entities. Each carries its own KYB state, so one can be live in Germany while its sibling is under review in France.

- `[image: Team and roles]`
- Team and roles

Owner, admin, billing, developer. A finance person is not navigating API keys, and a developer is not blocked waiting for access.

- `[image: Billing, in production]`
- Billing, in production

Plan, card, next billing date and downloadable invoices. Anything a CSM exports by hand is a queue with a person in it.

- `[image: Verification, and its renewal date]`
- Verification, and its renewal date

Verified, with the next renewal named. Re-verification is a recurring obligation, so the interface treats it as one.

- `[image: SAML SSO]`
- SAML SSO
- Enterprise authentication as a setting rather than an implementation project.
- `[image: Account settings]`
- Account settings

Password, MFA and account data, separate from organisation configuration. People and permissions change on a different clock from technical setup.

### Where it stands

The Console is in beta, and the screens above are from that build. It's too early for adoption metrics. One piece has already shipped in full: a live Hosted Pages configurator giving customers granular, self-serve control over every screen in the flow — colours, copy, layout and states. Before it, a customer wanting a theming change raised a support ticket and an engineer implemented it, every time — a support person and an engineer consumed per request, for work that was never engineering work. Those requests stopped. That is the shape of the whole Console argument in one feature: the cost wasn't a bad screen, the cost was people.

The journey map and the information architecture are mine. The Console itself was built with product and engineering, and the self-serve initiatives were scoped jointly off the back of the mapping and the hackathon.

### The same mistake, four times

Worth naming, because by now it isn't a coincidence.

Hosted Pages was built for customers operating under our licence, and flexibility for direct-licence customers had to be retrofitted through the configurator. The Dashboard was built for the opposite type and had Yapily Connect retrofitted into it in 2022. Bank selection was built to behave one way, then met KYC customers who need the bank locked and ecommerce customers who need it changeable. And the account model assumed a customer is one company with one application, when a customer operating across regions is several organisations and a reseller has customers of their own.

Four products, and the specific wrong assumption is different every time. What's the same is the shape of the error: we assumed the singular case. One licence. One customer type. One behaviour. One company.

The lesson isn't *anticipate everything* — that's how you get systems flexible in every direction nobody needed and rigid in the one that mattered. It's narrower. The question worth asking early is a cardinality question: **can there be more than one of this?** Asking costs a conversation. Not asking costs a retrofit, and retrofits are expensive in a way that's easy to miss, because the bill doesn't arrive for years and lands on whoever is there when it does.

The returning-user work is the one instance where we asked in time, which is the only reason it reads as a configuration decision rather than a rebuild. And the clearest sign the lesson landed is step one of the new onboarding, which asks whether the customer holds their own licence before anything is configured. It took two expensive retrofits to learn that a question worth asking in year six was worth asking in year one.

The broader version: the interface, the commercial process and the internal operating model were one customer experience. Once the hidden manual work was mapped, the organisation could make a deliberate choice about which customers needed assistance and which tasks should become product capability.

## Case study 03 — Design systems (design-systems.html)

- 03 — CASE STUDY

### Design systems at Yapily

Custard, Mark and Yapily UI — three design systems on one shared token layer, and the governance model that decided what got into them. I designed the first versions of the systems and built the governance jointly with the frontend lead.

### Three systems, one token layer

We ran three design systems instead of one, and that was deliberate. A single system would have forced three very different surfaces into one set of compromises, and whichever surface was least like the others would have come off worst.

Three separate Figma libraries sat on top of a shared token library. Tokens were maintained as Figma variables and mirrored in code, with the component library documented in Storybook. Same primitives, different components — and that split is what made three systems cheaper than one compromised system, rather than three times the work.

****Custard — hosted pages****

White-label, and minimal by design. Customers themed it themselves — logo, typeface, and brand colours applied mainly to buttons and links, with a choice of light, dark or system-matched appearance. Everything else stayed locked. When customers control the surface, the system's job is to expose as little as possible while still reading as their product.

****Mark — website****

Restyled annually with distinctive, playful work — larger heading spacing, more expressive layout. Coupling it to the product systems would have meant every marketing refresh rippling into production tooling. Separated, it moved at its own pace.

****Yapily UI — tools****

Dense by nature — analytics and data-heavy pages where vertical rhythm is tight and information density is the point. Its atoms and molecules were built for that.

**Three design systems on a shared token layer**

A shared token layer held as Figma variables and mirrored in code feeds three separate design systems: hosted white-label pages, the website, and internal tools. Changes to shared tokens required approval from both the frontend lead and the design lead. Each system owns its own atoms, molecules and templates.

- Shared token layer
- Figma variables, mirrored in code
- Changes gated by both leads
- Custard
- Hosted pages, white-label
- Logo, font, colours
- Light/dark/system
- Mark
- Website, expressive
- Annual restyle
- Light only
- Yapily UI
- Tools, data-heavy
- Analytics surfaces
- Dark mode
- Separate Figma libraries — each owns its atoms, molecules and templates

Shared tokens were governed more tightly than components, and correctly so: a shared-token change lands on all three systems at once. Those changes required approval from both the frontend lead and the design lead, and in practice happened rarely — effectively only during rebrand work.

### Inside Yapily UI

Pages from the library documentation — tokens, anatomy, states and spacing. Every component was documented this way so a decision only had to be made once. Click any panel to open it full size.

- `[image: Typography documentation: Inter font family, root tokens table and text styles]`
- TOKENS
- Typography — family, root tokens, and the full style scale

`[image: Colour documentation: brand dark green, text colours and neutral greys with hex values]`

- TOKENS
- Colour — brand, text and neutral ramps with usage rules
- `[image: Logo placement rules with minimum and maximum sizes across desktop and mobile]`
- BRANDING
- Customer logo — size bounds and placement at both resolutions
- `[image: Bank list row anatomy with numbered callouts for list, label and radio]`
- ANATOMY
- Bank list — parts, dependencies and what each one inherits
- `[image: Text input documentation: guidance, Figma variants, anatomy and spacing]`
- COMPONENT
- Text inputs — guidance, variants, anatomy and spacing
- `[image: Search component in default, pressed, focused, filled and disabled states]`
- COMPONENT
- Search — five states across three widths
- `[image: Checkbox and radio component states with anatomy specifications]`
- COMPONENT
- Checkboxes and radios — every state, with and without helper text

`[image: Button footer component matrix across mobile and desktop, AIS and PIS, UK and EU]`

- COMPONENT
- Button footer — twelve variants of consent copy, device and region
- `[image: Inline notification variants shown in context on a bank login screen]`
- COMPONENT
- Notifications — inline errors, documented in context
- `[image: Toast component: purpose, message guidance, placement rules and four variants]`
- COMPONENT
- Toasts — success, information, warning and error, plus placement

### Contribution and governance

- The gate was evidence rather than seniority.
- **Proposal**

Anyone could propose a component; in practice proposals came from design and frontend. The proposer produced a simple mockup — enough to evaluate, not a finished spec.

- **Validation**

The component was tested for usability and accessibility before it was eligible for review — a mix of guerrilla testing and external platforms: Maze for unmoderated usability, Testbirds for broader usability and accessibility coverage.

- **Documentation**
- The proposer wrote the component up with its use cases. Defining where a component
- shouldn't
- be used mattered as much as where it should.
- **Review**

Ad-hoc meetings with the frontend team and other designers. Bringing frontend in at proposal stage rather than at handoff surfaced implementation cost while the design was still cheap to change.

- **Approval**
- Two stages — design-side first approval, then a group decision with the frontend team.
- **Adoption**
- Approved components entered the shared library.
- Component contribution and governance flow

A seven-step flow: propose a mockup, validate through usability and accessibility testing, document use cases, review in an ad-hoc meeting with frontend and designers, design lead first approval, then a group decision with the frontend team, then publish to the component library.

- Propose
- Simple mockup
- Validate
- Usability + a11y
- Document
- Use cases defined
- Review
- Ad-hoc meeting
- Design gate
- First approval
- Group gate
- With FE team
- Publish
- To the library
- Gold: proposer's work — Grey: collective gate and outcome

### Where validation sat

- Validation sat
- before

review, not after. That single ordering decision changed what review meetings were about — teams debated evidence rather than taste, and the discussion moved faster because there was less to be subjective about.

### Reach

Components from these systems were used across the marketing website and its landing pages, demo tools, internal tools, hosted pages, and customer-facing tools.

### Versioning and deprecation

We never formalised versioning or deprecation. What I'd put in place now: semantic versioning, so someone has to consciously decide whether a change is breaking; deprecate rather than delete, with the replacement and migration path named; a changelog written for humans; Figma and code versioned in step so designers can tell what's actually in production; and release notes pushed to Slack rather than a wiki nobody opens.

---

## Case study 04 — Research practice (research-practice.html)

- 04 — CASE STUDY

### Research practice at Yapily

Yapily never had a dedicated researcher, so designers did the research alongside the design work. This is the practice I built inside that constraint, and ran for six years.

- 2020–2026 · FOUNDING DESIGNER → DESIGN LEAD

### The constraint

With no researcher to hand a question to, research had to be cheap to run, continuous rather than project-gated, and easy for people outside design to follow. It also had to lean on the people already talking to customers every day, instead of treating research as something only design did. That constraint shaped everything below.

### How it worked

****Continuous discovery****

I ran my first customer conversation in 2020 and my most recent one last week. Between those, at least three customer interviews a month, sustained — over two hundred conversations across six years. Early sessions were broad: what are you trying to do, where does it hurt, what's missing. As the products matured they narrowed to specific surfaces — Console, the documentation, Hosted Pages — and the purpose shifted from finding the problem to validating a direction.

Alongside the scheduled interviews I ran informal Slack channels with customers — a direct line for the observations that never make it into a formal session because they're too small to raise a ticket over.

A fixed cadence rather than a project-triggered one. If research is booked as a standing commitment you never start a discovery phase from zero, and you notice a shift in what customers are saying before it turns into a roadmap problem.

****Two audiences****

Yapily's customers are businesses. Hosted Pages' users are consumers connecting their bank accounts. Research had to reach both, and the two needed different methods. The interview cadence covered the first group — the PMs, developers and operations people integrating with us, who could say what was hard to build against and what their own customers complained about, but who were not themselves using the flow. For the second, the 2023–2026 usability programme ran hundreds of sessions with ordinary people going through the act of connecting a bank account.

In a B2B2C product it's easy to only research the buyer, because the buyer is who you're talking to every week. But they can tell you about their integration problems — they can't tell you why someone gave up at the QR screen.

****Feedback loops with the people closest to customers****

Support and Customer Success hear things design never will. The loop existed to get that into the product: a bi-weekly forum with PMs, CSMs, design and engineering, focused on trending feedback rather than individual tickets; a shared board where that feedback was consolidated and prioritised, so the same issue raised by four customers surfaced as one item with weight behind it; and beta programmes — around 150 customers took part between 2023 and 2026, giving us a population to test with that already had context and stake.

I set the loop up. Prioritisation was a joint call with PMs and engineering, and that's the part that made it hold. A board design owns on its own is really just a wishlist. When three functions prioritise it together, it becomes a queue people act on.

Support and CSM as a research channel rather than an escalation channel. The bi-weekly cadence mattered as much as the board — a recurring meeting turns feedback into a habit instead of a fire drill.

****Building shared understanding****

Research that only designers understand doesn't change anything. Two formats did most of that work: problem-framing workshops with PMs, engineering and wider teams, to get everyone to the same understanding of the customer problem before anyone proposed a solution; and prioritisation sessions run off the back of them, so what got built was argued from the same evidence base.

Card sorting on the documentation sat slightly apart. We used it to restructure the information architecture of the docs, and tested findability and task flows both before and after the change.

The before-and-after measurement. Most IA work ships on the strength of the argument that made it. Testing the same tasks against the old and new structure is what turns a redesign into a result.

****Matching method to decision****

Guerrilla sessions for early iterations — fast, cheap, run on whoever was available, used to kill bad directions before they were expensive. Commissioned studies for the decisions that warranted them: usability, accessibility and competitor benchmarking on both Hosted Pages and Console through Testbirds and Applause. Studies were sized to the decision, moderated and unmoderated — the right size for finding usability problems and the wrong size for producing a percentage, which is why the production experiments existed alongside them.

Matching method cost to decision cost. Guerrilla testing where the question is "is this direction obviously wrong"; commissioned panels where the question is "does this meet a standard we can be held to."

****Not every finding was a design finding****

Three of the more useful results from the sessions weren't screen changes. We had been listing banks under the names institutions register under, and users don't recognise those — they know the name on their card and in their app, so we matched the display names to what people actually call their bank. Session after session we watched people type a name and get nothing back: aliases, informal names, old brand names our index didn't hold. That went to engineering as a change to how search resolved queries rather than as a change to a screen. And on embedded login we found our retry handling didn't match what banks actually permitted — three retries assumed on credentials where banks varied, and a single retry on SCA codes where banks allowed several. Engineering built the per-bank mapping; research is what established the rule we were enforcing was invented.

None of the three observations would have existed without sitting and watching real people use the flow, and none of the three fixes belonged to design.

****Accessibility****

On accessibility the standard was WCAG AA, and two studies did different jobs. A commissioned audit found contrast failures across multiple screens, and screen readers reading raw SVG markup aloud because alternative text hadn't been implemented properly — a screen reader user couldn't navigate the flow at all. We postponed a release to fix both rather than shipping and correcting afterwards. I wrote the findings up as a document for the frontend team to work from, and the system now meets AA. A separate unmoderated study of 21 testers in Germany, including participants with disabilities, tested the redesigned flow against the live demo: 62% preferred the new flow, rising to 78% among testers with disabilities.

****Instrumentation****

Working with engineering and product, we mapped the events needed to measure customer journeys accurately — deciding what to track, and where, so journey performance was measurable rather than inferred. This is the unglamorous half. Without it there's no funnel, no baseline and no experiment, and event schemas designed after the fact are always worse than ones designed alongside the flow.

****Experimentation****

With PMs I defined the testing pipeline; with engineering we built it in-house, so features could be tested against real traffic in production rather than in a prototype. We ran results sessions to communicate outcomes to the wider team.

On Hosted Pages the pipeline tested copy and layout variants across the screens carrying the most drop-off risk — bank selection, the QR code handoff and embedded login. Embedded conversion moved roughly 13% and the retained QR regions roughly 10%; both are directional, and the detail is in the Hosted Pages case study.

Between 2023 and 2026 the programme worked through hundreds of design variants across bank selection, the QR code handoff and embedded logins — layout, copy, iconography and in-flow guidance. Sustained testing at that volume is what makes a flow this constrained improvable at all. There's no single redesign available when the screens are this small and the compliance requirements this fixed — only a long run of small, evidenced changes.

The results meeting. An experimentation pipeline that only its operators read is a reporting tool. Socialising results across the team is what makes the next set of design arguments start from evidence rather than opinion.

### The arc that matters

Hosted Pages converted at around 20% in the 2023 beta. End to end today it runs at roughly 65–75%, varying by use case and market. That gain was made incrementally, over three years, by UX, frontend and backend working the same problem from different sides — not by one redesign. In open banking a meaningful share of end-to-end conversion is infrastructure — bank API reliability, redirect success, and coverage, which was expanding throughout. Design was one of the three disciplines that moved it, and its contribution was concentrated in bank discoverability: the display naming change, the search alias gaps found in testing, and the grouping and shortcut redesign of bank selection.

- 200+
- customer conversations, 2020–2026
- Hundreds
- end-user usability sessions, 2023–2026
- 150
- customers in the 2023–2026 beta programmes — a subset of the 200 using Hosted Pages
- 20% → 65–75%
- Hosted Pages conversion, 2023 to today — UX, frontend and backend together

### What it added up to

Qualitative work told us what customers were trying to do and where it broke. Instrumentation told us how often, and where in the journey. Experimentation told us whether the fix worked. Each answered a question the others couldn't, and the loop ran continuously rather than being spun up per project.

- All of it built and run by designers, with no dedicated research function.

---

## Case study 05 — HeadBox (headbox.html)

- 05 — CASE STUDY

### Turning a marketplace the right way round

My only non-Yapily case study, and the clearest example I have of research changing a business model rather than a screen.

- Role:
- Lead Product Designer ·
- Period:
- 2019 ·
- Company:
- HeadBox, enterprise event technology
- Status:
- Shipped; the company pivoted its business model on the result
- Outcome:

£150,288 ARR from 117 customers in three months, four times the prior model · 1,500+ leads in the first month · hosts logging in daily from launch

- `[image: The lead feed, and the wizard that feeds it · 2200×1120px]`

### An Airbnb for event spaces, converting at 10%

HeadBox was a two-sided marketplace: search a directory of venues, filter, message two to four of them, wait. Around one in ten searches turned into anything.

- The old homepage stated the problem without meaning to. The first thing it asked was
- what type of Space?

— a question that assumes the person already knows the answer. Further down sat an account management phone number, which is what a business does when the product can’t carry the customer on its own.

`[image: The HeadBox homepage in 2019 — a search box asking what type of space, and an account management phone number]`

**SUPERSEDED**

The homepage in 2019. A search box that assumes expertise, and a phone number for when it doesn’t.

### Both sides were failing, for opposite reasons

Fifteen customer interviews, usability sessions, and internal research with the sales and account management teams. The picture that came back was symmetrical.

****Guests were overwhelmed, not underserved****

They aren’t event experts — most plan one event a year and don’t know what they want or what it should cost. Faced with a directory and too many options, they’d shortlist a few venues, Google them, and ring them directly. Off the platform entirely.

The behaviour that looks like poor conversion was people getting the job done outside the product, because the product was harder than a phone call.

****Hosts were drowning in undifferentiated leads****

Enquiries arrived from every direction, almost none matched to their venue, so the genuine ones got buried and hosts stopped logging in. Only 20% of enquiries ever received a proposal.

Some of the leakage was deliberate. Passing contact details outside the platform to avoid the commission is a structural weakness of any marketplace taking a percentage — not a policing problem, a design one.

A CRM for venues, built before I joined, was meant to solve the host side. Its own marketing page made the case against it: 57% of venue enquiries arrive outside office hours, and the tool existed to capture them around the clock. A product whose entire value proposition depends on people logging in, that people won’t log into, has no value proposition.

- `[image: The HeadBox Stack CRM marketing page, 2019]`
- Stack, the venue CRM

Pitched as the tool that would organise every enquiry in one place. Venues wouldn’t sign in, so the enquiries sat unanswered.

- `[image: Stack marketing claim — 57% of venue enquiries arrive outside office hours]`
- The number in its own marketing

57% of enquiries arrive outside office hours — the argument for the tool, and the reason it couldn’t work as a thing you log into.

****And the company was absorbing the difference****

Around 80% of the company was sales and account managers, running the business out of spreadsheets and slides — matching enquiries to venues by hand, chasing both sides.

That works for a handful of large corporate accounts. It doesn’t work for the many small and medium ones, which is where the volume was. The same pattern I’d meet again at Yapily: a product gap that presents as a headcount need.

### The insight: the expertise was on the wrong side

We were asking guests, who do this once a year, to make expert decisions. And we were handing hosts, who are genuine experts and do this daily, a queue they couldn’t act on.

Every previous attempt had tried to make the existing shape work harder — a better marketplace, an agency model, a CRM. None of them questioned who was being asked to do the difficult part.

### The bet: capture requirements, let experts choose

Guests complete a short wizard that captures what they need rather than browsing a directory. Those enquiries pool into a feed. Hosts choose the events they want, rather than events choosing them.

**The revenue model changed as a consequence rather than as a goal.**

Venues pay for access to the feed instead of commission on the sale — which also designs out the off-platform leakage, because there’s no percentage left to avoid. Marketplace to SaaS.

- `[image: The lead feed — a brief a host can act on in seconds · 2200×1120px]`

### Venue creation, rebuilt around what the feed needs

Listing a venue had been a long form built for a directory page — prose descriptions, galleries, a wall of optional fields. Once matching moved to the host, the listing’s job changed: it exists so a host can be shown the briefs worth their time.

So the form was rebuilt around structured capacity, layout and suitability rather than copy, split into resumable steps, with the fields the feed depends on made unavoidable and the rest genuinely optional.

- `[image: The 2019 list-your-space page — one long form built for a directory listing]`
- BEFORE

Listing a space in 2019: prose-first, directory-shaped, and no sense of whether what you’d entered was enough to be matched on.

- `[image: Venue creation, before]`
- BEFORE

One long form. Capacity and suitability buried among optional fields, so they were frequently left blank — and you could finish and still have an unmatchable venue.

- `[image: Venue creation, after]`
- AFTER

Structured capacity, layout and suitability first, in resumable steps. Completeness is visible and tied to a consequence the host cares about: an incomplete venue sees fewer briefs.

### Testing it before building it

The Enquiry Hub shipped first as a deliberately small experiment: London only, capped at £10k. It showed the platform connected hosts and guests well but converted poorly — which is what justified the larger bet rather than assuming it.

The first prototype of the feed was a spreadsheet: a list of events a host could pick from. That was enough to establish whether the requirements we captured were sufficient, and whether the idea excited them, before anyone built anything. It evolved through Figma into coded prototypes.

Guest-side prototyping started as a Google Form, for the same reason. Find the cheapest thing that produces real evidence.

- `[image: The spreadsheet prototype, and what it became · 2200×840px]`

### What it produced

£150,288 ARR from 117 customers within three months — four times the prior model’s performance, and the company’s first scalable, profitable product.

- £150,288
- ARR within three months
- 117
- paying venues
- 4×
- the prior revenue model
- 1,500+
- leads in the first month
- Hosts logged in every day from launch.

That’s the number I’d point at, because it’s the exact thing every previous attempt had failed to achieve. A tool venues wouldn’t open leaked revenue; a feed they check daily is the whole thesis proven.

### The model outlived me

The wizard is still HeadBox’s front door in 2026, and the three steps beside every screen are the same ones: tell us what you’re looking for, we share your enquiry with suitable venues, venues message you. Seven years is a reasonable test of whether a structural bet was right.

The screens have moved well beyond anything I shipped, and the best of them makes the original argument better than my version did — the budget step doesn’t just ask what you want to spend, it tells you what things cost before asking you to commit.

The ordering carries the argument too. One product asks who you are before it asks what you want; the other earns the personal details by being useful first.

- `[image: Wizard step — what are you planning?]`
- What are you planning?

The opening question is about the occasion, not the venue. Nine plain options where the old site asked

- what type of Space?
- `[image: Wizard step — who is invited and how the space is set up]`
- Who’s invited

Headcount and standing or seated. Two answers a guest always has, and the two a host most needs to triage on.

- `[image: Wizard step — location with a radius slider on a map]`
- Where, within a radius

A radius slider with a plain statement of the consequence: you’ll mainly hear from venues inside the circle. The mechanism is visible rather than implied.

- `[image: Wizard step — budget with a distribution chart and typical price range]`
- Budget, with the answer supplied

A party for 23 in London usually costs £460 to £2,875 — plotted, and converted to per-head. The expertise gap closed directly: the product tells you before it asks you.

- `[image: Wizard step — venue styles]`
- Style, as adjectives

Formal, casual, industrial, blank canvas. Vocabulary a non-expert already owns, which is also structured enough for a host to filter on.

- `[image: Wizard step — facilities and catering requirements]`
- Facilities and catering

Structured requirements plus one free-text field. The structure serves matching; the free text catches everything the structure would have lost.

- `[image: Wizard step — event name and how soon you want to book]`
- How soon are you booking?

Lead qualification collected from the guest, in the guest’s own interest. It’s what lets a host triage a feed instead of treating every enquiry as equivalent.

- `[image: Wizard step — name, contact number and marketing preferences, at the very end]`
- Personal details, at the very end

Name, phone and marketing preferences come last, after everything about the event. The 2019 signup modal asked for all of it before it asked anything.

- LIVE IN 2026 · EVOLVED BY OTHERS

### Credit, precisely

I designed the inversion and the first version of the flow, and led the research that produced it. The current wizard is years of other people’s work on top of that. I’d claim the structure, not the screens.

I also established the design system, governance framework and research practice used across the organisation while I was there.

### What I’d do differently

**I’d have pushed to kill the old CRM sooner.**

We ran both for longer than we needed to, and it split attention across two models when only one of them was working.

**I’d have instrumented the host side harder from day one.**

We knew hosts were logging in daily, which was the headline. What we couldn’t say precisely was which enquiries they picked and which they skipped — and that’s the data that would have made the matching better rather than just the access.

### What I took from it

Every previous attempt had asked how to make the existing shape work harder. The one that worked asked who should be doing the difficult part, and moved it. That’s a question about the model, not the interface — and it’s the same instinct behind the work I did later on open banking infrastructure, where the most valuable findings were rarely about screens either.

- ← All work
- Research practice →
- ← All work

---

## Creative archive (creative-archive.html)

- ARCHIVE — EARLY WORK

Illustration, identity, motion and interface craft from before the work became mostly systems and teams. Kept here because the habits it built — drawing the thing rather than describing it, animating a state to find out whether it reads — are still how I work.

### Brand and interface studies

**self-directed**

Unbriefed exercises: take a product I found interesting, and see how far an identity, a campaign placement and a set of app states can be pushed in a weekend. Not client work, and never ran anywhere.

- `[image: Out-of-home placement study]`
- Out-of-home placement
- `[image: Identity applied to a t-shirt]`
- Identity applied to merchandise
- `[image: Four app coverage states side by side]`
- Coverage states — parked, driving, paying
- `[image: Animated coverage screen]`
- Coverage screen, animated

### Payfriendz

- interface and motion
- `[image: Payfriendz group collection inside a chat]`
- Group collection inside a chat
- `[image: Payfriendz profile with badges and card activation]`
- Profile, badges and card activation
- `[image: Payfriendz maintenance screen]`
- Maintenance screen — reassurance about money

### Illustration and marks

- `[image: Collection of vector character portraits]`
- Vector character portraits

Portraits drawn for colleagues, friends and side projects over several years — the same reduced vector language I was using for product illustration at the time, pushed to see how much likeness survives a small number of shapes.

- `[image: Mascot mark, flat construction]`
- Mascot mark, flat construction

### Scientists

**a personal series**

A set of scientist portraits built from a small, fixed vocabulary — a circle, a silhouette, one pattern, three colours — and printed on shirts to see whether the likeness survived at chest size.

- `[image: Darwin portrait mark]`
- Darwin
- `[image: Church portrait mark]`
- Church
- `[image: Tesla shirt worn]`
- Tesla, printed
- `[image: Darwin shirt worn]`
- Darwin, printed
- `[image: Rosalind Franklin shirt worn]`
- Rosalind, printed
- `[image: Ada Lovelace shirt worn]`
- Lovelace, printed

### Comics and storyboards

Drawing was often the fastest way to argue a point — a strip to explain a product idea, a storyboard to make a flow legible to people who don't read wireframes.

- `[image: Product comic strips]`
- Product strips
- `[image: Illustrated account-manager journey map]`
- Illustrated account-manager journey, HeadBox
- `[image: Three-panel freeze-card storyboard]`
- Freeze-card storyboard
- `[image: Payfriendz promotional five-pound note]`
- Promotional fiver — Payfriendz
