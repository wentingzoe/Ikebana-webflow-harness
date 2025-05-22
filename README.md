# Ikebana Webflow Harness

Engineering harness around https://www.ikebanaottawa.ca (Webflow) to provide linting, type checks, Lighthouse CI, and Cypress smoke tests. The TypeScript in this repo can be bundled and embedded into Webflow as custom code.

## Getting started

1. Install dependencies: `npm ci`
2. (Optional) Update URLs in `lighthouserc.json` and `cypress.config.ts` if staging domain changes.

## Scripts

- Lint: `npm run lint`
- Type-check: `npm run type-check`
- Tests (lint + type-check): `npm test`
- Lighthouse CI: `npm run lhci`
- Cypress smoke tests: `npm run cypress:run`
- Full CI locally: `npm run ci`
- Build TS to `dist`: `npm run build`

## Embedding in Webflow

1. Build: `npm run build` (outputs to `dist/`).
2. Upload the compiled JS (e.g., `dist/index.js`) into Webflow Project Settings → Custom Code, or inject via page-level custom code before `</body>`.
3. Ensure the script loads on pages where you want analytics/widget behavior.

## CI

GitHub Actions workflow at `.github/workflows/ci.yml` runs on push/PR to main:

1. Lint and type-check
2. Lighthouse CI against staging URLs
3. Cypress smoke tests against the Webflow site
