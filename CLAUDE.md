# SENMARES - Naval Electronics

Landing page for SENMARES, a naval electronics service company based in Buenos Aires, Argentina.
Electronic repair and automation control services for the maritime industry.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Animations:** Framer Motion (dynamic imported for below-fold sections)
- **Icons:** Lucide React
- **React:** v19 with React Compiler enabled
- **i18n:** next-intl (EN/ES)
- **Hosting:** Vercel (auto-deploy from GitHub on push to main)
- **Domain:** https://senmares.com

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (thin wrapper, returns children)
│   ├── globals.css             # Global styles, CSS variables, utilities
│   ├── icon.png                # Favicon (192px, auto-served by Next.js)
│   ├── apple-icon.png          # Apple touch icon (180px)
│   ├── sitemap.ts              # Dynamic sitemap with locale alternates
│   └── [locale]/
│       ├── layout.tsx          # Locale layout (Inter font, metadata, JSON-LD, NextIntlClientProvider)
│       └── page.tsx            # Home page (Hero + lazy-loaded Services, About, Contact)
├── components/
│   ├── sections/               # Hero, Services, About, Contact
│   └── ui/                     # Navbar, Footer, AnimatedCounter, WaveBackground, LanguageSwitcher
├── i18n/
│   ├── routing.ts              # Locale config (en/es, default en, no auto-detection)
│   └── request.ts              # Server-side i18n config
└── middleware.ts                # next-intl middleware for locale routing

messages/
├── en.json                     # English translations
└── es.json                     # Spanish translations

public/
├── robots.txt
└── senmares_logo_palette/
    ├── favicon-64.png          # Optimized favicon (3.6KB) — Navbar & Footer
    ├── senmares_favicon_navy_bg.png  # Source favicon (251KB) — used for icon.png generation
    ├── senmares_hero_gradient_bg.png # Hero image (105KB, optimized from 326KB)
    └── senmares_banner_navy_bg.png   # OG/Twitter social image
```

## Brand Colors (CSS variables in globals.css)

- `--color-navy-950: #020b18` — main background
- `--color-navy-900: #0a1628` — gradients
- `--color-navy-800: #0d1f35` — section alternation, cards
- `--color-navy-700: #132d4a` — mid tones
- `--color-cyan-accent: #00d4d4` — primary accent, CTAs, glows

## Design Patterns

- Single-page with anchor navigation (`#services`, `#about`, `#contact`)
- Cinematic dark theme — no light mode
- Animated wave canvas background in Hero (WaveBackground, client-only)
- Glass-effect cards with gradient borders on hover
- Animated stat counters (AnimatedCounter with useInView)
- Framer Motion: `whileInView` for scroll animations, custom easing `[0.16, 1, 0.3, 1]`
- `prefers-reduced-motion` respected globally
- Forms submit via FormSubmit.co to administracion@senmares.com

## Commands

```bash
npm run dev          # Dev server (requires Node >= 20)
npm run build        # Production build
npm run lint         # ESLint
npx vercel --prod    # Manual deploy to Vercel
```

## Node Version

Requires Node >= 20. Use `nvm use 20` if default is 18.

## SEO

- robots.txt + dynamic sitemap.ts with locale alternates
- JSON-LD structured data (LocalBusiness schema)
- Canonical URLs and hreflang per locale
- OG/Twitter meta tags with localized content
- metadataBase: https://senmares.com

## Lighthouse Scores (Production)

- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 92 (goes to ~100 with domain canonical resolving)
- **Performance:** 78

## Language

- Everything in English (code, comments, UI, commits, docs)
- i18n implemented with next-intl (EN default, ES available)
- Default locale: EN (no browser auto-detection)
- Language switcher in Navbar (desktop and mobile)

## Goals & Priorities

- **SEO first:** semantic HTML, metadata, structured data, fast load times
- **Performance:** lightweight, optimized images, minimal JS — Next.js chosen for SSR/SSG benefits
- **Responsive:** mobile-first, must look great on all devices
- **Simplicity:** clean, easy to navigate, no unnecessary complexity
