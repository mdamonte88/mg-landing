# Performance Audit & Optimization Spec

## Goal

Review the website performance, visual consistency, and loading behavior.  
The objective is to improve Core Web Vitals, page speed, responsiveness, and user experience without changing the brand identity or main design direction.

## Pages to analyze

- Home page
- Main landing sections
- Any page with video, images, animations, or large layout blocks

## Metrics to measure

Use Lighthouse, Chrome DevTools Performance tab, and browser Network tab.

### Core Web Vitals

Target values:

- LCP: under 2.5s
- INP: under 200ms
- CLS: under 0.1

Google currently treats LCP, INP and CLS as the stable Core Web Vitals. Lighthouse can be used for lab performance audits, but results may vary, so run tests multiple times and compare averages.  
Sources: Google Search Central, web.dev, Chrome Lighthouse docs.

## Measurement process

For each test, record:

- Date
- Branch / commit
- URL tested
- Device mode: Mobile / Desktop
- Network throttling
- Lighthouse Performance score
- LCP
- INP / TBT
- CLS
- Total page size
- JS bundle size
- Image/video weight
- Main issues found
- Suggested fix
- Result after fix

## Areas to review

### 1. Hero video

Check:

- Whether the video is too heavy
- Whether it blocks the initial render
- Whether it should lazy-load
- Whether a poster image should be used
- Whether autoplay, muted, playsInline and preload are configured correctly
- Whether mobile should use a lighter video or static image

Recommended approach:

- Hero video can use a max width around 1600px if it is the main visual section.
- Content sections below should usually use a smaller max width, around 1200px.
- Avoid making all sections 1600px unless the design is intentionally very wide and editorial.

### 2. Layout width consistency

Review whether the layout feels consistent.

Suggested rule:

- Hero / showcase sections: max-width 1440px to 1600px
- Text/content sections: max-width 1100px to 1200px
- Cards/grids: max-width 1200px to 1320px
- Avoid mixing random widths without design intention

### 3. Images

Check:

- Use WebP or AVIF where possible
- Avoid oversized images
- Define width and height to prevent CLS
- Lazy-load images below the fold
- Preload only critical above-the-fold images

### 4. JavaScript and bundle size

Check:

- Unused dependencies
- Large libraries
- Code splitting opportunities
- Lazy-load non-critical components
- Avoid heavy animations on initial load

### 5. CSS and rendering

Check:

- Unused CSS
- Blocking CSS
- Layout shifts
- Expensive animations
- Mobile responsiveness
- Font loading behavior

### 6. Accessibility and UX

Check:

- Contrast
- Button sizes
- Keyboard navigation
- Alt text
- Focus states
- Readability
- Section spacing
- Mobile behavior

## Output expected from Codex

Please provide:

1. A performance report with before/after metrics.
2. A list of detected issues ordered by impact.
3. Specific code changes to improve performance.
4. A layout consistency review.
5. Recommendations for hero video size, section widths, images, and lazy loading.
6. Any risks or trade-offs introduced by the changes.

## Do not change

- Brand colors
- Main visual identity
- Content text unless necessary
- Component structure unless there is a clear performance or maintainability reason

## Acceptance criteria

The task is complete when:

- Lighthouse Performance improves or remains stable while reducing clear issues.
- No layout shift is introduced.
- Mobile remains visually correct.
- Hero video does not block the perceived load.
- Images and videos are optimized.
- Section widths follow a consistent design rule.