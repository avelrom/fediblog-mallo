import { SITE } from '../config';
import { actor } from '../lib/actor';

/** Metadatos del feed (RSS y JSON Feed) de este tema. */
export const feedChannel = {
  title: SITE.site.tagline ? `${SITE.site.title} — ${SITE.site.tagline}` : SITE.site.title,
  description: SITE.site.description,
  language: SITE.site.locale || 'es-ES',
  author: actor.name,
  avatar: actor.avatar,
};
