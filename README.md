# Anubhav Chauhan — Data & Product Analyst Portfolio

A premium, recruiter-focused portfolio built with a Netflix-inspired dark UI — cinematic hero, "Match %" project badges, hover-expand project cards, and a fully interactive project detail modal.

**Live demo:** _add your deployed URL here after deploying_

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (CSS-based theme tokens)
- **Animation:** Framer Motion
- **Icons:** Lucide React (+ 2 custom inline SVGs for GitHub/LinkedIn, since brand icons were removed from lucide-react)
- **Fonts:** Self-hosted via `@fontsource` (Bebas Neue, Inter, JetBrains Mono) — no external Google Fonts request at runtime

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, full SEO metadata
│   ├── page.tsx           # Assembles all sections
│   ├── globals.css        # Design tokens (colors, fonts) as CSS variables
│   ├── loading.tsx        # Route-level loading skeleton
│   ├── not-found.tsx      # Custom 404 page
│   ├── sitemap.ts         # Dynamic sitemap.xml
│   ├── robots.ts          # Dynamic robots.txt
│   ├── icon.svg           # Favicon
│   └── apple-icon.png     # iOS home screen icon
├── components/            # One component per section/feature
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── ProjectsSection.tsx   # Search + filter + featured row
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx      # Full project detail view
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── ResumeSection.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Toast.tsx             # Copy-email notification system
│   ├── ScrollProgress.tsx
│   ├── BackToTop.tsx
│   ├── CursorGlow.tsx
│   ├── BrandIcons.tsx        # GitHub/LinkedIn SVGs
│   ├── JsonLd.tsx            # Structured data for SEO
│   └── SectionHeading.tsx
├── data/                   # ALL editable content lives here
│   ├── profile.ts           # About me, contact, education, certs, achievements
│   ├── projects.ts          # Every project's full detail
│   └── skills.ts            # Skill groups + proficiency levels
├── types/index.ts          # Shared TypeScript interfaces
└── lib/utils.ts            # Small helpers (cn className merger)

public/
├── resume/Anubhav_Chauhan_Resume.pdf
├── images/profile/          # Hero backdrop + about photo
├── images/projects/         # Real screenshots pulled from your GitHub repos
└── og-image.png             # Social share preview image
```

## Getting Started Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Customizing Content

**You never need to touch component code to update content.** Everything lives in `src/data/`:

- **Change About Me, contact info, education, certifications:** edit `src/data/profile.ts`
- **Add/edit/remove a project:** edit `src/data/projects.ts` — each project is one object; set `featured: true` to show it in the hero row
- **Update skill proficiency:** edit `src/data/skills.ts`
- **Swap your resume PDF:** replace `public/resume/Anubhav_Chauhan_Resume.pdf` (keep the same filename, or update `resumeUrl` in `profile.ts`)
- **Swap your photo:** replace files in `public/images/profile/`
- **Add new project screenshots:** drop images into `public/images/projects/<project-name>/` and reference them in that project's `images` array in `projects.ts`

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Once deployed, update the `SITE_URL` constant in `src/app/layout.tsx` and the `base` URL in `src/app/sitemap.ts` / `src/app/robots.ts` to match your real Vercel URL (or custom domain).
5. Redeploy (Vercel redeploys automatically on every push to `main`).

### Custom Domain (optional)
In your Vercel project settings → Domains → add your domain and follow the DNS instructions shown.

## Performance & SEO

- Fully static site (every route is prerendered) — fast, cheap to host, great Lighthouse scores.
- Self-hosted fonts (no external font requests).
- `next/image` automatic optimization (responsive sizes, lazy loading, WebP/AVIF).
- Metadata, OpenGraph, Twitter Cards, JSON-LD structured data, sitemap.xml and robots.txt all included out of the box.

## Accessibility

- Semantic HTML, visible focus states, `aria-label`s on icon-only buttons, `prefers-reduced-motion` respected throughout.
