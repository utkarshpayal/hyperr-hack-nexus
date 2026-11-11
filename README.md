# Hyperrcompute Hackathon 2025 – Landing Page

A single-page marketing site for the **Hyperrcompute Hackathon 2025**, an event focused on AI, cloud computing, GPU optimization and next-gen computing. The page presents the event details, schedule, tracks, prizes and FAQ with a dark, glowing visual style.

> **Status:** static front end. All event details (dates, prizes, stats, registration counts) are hard-coded in the section components, and the "Register" call-to-action buttons are not yet wired to a registration flow or backend.

## Page sections

The home page (`src/pages/Index.tsx`) is composed of these sections, in order:

| Section | Component | Content |
| --- | --- | --- |
| Navbar | `components/layout/Navbar.tsx` | Anchor links to About, Timeline, Tracks, Prizes, FAQ |
| Hero | `components/sections/Hero.tsx` | Event title, dates, headline stats and CTAs |
| About | `components/sections/About.tsx` | Focus areas: AI, cloud computing, GPU optimization, next-gen computing |
| Timeline | `components/sections/Timeline.tsx` | Registration → idea submission → hacking → demos → winners |
| Tracks | `components/sections/Tracks.tsx` | AI & ML, Cloud Computing, GPU Optimization, DevOps & Security |
| Prizes | `components/sections/Prizes.tsx` | Prize tiers and additional perks |
| FAQ | `components/sections/FAQ.tsx` | Accordion of common participant questions |
| Registration | `components/sections/Registration.tsx` | When/where/team size, registration status, what's included |
| Footer | `components/sections/Footer.tsx` | Quick links and social links |

A scroll-to-top button is also rendered on the page. Any unknown route renders a 404 page.

## Tech stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) in `src/components/ui`
- React Router, TanStack Query provider, lucide-react icons

## Getting started

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

The dev server is configured in `vite.config.ts` to listen on port **8080**.

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run build:dev` | Build using development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

No test script is configured.

## Configuration

No environment variables are used. To update event content, edit the data arrays at the top of each component in `src/components/sections/`.
