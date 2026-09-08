# Amit Awad Portfolio

Cinematic, recruiter-first personal portfolio built as a static-exportable Next.js monorepo.

## Final implementation

- Multi-page portfolio: About, Projects, project case studies, Experience, Entrepreneurship, Dharmaverse, Resume, Contact.
- WebGL hero foundation with a continuous-loop visual using React Three Fiber.
- GSAP scroll choreography, contextual cursor, magnetic controls, and View Transition navigation.
- Responsive compositions with reduced-motion and touch fallbacks.
- Source-backed project evidence for public GitHub repositories and Time Management documentation.
- Original résumé PDF preserved unchanged at `apps/web/public/Amit_Awad_Resume.pdf`.
- GitHub Pages deployment workflow under `.github/workflows/deploy-pages.yml`.
- Static sitemap, robots metadata, web manifest, custom 404, and `.nojekyll` marker.

## Stack

- Next.js 15 / React 19 / TypeScript
- pnpm workspaces
- Three.js / React Three Fiber / Drei
- GSAP
- CSS design tokens and responsive CSS
- Vitest / Testing Library / Playwright dependencies included for QA

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The Next.js configuration uses static export with trailing slashes and unoptimized images for GitHub Pages compatibility. The static output is generated at `apps/web/out`.

## GitHub Pages

The workflow deploys the `apps/web/out` directory whenever changes are pushed to `main`. The configured site URL is `https://amitawad.github.io`.

## Verification note

The source was structurally reviewed in the build environment. A production Next.js build could not be executed here because package installation requires network access to the npm registry, which is unavailable in the current environment. Run `pnpm install && pnpm build` locally or in GitHub Actions before the first public deployment.
