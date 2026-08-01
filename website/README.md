# Abrar Ahmad — Full-Stack AI Engineer Portfolio

A modern, animated portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion. Fully static, optimized for the Vercel free tier.

This site lives inside the [`Abrar5510/Abrar5510`](https://github.com/Abrar5510/Abrar5510) profile repo, at `/website`. See the repo's root [`README.md`](../README.md) and [`PORTFOLIO.md`](../PORTFOLIO.md) for the non-interactive version of this content.

## Highlights

- **Animated neural-network canvas** background that reacts to the cursor
- **Typewriter hero** cycling through specializations
- **Animated count-up stats**, scroll-reveal sections, and a tech-stack marquee
- **Filterable project grid** across 6 tiers with expandable detail panels and cursor-following spotlight cards
- Fully responsive, dark-themed, respects `prefers-reduced-motion`

## Local Development

```bash
cd website
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploying to Vercel (free)

1. Go to [vercel.com/new](https://vercel.com/new) and import the `Abrar5510/Abrar5510` repo.
2. Set the project **Root Directory** to `website`.
3. Vercel auto-detects Next.js — no further configuration needed. Click **Deploy**.

Every push to the production branch redeploys automatically.

## Editing Content

All portfolio content (profile, stats, skills, projects, standards) lives in a single file: [`data/portfolio.ts`](data/portfolio.ts). Edit it to update the site — no component changes needed.
