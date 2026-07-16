import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    locale: z.enum(['en', 'ja', 'zh']),
    slug: z.string(),
    year: z.string(),
    status: z.enum(['ongoing', 'published', 'maintained', 'archived']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    code: z.url().optional(),
    paper: z.url().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = { projects };
