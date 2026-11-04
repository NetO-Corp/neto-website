# neto-website

Public marketing site for NetO (Website 2.0). This repository is the Discovery shell: a Home page and a Pricing placeholder.

## Website is not Workspace

This site is not the Workspace. The Workspace product lives in `neto-ai`. `neto-website` only links onward to a future Workspace origin.

## No shared login store with neto-ai

This app does not share a login store with `neto-ai`. It does not authenticate visitors, does not store session tokens, and does not read or write Workspace credentials.

There is no `neto_token` handling and no `Bearer` auth in this public app. There are no authenticated Workspace routes and no `/customer-workspace` route.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — goal-first discovery cards (placeholders) |
| `/pricing` | Pricing — public placeholders, not a quote and not checkout |

Anything else is a public "page not found" view. It is not a login wall.

## Workspace handoff

The "Continue in Workspace" links read `VITE_WORKSPACE_ORIGIN`.

```bash
cp .env.example .env
```

Production builds read `.env.production`, which points Continue in Workspace at `https://system.neto-x.com/customer-workspace`. When the variable is unset, the link falls back to `https://workspace.example.com` (a placeholder, not a live login).

## Scripts

```bash
npm install
npm test
npm run smoke
npm run build
npm run dev
```

`npm test` runs the Home render smoke test and a source boundary check. `npm run smoke` runs the Home render smoke test only.
