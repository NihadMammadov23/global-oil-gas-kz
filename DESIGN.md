# Sam Supply - Design System

## Overview
This document captures the core frontend design system in `sam-supply` based on `index.html` and `assets/css/main.css`.
- Brand: industrial / corporate B2B supply chain
- Primary user journey: Hero > industries > partnership > trusted clients > CTA
- Responsive layout: desktop nav + mobile overlay nav, grid / flex sections, breakpoints at 1199px, 992px, 768px, 575px.

## 1. Typography
### 1.1 Font families
- `--default-font`: Roboto, system-ui, Segoe UI, Helvetica Neue, Arial, Noto Sans
- `--heading-font`: Raleway
- `--nav-font`: Inter

### 1.2 Heading styles
- All h1..h6: color `var(--heading-color)` + `var(--heading-font)`
- Section title p: 36px default, 24px @ <=768px
- Hero h2: 64px default, 40px @ <=768px

### 1.3 Body text
- Normal text: `var(--default-color)` (#444) with control variants using color-mix for transparency

## 2. Color palette
### 2.1 Global theme variables
- `--background-color`: #ffffff
- `--default-color`: #444444
- `--heading-color`: #273d4e
- `--accent-color`: #ff4a17
- `--surface-color`: #ffffff
- `--contrast-color`: #ffffff

### 2.2 Navigation colors
- `--nav-color`: #e5eaee
- `--nav-hover-color`: #ff4a17
- `--nav-mobile-background-color`: #ffffff
- `--nav-dropdown-background-color`: #ffffff
- `--nav-dropdown-color`: #444444
- `--nav-dropdown-hover-color`: #ff4a17

### 2.3 Color modes
- `.light-background`: bg #f1f4fa + surface #fff
- `.dark-background`: bg #000910, text #fff, surface #28323a

## 3. Layout tokens
### 3.1 Spacing
- section default padding: `60px 0` ( desktop ) ; `scroll-margin-top: 90px` and 76px on small screens
- Container vertical rhythm: 20/30/40/50/60
- Hero: padding 120px 0, min-height 100vh

### 3.2 Breakpoints
- Mobile: `max-width: 1199px` for mobile nav states
- Tablet: `max-width: 992px`, `max-width: 768px`, `max-width: 575px` for typography and layout adapt

## 4. Components
### 4.1 Header (global)
- Transparent initial background, switches to `rgba(21,34,43,.85)` + shadow when `.scrolled`
- Logo uses `.logo-box` then H1 with high weight and 30px size
- CTA button uses Bootstrap `btn btn-warning` in HTML, custom `.header .cta-btn` for secondary,
- sticky top using `fixed-top`

### 4.2 Navigation
- Desktop: `.navmenu > ul` flex, uppercase nav links, animated underline in `:before`
- Hover: link tint + underline expands from 0 to 100%
- Mobile: `.mobile-nav-toggle` burger icon, overlay with `navmenu` full-screen for open state
- `.mobile-nav-active` toggles body overflow hidden

### 4.3 Hero
- `.hero` with background image and dark overlay via `::before`
- centered text and CTA buttons
- feature list with checkmarks and spacing

### 4.4 Section titles
- `.section-title` small uppercase `h2` subheading + thick line by `::after`
- main heading `p` uppercase 36px + heading font

### 4.5 Cards and grids
- `.industries-grid`, `.about-grid`, `.partner-grid`, `.services`, `.stats` use flex/grid markup + card style surfaces
- `.industry-card`, `.stats .stats-item`, `.services .details` created with `surface-color`, shadows, radius

### 4.6 Buttons
- main CTA: `.btn-warning` + `.btn-outline-light` in hero
- custom classes: `.btn-primary`, `.btn-outline-dark`, `.btn-outline` (in initial markup)
- transitions 0.3s for backgrounds and color states

### 4.7 Footer
- `.footer-grid` columns with `footer-col`
- simple typography + link color mixing (opacity) and accent hover

## 5. Interaction patterns
- Scroll-to-top `.scroll-top` icon toggled with `.active`
- AOS data attributes used across sections for entry animations
- Swiper slider configured with continuous loop and auto-play (trust partners logos)
- CSS transitions 0.3-0.5s present for interactive states (hover, nav, cards)

## 6. Accessibility & UX
- High contrast dark vs light mode via a `dark-background` utility class
- Focus-visible for form input made no outline but still border highlight on `.newsletter-form`
- Responsive UI at defined breakpoints ensures nav and typography scale
- Semantic HTML sections for structural clarity

## 7. Recommended extensions
- Add utility classes for design tokens to increase consistency, e.g., `.text-primary, .bg-surface, .shadow-soft`
- Add `:focus-visible` styles for all actionable elements (links/buttons)
- Add `prefers-reduced-motion` handling for keyframe animations

## 8. File map (source)
- HTML entry: `index.html` (same sections exist in `about.html`,`products.html`,`services.html`,`contact.html`)
- Main UI CSS: `assets/css/main.css`
- Theme CSS injection: existing `:root` variables

## 9. Page structures (content scaffolds)
This section describes each page’s core section tree and common patterns to reproduce for new pages.

### 9.1 index.html
1. Header (`#header.header.fixed-top`)
   - brand logo + site name
   - nav menu (`nav#navmenu.navmenu` with active link)
   - contact & quote CTA
2. Hero (`section#hero.hero.section.dark-background`)
   - background image and overlay
   - badges, main heading, description
   - button group and feature list
3. About (`section.about-section`)
   - 2-column text + illustrative image
4. Industries (`section.industries-section`)
   - 4-card industry grid with icon + title + text + link
5. Partner benefits (`section.partner-section`)
   - left features stack, right stat cards
6. Trusted partners slider (`section.trusted-section`)
   - Swiper `.trusted-slider` with `swiper-slide` client logos
7. CTA (`section.cta-section`)
   - two-column callout with CTA buttons
8. Footer (`footer.footer`)
   - multi-column links + contact details, bottom credit

### 9.2 about.html
1. Header (same global header, `about` active)
2. About hero (`section.hero.section.dark-background`) + heading/desc
3. Company overview (`section.company-overview.bg-light`) 2-col image + text
4. Logistics section (`section.logistics-section`) 2-col image + text/list
5. Oil & industrial section (`section.oil-industrial-section`) 2-col text + image
6. Footer + scroll top + scripts

### 9.3 products.html
1. Header (same global header, `products` active)
2. Hero (`section.hero-products.section.dark-background`) heading/desc
3. Products list (`section.products-section`) with categories and bullet lists
4. Footer + scroll top + scripts

### 9.4 services.html
1. Header (same global header, `services` active)
2. Hero (`section.hero-services.section.dark-background`) heading/desc
3. Service items (`section.services-section`) list of service cards with heading + paragraph
4. Footer + scroll top + scripts

### 9.5 contact.html
1. Header (same global header, `contact` active)
2. Hero (`section.hero-contact.section.dark-background`) heading/desc
3. Contact section (`section.contact-section`) 2-col contact info + form
4. Map section (`section.map-section`) embedded Google Maps iframe
5. Footer + scroll top + scripts

---

### Usage (continued)
Use this document as the single source of design truth when:
1. Adding new sections (follow established spacing/banner patterns).
2. Creating new cards (surface + box-shadow + rounded borders + UI states).
3. Adding skins (use existing variable sets and `.light-background/.dark-background`).
4. Updating typography: keep heading font in `Raleway` and body in `Roboto`.

### Quick component reference (token-driven)
- `var(--accent-color)` for brand actions
- `var(--surface-color)` for cards/background containers
- `var(--default-color)` for text blocks
- `var(--heading-color)` for titles
- `var(--nav-hover-color)` for interactive nav highlights
