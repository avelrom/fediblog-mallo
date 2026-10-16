import { rssXsl } from '@fediblog/core/lib/rss-xsl';

// Hoja de estilo con la que el navegador muestra el feed (los lectores RSS la ignoran).
export const GET = () =>
  rssXsl({
    light: { bg: '#ffffff', fg: '#1a1a1a', muted: '#737373', line: '#e5e5e5', soft: '#fafafa', accent: '#0a0a0a' },
    dark: { bg: '#09090b', fg: '#e5e5e5', muted: '#a3a3a3', line: '#27272a', soft: '#121214', accent: '#fafafa' },
    font: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  });
