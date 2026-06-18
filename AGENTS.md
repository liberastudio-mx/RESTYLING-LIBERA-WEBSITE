# LIBERA Studio Restyling

For UI, UX, visual design, redesign, polish, audit, responsive, accessibility, interaction, or restyling work in this repository, use the LIBERA-specific skills by default:

1. `ui-ux-libera`
2. `design-libera`

Load `ui-ux-libera` first for accessibility, interaction quality, responsive behavior, performance, forms, navigation, and launch completeness.

Load `design-libera` second for visual direction, brand/product register, OKLCH palette, typography, layout archetype, motion language, and anti-AI-slop checks.

If they conflict, `ui-ux-libera` wins for accessibility, task completion, performance, platform conventions, and responsive robustness.

Do not use generic frontend design skills for Libera restyling unless the user explicitly asks for them or the Libera skills are unavailable.

## Astro page structure

`src/layouts/Layout.astro` already renders the document's `<main id="main">`.

- Page files that use `Layout.astro` must not render another `<main>`.
- Use a `<div>` or `<article>` as the page-level wrapper.
- Before delivery, verify the generated HTML contains exactly one `<main>` landmark.
