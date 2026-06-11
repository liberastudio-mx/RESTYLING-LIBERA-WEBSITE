import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guias = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guias' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categoria: z.enum(['paos', 'automatizacion', 'inteligencia-artificial', 'presencia-digital', 'whatsapp-business']),
    fecha: z.date(),
    destacado: z.boolean().default(false),
    imagen: z.string().optional(),
    tiempoLectura: z.string().optional(),
  }),
});

const radar = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/radar' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categoria: z.enum(['ai', 'automation', 'tools', 'web', 'seo', 'experiments', 'opinion']),
    fecha: z.date(),
    destacado: z.boolean().default(false),
    imagen: z.string().optional(),
  }),
});

export const collections = { guias, radar };
