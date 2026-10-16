import type { APIRoute } from 'astro';
import { getNotas } from '@fediblog/core/lib/notas';

export const GET: APIRoute = async () => {
  const notas = await getNotas();
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

  const items = notas.map((n) => ({
    id: n.id,
    title: n.data.title,
    date: n.data.date.toISOString(),
    excerpt: n.data.excerpt,
    tags: n.data.tags,
    url: `${base}${n.id}/`,
    image: n.data.images[0]?.src || null,
  }));

  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
