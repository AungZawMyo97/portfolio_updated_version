# DESIGN.md

## Purpose

This document defines the visual direction for the project. Use it as the primary design reference when generating or editing UI with Codex.

The target look is a **premium dark personal-portfolio / creative-agency website** with:

- a deep charcoal/navy background
- oversized editorial serif headlines
- muted gray body text
- thin outline buttons
- subtle oversized circular line decorations
- clean, spacious layout
- a large cutout portrait / hero image on the right
- minimal monochrome icons
- understated motion and hover effects

The overall feeling should be **elegant, modern, cinematic, minimal, and high-end** rather than flashy or overly colorful.

---

# 1. Design Personality

Use these keywords to guide all generated UI:

- Premium
- Editorial
- Minimal
- Dark
- Sophisticated
- Modern
- Calm
- Spacious
- Professional
- Creative

Avoid:

- bright gradients
- neon cyberpunk styling
- excessive glassmorphism
- colorful cards everywhere
- overly rounded SaaS-style UI
- chunky shadows
- cartoonish illustrations
- generic Bootstrap-looking layouts

---

# 2. Color System

Use a mostly monochrome dark palette.

```css
:root {
  --bg: #232634;
  --bg-soft: #282b3a;
  --surface: #2c3040;
  --surface-hover: #323748;

  --text-primary: #f5f4f0;
  --text-secondary: #a5a8b3;
  --text-muted: #767b8a;

  --border: rgba(255, 255, 255, 0.14);
  --border-strong: rgba(255, 255, 255, 0.28);

  --accent: #ffffff;
  --accent-soft: #d7d8de;

  --decorative-line: rgba(255, 255, 255, 0.10);
}
```

## Color usage

- Main page background: `--bg`
- Navigation/footer surface: usually transparent over `--bg`
- Headings: `--text-primary`
- Paragraphs/navigation inactive text: `--text-secondary`
- Borders and rings: `--border`
- Hover borders: `--border-strong`
- Keep color contrast subtle and refined

Do not introduce extra colors unless required by product content.

---

# 3. Typography

The most important design feature is the typography contrast.

## Headings

Use a high-contrast editorial serif similar to:

- Playfair Display
- Cormorant Garamond
- DM Serif Display
- Libre Baskerville

Recommended:

```css
--font-display: "Playfair Display", Georgia, serif;
```

Hero heading should feel luxurious and oversized.

Desktop example:

```css
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(4.5rem, 7vw, 7.5rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  font-weight: 500;
}
```

## UI / body font

Use a clean geometric sans-serif such as:

- Poppins
- Inter
- Manrope
- DM Sans

Recommended:

```css
--font-body: "Poppins", Inter, sans-serif;
```

Navigation and body copy should be lighter and more restrained.

```css
body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
}
```

---

# 4. Global Layout

Use a centered max-width container.

```css
.page-container {
  width: min(1160px, calc(100% - 48px));
  margin-inline: auto;
}
```

For extra-large screens:

```css
@media (min-width: 1440px) {
  .page-container {
    width: min(1280px, calc(100% - 96px));
  }
}
```

General spacing rhythm:

```txt
4px
8px
12px
16px
24px
32px
48px
64px
80px
96px
120px
```

Sections should generally use generous vertical spacing:

```css
section {
  padding-block: 96px;
}
```

Hero sections can be taller.

---

# 5. Header / Navigation

The header should be simple and horizontally aligned.

Desktop layout:

```txt
[Logo]              [Home  Service  Blog  Pages  Contact]            [Hire Me →]
```

## Header styling

- Height: roughly `88px–104px`
- Transparent background
- Thin top or bottom border only if needed
- Logo aligned left
- Main navigation centered
- CTA aligned right
- Navigation labels muted gray
- Active/hover item becomes white

```css
.site-header {
  height: 96px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(255,255,255,.12);
}
```

## Navigation links

```css
.nav-link {
  color: var(--text-secondary);
  font-size: 15px;
  font-weight: 400;
  transition: color .2s ease;
}

.nav-link:hover,
.nav-link[aria-current="page"] {
  color: var(--text-primary);
}
```

---

# 6. Hero Section

The hero is the primary visual reference.

Use a two-column composition:

```txt
----------------------------------------------------------
| LEFT CONTENT                | RIGHT PORTRAIT / VISUAL   |
|                             |                            |
| Hello! I'm                  |                            |
| Firstname Lastname          |         portrait           |
|                             |                            |
| short role description      |                            |
|                             |                            |
| [Get Resume ↓]              |     social orbit icons     |
|                             |                            |
|  ○ Watch Video              |                            |
----------------------------------------------------------
```

Suggested desktop grid:

```css
.hero {
  min-height: calc(100vh - 96px);
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  position: relative;
  overflow: hidden;
}
```

## Left content

The hero copy should not be vertically cramped.

- eyebrow / first line large serif
- name even larger or equally dominant
- short 1–2 line role description
- CTA below with generous margin

Example structure:

```html
<div class="hero-copy">
  <p class="hero-kicker">Hello! I’m</p>
  <h1 class="hero-title">Aung Zaw Myo</h1>
  <p class="hero-description">Backend Engineer specializing in .NET, APIs and scalable systems.</p>
  <a class="outline-btn">Get Resume ↓</a>
</div>
```

## Portrait placement

- large portrait anchored near lower-right
- crop around waist/chest
- image can slightly overflow hero bottom
- transparent background preferred
- face should sit around upper-right visual center
- keep enough negative space around portrait

Recommended:

```css
.hero-portrait {
  position: absolute;
  right: 5%;
  bottom: 0;
  width: min(44vw, 620px);
  max-height: 88vh;
  object-fit: contain;
  object-position: bottom center;
  z-index: 2;
}
```

---

# 7. Decorative Circular Lines

Use oversized concentric circle outlines as background decoration.

Characteristics:

- very thin stroke
- very low opacity
- no filled circles
- partial circles can extend outside viewport
- should feel architectural, not decorative-heavy

Example:

```css
.decorative-circle {
  position: absolute;
  border: 1px solid var(--decorative-line);
  border-radius: 50%;
  pointer-events: none;
}
```

Place several circles from the top-left and right side.

Do not use too many.

---

# 8. Social Orbit Navigation

On desktop, social icons can sit along the right side in circular outlined buttons.

Suggested platforms:

- GitHub
- LinkedIn
- Dribbble / Behance if relevant
- Facebook only if needed

Style:

```css
.social-btn {
  width: 56px;
  height: 56px;
  border: 1px solid rgba(255,255,255,.65);
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: white;
  background: transparent;
  transition: background .2s ease, color .2s ease, transform .2s ease;
}

.social-btn:hover {
  background: #fff;
  color: #232634;
  transform: translateY(-2px);
}
```

Keep icons small and monochrome.

---

# 9. Buttons

Buttons should be elegant and understated.

Primary style: large pill-shaped outline button.

```css
.outline-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 200px;
  min-height: 60px;
  padding: 0 28px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-primary);
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  transition: all .25s ease;
}

.outline-btn:hover {
  background: #fff;
  color: #232634;
  border-color: #fff;
}
```

Do not use heavy filled CTA buttons by default.

---

# 10. Cards / Content Sections

For portfolio/project cards, retain the same restrained language.

Cards should use:

- dark background
- hairline border
- large imagery
- serif headings
- muted metadata
- minimal radius (`12px–20px`)

```css
.card {
  background: rgba(255,255,255,.015);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
}
```

Hover:

```css
.card:hover {
  border-color: var(--border-strong);
  transform: translateY(-4px);
}
```

Do not use thick drop shadows.

---

# 11. Section Headings

Each main section should have strong editorial typography.

Example:

```txt
Selected Work

A curated selection of backend, fintech, and web projects.
```

Style:

```css
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 5vw, 5rem);
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.03em;
}
```

Avoid all-caps headings unless used as tiny labels.

---

# 12. Image Treatment

Images should feel intentional and premium.

Preferred:

- large imagery
- limited number of images per section
- clean cropping
- grayscale or naturally subdued color tones when suitable
- subtle overlay rather than bright effects

Avoid:

- excessive gradients
- stock image mosaics
- tiny thumbnails everywhere

---

# 13. Motion

Animations must be subtle and professional.

Recommended motion:

- fade-up on initial hero load
- small parallax / float on decorative circles
- slight image scale on card hover
- underline or color transition on nav hover

Timing:

```css
transition: 180ms–350ms ease;
```

Entrance animations:

```txt
opacity: 0 → 1
translateY: 16px → 0
700ms ease-out
```

Do not use bouncing, elastic, or exaggerated effects.

---

# 14. Responsive Behavior

## Tablet

Below approximately `1024px`:

- reduce hero heading size
- reduce portrait width
- hide decorative right-side social orbit if layout gets crowded
- use a compact nav or hamburger

## Mobile

Below approximately `768px`:

Hero becomes stacked.

```txt
[Header]

Hello! I'm
Aung Zaw Myo
Description
[Get Resume]

Portrait

[Social icons in horizontal row]
```

Rules:

- preserve large typography but keep within viewport
- hero title approx `3rem–4rem`
- align content left
- portrait width about `85%`
- social icons switch to horizontal layout
- decorative circles may be reduced or partially hidden
- maintain 24px page padding

Example:

```css
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 56px;
  }

  .hero-title {
    font-size: clamp(3rem, 15vw, 4.5rem);
  }
}
```

---

# 15. Accessibility

Codex should preserve visual style without sacrificing accessibility.

Requirements:

- text contrast at least WCAG AA where possible
- visible keyboard focus states
- semantic heading order
- descriptive button labels
- alt text on content images
- social icon links require `aria-label`
- do not rely only on color to indicate active state

Focus style:

```css
:focus-visible {
  outline: 2px solid white;
  outline-offset: 4px;
}
```

---

# 16. Suggested Page Structure

For a personal software-engineer portfolio, use:

```txt
1. Header
2. Hero
3. About
4. Skills / Tech Stack
5. Selected Projects
6. Experience
7. Services / What I Can Build
8. Testimonials or Highlights (optional)
9. Contact CTA
10. Footer
```

Keep each section visually spacious.

---

# 17. Recommended Personal Portfolio Copy Structure

For a software engineer, the hero should follow this tone:

```txt
Hello! I’m
Aung Zaw Myo

Backend Engineer specializing in .NET,
API development and scalable fintech systems.

[Get Resume ↓]   [View Projects →]
```

Use developer-relevant social links:

```txt
GitHub
LinkedIn
Email
Portfolio / Blog
```

---

# 18. CSS Design Tokens

Codex should centralize visual values instead of scattering magic numbers.

```css
:root {
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Poppins", Inter, sans-serif;

  --bg: #232634;
  --bg-soft: #282b3a;
  --surface: #2c3040;

  --text-primary: #f5f4f0;
  --text-secondary: #a5a8b3;
  --text-muted: #767b8a;

  --border: rgba(255, 255, 255, 0.14);
  --border-strong: rgba(255, 255, 255, 0.28);

  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-pill: 999px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  --container: 1160px;
}
```

---

# 19. Codex Implementation Instructions

When Codex generates a page based on this design:

1. Reuse the existing framework and component structure.
2. Do not rewrite unrelated application logic.
3. Create reusable components for shared UI patterns.
4. Use CSS variables/design tokens.
5. Make the layout responsive from the beginning.
6. Preserve generous whitespace.
7. Use a serif display font for large headings and sans-serif for UI text.
8. Keep colors mostly monochrome.
9. Prefer thin borders over shadows.
10. Use pill-shaped outline CTAs.
11. Use subtle concentric circular decorations where appropriate.
12. Avoid adding gradients unless specifically requested.
13. Avoid generic dashboard/SaaS card styling.
14. Keep hero imagery large and visually dominant.
15. Keep body text narrow enough to remain readable (`max-width: 520px–650px`).
16. Prefer `clamp()` for responsive typography.
17. Use Lucide / Heroicons / existing icon system instead of emoji.
18. Use semantic HTML and accessible interaction states.
19. Do not copy the reference site literally; reproduce the **visual language and composition principles**.
20. Ensure the final result feels like a custom premium portfolio rather than a template clone.

---

# 20. Important Visual Rules

These rules should be treated as non-negotiable unless the user asks otherwise:

```txt
DARK BACKGROUND
+ WHITE / OFF-WHITE SERIF DISPLAY HEADINGS
+ MUTED SANS-SERIF BODY TEXT
+ VERY GENEROUS SPACING
+ THIN HAIRLINE BORDERS
+ PILL OUTLINE BUTTONS
+ LARGE HERO PORTRAIT / FEATURE VISUAL
+ SUBTLE CONCENTRIC CIRCLE DECORATIONS
+ MINIMAL MONOCHROME ICONS
+ QUIET, PREMIUM ANIMATIONS
```

The page should feel **confident because of typography, composition, and whitespace**, not because of visual effects.

---

# 21. Reference Summary for Codex

When interpreting the reference image, focus primarily on these traits:

- full-width dark hero
- centered horizontal navigation
- brand on the upper-left
- rounded outline CTA in the upper-right
- oversized two-line serif introduction
- muted gray supporting text
- wide pill-shaped resume CTA
- portrait occupying much of the right half
- circular social buttons floating vertically on the right
- multiple oversized circular line motifs in the background
- almost no bright color
- strong asymmetrical balance between text and portrait

Use this document as the default style guide for future pages and components unless a task explicitly overrides it.
