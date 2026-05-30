---
target: src/app/page.tsx
total_score: 26
p0_count: 1
p1_count: 1
timestamp: 2026-05-30T15-26-18Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | "Download Our App" dead link |
| 2 | Match System / Real World | 4 | Franchise-native language |
| 3 | User Control and Freedom | 2 | No keyboard nav on tabs, dead CTA |
| 4 | Consistency and Standards | 3 | Three different CTA labels |
| 5 | Error Prevention | 2 | Hardcoded FAQ maxHeight, placeholder |
| 6 | Recognition Rather Than Recall | 3 | Automation cards no forward path |
| 7 | Flexibility and Efficiency | 2 | No pricing page, no self-serve path |
| 8 | Aesthetic and Minimalist Design | 3 | Eyebrow repetition |
| 9 | Error Recovery | 2 | No fallback for dead links |
| 10 | Help and Documentation | 2 | SEO jargon unexplained |
| **Total** | | **26/40** | **Acceptable** |

## Anti-Patterns Verdict

Primary AI tell: five identical blue uppercase tracked eyebrows. Secondary: automation carousel (eight identical icon+title+description cards). Aphoristic copy cadence in nearly every section opener. Hero-metric KPI animation follows big-number template. Detector: 1 finding (side-tab in LegalLayout.tsx) - false positive. Site does NOT look generically AI-made at first glance due to strong hero treatment and bespoke mockups, but design-literate viewers would clock the eyebrow repetition and card-grid pattern.

## What's Working

1. FeatureRow mockups are a genuine differentiator - hand-coded UI mockups demonstrate product scope.
2. Hero material treatment - noise overlay, radial gradient, 40px-radius framed card.
3. FAQ copy quality - real pricing, direct competitor naming, structural differentiation.

## Priority Issues

- [P0] DashboardPlaceholder in PlatformTabs destroys trust. Replace with mockups or remove section.
- [P1] "Download Our App" hero CTA links to href="#". Remove or replace with working action.
- [P2] Five identical eyebrows create visual monotony and AI signal. Cut from 3+ sections.
- [P2] Three CTA labels for one action. Standardize on "Book a Demo."
- [P3] AutomationSection generic icon-grid with no forward path. Reduce to 4-5 items, add links.

## Persona Red Flags

- Jordan: Jargon wall in hero, product sections require too much working memory.
- Riley: Dead app link, single-open FAQ, ScrollReveal flash-of-invisible, hardcoded maxHeight.
- Casey: No carousel scroll indicator, mockup text illegible at mobile scale.
- Marcus: Zero social proof, competitive positioning buried in FAQ item 6, casual CTA copy for enterprise buyer.

## Minor Observations

- BrightStar brand name in mockup may cause legal issues.
- AutomationSection header left-aligned vs centered everywhere else.
- GuidesSection teasers too long for scanning.
- No reduced-motion alternative for KPI counter animation.
