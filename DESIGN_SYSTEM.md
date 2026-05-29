# Soap Design System

Comprehensive design system reference for the Soap marketing site at getsoap.app. Every token, component, and pattern documented here is extracted from the live codebase. New components (forms, tables, modals, feedback) are derived from existing visual language and should be built using the same colors, radii, shadows, and typography already in production.

---

## 1. Design Philosophy

Soap's visual identity is clean, professional, and slightly elevated without being decorative. The reference anchors are Ramp.com (premium polish), Mercury.com (clean enterprise SaaS), and Linear.app (typography-driven minimal product sections). White and Alice Blue dominate the page. Generous whitespace is mandatory. Product mockups and data visualization carry more visual weight than illustrations. Noise texture overlays on gradient sections add subtle depth. Radial gradient backgrounds on Alice Blue sections provide organic movement.

The governing rule is "Subtle depth, not flat. Not decorative." Anti-patterns include over-decoration, gradients in wrong places, generic Tailwind defaults, pill buttons with gradients, icons in colored circles, stock photography, and any copy that reads like a SaaS marketing template. Every design decision should serve clarity and credibility for a sophisticated franchise buyer who has already been contacted.

---

## 2. Tokens

### 2.1 Colors

#### Brand

| Name | Hex | CSS Variable | Tailwind Config | Usage |
|------|-----|-------------|-----------------|-------|
| Tufts Blue | `#468BE6` | `--color-tufts-blue: #468BE6;` | `'tufts-blue': '#468BE6'` | Primary CTAs, links, active states, key highlights, "Soap blue" |
| Cobalt Blue | `#1A5799` | `--color-cobalt-blue: #1A5799;` | `'cobalt-blue': '#1A5799'` | Eyebrow labels, hover depth, secondary emphasis, focus rings |
| Cool Black | `#092F64` | `--color-cool-black: #092F64;` | `'cool-black': '#092F64'` | Headlines, navigation text, footer background |

#### Background

| Name | Hex | CSS Variable | Tailwind Config | Usage |
|------|-----|-------------|-----------------|-------|
| White | `#FFFFFF` | `--color-bg-white: #FFFFFF;` | `'bg-white': '#FFFFFF'` | Primary page background, card backgrounds |
| Alice Blue | `#E9F5FF` | `--color-alice-blue: #E9F5FF;` | `'alice-blue': '#E9F5FF'` | Alternating section backgrounds, gradient start, contact form container |
| Alice Blue Dark | `#E0EFFA` | `--color-alice-blue-dark: #E0EFFA;` | `'alice-blue-dark': '#E0EFFA'` | Gradient endpoint for Alice Blue sections |
| Cool Black | `#092F64` | `--color-bg-dark: #092F64;` | `'bg-dark': '#092F64'` | Footer, dark CTA sections, mobile app section |

#### Surface

| Name | Hex | CSS Variable | Tailwind Config | Usage |
|------|-----|-------------|-----------------|-------|
| Slate 100 | `#F1F5F9` | `--color-slate-100: #F1F5F9;` | `'slate-100': '#F1F5F9'` | Card surface backgrounds, feature visual containers, hover backgrounds, tab switcher background, FAQ button hover |
| Slate 50 | `#F8FAFC` | `--color-slate-50: #F8FAFC;` | `'slate-50': '#F8FAFC'` | Form input backgrounds, mockup service cards |

#### Border

| Name | Value | CSS Variable | Tailwind Config | Usage |
|------|-------|-------------|-----------------|-------|
| Slate 200 | `#E2E8F0` | `--color-border: #E2E8F0;` | `'border': '#E2E8F0'` | Standard border for cards, inputs, dividers across the entire site |
| Jordy Blue rgba | `rgba(147, 191, 239, X)` | `--color-jordy-blue-rgba: rgba(147, 191, 239, 0.15);` | N/A (inline only) | Hero gradients and decorative borders only, never as a direct hex |
| Active Blue | `rgba(70, 139, 230, 0.2)` | `--color-active-border: rgba(70, 139, 230, 0.2);` | N/A (inline only) | FAQ active state, guide card hover |
| Outline Button | `rgba(9, 47, 100, 0.25)` | `--color-outline-border: rgba(9, 47, 100, 0.25);` | N/A (inline only) | Outline button border |

#### Text

| Name | Hex | CSS Variable | Tailwind Config | Usage |
|------|-----|-------------|-----------------|-------|
| Cool Black | `#092F64` | `--color-text-headline: #092F64;` | `'text-headline': '#092F64'` | Headlines, nav text, form labels, FAQ questions |
| Eerie Black | `#1F1F1F` | `--color-text-body: #1F1F1F;` | `'text-body': '#1F1F1F'` | Body text, card descriptions, legal content |
| Gray 500 | `#71717A` | `--color-text-muted: #71717A;` | `'text-muted': '#71717A'` | Muted secondary text, captions, card descriptions, automation card descriptions |
| Slate 400 | `#94A3B8` | `--color-text-placeholder: #94A3B8;` | `'text-placeholder': '#94A3B8'` | Placeholder text in form inputs |

#### Dark Section Text

| Name | Value | CSS Variable | Tailwind Config | Usage |
|------|-------|-------------|-----------------|-------|
| White | `#FFFFFF` | N/A | N/A | Headlines on dark backgrounds |
| Light Body | `#C9DBEC` | `--color-text-light-body: #C9DBEC;` | `'text-light-body': '#C9DBEC'` | Body text on dark backgrounds, dark eyebrow labels |
| Jordy Blue | `#93BFEF` | `--color-jordy-blue: #93BFEF;` | `'jordy-blue': '#93BFEF'` | Decorative numbers on About page principles |

#### Accent

| Name | Hex | CSS Variable | Tailwind Config | Usage |
|------|-----|-------------|-----------------|-------|
| Emerald | `#10B981` | `--color-emerald: #10B981;` | `'emerald': '#10B981'` | Success indicators, KPI change percentages, positive data signals |
| Error Red | `#EF4444` | `--color-error: #EF4444;` | `'error': '#EF4444'` | Form error states, browser chrome dot |
| Warning Amber | `#F59E0B` | `--color-warning: #F59E0B;` | `'warning': '#F59E0B'` | Warning states, browser chrome dot |

#### Mockup-Specific (not brand)

| Name | Hex | Usage |
|------|-----|-------|
| Google Star Yellow | `#FBBC04` | Star ratings in mockups |
| Google Link Blue | `#1A0DAB` | Search result links |
| Google Text Dark | `#202124` | Primary Google text |
| Google Text Gray | `#4D5156` | Secondary Google text |
| Google Text Light | `#9AA0A6` | Muted Google text |
| Google Maps Red | `#EA4335` | Map pin |
| Google Maps Green | `#187832` | "Open now" text |
| Google Maps Blue | `#1A73E8` | Directions/Website links |
| Empty Star Gray | `#E0E0E0` | Unfilled star ratings |
| Google Border | `#DADCE0` | Google result sitelinks border |
| Google BG Light | `#F1F3F4` | Browser chrome, search bar BG |
| Google Result BG | `#E8EAED` | Maps listing border |

```css
/* CSS Custom Properties */
:root {
  /* Brand */
  --color-tufts-blue: #468BE6;
  --color-cobalt-blue: #1A5799;
  --color-cool-black: #092F64;

  /* Background */
  --color-bg-white: #FFFFFF;
  --color-alice-blue: #E9F5FF;
  --color-alice-blue-dark: #E0EFFA;

  /* Surface */
  --color-slate-100: #F1F5F9;
  --color-slate-50: #F8FAFC;

  /* Border */
  --color-border: #E2E8F0;

  /* Text */
  --color-text-headline: #092F64;
  --color-text-body: #1F1F1F;
  --color-text-muted: #71717A;
  --color-text-placeholder: #94A3B8;
  --color-text-light-body: #C9DBEC;

  /* Accent */
  --color-emerald: #10B981;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
}
```

```js
// tailwind.config.js colors
colors: {
  'tufts-blue': '#468BE6',
  'cobalt-blue': '#1A5799',
  'cool-black': '#092F64',
  'alice-blue': '#E9F5FF',
  'alice-blue-dark': '#E0EFFA',
  'slate-100': '#F1F5F9',
  'slate-50': '#F8FAFC',
  'border': '#E2E8F0',
  'text-headline': '#092F64',
  'text-body': '#1F1F1F',
  'text-muted': '#71717A',
  'text-placeholder': '#94A3B8',
  'text-light-body': '#C9DBEC',
  'emerald': '#10B981',
  'error': '#EF4444',
  'warning': '#F59E0B',
}
```

---

### 2.2 Typography

**Font Family**: Inter (Google Fonts), loaded via `next/font/google` with variable `--font-inter`.
**Weights loaded**: 400, 500, 600, 700, 800.
**Secondary font**: JetBrains Mono (code/URLs, not currently loaded but reserved for future use).

#### Type Scale

| Name | Mobile | Desktop | Weight | Line-Height | Tracking | Usage |
|------|--------|---------|--------|-------------|----------|-------|
| Hero Headline | 34px | 68px md / 80px xl | 800 | 1.05 | -0.02em | Home page hero headline |
| Hero Italic | 34px | 68px md / 80px xl | 400 italic | 1.05 | -0.02em | Home page hero second line |
| Display L | 36px | 56px | 800 | 1.05 | -0.02em | Inner page hero headlines (Platform, Locations, SEO, GBP, About, Contact) |
| Pain Points | 36px | 52px | 800 | 1.1 | -0.02em | Home page pain points headline |
| Display M | 34px | 44-48px | 800 | tight | -0.02em | Standard section headings (h2) |
| Display S | 32px | 44px | 800 | 1.1 | -0.02em | Secondary section headings |
| CTA Headline | 36px | 48px | 800 | 1.1 / tight | -0.02em | Dark CTA section headings |
| Card Title L | 26px | 28-36px | 800 | tight | -0.02em | Feature card titles in FeatureRows |
| Card Title M | 26px | 32px | 800 | tight | -0.02em | Platform/GBP view card titles |
| Stat Value | 44px | 44px | 800 | none | - | Large stat numbers on proof/why sections |
| Principle Number | 32px | 32px | 800 | - | - | Operating principle ordinals |
| Resource H2 | 28px | 28px | 800 | - | -0.015em | Article content h2 |
| Article CTA Title | 24px | 24px | 700 | - | - | Resource CTA card heading |
| Guide Card Title | 20px | 20px | 700 | 1.3 | - | Guide card titles |
| Resource H3 | 20px | 20px | 700 | - | - | Article content h3 |
| Small Card Title | 18px | 18px | 700 | - | - | Brand standard cards, reporting blocks, info cards |
| FAQ Question | 17px | 17px | 600 | - | - | FAQ accordion questions |
| Automation Title | 17px | 17px | 700 | - | - | Automation carousel card titles |
| Subheader | 15px | 16px | 500 | 1.5 | - | Feature card subheaders (Tufts Blue) |
| Body Large | 17px | 19-20px | 400 | 1.55-1.65 | - | Hero descriptions, about page body paragraphs |
| Body | 15px | 16-17px | 400 | 1.6 | - | Section descriptions, card body text |
| Body Small | 14px | 15px | 400 | 1.5-1.6 | - | Automation descriptions, checklist items, dark section body |
| Legal Body | 15px | 15px | 400 | 1.7 | - | Legal page paragraphs and list items |
| Article Body | 16px | 16px | 400 | 1.75 | - | Resource article paragraphs |
| Article Lead | 19px | 19px | 400 | 1.7 | - | Article lead paragraph |
| Legal H2 | 22px | 22px | 700 | - | - | Legal page section headings |
| Legal H3 | 16px | 16px | 700 | - | - | Legal page subsection headings |
| Caption | 13px | 13px | 400-500 | - | - | Timestamps, disclaimers, footer notes |
| Link Arrow | 14-15px | 14-15px | 600 | - | - | Arrow links ("Learn more ->") |
| Blockquote | 20px | 20px | 500 italic | 1.4 | - | Article blockquotes |

#### Eyebrow Conventions

| Context | Size | Weight | Tracking | Transform | Color |
|---------|------|--------|----------|-----------|-------|
| Standard section | 11px | 700 | 0.12em | uppercase | `#1A5799` |
| CTA section (dark bg) | 12px | 700 | 0.15em | uppercase | `#468BE6` |
| Dark mid-section | 11-12px | 700 | 0.15em | uppercase | `#C9DBEC` |
| Footer column headers | 11px | 700 | 0.12em | uppercase | `rgba(255,255,255,0.4)` |
| Card eyebrow | 11px | 700 | 0.08em | uppercase | `#092F64` |

#### Form Typography

| Element | Size | Weight | Tracking | Color |
|---------|------|--------|----------|-------|
| Label | 11px | 600-700 | 0.1em | `#092F64` |
| Required asterisk | - | - | - | `#468BE6` |
| Input text | 14px | 400 | - | `#092F64` |
| Placeholder | 14px | 400 | - | `#94A3B8` |
| Submit button | 16px | 600 | - | `#FFFFFF` |
| Helper text | 12px | 400 | - | `#71717A` |

#### Nav Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Logo wordmark | 24px (text-2xl) | 800 | `#092F64` (light) / `#FFFFFF` (dark) |
| Nav links | 14px (text-sm) | 700 | `#092F64` (light) / `#FFFFFF` (dark) |
| Nav CTA button | 14px (text-sm) | 600 | `#FFFFFF` |
| Mobile nav links | 22px | 600 | matches mode |
| Mobile nav CTA | 17px | 600 | `#FFFFFF` |
| Footer links | 14px (text-sm) | 400 | `rgba(255,255,255,0.6)` |
| Footer copyright | 14px (text-sm) | 400 | `rgba(255,255,255,0.5)` |

---

### 2.3 Spacing Scale

Standard spacing values used throughout the codebase, mapped to Tailwind utilities:

| px | Tailwind | Usage examples |
|----|----------|---------------|
| 2 | `gap-0.5`, `mt-0.5` | Tight element gaps (stars, inline items) |
| 4 | `p-1`, `gap-1` | Tab switcher padding, nav link gaps, pill padding |
| 6 | `px-1.5`, `py-1.5` | Nav link padding |
| 8 | `gap-2`, `mt-2` | Small gaps, card internal spacing |
| 10 | `gap-2.5` | Footer link gaps, checklist icon gap |
| 12 | `gap-3`, `py-3` | Button gaps, checklist item gaps, tab switcher border-radius |
| 16 | `gap-4`, `p-4`, `mt-4` | Card gap between FAQ items, eyebrow-to-heading gap, mobile carousel gap |
| 20 | `gap-5`, `p-5` | Feature visual padding, form field gaps, desktop carousel gap |
| 24 | `px-6`, `gap-6` | Container mobile padding, card grid gap mobile, carousel padding-left |
| 28 | `p-7` | Info card padding (28px via inline style) |
| 32 | `p-8`, `gap-8` | Card grid gap desktop, automation card padding, guide card padding |
| 40 | `p-10`, `gap-10` | About section gaps, footer padding desktop |
| 48 | `gap-12`, `mt-12` | Feature card desktop grid gap, section header margin-bottom |
| 64 | `px-16`, `gap-16` | Container desktop padding, two-column gap desktop, resource article padding-bottom |
| 84 | Custom `py-[84px]` | Standard section vertical padding mobile |
| 96 | Custom `pt-[96px]` | Resource layout header padding-top |
| 112 | Custom `py-[112px]` | Standard section vertical padding desktop |
| 148 | Custom `pt-[148px]` | Inner page hero padding-top mobile |
| 176 | Custom `pt-[176px]` | Inner page hero padding-top desktop |

---

### 2.4 Border Radius Scale

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| radius-sm | 8px | `rounded-lg` | Buttons, small elements, form inputs, nav link hover, tab buttons |
| radius-md | 10px | `rounded-[10px]` | Tab switcher container, mobile CTA button, related guide cards |
| radius-lg | 12px | `rounded-xl` | FAQ items, info cards, brand standard cards, form submit button, stat cards |
| radius-xl | 14px | `rounded-[14px]` | Feature visual containers inside feature cards |
| radius-2xl | 16px | `rounded-[16px]` | Feature cards, standard cards, guide cards, automation cards, GBP managed cards |
| radius-3xl | 18px | `rounded-[18px]` | Form containers (contact page) |
| radius-hero | 40px | `rounded-[40px]` | Hero section outer border |
| radius-full | 9999px | `rounded-full` | Pills, badges, carousel arrow buttons, step number circles |

---

### 2.5 Shadows

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| shadow-none | `none` | `--shadow-none: none;` | Automation cards, feature visual containers |
| shadow-xs | `0 1px 3px rgba(9, 47, 100, 0.04)` | `--shadow-xs: 0 1px 3px rgba(9, 47, 100, 0.04);` | Nav header, hierarchy cards (WebsitesSections) |
| shadow-sm | `0 1px 4px rgba(9, 47, 100, 0.03)` | `--shadow-sm: 0 1px 4px rgba(9, 47, 100, 0.03);` | FAQ items |
| shadow-md | `0 4px 20px rgba(9, 47, 100, 0.05)` | `--shadow-md: 0 4px 20px rgba(9, 47, 100, 0.05);` | Feature cards, guide cards, standard cards |
| shadow-lg | `0 8px 32px rgba(9, 47, 100, 0.08)` | `--shadow-lg: 0 8px 32px rgba(9, 47, 100, 0.08);` | Form containers, guide card hover |
| shadow-hover | `0 8px 32px rgba(9, 47, 100, 0.10)` | `--shadow-hover: 0 8px 32px rgba(9, 47, 100, 0.10);` | Card hover state |
| shadow-btn-primary | `0 4px 12px rgba(70, 139, 230, 0.3)` | `--shadow-btn-primary: 0 4px 12px rgba(70, 139, 230, 0.3);` | Primary button hover |
| shadow-tab-active | `0 1px 3px rgba(0, 0, 0, 0.08)` | `--shadow-tab-active: 0 1px 3px rgba(0, 0, 0, 0.08);` | Active tab in PlatformTabs |
| shadow-about-photo | `0 4px 20px rgba(9, 47, 100, 0.06), 0 12px 40px rgba(9, 47, 100, 0.04)` | N/A | About page headshot card |

```css
:root {
  --shadow-none: none;
  --shadow-xs: 0 1px 3px rgba(9, 47, 100, 0.04);
  --shadow-sm: 0 1px 4px rgba(9, 47, 100, 0.03);
  --shadow-md: 0 4px 20px rgba(9, 47, 100, 0.05);
  --shadow-lg: 0 8px 32px rgba(9, 47, 100, 0.08);
  --shadow-hover: 0 8px 32px rgba(9, 47, 100, 0.10);
  --shadow-btn-primary: 0 4px 12px rgba(70, 139, 230, 0.3);
  --shadow-tab-active: 0 1px 3px rgba(0, 0, 0, 0.08);
}
```

---

### 2.6 Transitions

| Token | Duration | Easing | CSS Variable | Usage |
|-------|----------|--------|-------------|-------|
| fast | 150ms | ease | `--transition-fast: 150ms ease;` | Nav link hover bg, FAQ button hover, menu link hover |
| default | 200ms | ease | `--transition-default: 200ms ease;` | Arrow icon rotation, FAQ chevron, general hover |
| nav | 250ms | ease | `--transition-nav: 250ms ease;` | Nav opacity/transform, hamburger lines, menu close |
| slow | 300ms | ease | `--transition-slow: 300ms ease;` | Card hover (shadow + transform), button hover, nav color, guide card hover |
| faq-answer | 350ms | ease | `--transition-faq: 0.35s ease;` | FAQ accordion max-height |
| faq-opacity | 150ms | ease | N/A | FAQ answer opacity |
| entrance | 400ms | ease-out | `--transition-entrance: 400ms ease-out;` | FAQ item reveal, section header animations, scroll reveal (anim-hidden/visible) |
| premium-text | 600ms | ease-out | `--transition-premium-text: 600ms ease-out;` | Default ScrollReveal for text sections |
| premium-card | 700ms | cubic-bezier(0.16, 1, 0.3, 1) | `--transition-premium-card: 700ms cubic-bezier(0.16, 1, 0.3, 1);` | Guide card reveals, automation card reveals, anim-card-visible |
| hero-card | 800ms | cubic-bezier(0.16, 1, 0.3, 1) | `--transition-hero-card: 800ms cubic-bezier(0.16, 1, 0.3, 1);` | Feature card entrance animation, platform view card reveals |
| menu-open | 300ms | cubic-bezier(0.16, 1, 0.3, 1) | N/A | Mobile menu open animation |
| menu-close | 250ms | cubic-bezier(0.4, 0, 0.6, 1) | N/A | Mobile menu close animation |
| tab-in | 300ms | ease-out | N/A | Tab content fade in (with 100ms delay) |
| tab-out | 200ms | ease-out | N/A | Tab content fade out |
| counter | 1200ms | cubic ease-out (1 - (1-t)^3) | N/A | KPI counter animation in FeatureRows dashboard |

```css
:root {
  --transition-fast: 150ms ease;
  --transition-default: 200ms ease;
  --transition-nav: 250ms ease;
  --transition-slow: 300ms ease;
  --transition-entrance: 400ms ease-out;
  --transition-premium-text: 600ms ease-out;
  --transition-premium-card: 700ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-hero-card: 800ms cubic-bezier(0.16, 1, 0.3, 1);
  --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-close: cubic-bezier(0.4, 0, 0.6, 1);
}
```

---

### 2.7 Opacity Values

| Value | Usage |
|-------|-------|
| 0 | Hidden animation states, disabled carousel buttons (combined with 0.3) |
| 0.1 | Noise texture overlay on Alice Blue sections |
| 0.15 | Noise texture overlay on hero, Jordy Blue border (rgba 147,191,239,0.15) |
| 0.3 | Disabled carousel button opacity, hero outline button border (rgba 255,255,255,0.3) |
| 0.4 | Footer column headers (white/40), headshot placeholder text |
| 0.5 | Footer copyright, secondary Google results, budget window listings |
| 0.6 | Footer links (white/60) |
| 0.7 | Footer "Built by" link (white/70) |
| 0.8 | Footer link hover (white/80) |
| 0.9 | Footer link hover (white/90) |
| 1 | Visible/active states |

---

### 2.8 Gradients

| Name | Value | Usage |
|------|-------|-------|
| Hero BG | `radial-gradient(ellipse 80% 60% at 50% 20%, #1A4080 0%, #092F64 70%, #061F47 100%)` | Home hero background, mobile menu dark mode |
| Hero Bottom Fade | `linear-gradient(to bottom, transparent 0%, transparent 80%, rgba(6, 31, 71, 0.4) 100%)` | Bottom fade on hero section |
| Alice Blue Section | `radial-gradient(ellipse 80% 50% at 50% 0%, #E9F5FF 0%, #E0EFFA 100%)` | "Inside the Platform" section on home page |
| Mockup Hero Banner | `linear-gradient(135deg, #E9F5FF 0%, #D6ECFD 100%)` | Website visual hero banner in FeatureRows |

---

### 2.9 Noise Texture

The noise SVG is used as a background overlay on gradient and Alice Blue sections:

```
url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")
```

| Context | mix-blend-mode | Opacity |
|---------|---------------|---------|
| Hero (dark gradient) | overlay | 0.15 |
| Alice Blue sections | soft-light | 0.1 |

---

## 3. Components

### 3.1 Buttons

#### Primary (Filled)

| Property | Default | Large | Nav |
|----------|---------|-------|-----|
| Background | `#468BE6` | `#468BE6` | `#468BE6` |
| Text color | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| Font size | 14px | 16px | 14px |
| Font weight | 600 | 600 | 600 |
| Padding | `12px 28px` | `14px 32px` | `10px 24px` |
| Border radius | 8px | 8px | 8px |
| Border | none | none | none |

**States:**

| State | Effect |
|-------|--------|
| Default | Flat, no shadow |
| Hover | `translateY(-2px)`, `box-shadow: 0 4px 12px rgba(70, 139, 230, 0.3)`, `transition: all 0.3s ease` |
| Focus-visible | `outline: 2px solid #468BE6; outline-offset: 2px` |
| Disabled (form submit) | Visually unchanged (sends "Sending..." text) |

```css
.btn-primary {
  display: inline-block;
  font-weight: 600;
  text-align: center;
  background-color: #468BE6;
  color: #FFFFFF;
  padding: 12px 28px;
  font-size: 14px;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(70, 139, 230, 0.3);
}
```

#### Outline

| Property | Value |
|----------|-------|
| Background | transparent |
| Text color | `#092F64` |
| Font size | 14px (default), 16px (large) |
| Font weight | 600 |
| Padding | `12px 28px` (default), `14px 32px` (large) |
| Border | `1px solid rgba(9, 47, 100, 0.25)` |
| Border radius | 8px |

**States:**

| State | Effect |
|-------|--------|
| Default | Transparent background |
| Hover | `background: rgba(70, 139, 230, 0.06)`, `border-color: #468BE6`, `color: #468BE6`, `transition: all 0.3s ease` |
| Focus-visible | `outline: 2px solid #468BE6; outline-offset: 2px` |

**Outline on Dark (Hero):**

| Property | Value |
|----------|-------|
| Text color | `#FFFFFF` |
| Border | `1px solid rgba(255, 255, 255, 0.3)` |
| Padding | `13px 31px` |

```css
.btn-outline {
  display: inline-block;
  font-weight: 600;
  text-align: center;
  background-color: transparent;
  color: #092F64;
  padding: 12px 28px;
  font-size: 14px;
  border: 1px solid rgba(9, 47, 100, 0.25);
  border-radius: 8px;
  transition: all 0.3s ease;
}
.btn-outline:hover {
  background-color: rgba(70, 139, 230, 0.06);
  border-color: #468BE6;
  color: #468BE6;
}
```

#### Form Submit

| Property | Value |
|----------|-------|
| Background | `#468BE6` |
| Text color | `#FFFFFF` |
| Font size | 16px |
| Font weight | 600 |
| Width | 100% |
| Padding | `14px 0` (py-3.5) |
| Border radius | 12px (rounded-xl) |

#### Arrow/Icon Buttons (Carousel)

| Property | Value |
|----------|-------|
| Size | 40x40px |
| Background | `#FFFFFF` |
| Border | `1px solid #E2E8F0` |
| Border radius | full (circle) |
| Hover BG | `#F1F5F9` |
| Disabled opacity | 0.3 |
| Icon | 18x18px, stroke `#092F64`, strokeWidth 2 |

---

### 3.2 Form Inputs

Based on ContactFormLight.tsx implementation.

#### Text Input

| Property | Value |
|----------|-------|
| Height | auto (padding-based: ~48px with py-3) |
| Padding | `12px 16px` (py-3 px-4 via Tailwind) |
| Background | `#FFFFFF` (on Alice Blue container) |
| Border | `1px solid #E2E8F0` |
| Border radius | 8px (rounded-lg) |
| Font size | 14px |
| Font weight | 400 |
| Text color | `#092F64` |
| Placeholder color | `#94A3B8` |
| Outline | none (outline-none via Tailwind) |
| Transition | all (via transition-all) |

**States:**

| State | Effect |
|-------|--------|
| Default | `border: 1px solid #E2E8F0` |
| Focus | `border-color: #1A5799`, `box-shadow: 0 0 0 3px rgba(26, 87, 153, 0.1)` |
| Error | `border-color: #EF4444`, helper text `#EF4444` below input |
| Disabled | Reduce opacity to 0.5, cursor: not-allowed |

#### Label

| Property | Value |
|----------|-------|
| Font size | 11px |
| Font weight | 600-700 |
| Transform | uppercase |
| Letter spacing | 0.1em |
| Color | `#092F64` |
| Required marker | `*` in `#468BE6` |

#### Select

Same styling as Text Input. Uses `defaultValue=""` with a disabled placeholder option.

#### Textarea

Same styling as Text Input. Uses `rows={4}` for default height.

#### Checkbox (derived)

| Property | Value |
|----------|-------|
| Size | 18x18px |
| Border | `1.5px solid #E2E8F0` |
| Border radius | 4px |
| Background (unchecked) | `#FFFFFF` |
| Background (checked) | `#468BE6` |
| Check mark | White, 2px stroke |
| Focus | `box-shadow: 0 0 0 3px rgba(26, 87, 153, 0.1)` |

#### Radio (derived)

| Property | Value |
|----------|-------|
| Size | 18x18px |
| Border | `1.5px solid #E2E8F0` |
| Border radius | full |
| Background (unselected) | `#FFFFFF` |
| Inner dot (selected) | 8px, `#468BE6` |
| Focus | `box-shadow: 0 0 0 3px rgba(26, 87, 153, 0.1)` |

#### Toggle (derived)

| Property | Value |
|----------|-------|
| Track width | 40px |
| Track height | 22px |
| Track radius | full |
| Track BG (off) | `#E2E8F0` |
| Track BG (on) | `#468BE6` |
| Knob size | 18px |
| Knob color | `#FFFFFF` |
| Transition | 200ms ease |

```css
/* Form input base */
.form-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  color: #092F64;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  outline: none;
  transition: all 150ms ease;
}
.form-input::placeholder {
  color: #94A3B8;
}
.form-input:focus {
  border-color: #1A5799;
  box-shadow: 0 0 0 3px rgba(26, 87, 153, 0.1);
}
.form-input--error {
  border-color: #EF4444;
}

/* Form label */
.form-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #092F64;
}
```

---

### 3.3 Cards

#### Feature Card (FeatureRows, Platform View Cards, GBP Managed Cards)

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid #E2E8F0` |
| Border radius | 16px |
| Shadow | `0 4px 20px rgba(9, 47, 100, 0.05)` |
| Padding | `24px` mobile / `32px` desktop |
| Hover | `translateY(-2px)`, shadow `0 8px 32px rgba(9, 47, 100, 0.10)`, `transition: 300ms ease` |
| Entrance | `translateY(48px)` to 0, opacity 0 to 1, `800ms cubic-bezier(0.16, 1, 0.3, 1)` |
| Desktop layout | 2-column grid, `gap: 48px`, min-height 420px, items centered |

#### Feature Visual Container (inside Feature Cards)

| Property | Value |
|----------|-------|
| Background | `#F1F5F9` |
| Border | `1px solid #E2E8F0` |
| Border radius | 14px |
| Height | 380px desktop / 220px mobile |
| Padding | 20px |
| Shadow | none |

#### Info Card (Brand Standards, Reporting Blocks, SEO Architecture, Content Engine)

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid #E2E8F0` |
| Border radius | 12px (rounded-xl) |
| Shadow | none (most) or `0 1px 3px rgba(9, 47, 100, 0.04)` (WebsitesSections hierarchy cards) |
| Padding | 28px (inline style) or 32px |
| Icon | 28px, color `#1A5799` |
| Title | 18px, weight 700, color `#092F64` |
| Description | 14px, leading 1.6, color `#1F1F1F` |
| Entrance | `translateY(24px)` to 0, staggered 150+i*100ms delay |

#### Automation Card (Carousel)

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid #E2E8F0` |
| Border radius | 16px |
| Shadow | `none !important` |
| Padding | `32px 28px` |
| Width | 240px mobile / 280px desktop |
| Flex | column, flex-shrink: 0 |
| Icon | 36px, stroke `#468BE6`, strokeWidth 1.5 |
| Title | 17px, weight 700, color `#092F64` |
| Description | 14px, leading 1.5, color `#71717A` |
| Hover | none |
| Entrance | `translateY(32px)` to 0, `700ms cubic-bezier(0.16, 1, 0.3, 1)`, staggered `(i+1)*100ms` |

#### FAQ Item

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border (default) | `1px solid #E2E8F0` |
| Border (active) | `1px solid rgba(70, 139, 230, 0.2)` |
| Border radius | 12px (rounded-xl) |
| Shadow | `0 1px 4px rgba(9, 47, 100, 0.03)` |
| Gap between items | 16px (gap-4) |
| Button padding | `22px 28px` |
| Question text | 17px, weight 600, color `#092F64` |
| Answer padding | `0 28px 22px 28px`, 16px padding-top above text |
| Answer text | 15px mobile / 16px desktop, leading 1.6, color `#1F1F1F` |
| Answer divider | `1px solid #E2E8F0` |
| Chevron | 20x20, stroke `#71717A` (closed) / `#468BE6` (open), rotate 90deg on open |
| Button hover BG | `#F1F5F9` |
| Entrance | staggered `opacity 400ms ease-out ${i*80}ms, transform 400ms ease-out ${i*80}ms` |

#### Guide Card

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid #E2E8F0` |
| Border radius | 16px |
| Shadow | `0 4px 20px rgba(9, 47, 100, 0.05)` |
| Padding | `32px 28px` |
| Hover | `translateY(-2px)`, `box-shadow: 0 8px 24px rgba(9, 47, 100, 0.08)`, `border-color: rgba(70, 139, 230, 0.2)`, `transition: 300ms ease` |
| Pill | see below |
| Title | 20px, weight 700, leading 1.3, color `#092F64`, hover color `#468BE6` |
| Teaser | 14px mobile / 15px desktop, leading 1.5, color `#71717A` |
| Arrow link | 14px, weight 600, color `#468BE6` |

#### Guide Card Pill

| Property | Value |
|----------|-------|
| Background | `rgba(70, 139, 230, 0.08)` |
| Text color | `#1A5799` |
| Border radius | full |
| Padding | `4px 12px` |
| Font | 11px, weight 600, uppercase, tracking 0.05em |

#### Stat Card

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid #E2E8F0` |
| Border radius | 12px (rounded-xl) |
| Shadow | none |
| Padding | 28px |
| Value | 44px, weight 800, color `#1A5799` |
| Label | 13px, weight 600, uppercase, tracking 0.08em, color `#092F64` |
| Description | 13px, leading 1.55, color `#1F1F1F` |

#### Step Card (Contact "What to Expect")

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid #E2E8F0` |
| Border radius | 12px (rounded-xl) |
| Padding | 28px |
| Step number | 32x32 circle, bg `#1A5799`, text 14px bold white |
| Title | 17px, weight 700, color `#092F64` |
| Description | 14px, leading 1.6, color `#1F1F1F` |

---

### 3.4 Tables (derived from existing patterns)

Based on the dashboard mockup table patterns in FeatureRows DashboardVisual:

| Element | Property | Value |
|---------|----------|-------|
| Header row | Font size | 11px (8px in mockup, scaled for real UI) |
| Header row | Weight | 600 |
| Header row | Transform | uppercase |
| Header row | Tracking | wide (0.05em) |
| Header row | Color | `#71717A` |
| Header row | Border bottom | `1px solid #E2E8F0` |
| Header row | Padding | `8px 0` |
| Data row | Font size | 14px |
| Data row | Color | `#1F1F1F` |
| Data row | Height | 56px (via padding) |
| Data row | Border bottom | `1px solid #F1F5F9` |
| Alternating stripe | Background | `#F8FAFC` (even rows) |
| Hover | Background | `#F1F5F9` |
| Sort icon | Color | `#1A5799` |
| Progress bar (inline) | Track | `#E2E8F0` |
| Progress bar (inline) | Fill | `#468BE6` |
| Progress bar (inline) | Height | 4px |
| Progress bar (inline) | Radius | full |

```css
.table-header-cell {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #71717A;
  padding: 8px 12px;
  border-bottom: 1px solid #E2E8F0;
}
.table-data-cell {
  font-size: 14px;
  color: #1F1F1F;
  padding: 16px 12px;
  border-bottom: 1px solid #F1F5F9;
}
.table-row:nth-child(even) {
  background-color: #F8FAFC;
}
.table-row:hover {
  background-color: #F1F5F9;
}
```

---

### 3.5 Feedback Components (derived from existing patterns)

#### Modal

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border radius | 16px |
| Shadow | `0 8px 32px rgba(9, 47, 100, 0.08)` |
| Padding | 32px |
| Max width | 480px (small), 640px (medium), 880px (large) |
| Overlay | `rgba(9, 47, 100, 0.5)` |
| Entrance | opacity 0 to 1, translateY(8px) to 0, 300ms ease-out |
| Exit | opacity 1 to 0, translateY(0) to 8px, 200ms ease-out |

#### Toast

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border radius | 12px |
| Shadow | `0 4px 20px rgba(9, 47, 100, 0.05)` |
| Padding | `16px 20px` |
| Left accent bar | 4px width, color-coded by type |
| Max width | 420px |
| Entrance | translateX(100%) to 0, 300ms cubic-bezier(0.16, 1, 0.3, 1) |
| Exit | opacity 1 to 0, 200ms ease |

| Type | Accent Color |
|------|-------------|
| Success | `#10B981` |
| Error | `#EF4444` |
| Warning | `#F59E0B` |
| Info | `#468BE6` |

#### Spinner

| Property | Value |
|----------|-------|
| Color | `#468BE6` |
| Sizes | 16px (inline), 24px (button), 32px (page) |
| Animation | rotate 360deg, 800ms linear infinite |
| Track color | `#E2E8F0` |
| Track width | 2px (16px), 2.5px (24px), 3px (32px) |

#### Skeleton

| Property | Value |
|----------|-------|
| Background | `#F1F5F9` |
| Border radius | 8px |
| Animation | pulse (opacity 0.4 to 1, 1.5s ease-in-out infinite) |
| Text line height | 16px |
| Text line gap | 8px |
| Heading height | 24px |

#### Progress Bar

| Property | Value |
|----------|-------|
| Track background | `#E2E8F0` |
| Fill background | `#468BE6` |
| Height | 4px |
| Border radius | full |
| Transition | width 400ms ease-out |

---

### 3.6 Data Display (derived from existing patterns)

#### Metric Tile

Based on the KPI cards in FeatureRows DashboardVisual:

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid #E2E8F0` |
| Border radius | 12px (rounded-lg in mockup) |
| Padding | 16px |
| Value font | 28px (scaled from mockup 18px), weight 700, color `#092F64` |
| Label font | 13px, weight 500, color `#71717A` |
| Change indicator | 13px, weight 600 |
| Change positive | `#10B981` |
| Change negative | `#EF4444` |
| Change entrance | opacity 0 to 1, 400ms ease-out (delayed) |

#### Empty State

| Property | Value |
|----------|-------|
| Layout | centered, flex column, items-center |
| Icon | 48px, color `#71717A` (Gray 500) |
| Heading | 18px, weight 700, color `#092F64` |
| Description | 14px, weight 400, color `#71717A` |
| CTA button | Primary button (default size) |
| Spacing | icon to heading: 16px, heading to desc: 8px, desc to CTA: 24px |

#### Status Pill

Based on Guide Card Pill pattern:

| Variant | Background | Text Color |
|---------|-----------|------------|
| Success | `rgba(16, 185, 129, 0.1)` | `#10B981` |
| Warning | `rgba(245, 158, 11, 0.1)` | `#F59E0B` |
| Danger | `rgba(239, 68, 68, 0.1)` | `#EF4444` |
| Info | `rgba(70, 139, 230, 0.08)` | `#1A5799` |
| Neutral | `#F1F5F9` | `#71717A` |

| Property | Value |
|----------|-------|
| Border radius | full |
| Padding | `4px 12px` |
| Font size | 11px |
| Font weight | 600 |
| Text transform | uppercase |
| Letter spacing | 0.05em |

```css
.status-pill {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.status-pill--success { background: rgba(16, 185, 129, 0.1); color: #10B981; }
.status-pill--warning { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
.status-pill--danger  { background: rgba(239, 68, 68, 0.1);  color: #EF4444; }
.status-pill--info    { background: rgba(70, 139, 230, 0.08); color: #1A5799; }
.status-pill--neutral { background: #F1F5F9;                  color: #71717A; }
```

---

## 4. Layout Patterns

### 4.1 Container

```tsx
<div className="mx-auto max-w-7xl px-6 md:px-16">
```

| Property | Value |
|----------|-------|
| Max width | 1280px (max-w-7xl) |
| Horizontal padding mobile | 24px (px-6) |
| Horizontal padding desktop | 64px (px-16) |
| Centering | `margin: 0 auto` |

**Variant: Nav container** uses `px-[44px] md:px-[56px]` instead.

### 4.2 Section Spacing

| Context | Mobile | Desktop |
|---------|--------|---------|
| Standard section | `py-[84px]` | `py-[112px]` |
| Inner page hero | `pt-[148px] pb-[84px]` | `pt-[176px] pb-[112px]` |
| Dark CTA sections | `py-16` (64px) | `py-24` (96px) |
| Footer | `py-12` (48px) | `py-12` (48px) |
| Legal header | pt: 80px, pb: 48px | Same |
| Resource header | pt: 96px, pb: 48px | Same |

**Same-background rule**: When consecutive sections share the same background color, the second section drops its top padding (pt-0 or pb-0 on the first) to prevent doubled gaps. When backgrounds differ, both sections keep full padding.

### 4.3 Grid Patterns

| Pattern | Mobile | Desktop | Gap |
|---------|--------|---------|-----|
| Card stack (feature cards) | 1 column | 1 column (2-col internal grid) | `gap-6 md:gap-8` |
| 3-column card grid | 1 column | 3 columns | `gap-6` |
| 4-column card grid | 1 column / 2 col sm | 4 columns lg | `gap-6` |
| 2-column block grid | 1 column | 2 columns | `gap-8 md:gap-x-16 md:gap-y-12` |
| Two-column layout | stacked | 50/50 or 45/55 | `gap-10 md:gap-16` or `gap-8 md:gap-12` |
| Guide cards | 1 column | 3 columns | `gap-5 md:gap-6` |
| Related guide cards | 1 column | 2 columns | `gap-4` |

### 4.4 Two-Column Feature Card Internal Layout

```css
/* Desktop only */
grid-template-columns: 1fr 1fr;
gap: 48px;
padding: 32px 24px; /* or 24px 24px */
min-height: 420px;
align-items: center;
```

Alternating layouts use CSS `order` property for reversed cards.

### 4.5 Content Width Constraints

| Context | Max Width |
|---------|-----------|
| Default container | 1280px (max-w-7xl) |
| About page | 1100px (max-w-[1100px]) |
| Legal/Resource articles | 880px (max-w-[880px]) |
| FAQ list | 780px (max-w-[780px]) |
| Headline text blocks | 720-900px (varies by section) |
| Body text blocks | 580-720px (varies by section) |
| Tab content mockup | 76% of container |

---

## 5. Animation Patterns

### 5.1 ScrollReveal Component

Configurable scroll-triggered animation component using IntersectionObserver:

| Prop | Default | Description |
|------|---------|-------------|
| delay | 0 | Delay in ms before animation starts |
| threshold | 0.2 | IntersectionObserver threshold (0-1) |
| premium | false | Uses cubic-bezier(0.16, 1, 0.3, 1) instead of ease-out |
| distance | 24 | translateY distance in px |
| duration | 600 | Duration in ms |
| as | "div" | HTML tag to render |

All animations fire once and never replay (unobserve after triggering).

### 5.2 Common Animation Patterns

| Pattern | Distance | Duration | Easing | Delay |
|---------|----------|----------|--------|-------|
| Section header | 24px | 600ms | ease-out | 0 |
| Feature card entrance | 48px | 800ms | cubic-bezier(0.16, 1, 0.3, 1) | 0 |
| Info card stagger | 24px | 700ms | cubic-bezier(0.16, 1, 0.3, 1) | 150 + i*100ms |
| Automation card stagger | 32px | 700ms | cubic-bezier(0.16, 1, 0.3, 1) | (i+1)*100ms |
| FAQ item stagger | 16px | 400ms | ease-out | i*80ms |
| Guide card stagger | 32px | 700ms | cubic-bezier(0.16, 1, 0.3, 1) | 200 + i*100ms |
| Tab content enter | 8px | 300ms | ease-out | 100ms delay |
| Tab content exit | 8px | 200ms | ease-out | 0 |
| Arrow link hover | 4px horizontal | 200ms | ease | 0 |

### 5.3 Hero Animation Stagger (page load)

| Element | Delay |
|---------|-------|
| Headline | 100ms |
| Sub-headline | 300ms |
| CTA buttons | 500ms |
| Dashboard placeholder | 700ms |

### 5.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.2s !important;
    transition-duration: 0.2s !important;
    animation-iteration-count: 1 !important;
  }
}
```

---

## 6. Navigation

### 6.1 GlobalNav (Fixed/Sticky)

| Property | Light Mode (inner pages) | Dark Mode (home hero inline) |
|----------|-------------------------|----------------------------|
| Background | `rgba(255, 255, 255, 0.92)` | transparent |
| Backdrop filter | `blur(12px)` | none |
| Border bottom | `1px solid rgba(9, 47, 100, 0.06)` | `1px solid transparent` |
| Box shadow | `0 1px 3px rgba(9, 47, 100, 0.04)` | none |
| Text color | `#092F64` | `#FFFFFF` |
| Link hover BG | `rgba(70, 139, 230, 0.08)` | `rgba(255, 255, 255, 0.08)` |
| Layout | 3-column grid (logo / links / CTA) | Same |
| Breakpoint | lg (1024px), hamburger below | Same |
| Position | fixed, top 0, z-50 | relative (inline) |

**Home page behavior**: Fixed nav is hidden initially, fades in when hero scrolls past 80px. Inline nav renders inside hero.

**Transition**: `opacity 250ms ease, transform 250ms ease, background-color 250ms ease, border-bottom-color 250ms ease, box-shadow 250ms ease, backdrop-filter 250ms ease`

### 6.2 Mobile Menu

| Property | Value |
|----------|-------|
| Position | fixed, below nav (top: 64px) |
| Background (light) | `rgba(255, 255, 255, 0.98)` with `blur(12px)` |
| Background (dark) | `radial-gradient(ellipse 80% 60% at 50% 20%, #1A4080 0%, #092F64 70%, #061F47 100%)` |
| Link size | 22px, weight 600 |
| Link padding | `14px 12px` |
| Link hover BG | `rgba(70, 139, 230, 0.06)` (light) / `rgba(255, 255, 255, 0.06)` (dark) |
| CTA button | full width, 17px, weight 600, 10px radius |
| Open animation | `opacity 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 300ms cubic-bezier(0.16, 1, 0.3, 1)` |
| Close animation | `opacity 250ms cubic-bezier(0.4, 0, 0.6, 1), transform 250ms cubic-bezier(0.4, 0, 0.6, 1)` |
| Transform | `translateY(-12px)` to `translateY(0)` |

### 6.3 Hamburger Icon

3 horizontal lines, animated to X on open:

| Property | Value |
|----------|-------|
| Line height | 2px |
| Line width | 20px (w-5) |
| Line gap | 5px |
| Line border-radius | full |
| Color | currentColor |
| Open animation | Top line: `translateY(7px) rotate(45deg)`, Middle: opacity 0, Bottom: `translateY(-7px) rotate(-45deg)` |
| Transition | `transform 250ms ease-out, opacity 250ms ease-out` (lines 1,3), `opacity 200ms ease-out` (line 2) |

---

## 7. Legal & Resource Layouts

### 7.1 Legal Layout

| Property | Value |
|----------|-------|
| Max width | 880px |
| Header padding | pt: 80px, pb: 48px |
| Eyebrow | "Legal", 11px bold uppercase tracking 0.15em, `#1A5799` |
| Title | 34px mobile / 46px desktop, weight 800 |
| Last updated | 13px, `#71717A` |
| Notice banner | bg `#E9F5FF`, left border 3px `#1A5799`, 13px medium `#092F64` |

Content typography is controlled by `.legal-content` class in globals.css.

### 7.2 Resource Layout

| Property | Value |
|----------|-------|
| Max width | 880px |
| Header padding | pt: 96px, pb: 48px |
| Pill | bg `#E9F5FF`, text `#1A5799`, 11px bold uppercase, rounded-full |
| Title | 36px mobile / 56px desktop, weight 800 |
| Meta | 14px, `#71717A` |
| CTA card | bg `#E9F5FF`, rounded-xl, padding 32px |

Content typography is controlled by `.article-content` class in globals.css.

---

## 8. Resolutions

Inconsistencies found in the codebase and canonical values chosen:

1. **Border color**: `#E1E5EC` appears once in WebsitesSections.tsx service cards, while `#E2E8F0` is used everywhere else. **Canonical: `#E2E8F0`**. The `#E1E5EC` instance should be normalized.

2. **Card border-radius 12px vs 16px**: Info cards use 12px (rounded-xl), while feature cards and guide cards use 16px (rounded-[16px]). **Both are canonical**: 16px for standard/feature cards, 12px for smaller info/utility cards. This is intentional hierarchy.

3. **Form label weight**: ContactFormLight uses `font-semibold` (600) in the class, while SITE.md specifies 700. The class `labelClass` sets `font-semibold`. **Canonical: 700 (font-bold)**. The form labels should use `font-bold` to match SITE.md spec.

4. **Body text color consistency**: All body text correctly uses `#1F1F1F`. No instances of alternative body colors found. **Resolved: consistent.**

5. **Section heading font size**: Ranges from 44px to 48px at desktop. Most use 46px. **Canonical: 46px for standard sections, 44px for secondary sections within a page.**

6. **Nav background opacity**: SITE.md says `rgba(255, 255, 255, 0.85)`, but code uses `rgba(255, 255, 255, 0.92)`. **Canonical: `rgba(255, 255, 255, 0.92)` (code is authoritative).**

7. **Nav backdrop blur**: SITE.md says `blur(16px)`, code uses `blur(12px)`. **Canonical: `blur(12px)` (code is authoritative).**

8. **Nav border-bottom**: SITE.md says `rgba(147, 191, 239, 0.15)`, code uses `rgba(9, 47, 100, 0.06)`. **Canonical: `rgba(9, 47, 100, 0.06)` (code is authoritative).**

9. **Feature card entrance timing**: FeatureRows uses 800ms, while SITE.md also documents 800ms. **Resolved: consistent.** However, globals.css `.anim-card-visible` uses 700ms. **Canonical for card entrance via CSS class: 700ms. Via inline ScrollReveal: 800ms for feature cards, 700ms for smaller cards.**

10. **Guide card hover shadow**: globals.css uses `0 8px 24px rgba(9, 47, 100, 0.08)`, while `.card-hover` uses `0 8px 32px rgba(9, 47, 100, 0.10)`. **Both are canonical**: guide cards use the softer 24px shadow, feature cards use the stronger 32px shadow.

11. **Tab switcher container radius**: Code uses `borderRadius: 10` for the outer container and `borderRadius: 8` for inner buttons. **Canonical: 10px outer, 8px inner.**

12. **Mobile menu top offset**: Both inline and fixed modes use `top: 64` (64px). **Canonical: 64px.**

13. **Footer padding**: Uses `py-12 md:py-12` (48px both breakpoints), differing from body sections. **Canonical: 48px for footer. This is intentional.**

14. **About headshot shadow**: Uses compound shadow `0 4px 20px rgba(9, 47, 100, 0.06), 0 12px 40px rgba(9, 47, 100, 0.04)`. This is unique to the headshot card. **Canonical for photo cards: use this compound shadow.**

15. **CTA section heading sizes**: Home uses 36px/48px, inner pages use 36px/48px and 32px/44px. **Canonical: 36px mobile / 48px desktop for primary CTA, 32px mobile / 44px desktop for secondary CTA.**

---

## 9. Focus & Accessibility

| Pattern | Value |
|---------|-------|
| Focus-visible outline | `2px solid #468BE6`, offset 2px |
| Reduced motion | All durations capped at 0.2s, single iteration |
| Semantic HTML | `nav`, `main`, `section`, `footer`, `article` used consistently |
| Image alt text | Required on all images per CLAUDE.md |
| Keyboard nav | Escape closes mobile menu, resize >= 1024px closes menu |
| ARIA labels | Hamburger button uses `aria-label` for open/close states |
| Form labels | All inputs have associated `<label>` with `htmlFor` |

---

## 10. Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| sm | 640px | Hero CTA row layout |
| md | 768px | Primary responsive breakpoint (grid layouts, section padding, font size changes) |
| lg | 1024px | Navigation desktop/mobile breakpoint |
| xl | 1280px | Hero headline max size (80px) |

The primary breakpoint is `md` (768px). All mobile-first designs target this breakpoint for layout shifts. Navigation uses `lg` (1024px) for the hamburger/desktop switch.
