---
name: Warm Editorial Minimalism
colors:
  surface: '#fdf9f1'
  surface-dim: '#dddad2'
  surface-bright: '#fdf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3eb'
  surface-container: '#f1ede6'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c17'
  on-surface-variant: '#464742'
  inverse-surface: '#31302b'
  inverse-on-surface: '#f4f0e9'
  outline: '#767872'
  outline-variant: '#c7c7c0'
  surface-tint: '#5f5e5d'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1c1a'
  on-primary-container: '#858382'
  inverse-primary: '#c9c6c4'
  secondary: '#396660'
  on-secondary: '#ffffff'
  secondary-container: '#b9e9e1'
  on-secondary-container: '#3d6b64'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#c76c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e0'
  primary-fixed-dim: '#c9c6c4'
  on-primary-fixed: '#1c1c1a'
  on-primary-fixed-variant: '#474745'
  secondary-fixed: '#bcece4'
  secondary-fixed-dim: '#a0d0c8'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#1f4e48'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#fdf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e6e2db'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

The design system embodies a calm, deliberate, and cerebral learning environment. Moving away from over-gamified and visually chaotic edtech patterns, the aesthetic leans into warm editorial minimalism: confident typography, tactile contrast, and generous negative space. 

Targeted at modern professionals, knowledge workers, and lifelong learners, the interface conveys calm clarity, intellectual rigor, and tactile refinement. The emotional response is centered on focus without fatigue—replacing loud dopamine traps with the quiet satisfaction of genuine progress.

## Colors

The palette establishes an organic, literary foundation using high-contrast neutrals and natural pigments:

- **Canvas & Base:** `#F7F5F0` serves as the warm alabaster background, reducing eye strain while adding physical, paper-like warmth.
- **Surface:** `#FFFFFF` provides crisp focus for cards and elevated inputs, framed with an ultra-fine structural border (`#E6E3DB`).
- **Primary & Headings:** `#141413` (Deep Soft Charcoal) delivers punchy typographical hierarchy without the clinical harshness of `#000000`.
- **Secondary / Action Accent:** `#2E5C56` (Nordic Forest Pine) acts as the interactive brand anchor for active states, progression paths, and focused validation.
- **Tertiary / Achievement:** `#D97706` (Warm Ochre Amber) highlights milestones, streaks, and assessment mastery.
- **Neutral & Supporting Text:** `#706E68` (Warm Slate Gray) handles metadata, subheadings, and inactive states with calibrated contrast ratios (minimum 4.5:1 against surfaces).

## Typography

The type system is powered by Plus Jakarta Sans across all roles. Its geometric architecture combined with wide counters and humane curves brings clarity to assessment rubrics and instructional copy.

Key headings adopt tight negative tracking (`-0.02em` to `-0.03em`) and substantial weight to establish instant structural priority. Body copy is set with airy line heights to preserve reading rhythm across long-form evaluation prompts and module briefs.

## Layout & Spacing

The layout employs a vertical flow optimized for mobile devices, using a fluid grid container capped at a safe reading width on larger screens:

- **Mobile (<640px):** Single-column layout with `1.25rem` screen margins and `0.75rem` card gutters. Form flows and question lists take full container width.
- **Tablet / Desktop (>=640px):** Content centers inside a maximum 480px fixed-width column for mobile simulations or expands into a multi-column assessment grid with `1.5rem` margins and `1rem` column gutters.
- **Spacing Rhythm:** Standard spacing derives from a base 4px system. Form inputs maintain `1rem` vertical separation, while section modules use `2.25rem` to clearly delineate learning phases.

## Elevation & Depth

This design system deliberately eschews heavy drop shadows in favor of **low-contrast outlines** paired with **warm tonal layering**:

- **Default Canvas:** The baseline canvas layer is `#F7F5F0`.
- **Primary Surfaces:** Cards, input fields, and bottom navigation bars sit on `#FFFFFF` with a crisp 1px hairline border in `#E6E3DB`.
- **Floating / Sheet Elements:** Modals and bottom sheets utilize an ambient, ultra-diffused shadow tinted with the deep charcoal palette: `0 12px 32px -4px rgba(20, 20, 19, 0.06)`, maintaining a tactile, paper-stack feel rather than a digital glow.
- **Active / Pressed Elevation:** Interactive elements slightly depress via scale transforms (`scale(0.985)`) rather than shadow expansions.

## Shapes

The design system implements a rounded geometry (`roundedness: 2` with customized pill extremes for controls):
- **Cards & Surfaces:** Rounded with `1rem` (16px) corner radiuses, yielding a warm, tactile container aesthetic.
- **Input Fields:** Styled with `0.875rem` (14px) rounded corners to balance soft structure and alignment.
- **Action Buttons & Chips:** Utilize pill contours (`rounded-full` / `9999px`) to create an inviting, human touchpoint for mobile tapping.
- **Thumbnails & Media:** Softened using `0.75rem` (12px) borders to nest inside parent cards without corner collision.

## Components

### Buttons
- **Primary Action Button:** Solid `#141413` fill, `#FFFFFF` text, `rounded-full` (or `rounded-xl` for form submissions), height `52px`, accompanied by an inline rightward directional arrow (`→`) for progression. Active state: `#2E5C56`.
- **Secondary Button:** Surface `#FFFFFF` with `#E6E3DB` border, `#141413` text.
- **Ghost Button:** Transparent background, `#706E68` text, transitioning to `#141413` on hover/press.

### Form Inputs
- **Text Field:** Height `52px`, `#FFFFFF` background, `1px solid #E6E3DB`, `0.875rem` corner radius, inner padding `0 1rem`. Floating or top-stacked label in `label-sm` (`#141413`, bold). Placeholder text styled in `#706E68`. Focus ring: `1.5px solid #2E5C56`.

### Cards & Learning Tiles
- **Progress Card:** `#FFFFFF` background, `1px solid #E6E3DB`, padding `1rem`, `rounded-2xl`. Features an image placeholder/thumbnail on top with a `0.75rem` border, followed by a bold `headline-sm` title, and `#706E68` progress indicator text.
- **Interactive Option Card (Assessment):** Used for single/multi-choice quiz states. White surface with `#E6E3DB` border. When selected, border turns `2px solid #2E5C56` with a subtle `#2E5C56` 4% opacity tint.

### Chips & Filter Navigation
- **Pill Tabs:** Horizontal scrollable row. Inactive tabs display `#706E68` text on transparent backgrounds. Active tab features bold `#141413` text with an underline or solid mini-capsule background.

### Progress Bars & Badges
- **Track:** Height `6px`, background `#E6E3DB`, border-radius `9999px`.
- **Indicator Fill:** `#2E5C56` (Deep Forest Sage).
- **Milestone Badge:** Pill chip with `#D97706` background at 10% opacity, `#D97706` text, bold `label-sm`.

### Navigation Bar
- **Bottom Tab Bar:** Fixed to viewport bottom, `#FFFFFF` surface with a subtle `1px` top border in `#E6E3DB`. Icons sized at 22px in `#706E68` with the active icon colored `#141413` paired with `label-sm` typography.