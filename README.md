# Kamta Prasad Rathour — AI Engineer Portfolio

A production-ready, futuristic, AI-themed developer portfolio built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

Live data for this portfolio (name, role, skills, project, experience, education) lives in one place: `lib/data.ts`.

---

## ✨ Features

- Next.js 15 App Router + TypeScript
- Tailwind CSS with a custom dark "AI/neural" design system (colors, glow shadows, keyframes)
- Framer Motion scroll-reveal animations, hover micro-interactions, and an animated boot-sequence page transition
- Canvas-based neural-network particle background (signature visual, reacts to cursor, respects `prefers-reduced-motion`)
- Animated hero with rotating typing effect across roles
- Glassmorphism cards throughout (About, Skills, Projects, Experience, Education, Achievements, Contact)
- Fully responsive: mobile → tablet → laptop → large desktop
- SEO: metadata, Open Graph, Twitter cards, JSON-LD Person schema, `robots.txt`, dynamic `sitemap.xml`
- Accessibility: skip-to-content link, visible focus rings, semantic landmarks, `aria-label`s, reduced-motion support
- Download Resume button (PDF served from `/public/resume`)
- Mailto-based contact form (no backend required) + direct email/phone/social links

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata, JSON-LD
│   ├── page.tsx            # Assembles all sections
│   ├── loading.tsx         # Route-level loading state
│   ├── sitemap.ts          # Dynamic sitemap
│   └── globals.css         # Tailwind layers + glass/utility classes
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx
│   ├── NeuralField.tsx      # Canvas particle/neural background
│   └── PageTransition.tsx   # Boot-sequence intro animation
├── hooks/
│   └── useTypingEffect.ts
├── lib/
│   └── data.ts              # ALL candidate content (edit here to update site)
├── public/
│   ├── resume/Kamta-Prasad-Rathour-Resume.pdf
│   ├── robots.txt
│   └── manifest.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started Locally

Requires **Node.js 18.18+** (Node 20/22 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

```bash
# Production build (also used by Vercel)
npm run build
npm run start
```

> Note: `next/font/google` fetches font files at build time, so the build machine needs outbound internet access to `fonts.googleapis.com` (Vercel has this by default).

---

## ✏️ Editing Content

All personal/résumé content is centralized in **`lib/data.ts`**:

- `SITE` — name, role, contact info, links, resume path
- `ABOUT` — about paragraph
- `SKILLS` — skill list (with group tags used for layout)
- `PROJECTS` — project cards (name, stack, features, links)
- `EXPERIENCE` — timeline entries
- `EDUCATION` — degree/college/CGPA
- `ACHIEVEMENTS` — highlight cards

To replace the résumé PDF, drop your file at:
`public/resume/Kamta-Prasad-Rathour-Resume.pdf` (same filename, or update `SITE.resumePath` in `lib/data.ts`).

---

## ☁️ Deploying to Vercel

### Option A — via GitHub (recommended)

1. Push this project to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — keep the default build command (`next build`) and output.
4. Click **Deploy**. Your site will be live at `https://<project-name>.vercel.app`.
5. (Optional) Add a custom domain under **Project → Settings → Domains**.

### Option B — via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel        # preview deployment
vercel --prod # production deployment
```

No environment variables are required for this static portfolio.

---

## 🎨 Design Tokens

| Token | Value | Use |
|---|---|---|
| `void` | `#05060f` | Base background |
| `cyan-glow` | `#22d3ee` | Primary accent / CTA glow |
| `violet-glow` | `#a78bfa` | Secondary accent |
| `emerald-glow` | `#34d399` | Success / status accents |
| `amber-glow` | `#f5b942` | Achievements accent |
| Display font | Space Grotesk | Headings |
| Body font | Inter | Paragraph text |
| Mono font | JetBrains Mono | Labels, eyebrows, tags |

---

## ♿ Accessibility & Performance Notes

- All interactive elements have visible focus states (`focus-visible` outlines).
- Particle canvas is `aria-hidden` and pauses motion when `prefers-reduced-motion: reduce` is set.
- Images are not used for content (icon-based UI via `lucide-react`), keeping the bundle light.
- Semantic landmarks (`header`, `main`, `footer`, `nav`) and a skip-to-content link are included.

---

Built for **Kamta Prasad Rathour** — Python Developer | AI Engineer | GenAI Engineer.
