import type { APIRoute } from 'astro';
import { SITE } from '../config';

export const GET: APIRoute = () => {
  const cfg = SITE.site?.favicon ?? { letter: 'M', background: '#1a1a1a', color: '#ffffff' };
  const letter = String(cfg.letter || SITE.site.title[0] || 'M').trim();
  const background = cfg.background || '#1a1a1a';
  const color = cfg.color || '#ffffff';

  const safeLetter = letter
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const isMultiCharOrEmoji = Array.from(letter).length > 1 || letter.length > 2;
  const fontSize = isMultiCharOrEmoji ? 15 : 18;
  const posY = isMultiCharOrEmoji ? 21 : 22;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="${background}" />
  <text x="16" y="${posY}" text-anchor="middle" font-family="Georgia, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, serif" font-size="${fontSize}" font-weight="600" fill="${color}">${safeLetter}</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
