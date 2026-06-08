# UI/UX Review Notes

This review is code-driven rather than screenshot-driven because the in-app browser surface was unavailable in this session. The active page structure and styles were inspected in:

- `src/components/pages/HomePageMgBludcode.js`
- `src/components/organisms/sections/mg/heroMG.js`
- `src/components/organisms/sections/mg/servicesMG.js`
- `src/components/organisms/sections/mg/processMG.js`
- `src/components/organisms/sections/mg/contactMG.js`
- `src/styles/pages/home-page-mg-bludcode.scss`

## Strengths

- The palette is coherent and premium-leaning. The charcoal/gold system feels appropriate for architecture/construction and is applied consistently enough to create a clear brand mood.
- The hero, services, process, and contact sections are structurally simple. The page is not overloaded with widgets or competing patterns.
- The page already uses card/grid patterns and responsive column collapse, which gives you a workable base for refinement instead of a full redesign.

## Weaknesses

- The layout strategy is currently mixed rather than deliberate. Most sections are capped at `1120px`, but the first rendered section is a separate “full width” hero-like block with inline `maxWidth: 1600px`. That creates a visual rhythm break before the actual hero.
- The first section appears to be legacy Bludcode content, in English, with mismatched branding and messaging. For a professional services landing page, that is the biggest trust risk on the page.
- The navbar is full-bleed with `padding: 18px 24px` and no inner container. The main content is centered to `1120px`, so the nav and page body do not align on desktop.
- Spacing is inconsistent. There are many one-off values: `14, 16, 18, 20, 22, 24, 26, 28, 40, 42, 48, 72, 112`, plus radii `12, 14, 16, 18, 999`. The page reads as hand-tuned per component instead of systemized.
- Visual hierarchy is only partially effective. The real hero is good structurally, but it is preceded by another large media section, so the user’s first-scroll story is unclear.
- Conversion support is thin. The page has no trust strip, no proof metrics, no client/project evidence, and a very weak final CTA beyond an email link.
- Responsive behavior likely has a header overlap issue. At `max-width: 991px`, `.mg-main` top padding drops from `112px` to `24px` while the navbar remains fixed. That will likely push content under the header on tablet/mobile.

## High-Priority Changes

- Remove or replace the initial Bludcode/CEO carousel block from the top of the page. It is off-brand, wrong-language, and breaks trust immediately.
- Choose one explicit container strategy:
  - Recommended: `hero shell 1360-1440px`, `content sections 1120-1200px`, `text-heavy sections 960px`.
  - `1600px` is not recommended here unless the hero becomes much more cinematic and image-led.
- Add a shared inner container for the navbar so it aligns with the hero/content columns.
- Fix mobile/tablet top spacing so fixed-header overlap cannot happen.
- Strengthen the conversion path: hero CTA, proof row, service summary, process, trust/testimonial, stronger contact block.

## Medium-Priority Changes

- Reorder sections to improve attention flow:
  1. Hero
  2. Trust/proof strip
  3. Services
  4. Process
  5. CEO/testimonial or differentiators
  6. Contact
- Reduce service density. Six service-group cards full of bullets feel more like an internal capability list than a sales page.
- Standardize type scale and spacing scale. The page feels close, but not disciplined enough to read as a mature design system.
- Hide the hamburger trigger on desktop. It is currently styled globally and appears to exist regardless of breakpoint.
- Add proof near the top: years in market, project count, sectors served, or named clients if available.

## Low-Priority Changes

- Normalize radii and shadows. The single heavy logo shadow versus flatter cards makes components feel unrelated.
- Introduce a more intentional section rhythm with alternating densities rather than every block being a bordered card on the same background.
- Refine microcopy and language consistency. The page mixes strong corporate phrasing with generic section labels.

## Concrete Implementation Recommendations

### Containers

- `--container-hero: 1400px`
- `--container-default: 1200px`
- `--container-narrow: 960px`
- `--page-gutter: 24px desktop, 20px tablet, 16px mobile`

### Breakpoints

- `1280px` large desktop refinement
- `1024px` tablet landscape / compact desktop
- `768px` tablet portrait
- `480px` mobile small

### Spacing Scale

- Use `8, 12, 16, 24, 32, 48, 64, 96`
- Section vertical padding: `96px desktop`, `72px tablet`, `48px mobile`

### Radii

- `12px` small cards/buttons
- `16px` major panels
- `999px` pills only

### Layout

- Wrap nav contents in `.mg-navbar__inner { max-width: var(--container-default); margin: 0 auto; }`
- Keep hero outer shell wide, but constrain hero copy to `620-680px`
- Keep all non-hero sections on one shared content container

### Responsive

- Replace the current `991px` rule with breakpoints tied to actual layout shifts
- Preserve header offset on all breakpoints: `padding-top` should always account for fixed nav height
- Collapse hero to one column around `900-960px`

### Content

- Add a compact proof bar below hero: “Arquitectura + Ingenieria + Construccion”, sectors served, response time, or project count
- Replace the current contact block with a 2-column CTA card: short pitch + direct actions (`email`, `phone/WhatsApp`, `request visit`)

### Technical Cleanup

- Stop using `reactstrap` `Container` if it is immediately overridden to `max-width: 100%`. Use a plain wrapper and explicit container utilities instead.
- Replace legacy `OwlCarousel`/external mixed components at the top of the page with page-specific React sections. That reduces inherited styling drift and improves consistency.
