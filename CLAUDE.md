# SENMARES - Naval Electronics

Landing page for SENMARES, a naval electronics service company based in Buenos Aires, Argentina.
Electronic repair and automation control services for the maritime industry.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **React:** v19 with React Compiler enabled

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (Navbar + Footer wrap all pages)
│   ├── page.tsx           # Home page (Hero, Services, About, Contact sections)
│   ├── globals.css        # Global styles (Tailwind imports + smooth scroll)
│   └── favicon.ico
├── components/
│   ├── sections/          # Page sections (Hero, Services, About, Contact)
│   └── ui/                # Shared UI (Navbar, Footer)
└── data/
    └── services.ts        # Services data (4 vessel zones with items)

public/
├── senmares_logo_palette/ # Full brand asset library (PNGs, see README.md inside)
└── senmares_logo_palette.zip
```

## Brand Colors

- **Navy Dark:** `#020b18` (main background)
- **Navy Mid:** `#0d1f35` (section alternation / cards)
- **Navy Light:** `#0a1628` (gradients)
- **Sky/Cyan:** `sky-400`/`sky-500` (accent, CTAs, highlights)
- **Brand Palette:** Navy `#1a3a52`, Cyan `#00d4d4`, White `#FFFFFF`

## Design Patterns

- Single-page layout with anchor navigation (`#services`, `#about`, `#contact`)
- Dark navy theme throughout — no light mode
- Framer Motion for scroll-triggered animations (`whileInView`) and entrance animations
- Responsive: mobile-first with `md:` and `lg:` breakpoints
- Cards use `bg-[#0a1628]` with `border-slate-700/50` and hover effects
- CTAs are rounded-full buttons (`bg-sky-500` primary, border outline secondary)
- Forms submit via FormSubmit.co to `administracion@senmares.com`

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Logo Assets

Brand assets are in `public/senmares_logo_palette/`. See the README.md inside for usage guide.
Key mappings:
- **Navbar/Header:** `senmares_horizontal_transparent.png`
- **Favicon:** `senmares_favicon_transparent.png` or `senmares_favicon_navy_bg.png`
- **Hero section:** `senmares_hero_transparent.png` or `senmares_hero_gradient_bg.png`
- **Footer:** `senmares_horizontal_transparent.png` (smaller)
- **OG/Social:** `senmares_banner_navy_bg.png`

## Language

- Everything in English (code, comments, UI, commits, docs)
- Internationalization (i18n) will be added for translations
- The site targets an international maritime audience

## Goals & Priorities

- **SEO first:** semantic HTML, metadata, structured data, fast load times
- **Performance:** lightweight, optimized images, minimal JS — Next.js chosen for SSR/SSG benefits
- **Responsive:** mobile-first, must look great on all devices
- **Simplicity:** clean, easy to navigate, no unnecessary complexity
