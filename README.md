# Morteza Karimi — Personal Website

A bilingual (English / Persian) personal portfolio built with Next.js 16, HeroUI, and next-intl.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [HeroUI React v3](https://heroui.com/)
- [next-intl](https://next-intl.dev/) for i18n
- [Tailwind CSS v4](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript compiler |
| `npm run favicons` | Regenerate favicon assets |

## Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata and sitemap |

On Vercel, set `NEXT_PUBLIC_SITE_URL` to your production domain. Preview deployments automatically use `VERCEL_URL`.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — no custom build settings needed.
4. Add `NEXT_PUBLIC_SITE_URL=https://morteza-karimi.com` in **Project → Settings → Environment Variables** (Production).
5. Connect your custom domain in **Project → Settings → Domains**.

Vercel deploys automatically on every push to `main` (production) and on pull requests (preview).

## CI

GitHub Actions runs lint, typecheck, and build on every push and pull request to `main`. Deployment is handled by Vercel's Git integration — no separate deploy workflow is required.

## Features enabled on Vercel

- **Image Optimization** — Gravatar and local images via `next/image`
- **i18n Middleware** — Locale detection and routing via next-intl
- **Static Generation** — Pre-rendered pages with `generateStaticParams`
- **Analytics** — Vercel Web Analytics
- **Speed Insights** — Core Web Vitals monitoring
- **Security Headers** — Configured in `vercel.json`
