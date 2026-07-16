# Xiaoyang Liu — Research Portfolio

A trilingual research portfolio built with [Astro](https://astro.build/). English is the default language, with Japanese and Chinese versions under `/ja/` and `/zh/`.

## Local development

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. The site is deployed to GitHub Pages by `.github/workflows/deploy.yml` after changes reach `master`.

## Adding content

- Add or edit project pages in `src/content/projects/`. Each project uses the same `slug` across its `en.md`, `ja.md`, and `zh.md` entries.
- Update publication facts once in `src/data/publications.ts`.
- Update shared interface copy and biography text in `src/data/site.ts`.
- Interactive demos can be implemented as Astro components or placed in `public/demos/` and linked from project frontmatter.
