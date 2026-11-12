# Kangae website — launch-readiness audit

Audit date: 2026-11-12  
Scope: `website/src/pages/index.astro`, `product.astro`, `docs/*.astro`, `layouts/Layout.astro`, `styles/global.css`, `website/package.json`.

## What was inspected

Source-level review of five public routes: `/`, `/product/`, `/docs/`, `/docs/first-session/`, `/docs/workflows/`. Inspected shared navigation, Astro page structure, static comparison implementation, documentation entry points, typography and responsive CSS.

**Not yet verified:** local build, deployed preview, device rendering, keyboard-only browser navigation, screen-reader output, automated accessibility scan, and external link responses. A source audit is not equivalent to a passing launch test.

## Findings and disposition

| Priority | Finding | Disposition |
| --- | --- | --- |
| P1 | No skip-to-content link in shared layout; keyboard users must traverse header links on every page. | Fixed in this PR with focus-visible skip link and main target. |
| P2 | Docs onboarding is accessible from the docs page, but users arriving from the homepage are directed mainly to the product page or GitHub. | Add a direct first-session CTA in this PR. |
| P2 | CSS contains several small text tokens (0.6875rem / 0.75rem), including metadata and nav. Legibility at zoom and on mobile needs visual assessment. | Manual verification; adjust based on evidence rather than blindly changing the scale. |
| P2 | Product comparison dynamically replaces its live region; rapid button changes may cause verbose screen-reader announcements. | Test with keyboard and screen reader before choosing a different announcement strategy. |
| P2 | Responsive layouts and docs code overflow have CSS safeguards, but have not been visually verified at 320px/375px or 200% zoom. | Manual verification required. |
| P3 | Documentation overview had adjacent navigation anchors on one source line, reducing readability for maintenance. | Fixed in this PR. |
| P3 | Site loads Google Fonts via external CSS; fallback fonts exist but loading and offline appearance are untested. | Manual network/throttling verification. |

## Release gate

From `website/`:

```sh
npm install
npm run build
npm run preview
```

- [ ] Build succeeds without Astro check errors.
- [ ] Open all five routes directly and via links; confirm no 404s or missing assets.
- [ ] Inspect at 320px, 375px, 768px, and desktop; confirm no page-level horizontal overflow.
- [ ] Inspect at 200% browser zoom, including header wrapping, headings, documentation sidebar, and code samples.
- [ ] Keyboard-only: Tab through header, skip link, documentation links, comparison buttons, and footer; ensure focus remains visible and logical.
- [ ] With reduced-motion enabled, confirm no unwanted smooth scrolling or animation.
- [ ] In the product comparison, toggle both scenarios and both approaches; confirm visible content, pressed states, and understandable screen-reader announcements.
- [ ] Check heading hierarchy, landmarks, contrast, and external links with browser accessibility tools.
- [ ] Verify `.kangae/` installation guidance against README and protocol.
- [ ] Test with fonts blocked or slow to load.
- [ ] Review metadata and social sharing previews for launch quality.
- [ ] Confirm hosting and preview deployment before declaring the site launch-ready.

## Release decision

**Pending manual checks.** This PR fixes a few source-level issues and provides an explicit acceptance checklist. Do not treat the site as fully audited or launch-approved until the release gate is completed and any discovered defects are addressed.
