# STYLE AUDIT -- Soap Marketing Site

Generated: 2026-05-27

---

## PART 1: HOME PAGE BASELINE

The home page (`src/app/page.tsx`) serves as the source of truth for styling patterns. Below is a complete inventory of every value used.

### Typography

| Element | Mobile | Desktop | Weight | Color | Line-Height | Tracking |
|---|---|---|---|---|---|---|
| Hero headline | 34px | 68px md / 80px xl | 800 | #092F64 | 1.05 | -0.02em |
| Hero italic subline | 34px | 68px md / 80px xl | 400 italic | #092F64 | 1.05 | -0.02em |
| Hero period | -- | -- | -- | #1A5799 | -- | -- |
| Hero subheadline | 17px | 19px | 400 | #1F1F1F | 1.6 | -- |
| Pain points headline | 36px | 52px | 800 | #092F64 | 1.1 | -0.02em |
| Pain points italic words | -- | -- | -- | #468BE6 | -- | -- |
| Blockquote | 24px | 32px | 500 italic | #092F64 | 1.3 | -0.015em |
| Section eyebrow | 11px | 11px | 700 | #1A5799 | -- | 0.12em |
| Section h2 | 34px | 46px | 800 | #092F64 | tight | -0.02em |
| Section body | 16px | 17px | 400 | #1F1F1F | 1.6 | -- |
| Feature card title (h3) | 26px | 28-36px | 800 | #092F64 | tight | -0.02em |
| Feature card subheader | 15px | 16px | 500 | #468BE6 | 1.5 | -- |
| Feature card body | 15px | 16px | 400 | #1F1F1F | 1.6 | -- |
| Automation card title | 17px | 17px | 700 | #092F64 | -- | -- |
| Automation card desc | 14px | 14px | 400 | #71717A | 1.5 | -- |
| Guide card pill | 11px | 11px | 600 | #1A5799 | -- | 0.05em |
| Guide card title | 20px | 20px | 700 | #092F64 | 1.3 | -- |
| Guide card teaser | 14px | 15px | 400 | #71717A | 1.5 | -- |
| Guide card link | 14px | 14px | 600 | #468BE6 | -- | -- |
| FAQ question | 17px | 17px | 600 | #092F64 | -- | -- |
| FAQ answer | 15px | 16px | 400 | #1F1F1F | 1.6 | -- |
| Final CTA eyebrow | 12px | 12px | 700 | #468BE6 | -- | 0.15em |
| Final CTA h2 | 36px | 48px | 800 | white | 1.1 | -0.02em |
| Final CTA body | 17px | 17px | 400 | #C9DBEC | 1.55 | -- |
| Arrow link text | 15px | 15px | 600 | #468BE6 | -- | -- |
| Nav links | 14px | 14px | 700 | #092F64 | -- | -- |

### Colors Used on Home Page

| Token | Hex/Value | Where Used |
|---|---|---|
| Cool Black | #092F64 | Headlines, nav text, footer bg |
| Tufts Blue | #468BE6 | CTAs, feature card subheaders, arrow links, pain points italic accent, final CTA eyebrow |
| Cobalt Blue | #1A5799 | Eyebrows, hero period, guide pills, blockquote quotes |
| Eerie Black | #1F1F1F | Body text, FAQ answers |
| Gray 500 | #71717A | Automation card descriptions, guide card teasers, FAQ chevron (closed) |
| White | #FFFFFF | Backgrounds, card backgrounds, CTA text |
| Alice Blue | #E9F5FF | Gradient start in hero and "Inside the Platform" section |
| Alice Blue Dark | #E0EFFA | Gradient end |
| Slate 100 | #F1F5F9 | Feature visual containers, tab switcher bg, FAQ hover |
| Slate 200 | #E2E8F0 | Card borders, dividers, automation card borders |
| #C9DBEC | -- | Final CTA section body text, email text |
| Emerald | #10B981 | KPI change indicators in FeatureRows DashboardVisual |
| Jordy Blue rgba | rgba(147,191,239,various) | Hero gradients, GlobalNav border |

### Section Spacing

| Section | Padding Top (mobile) | Padding Top (desktop) | Padding Bottom (mobile) | Padding Bottom (desktop) |
|---|---|---|---|---|
| Hero | custom (within panel) | custom | custom | custom |
| Pain Points | 12px | 370px (mockup offset) | 0 | 0 |
| Quote Band | py-16 (64px) | py-20 (80px) | py-16 (64px) | py-20 (80px) |
| Feature Cards | pb-0 | pb-0 | pb-0 | pb-0 |
| Automation | pt-84px / pb-84px | pt-112px / pb-112px | pt-84px / pb-84px | pt-112px / pb-112px |
| Platform Tabs | py-84px | py-112px | py-84px | py-112px |
| Guides | pt-84px / pb-0 | pt-112px / pb-0 | pt-84px / pb-0 | pt-112px / pb-0 |
| FAQ | pt-84px / pb-84px | pt-112px / pb-112px | pt-84px / pb-84px | pt-112px / pb-112px |
| Final CTA | py-80px | py-120px | py-80px | py-120px |

**Standard spacing per SITE.md**: 84px mobile / 112px desktop.

### Card System (Home Page)

**Feature Cards (FeatureRows):**
- Border: 1px solid #E2E8F0
- Border-radius: 16px
- Shadow: 0 4px 20px rgba(9, 47, 100, 0.05)
- Padding: p-6 mobile / p-8 desktop (inner grid has 32px 24px padding)
- Hover: card-hover class (translateY(-2px), shadow 0 8px 32px rgba(9, 47, 100, 0.10))
- Visual container: bg #F1F5F9, border 1px solid #E2E8F0, border-radius 14px, height 380px desktop / 220px mobile

**Automation Cards:**
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Border-radius: 16px
- Padding: 32px 28px
- Shadow: none
- Width: 240px mobile / 280px desktop

**Guide Cards:**
- Border: 1px solid #E2E8F0
- Border-radius: 16px
- Shadow: 0 4px 20px rgba(9, 47, 100, 0.05)
- Padding: 32px 28px
- Hover: translateY(-2px), shadow 0 8px 24px rgba(9, 47, 100, 0.08), border-color rgba(70, 139, 230, 0.2)

**FAQ Items:**
- Border: 1px solid #E2E8F0 (open: rgba(70, 139, 230, 0.2))
- Border-radius: 12px (rounded-xl)
- Shadow: 0 1px 4px rgba(9, 47, 100, 0.03)
- Gap: 16px (gap-4)
- Button padding: 22px 28px

### Button System (Home Page)

**Hero Primary:** bg #468BE6, text white, 16px weight 600, padding 14px 32px, border-radius 8px
**Hero Outline:** border 1px solid rgba(9,47,100,0.25), text #092F64, 16px weight 600, padding 13px 31px, border-radius 8px
**Nav CTA:** bg #468BE6, text white, 14px weight 600, padding 12px 28px, border-radius 8px
**Button component (large):** padding 14px 32px, fontSize 16
**Button component (default):** padding 12px 28px, fontSize 14

### Animation Patterns

- **ScrollReveal (default):** translateY(24px), 600ms ease-out, threshold 0.2
- **ScrollReveal (premium):** translateY varies, cubic-bezier(0.16, 1, 0.3, 1)
- **Feature cards:** translateY(48px), 800ms cubic-bezier(0.16, 1, 0.3, 1), threshold 0.1
- **Automation cards:** staggered 100ms per card, translateY(32px), 700ms cubic-bezier
- **FAQ items:** staggered 80ms per item, translateY(16px), 400ms ease-out
- **Guide cards:** staggered 100ms delay (starting at 200ms), translateY(32px), 700ms premium
- **Hero:** data-hero-* attributes, animated by HeroAnimations component

### Section Background Patterns

- **Hero:** Complex radial gradients on Alice Blue base, 24px white border, 40px border-radius, noise overlay (opacity 0.30, soft-light)
- **Platform Tabs section:** radial-gradient(ellipse 80% 50% at 50% 0%, #E9F5FF 0%, #E0EFFA 100%), noise overlay (opacity 0.1)
- **Final CTA:** solid #092F64
- **White sections:** no explicit bg (inherits white)

### Eyebrow Pattern (Home Page)

Standard: `text-[11px] font-bold uppercase tracking-[0.12em]` with color `#1A5799`
Exception: Final CTA eyebrow uses `text-[12px] ... tracking-[0.15em]` with color `#468BE6`

---

## PART 2: PER-PAGE DEVIATIONS

### /platform (Platform Page)

1. **Category**: Spacing
   **Deviation**: Hero section uses `pt-16 pb-16 md:pt-24 md:pb-24` (64px/96px) instead of the standard 84px/112px
   **File**: `src/app/platform/page.tsx`, line 108
   **Severity**: Important

2. **Category**: Spacing
   **Deviation**: All inner sections use `py-16 md:py-24` (64px/96px) instead of 84px/112px
   **File**: `src/app/platform/page.tsx`, lines 142, 191, 228, 270, 317, 367, 408, 473
   **Severity**: Important

3. **Category**: Typography
   **Deviation**: Hero h1 uses `text-[36px] md:text-[56px]` instead of home hero sizing (34px/68px/80px). This is a deliberate inner-page pattern, not a bug.
   **File**: `src/app/platform/page.tsx`, line 119
   **Severity**: Minor (intentional inner-page pattern)

4. **Category**: Typography
   **Deviation**: Section h2 headings use `text-[32px] md:text-[44px]` instead of home page `text-[34px] md:text-[46px]`
   **File**: `src/app/platform/page.tsx`, lines 158, 278, 377, 425, 485
   **Severity**: Important

5. **Category**: Typography
   **Deviation**: Hero body text and section body text uses color `#4A5568` instead of `#1F1F1F`
   **File**: `src/app/platform/page.tsx`, lines 126, 164, 285, 384, 431, 489
   **Severity**: Important -- `#4A5568` is not in the SITE.md color palette

6. **Category**: Typography
   **Deviation**: Franchisor/Franchisee view h2 uses `font-bold` (700) instead of `font-extrabold` (800)
   **File**: `src/app/platform/page.tsx`, lines 199, 244
   **Severity**: Minor (left-aligned sub-section heading pattern)

7. **Category**: Color
   **Deviation**: Mobile App eyebrow uses `#C9DBEC` instead of `#468BE6` for dark-bg eyebrow
   **File**: `src/app/platform/page.tsx`, line 321
   **Severity**: Minor (dark section variant, but home page Final CTA uses #468BE6)

8. **Category**: Typography
   **Deviation**: Sub-section body text uses `text-[16px] md:text-[18px]` with color `#4A5568` for centered descriptions; home page uses `text-[16px] md:text-[17px]` with color `#1F1F1F`
   **File**: `src/app/platform/page.tsx`, multiple locations
   **Severity**: Important

9. **Category**: Card Styling
   **Deviation**: Brand Standards cards use `rounded-xl` (12px) instead of `rounded-[16px]` for the card radius; padding is 32 (number) vs home guide cards' `32px 28px`
   **File**: `src/app/platform/page.tsx`, line 302
   **Severity**: Minor

10. **Category**: Card Styling
    **Deviation**: Integration cards use `rounded-xl` (12px) and padding 20px -- smaller and different radius than home page cards
    **File**: `src/app/platform/page.tsx`, line 445
    **Severity**: Minor

11. **Category**: Eyebrow
    **Deviation**: Hero eyebrow includes a decorative line element (`h-0.5 w-5` with bg #1A5799) not present on home page eyebrows
    **File**: `src/app/platform/page.tsx`, lines 112-114
    **Severity**: Minor (inner-page pattern, consistent across product pages)

12. **Category**: Final CTA
    **Deviation**: Final CTA uses `text-[32px] md:text-[44px]` for h2 instead of home page's `text-[36px] md:text-[48px]`; body uses `text-[16px] md:text-[18px]` instead of `text-[17px]`
    **File**: `src/app/platform/page.tsx`, lines 484-490
    **Severity**: Important

### /locations (Locations Page)

1. **Category**: Spacing
   **Deviation**: Same as /platform -- all sections use `py-16 md:py-24` (64px/96px) instead of 84px/112px
   **File**: `src/app/locations/page.tsx` and `src/components/locations/WebsitesSections.tsx`
   **Severity**: Important

2. **Category**: Typography
   **Deviation**: Same `#4A5568` body text color on centered section descriptions (not in SITE.md palette)
   **File**: `src/components/locations/WebsitesSections.tsx`, lines 99, 127, 165, 237
   **Severity**: Important

3. **Category**: Typography
   **Deviation**: Section h2 uses `text-[32px] md:text-[44px]` throughout (smaller than home's `text-[34px] md:text-[46px]`)
   **File**: `src/components/locations/WebsitesSections.tsx`, lines 91, 123, 162, 203, 234, 260
   **Severity**: Important

4. **Category**: Typography
   **Deviation**: Left-aligned sub-section h2 (Service Pages, Franchisor Controls) uses `text-[28px] md:text-[32px] font-bold` -- different weight (700 vs 800) and size from home feature card titles
   **File**: `src/components/locations/WebsitesSections.tsx`, lines 90, 260
   **Severity**: Minor (different section type)

5. **Category**: Card Styling
   **Deviation**: SEO Architecture cards use `rounded-xl` (12px) with padding 28 instead of home's `rounded-[16px]` with 32px 28px
   **File**: `src/components/locations/WebsitesSections.tsx`, line 173
   **Severity**: Minor

6. **Category**: Eyebrow
   **Deviation**: "Conversion First" eyebrow in dark section uses `text-[12px] tracking-[0.15em]` with color `#C9DBEC` -- mixing the enlarged-eyebrow pattern with a muted color instead of #468BE6
   **File**: `src/components/locations/WebsitesSections.tsx`, line 202
   **Severity**: Minor

7. **Category**: Final CTA
   **Deviation**: Uses `pt-16 pb-16 md:pt-24 md:pb-24` instead of `py-16 md:py-24` (same effect but explicit top/bottom)
   **File**: `src/app/locations/page.tsx`, line 151
   **Severity**: Minor (functionally the same)

### /seo (SEO Page)

1. **Category**: Spacing
   **Deviation**: All sections use `py-16 md:py-24` (64px/96px)
   **File**: `src/app/seo/page.tsx` and `src/components/seo/SeoSections.tsx`
   **Severity**: Important

2. **Category**: Typography
   **Deviation**: Hero is left-aligned (not centered like /platform and /locations which are centered)
   **File**: `src/app/seo/page.tsx`, line 28 -- `max-w-[880px]` without `text-center`
   **Severity**: Minor (intentional variation, consistent with /google-business-profile)

3. **Category**: Typography
   **Deviation**: `#4A5568` used throughout for centered descriptions
   **File**: `src/components/seo/SeoSections.tsx`, lines 61, 153, 191, 241, 280
   **Severity**: Important

4. **Category**: Typography
   **Deviation**: Methodology section h3 uses `text-[20px] font-bold` -- larger than home page's automation card h3 (17px font-bold) and smaller than feature card h3
   **File**: `src/components/seo/SeoSections.tsx`, line 70
   **Severity**: Minor

5. **Category**: Card Styling
   **Deviation**: Content cards and Proof stat cards use `rounded-xl` (12px) with padding 28
   **File**: `src/components/seo/SeoSections.tsx`, lines 160, 247
   **Severity**: Minor

6. **Category**: Card Styling
   **Deviation**: Integration section cards use padding 24 (not 28) and `rounded-xl` (12px); arrow-link text uses color `#092F64` instead of `#468BE6`
   **File**: `src/components/seo/SeoSections.tsx`, lines 287, 291
   **Severity**: Important (arrow link color deviation)

7. **Category**: Spacing
   **Deviation**: Methodology section uses `mt-14` (56px) gap between header and grid instead of `mt-12` (48px) used elsewhere
   **File**: `src/components/seo/SeoSections.tsx`, line 66
   **Severity**: Minor

### /google-business-profile (GBP Page)

1. **Category**: Spacing
   **Deviation**: All sections use `py-16 md:py-24` (64px/96px)
   **File**: `src/app/google-business-profile/page.tsx` and `src/components/gbp/GbpSections.tsx`
   **Severity**: Important

2. **Category**: Typography
   **Deviation**: `#4A5568` used for centered section descriptions
   **File**: `src/components/gbp/GbpSections.tsx`, lines 41, 170; `src/components/gbp/GbpSections2.tsx`, lines 54, 99
   **Severity**: Important

3. **Category**: Typography
   **Deviation**: Hero is left-aligned (same as /seo)
   **File**: `src/app/google-business-profile/page.tsx`, line 28
   **Severity**: Minor (consistent with /seo)

4. **Category**: Card Styling
   **Deviation**: WhyGbp stat cards show `text-[44px] font-extrabold` for values -- much larger stat styling not seen on home page
   **File**: `src/components/gbp/GbpSections.tsx`, line 49
   **Severity**: Minor (intentional stat emphasis)

5. **Category**: Card Styling
   **Deviation**: Integrated section cards same as SEO -- padding 24, arrow-link color `#092F64` instead of `#468BE6`
   **File**: `src/components/gbp/GbpSections.tsx`, lines 246, 250
   **Severity**: Important (arrow link color deviation)

6. **Category**: Eyebrow
   **Deviation**: Dark section eyebrows (AI Search in /seo, Built for Portfolios in /gbp, Conversion First in /locations) inconsistently use `#C9DBEC` while home page Final CTA dark section uses `#468BE6`
   **File**: `src/components/seo/SeoSections.tsx` line 187, `src/components/gbp/GbpSections2.tsx` line 95
   **Severity**: Important

### /about (About Page)

1. **Category**: Spacing
   **Deviation**: All sections use `py-16 md:py-24` (64px/96px)
   **File**: `src/app/about/page.tsx` and `src/components/about/AboutSections.tsx`
   **Severity**: Important

2. **Category**: Typography
   **Deviation**: `#4A5568` used for centered section descriptions
   **File**: `src/components/about/AboutSections.tsx`, line 135; `src/components/about/AboutSections2.tsx`, line 53
   **Severity**: Important

3. **Category**: Typography
   **Deviation**: Story section body paragraphs use `text-[18px] leading-[1.65]` with color `#1F1F1F` -- this is a larger body size than home page standard (15-17px)
   **File**: `src/components/about/AboutSections.tsx`, lines 54-83
   **Severity**: Minor (intentional long-form reading)

4. **Category**: Typography
   **Deviation**: Founder section body uses `text-[16px] leading-[1.65]` with `#1F1F1F` -- different from home page body (15-17px, leading 1.6)
   **File**: `src/components/about/AboutSections.tsx`, lines 229-254
   **Severity**: Minor

5. **Category**: Typography
   **Deviation**: Story h2 is missing `leading-tight` class
   **File**: `src/components/about/AboutSections.tsx`, line 36
   **Severity**: Minor

6. **Category**: Color
   **Deviation**: Principles section number uses `#93BFEF` -- this is a Jordy Blue variant not defined in SITE.md as a text color
   **File**: `src/components/about/AboutSections2.tsx`, line 66
   **Severity**: Minor (decorative element)

7. **Category**: Final CTA
   **Deviation**: Final CTA has white background (`data-bg="white"`) instead of Cool Black (#092F64) used on home page and all other product pages. Eyebrow uses `#1A5799` instead of `#468BE6`. Email link text uses `#092F64` instead of white.
   **File**: `src/app/about/page.tsx`, lines 81-129
   **Severity**: Important (significantly different visual treatment)

8. **Category**: Final CTA
   **Deviation**: About page has no dark Final CTA at all -- the CTA sits on white background with standard text colors
   **File**: `src/app/about/page.tsx`, line 82
   **Severity**: Important

9. **Category**: Eyebrow
   **Deviation**: Roadmap section eyebrow uses `tracking-[0.15em]` instead of standard `tracking-[0.12em]`
   **File**: `src/components/about/AboutSections2.tsx`, line 125
   **Severity**: Minor

### /contact (Contact Page)

1. **Category**: Spacing
   **Deviation**: Hero section uses `pt-16 pb-16 md:pt-24 md:pb-12` -- asymmetric bottom padding on desktop
   **File**: `src/app/contact/page.tsx`, line 21
   **Severity**: Minor (intentional for form layout)

2. **Category**: Spacing
   **Deviation**: "What to Expect" section uses `py-16 md:py-20` (80px desktop, not 96px)
   **File**: `src/app/contact/page.tsx`, line 93
   **Severity**: Minor

3. **Category**: Spacing
   **Deviation**: FAQ section uses `py-16 md:py-20` (80px desktop)
   **File**: `src/app/contact/page.tsx`, line 177
   **Severity**: Minor

4. **Category**: Typography
   **Deviation**: Hero body uses `text-[17px] md:text-[20px]` with `#4A5568` -- larger desktop size than standard
   **File**: `src/app/contact/page.tsx`, line 46
   **Severity**: Minor

5. **Category**: Form Styling
   **Deviation**: Form container uses `bg-[#E9F5FF]` with `padding: 40px` and `rounded-2xl` (16px) -- no border, no shadow per SITE.md form container spec (should have border 1px solid #E2E8F0, shadow 0 8px 32px rgba(9,47,100,0.08), border-radius 18px)
   **File**: `src/app/contact/page.tsx`, line 81
   **Severity**: Important

6. **Category**: Form Styling
   **Deviation**: Input borders use `#CBD2DC` instead of SITE.md `#E2E8F0` (Slate 200)
   **File**: `src/components/contact/ContactFormLight.tsx`, lines 77, 99, 120, 150, 179
   **Severity**: Important

7. **Category**: Form Styling
   **Deviation**: Form labels use `text-[12px] tracking-[0.08em]` instead of SITE.md spec `text-[11px] tracking-[0.1em]`
   **File**: `src/components/contact/ContactFormLight.tsx`, line 8
   **Severity**: Important

8. **Category**: Form Styling
   **Deviation**: Required field asterisks use `#71717A` (gray) instead of SITE.md spec of "blue asterisk"
   **File**: `src/components/contact/ContactFormLight.tsx`, lines 67, 91, 116, 140
   **Severity**: Important

9. **Category**: Form Styling
   **Deviation**: Submit button uses `rounded-lg` (8px) instead of SITE.md spec `border-radius: 12px`
   **File**: `src/components/contact/ContactFormLight.tsx`, line 190
   **Severity**: Minor

10. **Category**: Form Styling
    **Deviation**: Placeholder color uses `#9AA3B2` instead of SITE.md spec `#94A3B8` (Slate 400)
    **File**: `src/components/contact/ContactFormLight.tsx`, line 7
    **Severity**: Minor

11. **Category**: Contact FAQ
    **Deviation**: Contact FAQ uses a completely different pattern than home FAQ: border-bottom dividers instead of cards, plus icon (rotating 45deg) instead of chevron, answer text color `#4A5568` instead of `#1F1F1F`, text size `16px` instead of `15px/16px`, no staggered reveal animation
    **File**: `src/components/contact/ContactFaq.tsx`
    **Severity**: Important

12. **Category**: Contact FAQ
    **Deviation**: Max-width is `max-w-[800px]` instead of home FAQ's `max-w-[780px]`
    **File**: `src/components/contact/ContactFaq.tsx`, line 28
    **Severity**: Minor

13. **Category**: Eyebrow
    **Deviation**: "Or email directly" label uses `tracking-[0.15em]` instead of `0.12em`, and color `#092F64` instead of `#1A5799`
    **File**: `src/app/contact/page.tsx`, line 57
    **Severity**: Minor

### /privacy, /terms, /cookies (Legal Pages)

1. **Category**: Spacing
   **Deviation**: Legal pages use custom padding (paddingTop: 80, paddingBottom: 48 for header) -- not standard section spacing
   **File**: `src/components/legal/LegalLayout.tsx`, line 25
   **Severity**: Minor (appropriate for legal layout)

2. **Category**: Typography
   **Deviation**: Legal h2 uses `font-weight: 700` instead of 800
   **File**: `src/app/globals.css`, line 177
   **Severity**: Minor (appropriate for legal content)

3. **Category**: Eyebrow
   **Deviation**: Legal eyebrow uses `tracking-[0.15em]` instead of standard `tracking-[0.12em]`
   **File**: `src/components/legal/LegalLayout.tsx`, line 28
   **Severity**: Minor

4. **Category**: Typography
   **Deviation**: Legal h1 uses `text-[32px] md:text-[44px]` -- same as product page section h2 instead of hero h1 sizing
   **File**: `src/components/legal/LegalLayout.tsx`, line 33
   **Severity**: Minor (appropriate for legal)

5. **Category**: Color
   **Deviation**: Legal links use `#1A5799` for color which matches SITE.md legal-content link color; strong uses `#092F64` -- these are consistent with globals.css definitions
   **File**: `src/app/globals.css`, lines 220-230
   **Severity**: No issue (consistent)

### /resources/* (Resource Pages)

1. **Category**: Spacing
   **Deviation**: Resource header uses paddingTop: 96 -- larger than standard; body uses paddingBottom: 64
   **File**: `src/components/resources/ResourceLayout.tsx`, line 43
   **Severity**: Minor (appropriate for long-form content)

2. **Category**: Typography
   **Deviation**: Resource pages use inline class constants for typography (`h2`, `h3`, `p`, `ul`, `li`, `bq`) that duplicate and slightly differ from globals.css `.article-content` styles. The constants use explicit style objects for colors, while `.article-content` in CSS already defines the same colors.
   **File**: `src/app/resources/first-90-days/page.tsx`, lines 11-17
   **Severity**: Minor (redundant but not conflicting)

3. **Category**: Typography
   **Deviation**: Resource h2 inline constant uses `text-[30px]` and `tracking-[-0.015em]` while globals.css `.article-content h2` uses `font-size: 30px` and `letter-spacing: -0.015em` -- these match, but the inline classes with style objects create redundancy
   **File**: `src/app/resources/first-90-days/page.tsx`, line 11
   **Severity**: Minor

4. **Category**: Typography
   **Deviation**: `.article-content .lead` uses color `#4A5568` -- not in SITE.md palette
   **File**: `src/app/globals.css`, line 260
   **Severity**: Minor

5. **Category**: Card Styling
   **Deviation**: ResourceLayout CTA card uses `rounded-xl` (12px) with bg `#E9F5FF` and padding 32 -- no border unlike standard cards
   **File**: `src/components/resources/ResourceLayout.tsx`, line 93
   **Severity**: Minor

6. **Category**: Card Styling
   **Deviation**: Related guide cards use `rounded-[10px]` instead of `rounded-[16px]`, padding 20 instead of 28-32
   **File**: `src/components/resources/ResourceLayout.tsx`, line 130
   **Severity**: Minor

7. **Category**: Eyebrow
   **Deviation**: Resource pill badges use `tracking-[0.15em]` and `rounded` (4px) instead of `rounded-full` and `tracking-[0.05em]` as per guide card pills on home page
   **File**: `src/components/resources/ResourceLayout.tsx`, lines 55-60, 140-145
   **Severity**: Important

8. **Category**: Eyebrow
   **Deviation**: "Read Next" label uses `tracking-[0.15em]` with color `#092F64` instead of standard eyebrow color `#1A5799`
   **File**: `src/components/resources/ResourceLayout.tsx`, line 119
   **Severity**: Minor

---

## PART 3: PATTERN INCONSISTENCIES

### 3.1 Section Padding

The home page uses 84px/112px as standard vertical padding. Every product page (/platform, /locations, /seo, /google-business-profile, /about) uses 64px/96px (py-16 md:py-24) instead. This is a systematic difference.

| Page | Standard Padding | Actual |
|---|---|---|
| Home | 84px / 112px | 84px / 112px |
| Platform | 84px / 112px | 64px / 96px |
| Locations | 84px / 112px | 64px / 96px |
| SEO | 84px / 112px | 64px / 96px |
| GBP | 84px / 112px | 64px / 96px |
| About | 84px / 112px | 64px / 96px |
| Contact | 84px / 112px | 64px / 80px (varies) |

### 3.2 Section H2 Size

| Page | H2 Size (mobile/desktop) |
|---|---|
| Home | text-[34px] / text-[46px] |
| All product pages | text-[32px] / text-[44px] |

The 2px mobile / 2px desktop difference is consistent across all product pages but deviates from the home page baseline.

### 3.3 Centered Description Text Color

| Context | Color Used |
|---|---|
| Home page section descriptions | #1F1F1F (Eerie Black) |
| Product page centered descriptions | #4A5568 (not in SITE.md) |
| Contact FAQ answers | #4A5568 (not in SITE.md) |
| Resource lead paragraphs | #4A5568 (not in SITE.md) |

The color `#4A5568` appears extensively across product pages but is NOT defined in SITE.md. The closest palette color would be Gray 500 `#71717A` for muted text, or Eerie Black `#1F1F1F` for body text. This creates a "third" text color that is undocumented.

### 3.4 Eyebrow Tracking Variations

| Context | Tracking | Color |
|---|---|---|
| Home page standard eyebrows | 0.12em | #1A5799 |
| Home page Final CTA eyebrow | 0.15em | #468BE6 |
| Product page Final CTA eyebrows | 0.15em | #468BE6 |
| Dark-section mid-page eyebrows | 0.15em | #C9DBEC |
| Legal page eyebrow | 0.15em | #1A5799 |
| Resource page pill badge | 0.15em | #1A5799 |
| Contact "Or email directly" | 0.15em | #092F64 |
| About Roadmap eyebrow | 0.15em | #C9DBEC |

There are two distinct patterns: standard `0.12em` for most eyebrows, and `0.15em` for CTA eyebrows, legal, and resources. The inconsistency is whether `0.15em` is reserved for CTA contexts or used more broadly.

### 3.5 Dark Section Eyebrow Color

| Section | Eyebrow Color |
|---|---|
| Home Final CTA | #468BE6 |
| Platform Final CTA | #468BE6 |
| Platform Mobile App | #C9DBEC |
| Locations Leads section | #C9DBEC |
| SEO AI Search | #C9DBEC |
| GBP Scale section | #C9DBEC |
| About Roadmap | #C9DBEC |
| Locations Final CTA | #468BE6 |
| SEO Final CTA | #468BE6 |
| GBP Final CTA | #468BE6 |

Pattern: Final CTA sections consistently use `#468BE6`. Mid-page dark sections use `#C9DBEC`. This seems intentional but is not documented in SITE.md.

### 3.6 Card Border-Radius

| Component | Border-Radius |
|---|---|
| Home feature cards | rounded-[16px] |
| Home guide cards | rounded-[16px] |
| Home automation cards | 16px (via CSS) |
| Home FAQ items | rounded-xl (12px) |
| Product page info cards | rounded-xl (12px) |
| Product page integration cards | rounded-xl (12px) |
| Resource related cards | rounded-[10px] |
| Contact "What to Expect" cards | rounded-xl (12px) |
| Legal notice banner | rounded-r-lg |

Three distinct card radii are in use: 16px (home primary), 12px (product pages, FAQ), and 10px (resource related). SITE.md specifies 16px for standard cards and 12px for FAQ items.

### 3.7 Arrow Link Color

| Location | Arrow Link Color |
|---|---|
| Home FeatureRows | #468BE6 |
| Home GuidesSection | #468BE6 |
| SEO IntegrationSection | #092F64 |
| GBP IntegratedSection | #092F64 |

The SEO and GBP "Integrated" sections use `#092F64` (Cool Black) for arrow links instead of the standard `#468BE6` (Tufts Blue).

### 3.8 Final CTA H2 Size

| Page | Final CTA H2 |
|---|---|
| Home | text-[36px] md:text-[48px] |
| Platform, Locations, SEO, GBP | text-[32px] md:text-[44px] |
| About | text-[32px] md:text-[44px] (on white bg) |

The home page final CTA uses a larger heading than product pages.

### 3.9 Hero Alignment

| Page | Hero Alignment |
|---|---|
| Home | Centered |
| Platform | Centered |
| Locations | Centered |
| SEO | Left-aligned |
| GBP | Left-aligned |
| About | Centered |
| Contact | Left-aligned (two-column) |

The SEO and GBP pages are left-aligned while Platform, Locations, and About are centered. This may be intentional but creates inconsistency across product pages.

### 3.10 Body Text Size in Left-Aligned Sections

| Section Type | Body Size |
|---|---|
| Home left-aligned feature card body | 15px / 16px |
| Product page left-aligned descriptions | 15px / 16px |
| Product page centered descriptions | 16px / 18px |
| About Story paragraphs | 18px |
| About Founder paragraphs | 16px |

Centered section descriptions on product pages use 16px/18px, but the home page uses 16px/17px. The 18px desktop is 1px larger.

---

## PART 4: COMPONENT REUSE ANALYSIS

### 4.1 Well-Shared Components

These components are properly reused across pages:
- **Container** (`src/components/Container.tsx`) -- used everywhere
- **Button** (`src/components/Button.tsx`) -- used on all pages for CTAs
- **ScrollReveal** (`src/components/ScrollReveal.tsx`) -- used across all pages
- **GlobalNav** (`src/components/GlobalNav.tsx`) -- via layout.tsx
- **Footer** (`src/components/Footer.tsx`) -- via layout.tsx
- **DashboardPlaceholder** -- referenced by PlatformTabs and DashboardMockup

### 4.2 Duplicated Patterns That Could Be Shared

1. **Final CTA Section**: Every page has a near-identical Final CTA block with eyebrow, h2, body, and Button. This pattern is duplicated in:
   - `src/app/page.tsx` (lines 260-305)
   - `src/app/platform/page.tsx` (lines 472-501)
   - `src/app/locations/page.tsx` (lines 149-183)
   - `src/app/seo/page.tsx` (lines 88-122)
   - `src/app/google-business-profile/page.tsx` (lines 91-126)
   - `src/app/about/page.tsx` (lines 81-129) -- different styling
   **Recommendation**: Extract a `FinalCta` shared component with props for headline, body, eyebrow text, and background variant (dark/light).

2. **Product Page Hero**: Platform, Locations, SEO, GBP, and About all share a similar hero pattern with eyebrow line + eyebrow text + h1 + description + optional CTA. The alignment and centering vary but the structure is identical.
   **Recommendation**: Extract a `PageHero` component with alignment, size, and CTA props.

3. **Checklist Pattern**: The `<ul>` with `Check` icons from lucide-react is repeated identically in:
   - `src/app/platform/page.tsx` (franchisorFeatures, franchiseeFeatures)
   - `src/components/locations/WebsitesSections.tsx` (serviceFeatures, franchisorFeatures)
   - `src/components/seo/SeoSections.tsx` (auditFeatures, schemaFeatures, AI features)
   - `src/components/gbp/GbpSections.tsx` (multiple CheckList sections)
   - `src/components/about/AboutSections.tsx` (credentials)

   The GBP page already has a local `CheckList` component -- this should be promoted to a shared component.

4. **Info Card Grid**: The pattern of icon + heading + description in a card with border appears in Platform (brandCards, reportBlocks), Locations (seoCards), SEO (contentCards), GBP (reviewCards), About (whySoapCards). All use nearly identical markup with `rounded-xl bg-white` + border + padding 28-32.
   **Recommendation**: Extract an `InfoCard` shared component.

5. **NOISE_SVG Constant**: The noise texture SVG data URL is duplicated identically in 7 files:
   - `src/app/page.tsx`
   - `src/app/platform/page.tsx`
   - `src/app/locations/page.tsx`
   - `src/app/contact/page.tsx`
   - `src/components/locations/WebsitesSections.tsx`
   - `src/components/seo/SeoSections.tsx`
   - `src/components/gbp/GbpSections.tsx`
   - `src/components/about/AboutSections.tsx`
   **Recommendation**: Move to `src/lib/constants.ts`.

6. **Alice Blue Section Pattern**: The pattern of relative-positioned section with Alice Blue bg + noise overlay + Container with relative class is repeated in every product page. Could be a `SectionAliceBlue` wrapper component.

7. **Two-Column Feature Section**: The left-text + right-mockup (or reversed) layout with eyebrow + h2 + body + checklist appears in Platform (S3, S4), Locations (S3, S8), SEO (S3, S4), GBP (S3, S4, S6). Same flex structure, same spacing.
   **Recommendation**: Extract a `SplitSection` component.

### 4.3 Custom Implementations Where Shared Components Should Be Used

1. **Contact FAQ vs Home FAQ**: `ContactFaq.tsx` implements a completely different FAQ accordion pattern instead of reusing `FaqAccordion.tsx` with different data. The visual treatment is substantially different (dividers vs cards, plus icon vs chevron, different answer colors).

2. **Resource pill badges**: `ResourceLayout.tsx` creates pill badges with different styling (`rounded`, `tracking-[0.15em]`) than the home page guide pills (`rounded-full`, `tracking-[0.05em]`).

---

## PART 5: FIX RECOMMENDATIONS

### Quick Fixes (color corrections, class changes)

1. **Add #4A5568 to SITE.md or replace with palette color**
   - The color `#4A5568` is used extensively for centered section descriptions on product pages but is not in the SITE.md palette
   - Decision needed: either add it as "Slate 600" or "Gray 600" to SITE.md, or replace all instances with `#71717A` (Gray 500) or `#1F1F1F` (Eerie Black)
   - Files affected: all product page section descriptions (~30 instances)
   - **Effort**: 15 minutes if replacing, 2 minutes if documenting

2. **Fix arrow link colors in SEO and GBP integration sections**
   - Change `#092F64` to `#468BE6` in integration card arrow links
   - Files: `src/components/seo/SeoSections.tsx` line 291, `src/components/gbp/GbpSections.tsx` line 250
   - **Effort**: 2 minutes

3. **Fix contact form input border color**
   - Change `#CBD2DC` to `#E2E8F0` (Slate 200) in all form inputs
   - File: `src/components/contact/ContactFormLight.tsx`, 5 instances
   - **Effort**: 5 minutes

4. **Fix contact form label styling**
   - Change from `text-[12px] tracking-[0.08em]` to `text-[11px] tracking-[0.1em]` per SITE.md
   - File: `src/components/contact/ContactFormLight.tsx`, line 8
   - **Effort**: 2 minutes

5. **Fix contact form required asterisk color**
   - Change from `#71717A` to `#468BE6` (Tufts Blue) per SITE.md spec
   - File: `src/components/contact/ContactFormLight.tsx`, 4 instances
   - **Effort**: 3 minutes

6. **Fix contact form placeholder color**
   - Change from `#9AA3B2` to `#94A3B8` (Slate 400) per SITE.md
   - File: `src/components/contact/ContactFormLight.tsx`, line 7
   - **Effort**: 1 minute

7. **Fix contact form submit button border-radius**
   - Change from `rounded-lg` (8px) to style `borderRadius: 12` per SITE.md
   - File: `src/components/contact/ContactFormLight.tsx`, line 190
   - **Effort**: 1 minute

8. **Fix resource page pill badge styling**
   - Change from `rounded` + `tracking-[0.15em]` to `rounded-full` + `tracking-[0.05em]` to match home page guide card pills
   - File: `src/components/resources/ResourceLayout.tsx`, lines 55 and 140
   - **Effort**: 3 minutes

### Medium Fixes (spacing standardization, component refactors)

9. **Standardize section padding across product pages**
   - Decision needed: either update SITE.md to define a smaller inner-page spacing (64px/96px), or update all product pages to use 84px/112px
   - If updating to match home: change all `py-16 md:py-24` to `py-[84px] md:py-[112px]` across all product page sections
   - Files affected: ~40 section elements across 8+ files
   - **Effort**: 30-45 minutes

10. **Standardize section H2 sizes**
    - Either update home to use `text-[32px] md:text-[44px]` or update product pages to `text-[34px] md:text-[46px]`
    - Files affected: all product page section headers
    - **Effort**: 20 minutes

11. **Add form container border and shadow to contact form**
    - Add `border: 1px solid #E2E8F0` and `boxShadow: 0 8px 32px rgba(9,47,100,0.08)` per SITE.md
    - Change border-radius from 16px to 18px per SITE.md
    - File: `src/app/contact/page.tsx`, line 81
    - **Effort**: 5 minutes

12. **Align Contact FAQ with home FAQ pattern**
    - Refactor `ContactFaq` to use card-based layout matching `FaqAccordion` styling (rounded cards, chevron icons, consistent colors)
    - Or document the intentional difference
    - File: `src/components/contact/ContactFaq.tsx`
    - **Effort**: 30 minutes

13. **Document the dark-section eyebrow color convention**
    - Add to SITE.md: Final CTA eyebrows use `#468BE6`, mid-page dark section eyebrows use `#C9DBEC`
    - **Effort**: 5 minutes

14. **Standardize Final CTA h2 sizing**
    - Either update home to match product pages or vice versa
    - Home uses 36px/48px, product pages use 32px/44px
    - **Effort**: 10 minutes

### Larger Fixes (shared component extraction)

15. **Extract NOISE_SVG to shared constant**
    - Create `src/lib/constants.ts` with the NOISE_SVG data URL
    - Update 8 files to import from shared location
    - **Effort**: 15 minutes

16. **Extract FinalCta shared component**
    - Props: headline, body, eyebrowText, variant (dark/light), ctaText, ctaHref
    - Replace 6 duplicate implementations
    - **Effort**: 30 minutes

17. **Extract CheckList shared component**
    - Promote `GbpSections.tsx` CheckList to `src/components/CheckList.tsx`
    - Props: items, iconColor, textColor, textSize
    - Replace ~10 duplicate checklist implementations
    - **Effort**: 30 minutes

18. **Extract InfoCard shared component**
    - Props: Icon, heading, description, padding, className
    - Replace ~5 duplicate card grid patterns
    - **Effort**: 30 minutes

19. **Extract SectionAliceBlue wrapper component**
    - Encapsulate: relative section + Alice Blue bg + noise overlay + Container
    - Replace ~12 duplicate implementations
    - **Effort**: 20 minutes

20. **Extract PageHero shared component**
    - Props: eyebrow, title, description, alignment, ctaHref, ctaText
    - Replace 6 hero implementations
    - **Effort**: 30 minutes

21. **Extract SplitSection shared component**
    - Props: eyebrow, title, description, checklistItems, mockup, reversed
    - Replace ~10 two-column feature section implementations
    - **Effort**: 45 minutes

---

## APPENDIX: SITE.MD vs HOME PAGE DISCREPANCIES

These are cases where the home page and SITE.md disagree:

1. **Home Final CTA h2 size**: Home uses `36px / 48px`. SITE.md Section headings spec says `34px / 44-48px`. The 36px mobile is 2px larger than spec.

2. **Home Final CTA padding**: Home uses `py-[80px] md:py-[120px]`. SITE.md says standard is 84px / 112px. The Final CTA has its own custom spacing.

3. **Home Quote Band spacing**: Uses `py-16 md:py-20` (64px/80px) -- does not follow the standard 84px/112px. This is a non-standard section not documented in SITE.md.

4. **anim-card animation values**: globals.css `.anim-card-visible` uses 700ms, but the actual FeatureRows cards use 800ms with inline styles. The CSS class values and inline animation values differ.

5. **Card hover shadow**: globals.css `.card-hover:hover` uses `!important` for shadow and transform. SITE.md hover spec says `shadow 0 8px 32px rgba(9, 47, 100, 0.10), transition 300ms`. The CSS matches but the `!important` flags are not ideal.

6. **Footer padding**: SITE.md says "48px top and bottom". Footer component uses `py-12` (48px) on both mobile and desktop, which matches. However, SITE.md also shows `md:py-12` which is redundant but correct.

7. **Contact form focus**: globals.css has two different focus styles: `#contact input:focus` uses `border-color: #468BE6` while `.contact-form-light input:focus` uses `border-color: #1A5799` with a box-shadow. The contact page form focus is different from the SITE.md-implied standard.
