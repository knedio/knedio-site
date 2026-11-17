# knedio-site

Personal portfolio of Karl Naio Edio, built with Next.js 16, React 19 and Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run check   # lint, typecheck, format check
npm run build
```

To change what the site says, edit `src/content/site.ts`. Images live in `src/content/media/`.

## Deploy

Deployed on Vercel with the default Next.js settings. Set `NEXT_PUBLIC_SITE_URL` (for example
`https://knedio.com`) once a custom domain is attached; otherwise the Vercel production domain is used for canonical
URLs, the sitemap and the Open Graph image.

Contributor conventions are in [CLAUDE.md](CLAUDE.md).
