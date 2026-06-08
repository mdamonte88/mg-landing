# homepagemg-landing

React + Redux + Express SSR landing project scaffolded from `bludcode-landing` and adapted for `HomePageMG`.

## Main changes vs base template

- Dedicated MG landing as the default route (`/`).
- Alternate route alias: `/mg-servicios`.
- Home content aligned with the requirements from `TAREAS M&G vers.29.05.2026.pdf`.
- Brand image updated with the provided MG logo.

## Architecture

This project keeps the same architecture and scripts as `bludcode-landing`:

- React 16 + Redux + React Router
- SSR with Express (`server/`)
- Webpack custom configs (`webpack/`)
- Immutable.js state

## Scripts

- `npm run open:src` - start local dev middleware server (SPA dev flow)
- `npm run build` - build SPA bundle to `dist/`
- `npm run ssr` - build SSR bundles and run SSR server
- `npm run build:client` - build SSR client bundle
- `npm run build:server` - build SSR server bundle
