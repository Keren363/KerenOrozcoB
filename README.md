# Keren Orozco — Engineering portfolio

A complete bilingual portfolio connecting software, artificial intelligence, automation, data and medical device quality. English is the initial language; Spanish and the light/dark theme persist locally. Five project case studies have their own routes. All professional information follows the supplied brief; employer information is generalized.

## Stack

React, strict TypeScript, Vite, Tailwind CSS (Vite integration), Framer Motion, Lucide and React Router. Custom responsive CSS gives the site its editorial appearance. No backend, credentials or external analytics are required. Motion respects the reduced-motion preference. Project detail code is lazy loaded.

## Run locally

Use Node 22.12+ and npm.

```sh
npm install
npm run dev
```

On Windows PowerShell with restricted script execution, use `npm.cmd` in place of `npm`.

```sh
npm run build
npm run preview
```

The build type-checks the source, builds production assets and writes physical HTML entries for all five project routes. Output: `dist/`.

## Structure

```text
src/
  components/UI.tsx      Reusable UI, navigation, diagrams and project cards
  data/                 Projects, skills, experience, education, contact and types
  pages/                Home and lazy-loaded project details
  i18n.tsx              Shared language provider
  App.tsx               Routes and dynamic SEO
  styles.css            Theme tokens, layouts and responsive styling
public/projects/        Local bilingual screenshot placeholders
scripts/                Static route generation and placeholder generator
tests/                  Browser integration checks
```

## Edit content

- **Projects:** edit `src/data/projects.ts`. Add a `Project` object with a unique slug, bilingual text, technologies and sections. Keep `githubUrl` and `liveUrl` empty until real URLs are available; empty links are automatically hidden. Add the slug and name to `scripts/static-routes.mjs` for GitHub Pages.
- **Screenshots:** put approved images under the matching `public/projects/` folder. Add `{src:'projects/krea/desktop.webp', alt:bi('English description','Descripción en español')}` to the project's `screenshots` array. For phone captures add `mobile:true`. Use compressed WebP, with modest dimensions. The original concept artwork is explicitly labeled and does not claim to be an actual screenshot. SVG screenshot placeholders are visible until real images are registered.
- **Resume:** the user-provided resume is installed at `public/Keren-Orozco-Resume.pdf` and downloads are enabled. Replace this file to update it. Set `resumeAvailable:false` in `src/data/contact.ts` if you need to temporarily disable downloads.
- **Contact:** edit `src/data/contact.ts` to add LinkedIn/GitHub profile URLs. Empty URLs do not render. Set both `phone` and `showPhone:true` to enable a phone link. Default: false. Remember that source data is public even if hidden in the UI; do not put a private phone number into the source.
- **Experience, skills, education:** use the corresponding files in `src/data/`. `bi(english, spanish)` stores translations without duplicating components. Product names, official role names and standard technology terms may remain in English.

## Deploy to Vercel

Import the repository, select Vite, use build command `npm run build` and output `dist`. Set public environment variable `VITE_SITE_URL` to your real production root (for example your domain with `https://`). Keep `VITE_BASE_PATH=/`. `vercel.json` supports direct route navigation. No deployment is performed automatically from this workspace.

## Deploy to GitHub Pages

Push to a GitHub repository on branch `main`. In Settings → Pages, choose **GitHub Actions**. The included workflow derives the correct base path and site URL from GitHub Pages configuration, builds and deploys `dist`. Physical `/projects/<slug>/index.html` entries support direct visits and refreshes without hash routing. Configure a custom domain through GitHub Pages if desired.

For a manual repository-subpath build in PowerShell:

```powershell
$env:VITE_BASE_PATH='/your-repository/'
$env:VITE_SITE_URL='https://your-account.github.io/your-repository'
npm.cmd run build
```

Set `VITE_SITE_URL` to the real deployed root to enable canonical links, sitemap and robots.txt generation. This is deliberately unset rather than inventing a domain. Static project titles are generated at build time; localized descriptions update in the browser. For full multilingual search indexing, add prerendered language-specific routes in a future iteration.

Official deployment references: [Vite static deployment](https://vite.dev/guide/static-deploy.html), [Tailwind Vite integration](https://tailwindcss.com/docs/installation/using-vite).

## Validation

```sh
npx playwright install chromium
npm run build
npm test
```

Tests cover all project routes, direct reloads, image loading and alt text, JavaScript console errors, mobile navigation, language/theme persistence, keyboard skip navigation and overflow at 320, 375, 390, 430, 768, 1024, 1440 and 1920 pixels. No ESLint configuration is included; strict TypeScript runs in every build. No Lighthouse score or physical-device test is claimed.

## Employer confidentiality rule

Never include confidential employer information: proprietary manufacturing data, investigation identifiers, CAPA numbers, internal metrics, specific product failures, patient data, internal technical documents, confidential processes or unreleased product information. Keep experience generalized; describe support work as support. No final regulatory authority or unverified impact metrics are claimed. Only publish screenshots you have permission to share.

All `VITE_` environment variables are public in the browser. Never use them for API keys, credentials or secrets.
