# IT Consulting Frontend (Angular 19)

This project is an Angular 19 single-page app with SSR capability for an IT consulting website. It follows the Ocean Professional theme defined in global CSS utilities.

## Quick start

- Dev server (keeps port 3000):
  ```bash
  npm start
  ```
  Open http://localhost:3000. The server auto-reloads on file changes.

- Production build:
  ```bash
  npm run build:prod
  ```
  Outputs to `dist/angular` with hashed assets and optimizations.

- Standard build (non-explicit config):
  ```bash
  npm run build
  ```

- Preview SSR (after a build):
  ```bash
  npm run preview:ssr
  ```
  This serves the built SSR bundle from `dist/angular/server`. Default port is 4000 (override with `PORT=xxxx`).

- Unit tests:
  ```bash
  npm test
  ```

## Angular config

- outputPath: `dist/angular` (see `angular.json`)
- Dev server port: 3000, host `0.0.0.0`, host check disabled (configured under `architect.serve.options`)
- SSR is enabled in the application builder; server entry is `src/server.ts`

## Theme: Ocean Professional

Global styles and utilities live in `src/styles.css`. Design tokens are also available in TS via `src/app/theme/theme.tokens.ts`.

- Primary: `#2563EB`
- Secondary/Success: `#F59E0B`
- Error: `#EF4444`
- Background: `#f9fafb`
- Surface: `#ffffff`
- Text: `#111827`
- Utilities:
  - Buttons: `.btn`, `.btn-primary`, `.btn-ghost`
  - Surfaces/Cards: `.surface`, `.card`
  - Shadows: `.shadow-xs|sm|md`
  - Radius: `.rounded-sm|md|lg|full`
  - Alerts: `.alert`, `.alert-success`, `.alert-error`

These are consumed by components (e.g., Header, Cards, Testimonials, Contact form) and are safe to reuse in new features.

## Scaffolding

Generate components and utilities using Angular CLI:

```bash
ng generate component path/name
# or
ng generate --help
```

## Notes on dependencies

- Angular packages must use the same exact version across `@angular/*` to avoid build issues. This project pins versions accordingly.
- Avoid adding version ranges for core Angular packages unless you update all `@angular/*` together.

## Folder highlights

- `src/app/pages/*` standalone route components
- `src/app/layout/*` header, sidebar, footer
- `src/app/shared/*` UI components, services, models, validators
- `src/app/theme/theme.tokens.ts` theme constants
- `src/styles.css` global theme and utilities
- `src/server.ts`, `src/main.server.ts` SSR bootstrap and server

## Deployment

- Build with `npm run build:prod` which produces `dist/angular/browser` and `dist/angular/server`.
- Serve SSR bundle with a Node process using:
  ```bash
  node dist/angular/server/server.mjs
  ```
  or use the script `npm run preview:ssr`.
- Configure your hosting to serve static assets from `dist/angular/browser` and route all requests to the SSR handler where applicable.

For CLI details, see the Angular docs: https://angular.dev/tools/cli
