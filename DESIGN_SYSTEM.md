# Design System — Юрий Петрович Великолепный
Основано на UI UX Pro Max: приоритеты accessibility → interaction → performance → consistency → responsive → typography → motion.

## Направление
Editorial heritage / immersive digital museum / royal chronicle. Исторический театр с юмором, не современный SaaS и не шаблонный dashboard.

## Tokens
- Background: `#160e10`; deep: `#0e0a0b`; dark burgundy: `#3b1b23`.
- Royal burgundy: `#682b36`.
- Antique gold: `#d6b47a`; pale gold: `#ead5ae`.
- Parchment: `#f5ecd9`; ink: `#271b18`.
- Heading: Cormorant Garamond / Georgia fallback.
- Body: Manrope / Arial fallback.
- Spacing rhythm: multiples of 4 or 8px. Desktop container 1200px, responsive padding.
- Interactions: 200–700ms easing for hover/appear; avoid motion for reduced-motion preference.

## IA
Hero → Character → Seven chapters → Motto → Three passions → Magical tablet → Portrait gallery → Royal decrees → Footer.

## Responsive
320px baseline; 680px mobile/tablet threshold; 900px tablet; 1160px desktop refinement. No horizontal scrolling. Body text ≥ 13–16px depending on long-form type, actions ≥44px.

## Accessibility
Skip link, semantic headings, semantic buttons, aria-expanded on mobile menu, alt text for non-decorative images, visible focus rings, native dialog, keyboard arrows/Esc, live region for decree announcements, reduced motion.

## Performance
No JavaScript framework, no build, lazy image loading below fold, fixed aspect ratios, local images from repository, deferred JavaScript, font swap.

## Photo placement
Uses exactly the seven uploaded PNGs without altering them. Narrative chapter names are artistic; the images could not be visually inspected through the GitHub connector, so specific scene matching should be verified in a browser.
