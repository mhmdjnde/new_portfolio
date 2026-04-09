# mhmdjnde.dev

<p align="center">
  <a href="https://mhmdjnde.dev">Live Site</a>
  -
  <a href="https://github.com/mhmdjnde/new_portfolio">Source Code</a>
  -
  <a href="https://www.linkedin.com/in/mohamad-joundi/">LinkedIn</a>
</p>

<p align="center">
  A cinematic developer portfolio for Mohamad Joundi, built as a digital control room for enterprise-minded engineering, Power Platform work, and 42 Beirut projects.
</p>

## What This Is

This is not a plain portfolio template with a photo, a few links, and a dark background.

The goal of this project was to build a personal site that feels like a system:

- sharp, motion-rich, and intentional
- inspired by control panels, flow diagrams, and enterprise tooling
- personal enough to reflect Mohamad's story
- structured enough to present real technical credibility

Every section is designed to feel like part of one visual language, from the glowing canvas grid to the workflow-inspired connectors between sections.

## The Experience

The site combines personal branding with a strong product-like presentation:

- a high-impact hero section with animated framing, custom cursor behavior, and layered motion
- a narrative journey through education, 42 Beirut, and enterprise work at CMA CGM
- a dedicated Power Platform section focused on real-world automation and internal tooling
- a projects area that balances NDA-bound enterprise work with public technical projects
- a contact flow backed by a custom email route for real inquiries

## Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, global CSS |
| Motion | Framer Motion |
| Icons | Lucide React |
| Contact | Next.js Route Handlers, Nodemailer |
| Email / SMTP | Zoho SMTP |
| Deployment | Vercel |
| Domain | `mhmdjnde.dev` |

## Main Sections

| Section | Purpose |
| --- | --- |
| `Hero` | Establishes the visual identity and first impression |
| `About` | Gives quick context on background and positioning |
| `PowerPlatform` | Highlights enterprise automation focus |
| `Journey` | Shows the timeline from study to professional work |
| `FortyTwo` | Presents 42 Beirut projects and technical depth |
| `Projects` | Mixes enterprise impact with public-facing work |
| `Stack` | Shows tools across platform, systems, web, and data |
| `Services` | Clarifies what kind of work and value is offered |
| `Contact` | Converts visitors into actual conversations |

## Design Direction

The visual direction of the project is built around a "Power Platform OS" concept:

- electric cyan, deep navy, and purple accents
- a persistent grid and ambient particle system
- interface patterns inspired by dashboards, node editors, and data flow
- typography that separates display, body, and mono roles clearly
- animated details that support the atmosphere without turning the site into noise

## Project Structure

```text
src/
  app/
    api/contact/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    About.tsx
    Contact.tsx
    Footer.tsx
    FortyTwo.tsx
    Hero.tsx
    Journey.tsx
    Navigation.tsx
    PowerPlatform.tsx
    Projects.tsx
    Services.tsx
    Stack.tsx
    ui/
      BgCanvas.tsx
      CursorEffect.tsx
      SocialIcons.tsx
  lib/
    data.ts
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` with the mail credentials used by the contact route:

```bash
GMAIL_USER=your-email@example.com
GMAIL_APP_PASSWORD=your-app-password
```

3. Start the dev server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Build

```bash
npm run build
npm run start
```

## Why This Project Matters

This repository is more than a portfolio deployment.

It is a snapshot of a developer trying to present both identity and capability in the same space:

- enterprise automation without boring presentation
- personal story without losing technical weight
- visual ambition without sacrificing structure

It is meant to feel confident, modern, and unmistakably personal.

## Links

- Live: https://mhmdjnde.dev
- Repo: https://github.com/mhmdjnde/new_portfolio
- LinkedIn: https://www.linkedin.com/in/mohamad-joundi/
