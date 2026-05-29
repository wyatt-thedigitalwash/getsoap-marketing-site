# SITE.md -- Soap by The Digital Wash

## Project Overview

Soap is a multi-tenant marketing platform built for franchise systems. It gives franchisors unified visibility across every brand and location, and gives franchisees a turnkey way to win locally: per-location websites, automated local SEO, Google Business Profile management, reviews, content production, and integrated reporting.

Soap is built and operated by The Digital Wash LLC (Wyatt Bensman, sole operator). The marketing site at getsoap.app exists to confirm credibility and convert warm enterprise leads (PE-backed franchise systems, multi-brand franchise portfolios) into demo conversations.

The primary visitor is a franchisor decision-maker who has already been contacted by Wyatt. This is a mid-funnel page, not top-of-funnel. Tone is confident, specific, no hype.

## Audience

Primary: Franchise system decision-makers at PE-backed franchise portfolios. Marketing directors, operations VPs, franchise development leadership. Multi-brand, multi-location, sophisticated business buyers.

Secondary: Franchisees, investors, partners, journalists doing research. Accommodated but not optimized for.

## Positioning

Soap is the only platform built specifically for multi-brand franchise systems. Not generic local marketing software. Not a single-tenant tool with franchise features bolted on. Built from day one for the structural reality of franchise portfolios: corporate visibility plus franchisee independence within brand guardrails.

## Brand Voice

Confident, direct, modern. No hype, no exclamation points, no urgency tactics. Specific over abstract. Concrete over clever.

Rules:
- No em dashes anywhere in copy
- No "transform your business" or generic SaaS filler
- No "Trusted by leading brands" without real proof
- No "game-changing", "best-in-class", "revolutionary"
- Use specific numbers when possible
- Write to the buyer, not at them
- Default to plain English. If a sentence sounds like a SaaS marketing template, rewrite it.

## Visual Direction

Reference anchors: Ramp.com (premium polish), Mercury.com (clean enterprise SaaS), Linear.app (typography-driven minimal product sections).

Principles:
- White and Alice Blue dominate the page
- Generous whitespace, never crowded
- Product mockups and data visualization carry more weight than illustrations
- Product mockups are built as styled components, not images
- Noise texture overlays on gradient sections (hero, Alice Blue backgrounds) for subtle depth
- Radial gradient backgrounds on Alice Blue sections for organic movement

## Color Palette

### Primary Brand
- Tufts Blue: #468BE6 (primary CTAs, links, active states, key highlights, "Soap blue")
- Cobalt Blue: #1A5799 (eyebrow labels, hover depth, secondary emphasis)
- Cool Black: #092F64 (headlines, navigation text, footer background)

### Backgrounds
- White: #FFFFFF (primary page background, card backgrounds)
- Alice Blue: #E9F5FF (alternating section backgrounds, gradient start)
- Alice Blue Dark: #E0EFFA (gradient endpoint for Alice Blue sections)
- Cool Black: #092F64 (footer only)

### Surfaces
- Slate 100: #F1F5F9 (subtle card surface backgrounds, feature visual containers, hover backgrounds, tab switcher background)
- Slate 50: #F8FAFC (form input backgrounds, FAQ hover state)

### Borders & Dividers
- Slate 200: #E2E8F0 (standard border for cards, inputs, dividers across the entire site)
- Jordy Blue rgba: rgba(147, 191, 239, various) (used in hero gradients and decorative borders only, never as a direct hex)

### Text
- Eerie Black: #1F1F1F (body text)
- Cool Black: #092F64 (headlines, nav text)
- Gray 500: #71717A (muted secondary text, captions, card descriptions)
- Slate 400: #94A3B8 (placeholder text in form inputs)

### Accent
- Emerald: #10B981 (success indicators, KPI change percentages, positive data signals in mockups)

### Functional (form states only)
- Error: #EF4444
- Warning: #F59E0B

### Mockup-Specific Colors (used inside product mockups only, not brand)
- Google Star Yellow: #FBBC04
- Google Link Blue: #1A0DAB
- Google Text: #202124, #4D5156, #9AA0A6
- Google Maps Red: #EA4335
- Google Maps Green: #187832
- Google Maps Blue: #1A73E8
- Empty Star Gray: #E0E0E0
- Google Border Gray: #DADCE0

## Typography

Single typeface: Inter (Google Fonts). Weights: 400, 500, 600, 700, 800.

### Type Scale
- Hero headline: 34px mobile / 68px md / 80px xl, weight 800, tracking -0.02em, line-height 1.05
- Hero italic subline: same sizing, weight 400 italic
- Hero period: Cobalt Blue #1A5799
- Pain points headline: 36px mobile / 52px desktop, weight 800
- Section headings (h2): 34px mobile / 44-48px desktop, weight 800, tracking -0.02em
- Feature card titles (h3): 26px mobile / 28-36px desktop, weight 800
- Guide card titles: 20px, weight 700, line-height 1.3
- FAQ questions: 17px, weight 600
- Automation card titles: 17px, weight 700
- Body large (intro paragraphs): 17-19px, weight 400, line-height 1.6
- Body: 15-17px, weight 400, line-height 1.6
- Small (captions, descriptions): 13-14px, weight 400-500
- Eyebrow labels: 11px, weight 700, uppercase, letter-spacing 0.12em, color Cobalt Blue #1A5799
- Nav links: 14px, weight 700, color Cool Black #092F64
- Button text: 14-16px, weight 600
- Form labels: 11px, weight 700, uppercase, letter-spacing 0.1em
- Form inputs: 14px, weight 400

### Eyebrow Conventions
- Standard section eyebrows: 11px, weight 700, letter-spacing 0.12em, uppercase, color #1A5799
- CTA section eyebrows (dark backgrounds): 12px, weight 700, letter-spacing 0.15em, uppercase, color #468BE6
- Dark mid-section eyebrows: 11px, weight 700, letter-spacing 0.15em, uppercase, color #C9DBEC

## Logo

Placeholder wordmark: "Soap." in Inter weight 800, color Cool Black (#092F64). Size: 24px in nav.

The period is a brand element. It is not optional. It stays in the wordmark everywhere.

Final logo is pending.

## Card System

### Standard Cards (feature cards, guide cards)
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Border-radius: 16px
- Shadow: 0 4px 20px rgba(9, 47, 100, 0.05)
- Hover (where applicable): translateY(-2px), shadow 0 8px 32px rgba(9, 47, 100, 0.10), transition 300ms

### Feature Visual Containers (inside feature cards)
- Background: #F1F5F9
- Border: 1px solid #E2E8F0
- Border-radius: 14px
- Height: 380px (desktop), 220px (mobile)
- No shadow

### Small Cards (automation carousel)
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Border-radius: 16px
- Shadow: none
- No hover animation

### FAQ Items
- Background: #FFFFFF
- Border: 1px solid #E2E8F0 (active: rgba(70, 139, 230, 0.2))
- Border-radius: 12px
- Shadow: 0 1px 4px rgba(9, 47, 100, 0.03)
- Gap between items: 16px

### Guide Card Pills
- Background: rgba(70, 139, 230, 0.08)
- Color: #1A5799
- Border-radius: full
- Font: 11px, weight 600, uppercase, tracking 0.05em

### Form Container
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Border-radius: 18px
- Shadow: 0 8px 32px rgba(9, 47, 100, 0.08)

## Button System

### Primary (filled)
- Background: Tufts Blue #468BE6
- Text: white
- Padding: 14px 32px (hero), 12px 28px (nav)
- Font: 16px weight 600 (hero), 14px weight 600 (nav)
- Border-radius: 8px
- Hover: translateY(-2px), shadow 0 4px 12px rgba(70, 139, 230, 0.3), transition 300ms

### Outline
- Background: transparent
- Border: 1px solid rgba(9, 47, 100, 0.25)
- Text: Cool Black #092F64
- Same padding and font as primary
- Hover: background rgba(70, 139, 230, 0.06), border-color Tufts Blue, text Tufts Blue

### Form Submit
- Background: Tufts Blue #468BE6
- Text: white, 14px weight 600
- Full width
- Border-radius: 12px
- Hover: same as primary

### Arrow/Icon Buttons (carousel)
- Size: 40x40px
- Background: white
- Border: 1px solid #E2E8F0
- Border-radius: full (circle)
- Hover: background #F1F5F9

## Section Spacing

Standard vertical padding: 84px mobile / 112px desktop.

When consecutive sections share the same background color, the first section has padding-bottom 0. This prevents doubled gaps.

Exceptions:
- Hero section: custom spacing
- Footer: 48px top and bottom

## Navigation

### Links
Platform, Locations, SEO, Google Business Profile, About

Contact is in the footer Company column and linked from all CTA buttons, not in the header nav.

### HeroNav (inside hero panel)
- Transparent background
- Three-column grid: logo left, links centered, CTA right
- Links: 14px, weight 700, Cool Black
- Desktop breakpoint: lg (1024px). Below that, hamburger menu.
- Appears only on home page hero

### GlobalNav (sticky)
- Background: rgba(255, 255, 255, 0.85) with backdrop-filter blur(16px)
- Border-bottom: 1px solid rgba(147, 191, 239, 0.15)
- Same three-column grid layout as HeroNav
- On home page: hidden initially, fades in when hero scrolls out of view
- On other pages: visible immediately
- Transition: opacity fade 400ms, cubic-bezier(0.16, 1, 0.3, 1)

### Footer
- Background: Cool Black #092F64
- Soap. wordmark, copyright, legal links (Privacy, Terms, Cookies), "Built by The Digital Wash" link
- All in bottom row separated by pipe divider
- No newsletter signup. No social icons unless real accounts exist.

## Site Architecture

### Built
1. Home (/) -- complete
2. Platform (/platform) -- product overview, the dashboard story
3. Locations (/locations) -- per-location pages deep dive
4. SEO (/seo) -- local SEO deep dive, the moat
5. Google Business Profile (/google-business-profile) -- GBP capability deep dive
6. About (/about) -- The Digital Wash, Wyatt Bensman, credibility

8. Contact (/contact) -- demo request form and contact info

7. Legal (/privacy, /terms, /cookies) -- minimal layout, shared template

### Pending
8. Packages (/packages) -- pricing detail with tiers and add-ons

### Utilities
- /sitemap.xml
- /robots.txt

## Contact Form

Dedicated /contact page with hero + form layout. Also referenced from the home page final CTA section (Cool Black background, links to /contact).

Fields:
- Full name (required, marked with blue asterisk)
- Work email (required, marked with blue asterisk)
- Company / franchise system (required, marked with blue asterisk)
- Number of locations (required, dropdown: "1-10", "10-100", "100-500", "500+", marked with blue asterisk)
- Message (optional, labeled "(optional)")

Submission: currently client-side only (placeholder). Resend integration pending.
- From: noreply@getsoap.app
- To: wyatt@thedigitalwash.com
- Subject: "New Soap demo request from [Name] at [Company]"

After submission: inline confirmation "Thanks. Wyatt will be in touch within 24 hours." and form clears.

## Pricing

Four per-location package tiers:
- Platform: $50/month
- Local: $350/month
- Growth: $550/month
- Dominate: $850/month

No enterprise license tier (removed from model).

Add-ons (for future Packages page):
- Ads Data Integration: $25/location/month
- Additional Blog Content: $75/blog
- Custom Landing Page: $500 each
- Lead Nurture Automation: $1,500 one-time + $100/month

## Animations

All scroll-triggered animations fire once and never replay. Intersection Observer with unobserve after triggering.

- Hero content: staggered fade-in on page load (headline 100ms, sub 300ms, buttons 500ms, placeholder 700ms)
- Feature cards: fade-in + translateY(48px), 800ms, cubic-bezier(0.16, 1, 0.3, 1)
- Automation cards: staggered fade-up, 100ms delay per card
- Section headers: fade-in + translateY(24px), 600ms ease-out
- FAQ items: staggered fade-in, 80ms per item
- Guide cards: staggered fade-in, 150ms delay per card
- Tab switching: crossfade with translateY(8px) entrance
- Arrow links: arrow translates 4px right on hover

Easing: cubic-bezier(0.16, 1, 0.3, 1) for premium card entrances, ease-out for text fades.

Respects prefers-reduced-motion.

## Design Anti-Patterns (Do Not Use)

- Pill buttons with gradients
- Icons in colored circles
- 3-column card grids for services (acceptable for content/resource cards)
- Centered hero with CTA and feature grid below (the generic SaaS layout)
- Generic blue/teal professional color palettes
- "Our Services", "Why Choose Us", "Get Started Today" section headers
- Stock photography
- Exclamation points in headlines or CTAs
- Floating mockup devices at angles with drop shadows
- Em dashes in copy

## Placeholder Log

| Item | Location | Status | What's Needed |
|------|----------|--------|---------------|
| Logo | Global header, footer, OG image | Placeholder wordmark | Final logo design |
| Hero visual | Home hero | DashboardPlaceholder with "Product Demo Video" label | Real product demo video |
| Platform tab mockups | Inside the Platform section | DashboardPlaceholder for both views | Real franchisor/franchisee dashboard screenshots or video |
| Hero "Book a Demo" CTA | Home hero | href="#" (goes nowhere) | Link to /#contact or Calendly |
| Hero "Download Our App" CTA | Home hero | href="#" (goes nowhere) | App Store / Google Play links or remove button |
| Resend integration | Contact form (/contact) | Form POSTs to /api/contact, API route not yet wired | Wire to Resend API |
| Social proof | Not on page | No testimonials, logos, or case studies | Client logos, testimonials, or case study data |
| Platform dashboard mockups | /platform PE Firm, franchisor, and franchisee sections | DashboardPlaceholder for all three views | Real dashboard screenshots for each tier (PE Firm portfolio view, franchisor brand view, franchisee location view) |
| Platform phone mockup | /platform mobile app section | Styled placeholder phone | Real app screenshots when mobile app is built |
| Platform app badges | /platform mobile app section | Styled placeholder rectangles | Real App Store / Google Play badges |
| Platform integration logos | /platform integrations section | Colored letter squares | Real integration partner logos |
| Locations page screenshots | /locations service pages section | Styled mockup | Real per-location page screenshots |
| Locations brand examples | /locations brand consistency section | Styled comparison cards | Real franchise brand page examples |
| Locations brand standards UI | /locations franchisor controls section | Simplified mockup | Real brand standards interface screenshot |
| SEO audit interface | /seo audits section | Styled mockup | Real audit results interface |
| SEO case studies | /seo proof section | Noted as future | Real customer case study data |
| GBP audit interface | /google-business-profile audits section | Styled mockup | Real GBP audit results interface |
| GBP posts interface | /google-business-profile posting section | Styled mockup | Real GBP post management interface |
| GBP photo library | /google-business-profile photos section | Styled mockup | Real photo library interface |
| GBP performance data | /google-business-profile performance section | Placeholder stats | Real portfolio performance data |
| Wyatt headshot | /about hero section | Placeholder card with User icon | Real Wyatt headshot for About page hero |
| Privacy Policy content | /privacy | Placeholder pending legal review | Lawyer-drafted privacy policy |
| Terms of Service content | /terms | Placeholder pending legal review | Lawyer-drafted terms of service |
| Cookie Policy content | /cookies | Placeholder pending legal review | Lawyer-drafted cookie policy |
| Legal email aliases | All legal pages | Referenced but not created | Set up privacy@ and legal@ aliases |
| Inner pages | /packages | Not built | Full page builds |
