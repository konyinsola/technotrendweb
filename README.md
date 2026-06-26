# TechnoTrend Frontend

Marketing frontend for TechnoTrend Platforms Nigeria Limited, built with Next.js App Router and TypeScript.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Structure

```text
app/
  layout.tsx
  page.tsx
  contact/page.tsx
components/
  pages/
  ui/
  *.tsx
lib/
  routes.ts
  site.ts
public/
```

## Architecture Notes

- `app/` owns routing and page metadata.
- `components/pages/home-page.tsx` composes the home route sections.
- `lib/site.ts` centralizes site copy, navigation, contact details, and marketing section data.
- `lib/routes.ts` centralizes route and section href generation.
- shared UI primitives live in `components/ui/`.

## Security Baseline

`next.config.ts` sets:

- `poweredByHeader: false`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` for unused browser capabilities
- `Cross-Origin-Opener-Policy: same-origin`

## Content Changes

Because marketing content is centralized in `lib/site.ts`, navigation labels, contact details, service lists, product cards, and partner entries can now be updated from one place.
