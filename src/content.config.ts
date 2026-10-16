import { defineCollection } from 'astro:content';
import { siteLoader } from '@fediblog/core/site-loader';
import { notaSchema } from '@fediblog/core/schema';
import { SITE } from './config';

const notas = defineCollection({
  loader: siteLoader(SITE, {
    dicebearBackground: ['e7e5e4', 'd6d3d1', 'a8a29e'], // paleta del tema
    // Los pies de foto de Pixelfed: la primera línea es el título.
    captionTitle: true,
    // Las fotos van en la galería, no incrustadas en el texto.
    inlineFigures: false,
    // Mallo usa rutas de imagen absolutas (con `base`, p. ej. en GitHub Pages).
    transformData: (data, { base }) => {
      const abs = <T extends { src: string } | null>(img: T): T =>
        img && !/^(https?:)?\//.test(img.src) ? { ...img, src: `${base}${img.src}` } : img;
      return {
        ...data,
        images: ((data.images as { src: string }[]) ?? []).map(abs),
        cover: abs((data.cover as { src: string } | null) ?? null),
      };
    },
  }),
  schema: notaSchema,
});

export const collections = { notas };
