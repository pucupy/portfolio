# Alejandro Velázquez — Portfolio Content

> Content-ready Markdown for Claude Design. Keep the main navigation focused on four case studies: Hosted Pages, Console, Yapily Brand & Website, and HeadBox. Research, design systems, UX guidance and demos are embedded within the product stories rather than presented as separate projects.

---

# Home

## Alejandro Velázquez

**Lead Product Designer & Design Manager**  
Fintech · Open banking · Payments · SaaS · Platform products

I design products that make complex systems easier to understand, adopt and operate.

I joined Yapily in 2020 as its first designer. Since then, I have led product strategy and design across Hosted Pages, the customer Console and the systems behind them; built the company’s research practice; managed and developed designers; and worked with Product, Engineering, Compliance, Sales and customers to turn operational problems into product capability.

Before Yapily, I worked across consumer payments, marketplaces and enterprise software. At HeadBox, research changed not only the interface but the company’s business model.

**Based in the UK**  
[Email: aleuxuk@gmail.com]  
[LinkedIn: linkedin.com/in/velazquezalejandro]  
[Download CV]

## Selected work

### 01 — Yapily Hosted Pages

**From months of custom integration to a launch path that can take around two weeks.**

A white-label payment and account-connection experience across different banks, markets, devices, licence models and authentication methods. I led the original product strategy and design, then its continuing research and optimisation.

**Key evidence:**
- Integration reduced from approximately four to six months in many European cases to around two weeks.
- End-to-end conversion grew from roughly 20% in the early beta to approximately 65–75%, varying by use case and market.
- Bank discovery improved through popular banks, recent banks, grouping, aliases and market-specific naming.

[View case study]

### 02 — Yapily Console

**Turning a sales-led, manually operated onboarding journey into a self-service platform.**

The original Console was built for a small number of enterprise customers and one licensing model. I mapped the full commercial and operational journey, helped make its hidden cost visible, and led the information architecture for a new self-service experience now in beta.

**Key evidence:**
- A clear split between assisted enterprise onboarding and self-service for the majority of customers.
- Customer-controlled Hosted Pages configuration replaced repetitive support and engineering work.
- Early signals show reduced support demand and a smaller compliance backlog; exact operational figures remain confidential.

[View case study]

### 03 — Yapily Brand & Website

**Evolving the brand as Yapily moved from invisible API infrastructure to a clearer product platform.**

I provided creative direction, designed the first concepts and wireframes, managed agency relationships, worked with the frontend team to translate final designs into a live system, and extended the brand across sales and marketing collateral.

**Key evidence:**
- A clearer product architecture helped customers understand the offering.
- Migration from an expensive, difficult CMS improved publishing speed and ease of use across thousands of links, landing pages and articles.
- The visual identity was designed to stand apart in a category where competitor websites looked increasingly interchangeable.

[View case study]

### 04 — HeadBox

**Inverting a marketplace and creating £150,228 ARR within three months.**

HeadBox asked non-expert guests to search like event professionals while expert venues waited for poorly matched enquiries. I led the research that reversed that model: guests described what they needed, opportunities entered a central feed, and venues chose the work that suited them.

**Key evidence:**
- 117 paying customers in three months.
- £150,228 ARR in the same period.
- Four times the annual revenue of the previous marketplace model.
- More than 1,500 enquiries in the first month.
- Approximately 90% of the original product structure remains in the current experience.

[View case study]

## Other experience

### Payfriendz

Lead design for a peer-to-peer payments product across the UK and Germany. More than £5 million transferred, 150,000 users and a top-three position in the App Store finance category.

### Docomo Digital

Designed payment products supporting marketplace and sharing-economy platforms across Europe and Asia.

### Su4erheroes

Co-founded a product design consultancy with former Payfriendz colleagues, working across payments, personal health budgets and marketplace products.

### Payango

Designed customer and operational experiences for a prepaid card product in Germany.

### Globant

Enterprise product design for clients including Google, JP Morgan, PwC, Coca-Cola and Telefónica.

---

# About

## Product designer, design leader and builder

I have worked in digital product design since 2005, across Argentina, the United States and the United Kingdom. My strongest experience is in regulated fintech, open banking, payments, enterprise SaaS and platform products.

I am most useful where a product is complex for reasons that cannot be solved by simplifying a screen alone: regulation, operational dependencies, multiple customer types, changing market capability or fragmented ownership across teams.

## How I work

I start by understanding the system around the interface: what customers are trying to achieve, what the business is doing manually, where engineering constraints come from, and which assumptions are being treated as facts.

I use research to find the problem, analytics to understand its scale, and experiments to test whether a change works. I prefer evidence before review so design discussions are about user outcomes rather than taste.

I remain hands-on. I create product strategy, journeys, information architecture, interaction design and prototypes, and I can build working experiences in HTML, CSS and JavaScript when a coded prototype communicates more clearly than a presentation.

## How I lead

I have managed seven designers across six years at Yapily and currently lead a small product design team. I hire, support performance development and create the conditions for designers to work independently.

My goal is not to make every decision. It is to establish clear ownership, standards and governance so the work continues without depending on me being present.

I work closely with Product, Engineering, Compliance, Customer Success, Support, Sales, Pre-sales, Implementation and senior leadership. I have also managed relationships with branding agencies, research providers and customer design teams.

## What I bring

- Product strategy grounded in customer and commercial evidence.
- Hands-on interaction and interface design.
- Experience designing within regulated and technically constrained environments.
- Research and experimentation practices that operate continuously rather than only during formal discovery phases.
- Design-system governance that supports consistency without forcing unrelated products into one pattern library.
- Team leadership focused on independence, clarity and quality.

---

# Case Study 01 — Yapily Hosted Pages

## Making open banking easier to launch, use and trust

**Role:** Lead Product Designer and Design Manager  
**Period:** 2022–present  
**Status:** Live in beta  
**Scope:** Product strategy, research, journey architecture, interaction design, design-system direction, accessibility and ongoing optimisation

### Outcome

Hosted Pages reduced a complex custom integration that could take four to six months in Europe—and sometimes longer—to a path that can take around two weeks. End-to-end conversion grew from roughly 20% in the early beta to approximately 65–75% today, varying by use case, market, bank and device.

The improvement did not come from one redesign. It came from sustained work across design, frontend, backend, bank intelligence, reliability and market coverage.

## Understand

Yapily originally offered powerful APIs with very little abstraction. Customers had to design and maintain their own checkouts, consent screens, bank lists, authentication journeys, failure states and bank-specific behaviour.

I spoke with payment companies, identity-verification companies and banks, including CTOs, CPOs, product and design leaders, and lead engineers. The recurring problem was not simply poor documentation. Customers were spending months building and testing bank infrastructure instead of focusing on their own products.

This was particularly damaging for smaller customers, which represented roughly 80% of the customer base. Some struggled to reach production at all. Better documentation helped, but it could not remove the underlying implementation burden.

## Define

The product bet was to turn repeatable integration work into a pre-built, compliant and white-label experience.

Hosted Pages would support payment and account-data journeys while handling the differences between banks and markets. The first version prioritised speed to market and customers operating under Yapily’s licence. Some capabilities were intentionally deferred, including broader embeddability, SDKs, returning-user shortcuts and more flexible direct-licence journeys.

The first release reduced integration from six months or more to roughly two months. Later releases brought many implementations down to around two weeks.

## Architect

The visible experience may be only a few screens, but the journey changes according to:

- The customer’s licence model.
- Payment, account data or another product type.
- Country and market rules.
- Desktop or mobile device.
- The selected bank and its supported authentication model.
- Whether the bank is preselected in the API call.
- Whether required information was already supplied by the customer’s integration.

Authentication can redirect to a bank, remain embedded, hand off from desktop to mobile through a QR code, or skip most of the Hosted Pages interface entirely. Some screens are optional for direct-licence customers.

I worked with Product, business analysts, engineers and market specialists to turn this complexity into reference wireflows and branching logic the backend could implement.

### Custard: the system underneath the flow

Hosted Pages required its own design system. It needed to be accessible and consistent while remaining intentionally neutral and configurable enough to sit inside another company’s product.

Custard shared foundational tokens where useful, but kept Hosted Pages-specific components and behaviour separate. Customers could apply brand elements such as a logo and primary colour without gaining so much control that usability or compliance became unpredictable.

## Explore

We explored grid layouts, two-column bank lists, search-led approaches and accordion patterns.

The original bank-selection design used a hard-coded popular-bank grid. It was visually dense, difficult to maintain and unreliable across countries. Bank names did not always match what people called them, aliases were missing, labels did not fit and regional branches created long, repetitive lists.

A single-column approach performed best overall. Smaller lists could still benefit from an accordion, while longer lists needed strong search and clear grouping.

## Validate

The research programme combined moderated and unmoderated testing, customer prototypes, accessibility studies and production experiments.

Early rounds often involved 10–15 people in a market. Larger unmoderated studies covered hundreds of participants across many banks. Qualitative work helped us discard weak concepts quickly; stronger ideas moved into percentage rollouts and production experiments.

### Bank discovery

Users regularly took five to fifteen seconds to find a bank, and search was often their first action.

The strongest changes were not decorative. They improved the underlying intelligence:

- Popular banks based on market relevance.
- A recent-bank shortcut for returning users.
- Clear grouping for regional bank networks.
- Display names based on what customers actually call their bank.
- Search aliases and synonyms.
- Accent-insensitive search in relevant markets.
- A single-column layout that remained scannable at scale.

After introducing popular banks and improving search, fewer users failed to find their bank, successful selection increased, and reliance on search reduced.

### Desktop-to-mobile handoff

The QR handoff was initially treated as a broadly useful pattern. Research showed that the assumption did not hold everywhere.

Outside stronger app-to-app markets, coverage was limited. Some banks also introduced their own QR codes, leaving people unsure which code to scan. In those markets, the right design decision was to remove the Yapily QR step rather than explain it more carefully.

Where the handoff remained valuable, clearer instructions and a more deliberate transition improved the experience.

### Embedded authentication

Embedded login creates a difficult trust problem: users are asked for banking credentials on a page that is neither the merchant nor their bank.

Testing improved the experience through accurate bank-specific labels, clearer identification of the bank and the regulated provider, customer branding and explicit security guidance. The interface also warns users never to enter a one-time code where it should only be entered in their bank’s own experience.

Research also exposed incorrect assumptions about retry limits. Engineering replaced generic rules with per-bank behaviour.

### Accessibility

An external accessibility study identified contrast failures and screen readers announcing raw SVG information. We delayed a release by two sprints to correct the experience rather than shipping known barriers.

The work targeted WCAG 2.1 AA and influenced both component design and implementation quality.

## Build and launch

The initial concepts emerged in late 2022, with prototypes and early alpha and beta work in 2023. The first launch was around May 2023, beginning with UK payments and expanding into data journeys and European markets based on customer demand and pipeline needs.

The original core team was one PM, one frontend engineer and me. It later expanded to include a product designer, additional frontend and backend engineers and analytics support.

My contribution changed with the team. I remained responsible for product direction, customer conversations, workshops, concept work, design quality and results, while delegating more detailed testing and design-system maintenance.

The biggest launch risk was reliability rather than visual polish. A fast integration was only valuable if the flow could successfully move users through banks with very different behaviour.

## Optimise

Hosted Pages is now used by most customers in beta, particularly smaller customers that benefit from a low-support integration path.

The strongest public outcomes are:

- Integration reduced from months to approximately two weeks in many cases.
- End-to-end conversion improved from roughly 20% to approximately 65–75%.
- UK app-to-app journeys can exceed 85% conversion.
- Bank selection became faster and more reliable through popular banks, grouping, aliases and naming improvements.
- Customers gained configurable branding and layouts without requiring an engineer for every change.

These outcomes were produced jointly by UX, frontend, backend, bank reliability and coverage improvements. I would not claim design as the sole cause.

## Supporting customers who build their own experience

Enterprise and direct-licence customers often need more control than Hosted Pages provides. I worked with Pre-sales and Implementation to create guidance for their own:

- Checkouts.
- Consent and compliance screens.
- Authentication flows.
- Bank-selection experiences.
- Consent dashboards.
- Return and re-consent journeys.

I designed the original documentation and interactive demos, then delegated their continued development to my team.

The guidance was mainly used during enterprise Pre-sales and Implementation. Smaller customers generally used Hosted Pages and needed far less support. The result was fewer questions and stronger implementations, which we reviewed with the wider team before launch.

### Sales and implementation demos

I also created and coded the first end-to-end demos with Product and Implementation. They made the product offering tangible, showed how payments or data sharing could work inside a customer’s own product and demonstrated what a real banking journey looked like.

The demos were used by Sales, Pre-sales, Implementation and customers directly. The strongest example is an Apple-inspired experience because its realism and storytelling help people picture the product in context.

[ADD LINK: Apple demo]  
[ADD IMAGE: hub.png]

## Reflection

The first version was deliberately rigid because it prioritised speed and compliance for customers using Yapily’s licence. Direct-licence customers later needed more flexibility.

Starting again, I would design embeddability and licensing flexibility into the architecture earlier. The lesson is not to predict every future requirement. It is to ask sooner whether one product is serving more than one customer type with genuinely different needs.

---

# Case Study 02 — Yapily Console

## Turning an assisted onboarding process into a self-service platform

**Role:** Lead Product Designer and Design Manager  
**Period:** 2020–present  
**Status:** New Console in beta  
**Scope:** Research, service and journey mapping, information architecture, product strategy, interaction design, design-system direction and cross-functional alignment

### Outcome

The new Console separates enterprise customers who need an assisted journey from the majority of customers who should be able to onboard, configure and operate independently.

The product is still in beta, so broad adoption metrics are premature. Early evidence shows lower support demand for simple configuration and team-management tasks, and a significant reduction in the compliance backlog. Exact operational figures remain confidential.

## Understand

The original Dashboard was designed for a handful of customers that held their own open banking licence. It acted mainly as a certificate vault and application manager.

As Yapily grew, it gained new customer types, new products and thousands of additional banks. The API evolved, but the Console did not. Legacy frontend packages, a heavily encrypted Java backend, missing organisation concepts and repeated technical migrations made even small changes expensive.

The visible interface was only one part of the problem. Customer onboarding depended on Sales, Pre-sales, Implementation, Customer Success, Support, Compliance and Engineering. Becoming live could take six to twelve months.

Enterprise customers often expect this level of support. Smaller customers—approximately 80% of the base—were being forced through the same path.

## Define the real problem

The commercial issue was not that the Console looked dated. Customers could not self-serve, so operational teams acted on their behalf.

That created:

- Long waits for account setup and production access.
- Repetitive support requests.
- Manual compliance and billing processes.
- Features enabled by employees rather than customers.
- Customer frustration and potential churn.
- Less time for teams to support genuinely complex enterprise work.

The goal became faster onboarding and lower operational cost, not a cosmetic redesign.

## Make the hidden cost visible

I combined customer interviews, internal research and a cross-functional workshop with a two-day hackathon.

During the hackathon, Engineering, Product, Design and Implementation role-played as an outside consultancy and used only what a real customer could access. The team encountered permissions failures, non-working sandbox banks, confusing identifiers and an undocumented CORS issue that forced customers to build an unnecessary backend proxy.

This changed the conversation. The problem was no longer Design asking for a better interface. Multiple functions had experienced the same broken journey directly.

## Map the system before redesigning it

I mapped the experience from anonymous website visitor through evaluation, contracting, compliance, technical onboarding, production and renewal.

The map included every team, channel and manual dependency. It showed that the interface, commercial process and internal operating model formed one customer experience.

Three findings shaped the strategy:

1. Nearly every stage depended on an employee being available.
2. The business could not identify and guide users consistently across the website, documentation, support and Console.
3. Enterprise and non-enterprise customers were being served by one journey despite needing different levels of support.

## Define the strategy

The solution was to split the path:

- **Enterprise customers:** retain an assisted journey because the complexity and commercial value justify it.
- **Other customers:** move to a self-service journey through the website, documentation and Console.

The target for customers using existing products is to move from account creation to live operation within one to two months, with minimal assistance.

## Architect the new Console

The original model treated the application as the container for almost everything. That created problems when customers operated multiple products, markets, business entities or merchants.

The new architecture introduced:

### Organisation

The commercial and administrative container for profile information, billing, entitlements, jurisdictions, users, teams and audit activity.

### Applications

The technical container for credentials, products, markets, redirect URLs, webhooks, institutions, Hosted Pages configuration and analytics.

### Sub-applications

A structure that can represent both a reseller’s merchants and a customer’s regional entities. Each can carry its own compliance state, allowing one entity to be live while another remains under review.

### Users and access

Team invitations, roles, permissions and security controls.

### Analytics

Funnels, bank performance, sessions and request-level investigation. Customers need to see where their own users drop out and distinguish product problems from bank reliability.

### Guided onboarding

A seven-step path that makes the next action visible rather than requiring a Customer Success Manager to explain it.

## Explore and validate

Research ran intermittently from 2023 to 2025 through interviews, workshops, customer recordings and prototype playback. The work involved product, engineering, support, customer success, compliance and representatives of customer roles including product, engineering, finance, design and compliance.

Testing covered:

- Account creation and upgrading.
- Application setup.
- Team invitations and access.
- Billing and compliance states.
- Hosted Pages configuration.
- Credentials and secret regeneration.
- Finding institutions and product coverage.
- Tutorials and first-run guidance.

The design evolved from tab-heavy navigation toward a clearer double-navigation model. Credentials moved from destructive replacement toward explicit regeneration. Filters became visible rather than hidden, and new components were added to the shared system where evidence justified them.

Task testing showed people could find banks and manage credentials more quickly and with fewer errors.

## Yapily UI: the system behind the Console

The Console required a dense product system for analytics, tables, filters, permissions and operational states.

The original design system began in 2020 when the first frontend engineer joined. It evolved through several rebrands and technologies before the 2025 frontend team rebuilt the main products around React, Storybook and a shared token structure.

I originally owned the full system, governance, accessibility training and guidelines. As the team grew, I delegated maintenance to a product designer while retaining design quality and governance responsibility.

The contribution model was based on evidence rather than seniority:

1. Anyone could propose a component.
2. The proposal was validated for usability and accessibility.
3. Use and non-use cases were documented.
4. Frontend and design reviewed it early, while changes remained inexpensive.
5. Design approval was followed by a group frontend decision.
6. Approved components entered the shared library.

This system supported the Console, customer-facing products and approximately twenty internal tools.

## Build and launch

Planning and discovery ran across 2024 and 2025. An early beta began rolling out to a percentage of new customers in 2026, selected with Customer Success.

The beta includes organisations and teams, compliance, billing and Hosted Pages configuration. Multiple organisations and additional initiatives remain planned.

Some capabilities had already shipped independently, including sub-applications, webhooks and Hosted Pages customisation.

The Hosted Pages configurator provides the clearest proof of the strategy. Previously, a customer requested a design change through Support and an engineer implemented it manually. The configurator moved that task into the product, and those requests stopped.

## Where it stands

The new Console remains in beta. The rollout is proceeding as planned, with single-tenant customer environments requiring additional testing and fixes.

Publicly safe outcomes are directional:

- Fewer support requests for simple customisation and team-management work.
- A significantly smaller compliance backlog.
- Reduced dependence on employees for repeatable configuration.
- A clearer route toward one-to-two-month onboarding for customers using existing products.

Detailed support, compliance and setup figures are confidential and should not appear in the public portfolio.

## Reflection

The original Dashboard was appropriate for the company and customers Yapily had in 2020. The costly mistake was allowing one customer model to remain the default as the business changed.

The lesson is not to design every possible future state. It is to ask cardinality questions early:

- Can a customer have more than one organisation?
- Can an application contain more than one merchant or region?
- Can customers hold different licence types?
- Can the same screen require opposite behaviour for different use cases?

Asking early costs a conversation. Discovering the answer years later costs a retrofit.

---

# Case Study 03 — Yapily Brand & Website

## Making a changing company easier to understand and harder to confuse with competitors

**Role:** Creative direction and product design leadership  
**Period:** 2020–present  
**Scope:** Positioning workshops, competitor analysis, concepts, wireframes, agency direction, frontend collaboration, design-system governance and brand rollout

## Context

Yapily’s positioning changed repeatedly as the company and category matured:

1. An API-first and deliberately invisible infrastructure provider.
2. A company with clearer products around the API.
3. Open banking infrastructure.
4. Open finance.
5. An open banking platform for frictionless finance.

Each change required more than a new headline. The website needed to explain what customers could buy, how the products fitted together and why Yapily was different.

At the same time, the existing CMS was expensive and difficult to operate. Publishing and maintaining a growing library of pages, resources and links had become unnecessarily slow.

## Understand and define

Positioning was shaped through workshops with Marketing, Sales and senior leadership, supported by competitor analysis.

The analysis revealed a category problem: many open banking websites looked and sounded the same. It was difficult to distinguish providers or understand their product boundaries.

Creating dedicated product sections helped customers understand the offering more clearly and gave the site a stronger information architecture.

## My role

I provided the creative direction across the programme.

My responsibilities included:

- Designing the first concepts and visual directions.
- Producing the wireframes.
- Managing relationships with external branding agencies.
- Keeping strategic and creative decisions aligned with internal stakeholders.
- Working with the frontend team to translate final agency designs into a live product.
- Managing the website’s design and component system.
- Extending the brand beyond the website into sales, marketing and company collateral.

The agencies produced the final visual designs. I remained responsible for the direction, system and implementation quality.

## Mark: the website design system

The website needed a more expressive system than the customer tools. Mark allowed larger typography, richer layouts, campaign visuals, animations and distinctive brand moments without pushing those decisions into dense product interfaces.

It shared foundational tokens where appropriate but retained its own components and expressive behaviours.

The same system supported:

- The main website and navigation.
- Product and solution pages.
- Customer case studies.
- Landing pages.
- Blog and resource content.
- Reports and ebooks.
- Sales presentations and tailored demos.
- Campaign and company collateral.

## Build and launch

The final agency designs were translated into production in partnership with Yapily’s frontend team. The migration replaced an expensive, difficult CMS with a system that was easier to use and faster to publish through.

The platform supported thousands of links, landing pages and blog posts while giving Marketing more independence.

## Outcome

Commercial pipeline and enquiry data are confidential and should not be included publicly.

The safe outcomes are:

- Faster and easier publishing.
- A more maintainable component-led website.
- Clearer product architecture and customer understanding.
- A visual identity designed to stand apart from increasingly similar competitors.
- One brand system extended consistently across the website, sales and marketing materials.

## Reflection

The most important design challenge was maintaining coherence while the company’s positioning changed. A website cannot solve unclear strategy, but it can expose it. The strongest work came from using the site architecture and product pages to force clearer decisions about what Yapily offered and how the parts related.

[ADD IMAGES: 2020 website archive, 2023 website archive, current website]

---

# Case Study 04 — HeadBox

## Turning a marketplace the right way round

**Role:** Lead Product Designer  
**Period:** 2018–2019  
**Company:** HeadBox  
**Status:** Shipped; the model remains central to the business

### Outcome

The new Lead Feed reached 117 paying customers and £150,228 ARR within three months, four times the annual revenue of the previous marketplace model. More than 1,500 enquiries entered the product in the first month.

The current Lead Feed and guest journey remain approximately 90% structurally the same, with only small refinements made since launch.

## Understand

HeadBox connected people organising events with venues. The original marketplace expected guests to browse a directory, choose venues and send individual enquiries. Corporate customers could also receive a concierge service from account managers.

Before the new product team joined, product decisions had been made largely in isolation from customer insight and handed to a remote development agency as specifications. The result was a marketplace converting at around 10%, with 90% of users leaving before the main call to action, and a CRM that venues did not want to use.

On my second day, I was asked to fix the filters. There was no clear evidence about who the users were, what was wrong, how the filters connected to the wider journey or whether this was the highest-priority problem.

My confidence in making a useful interface decision was close to zero, so I helped reset the way the team worked.

## Build shared understanding

During the first months, I:

- Organised workshops to capture internal and external knowledge.
- Ran three rounds of interviews with 45 customers and non-customers.
- Observed people using the existing product.
- Created personas grounded in the research.
- Mapped guest, host and payment journeys.
- Analysed thousands of messages between guests and venues.
- Reviewed support emails and customer-chat conversations.
- Benchmarked competitor experiences.
- Organised existing data and introduced new behavioural tracking.
- Invited people across the company into interviews and design studios.

HeadBox was a sales-heavy organisation, and long research reports did not build engagement. I used weekly emails that presented uncomfortable data with a light tone, invited colleagues into sessions and turned synthesis into short, memorable videos.

This created a shared picture of the problems rather than a design-only interpretation.

## Define the real problems

The research exposed several connected issues:

- Guests did not know which type of venue they needed.
- Too many options created overload rather than confidence.
- Guests often contacted Support because they could not complete the journey.
- Venues wanted more business but did not want irrelevant spam.
- Enquiries arrived through multiple channels and were easily lost.
- Conversations moved outside HeadBox, weakening the commission model.
- Small meeting-room bookings consumed more operational effort than they generated in value.
- Most of the company’s effort was concentrated on manually matching and chasing opportunities.

The two sides were failing for opposite reasons.

Guests were non-experts being asked to make expert choices. Venues were experts receiving unstructured opportunities that were difficult to prioritise.

## The insight

**The expertise was on the wrong side of the transaction.**

Rather than improving the directory, we reversed the marketplace:

1. Guests describe the event they are planning.
2. Their requirements become a structured brief.
3. Briefs enter a central Lead Feed.
4. Venues choose the opportunities that fit them.
5. Both sides continue the conversation through the platform.

This removed the need for guests to understand the venue market before asking for help.

## Test the business model before building it

The first experiment was a spreadsheet.

We exported recent enquiries, filtered them and showed the opportunities to 20 venues. Hosts called the guests they believed they could serve. Eighteen of the 20 events became confirmed bookings, and venues showed interest in paying for access.

This established two important facts before significant engineering work:

- Venues were better at matching opportunities than guests were at selecting venues.
- Access to a relevant feed had enough value to support a paid product.

The idea progressed through fuller venue and guest prototypes. We contacted approximately 50 venues and tested with around 60 guests.

## Explore and refine

Guest testing changed the number and order of steps, including location radius and the level of detail requested.

The final principle was simple: collect as much detail as the guest could confidently provide, but no more.

The brief captured structured information such as:

- Event type.
- Number of guests.
- Seated or standing layout.
- Location and search radius.
- Budget.
- Style and atmosphere.
- Facilities and catering.
- Booking timeline.

Personal details came later, after the experience had already helped the guest clarify what they needed.

Venue onboarding also changed. Existing listings were the source of truth, so Lead Feed onboarding asked venues to update the details required for matching before they could join.

## Design for both low and high volume

Lead Feed solved two apparently opposite host problems:

- Venues with little activity gained access to a wider pool of relevant opportunities, giving them a reason to return.
- Multi-venue operators with too many scattered enquiries gained one central place to manage and prioritise them.

Hosts wanted to understand the potential value of each enquiry, the overall volume available and whether responding quickly improved conversion.

The product displayed response behaviour and used email nudges to bring both sides back into the platform. Users logged in to read and continue the conversation, helping reduce fragmented communication.

## Protect the enterprise model

Large corporate events could be worth approximately £1–£2 million each and still benefited from specialist account-management support.

We designed the corporate route into the model from the beginning. High-value events were identified and routed to account managers, while Lead Feed handled the broader self-service market.

This reduced launch risk and avoided forcing every customer through the same journey.

## Build and launch

The product moved from the spreadsheet experiment to production in approximately two months.

It launched first with selected venues based on quality and available volume, including some underperforming venues so we could understand whether the product helped re-engage them.

The core product team was a Product Manager, an engineer and me, with a separate squad maintaining existing products. We reported to the CPTO, and a data analyst helped establish analytics and later matching models.

I designed the initial prototypes and first production experience, established the research practice and shared research space, ran workshops, created a lightweight design system, reviewed analytics weekly and coded or prototyped parts of the experience where useful.

## Measure and optimise

Pendo provided detailed account-level analytics and funnels, including:

- Login frequency.
- Briefs viewed and unlocked.
- Response rate.
- Confirmed bookings.

Before this, much of the company’s data lived in manually maintained Marketing spreadsheets.

Analytics helped us choose who to interview and identify funnel drop-offs. On the guest side, simplifying the brief improved completion directionally from roughly 50% to around 75%.

The product also used data and later matching models to improve lead quality. I was not involved in creating those models, so the portfolio should not claim ownership of their design or technical logic.

## Commercial model and results

Venues paid a subscription for access to Lead Feed, with commission retained on confirmed bookings.

Within the first three months:

- 117 venues were paying customers.
- Average annual subscription value was £1,284.
- Annual recurring revenue reached £150,228.
- The model generated four times the annual revenue of the previous marketplace.
- More than 1,500 enquiries entered the system in the first month.

## What remains

The current HeadBox experience remains approximately 90% the same structurally. The core model, guest brief and Lead Feed have received small refinements rather than a fundamental redesign.

That longevity is important evidence. The strongest part of the work was not a visual treatment but the decision to move expertise from the guest to the venue and create a self-service path around it.

## What I took forward

Two lessons directly influenced my later work at Yapily:

1. **Self-service paths are necessary.** Both businesses focused heavily on large enterprise accounts while smaller customers represented roughly 80% of the volume.
2. **Precise analytics are essential.** Qualitative research explains behaviour, but product analytics show where it occurs and whether the solution improved the experience.

I would change very little about the product strategy. The corporate route was included early, the experience addressed both high- and low-volume venues, and the product remains close to the original structure.

[ADD IMAGES: opp.png, filter.png, personas.png, new.png, flow.png, panel.png, lily.png, monitor.png, Lead Feed mockup]

---

# Contact

## Let’s talk

I am interested in Lead Product Designer and design leadership roles where product strategy, hands-on design and complex systems are equally important.

**Alejandro Velázquez**  
Stevenage, UK  
aleuxuk@gmail.com  
linkedin.com/in/velazquezalejandro

---

# Publishing and confidentiality notes

- Keep the full reading time of any single case study to approximately eight minutes.
- Research Practice is integrated into Hosted Pages and Console.
- Custard is integrated into Hosted Pages.
- Yapily UI is integrated into Console.
- Mark is integrated into the Brand & Website case study.
- Open banking UX guidance and sales demos support the Hosted Pages story.
- HeadBox is the only non-Yapily case study in the main navigation.
- Hosted Pages remains in beta as of August 2026; do not describe it as generally available.
- Do not publish exact Console support, compliance, setup-time or backlog figures.
- Do not publish Brand & Website pipeline or enquiry metrics.
- Do not claim ownership of HeadBox’s matching or AI models.
- Add the Apple demo link when available.
