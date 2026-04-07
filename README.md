# Chinemerem Ichie Portfolio

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and `next-themes`.

This site presents:
- a landing page with animated hero content and work history
- an about page with skills, tools, and resume links
- a blog page linking to published articles
- a projects index and dynamic project detail pages
- a resume download endpoint under the App Router

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- daisyUI
- Framer Motion
- next-themes

## Routes

- `/` home page
- `/about` about page, skills, tools, resume links
- `/blog` blog/article links
- `/projects` project index
- `/projects/[projectId]` project detail pages
- `/api/download` resume download endpoint

## Project Structure

```text
src/app/                  App Router pages, layouts, and API routes
src/components/           Shared UI components
src/animations/           Motion-based text and visual animations
library/                  Content/data for projects, blog posts, and socials
public/                   Static assets, logos, project images, resume PDF
```

## Local Development

This repo currently includes `yarn.lock`, so prefer Yarn for a lockfile-consistent setup.

```bash
yarn install
yarn dev
```

Open `http://localhost:3000`.

Useful commands:

```bash
yarn dev
yarn build
yarn start
yarn lint
```

## Environment Variables

Create a `.env.local` file for local development when needed.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set `NEXT_PUBLIC_SITE_URL` to your live Render domain or your custom domain. This is used for canonical URLs, Open Graph metadata, and Twitter card metadata.

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://your-render-domain.onrender.com
```

## Screenshots / Assets

This repo stores the main visual assets in `public/`, including:

- `public/logo/chinemerem-logo.png`
- `public/logo/chinemerem-logo-dark.png`
- `public/project-images/17thapartment.png`
- `public/project-images/avvic-bank-picx.png`
- `public/project-images/ecommerce-dispaly.png`
- `public/project-images/restaurant-image.png`
- `public/blog-images/blog-picx.svg`

These are the images currently used across the site for branding and project previews.

## Resume Download

The resume file is stored at:

```text
public/documents/richard-resume.pdf
```

The download endpoint is implemented with the App Router at:

```text
src/app/api/download/route.ts
```

## Deployment on Render

This project is deployed on Render.

Recommended Render settings:

- Environment: `Node`
- Build Command: `yarn install && yarn build`
- Start Command: `yarn start`

Set this environment variable in Render:

```bash
NEXT_PUBLIC_SITE_URL=https://your-render-domain.onrender.com
```

If you add a custom domain later, update `NEXT_PUBLIC_SITE_URL` to match it exactly.

## Notes

- The site uses `next/font` for optimized font loading.
- Metadata is centralized so page titles, canonical URLs, Open Graph tags, and Twitter cards stay consistent.
- Project and blog content are data-driven from the `library/` directory.

## Repository

- GitHub: `https://github.com/Ichie235/portfolio-website`
