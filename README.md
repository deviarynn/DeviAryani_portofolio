# Devi Aryani — Portfolio

Personal portfolio built with **React (Vite) + Tailwind CSS + Framer Motion**.

## Design concept

A "systems" identity for an IT profile that spans backend, frontend, UI/UX, and
network infrastructure: a dark terminal-inspired palette, `~/path` style section
labels instead of generic numbering, and a signature animated network-graph
motif (in the hero) that literally maps the disciplines Devi connects.

- **Colors** — ink navy background, signal amber + circuit teal accents.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (labels/data).
- **Motion** — boot-log hero intro, scroll-reveals, animated stat counters,
  pulsing timeline nodes. Respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build → /dist
npm run preview    # preview the production build
```

## Project structure

```
devi-portfolio/
├─ index.html                 # SEO meta tags, fonts, structured data
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ main.jsx                # React entry point
│  ├─ App.jsx                 # composes all sections
│  ├─ index.css                # Tailwind layers + base styles
│  ├─ data/                   # all portfolio content lives here
│  │  ├─ profile.js           # bio, education, stats
│  │  ├─ skills.js            # skill groups, tech stack, network-graph nodes
│  │  ├─ experience.js        # timeline entries
│  │  ├─ projects.js          # featured projects
│  │  └─ certifications.js    # certs, trainings, gallery
│  ├─ hooks/
│  │  └─ useScrollSpy.js      # active-section tracking for the navbar
│  └─ components/
│     ├─ Navbar.jsx
│     ├─ Hero.jsx
│     ├─ NetworkGraph.jsx     # signature animated visual
│     ├─ SectionHeading.jsx
│     ├─ About.jsx
│     ├─ Stats.jsx
│     ├─ Skills.jsx
│     ├─ Experience.jsx
│     ├─ Projects.jsx
│     ├─ Certifications.jsx
│     ├─ Contact.jsx
│     └─ Footer.jsx
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ package.json
```

## Customizing content

Everything you'd want to change lives in `src/data/*.js` — no need to touch
component code to update your bio, add a project, or add a certification.

## Wiring up the contact form

`Contact.jsx` currently just shows a local "sent" confirmation. To actually
receive messages, connect it to a service like
[Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) —
swap the `handleSubmit` function for a fetch/SDK call to your endpoint.

## Deploying

Any static host works — Vercel, Netlify, GitHub Pages, or Cloudflare Pages.
For Vercel/Netlify: connect the repo, build command `npm run build`, output
directory `dist`.
