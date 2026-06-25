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

---

## Codex Working Rules

### Priority

Work in low-token mode unless explicitly told otherwise.

### Scope control

Do not scan the whole repository unless the task explicitly requires it.
Before editing, identify the smallest set of files needed.
Open only the files directly related to the requested change.
Do not inspect generated folders, build output, dependency folders, caches, logs, or large assets unless explicitly requested.

Avoid reading:

- node_modules/
- .next/
- dist/
- build/
- coverage/
- .git/
- package-lock.json unless dependency changes are required
- pnpm-lock.yaml unless dependency changes are required
- large image/video/font files
- logs or generated reports

### Editing behavior

Make focused changes only.
Do not refactor unrelated code.
Do not rename files, restructure folders, or change architecture unless explicitly requested.
For visual website edits, prefer small CSS/component changes over broad rewrites.
Preserve the existing visual identity, palette, spacing logic, and copy unless the user asks to change them.

### Verification

Do not run full build, lint, tests, browser preview, screenshots, or visual checks automatically.
Only run verification commands when the user asks.
If a check is necessary, ask first and explain which command you want to run.
When running commands, keep output minimal and do not paste long logs unless needed.

### Response style

Be concise.
After editing, report:

1. files changed
2. what changed
3. anything the user must manually verify

Do not include long explanations.
Do not repeat the full code unless asked.
