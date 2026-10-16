/**
 * Ajustes del sitio Mallo.
 *
 * Mallo es un tema optimizado para Pixelfed y fotografía, transformando
 * las publicaciones con imágenes del fediverso en un diario visual con vistas
 * interactivas: Imagen centrada, Mosaico asimétrico y Calendario.
 */
export const SITE = {
  /**
   * De dónde viene la cuenta:
   *   'mastodon' → ActivityPub (Pixelfed, Mastodon, GoToSocial…).
   *   'bluesky'  → AT Protocol (Bluesky).
   */
  source: 'mastodon' as 'mastodon' | 'bluesky',

  /**
   * Cuenta del fediverso o Bluesky de la que se leen las fotos/entradas.
   * Formato `@usuario@instancia` (Pixelfed, Mastodon…) o `usuario.bsky.social` (Bluesky).
   */
  handle: '@fediblogtest@pixelfed.social',

  // ─── Ajustes generales del sitio ──────────────────────────────────────────
  site: {
    /** Título del sitio: barra del navegador, cabecera y RSS. */
    title: 'Mallo',

    /** Subtítulo para la cabecera (opcional: vacío = no se muestra). */
    tagline: '',

    /** Descripción corta: metadatos, SEO y RSS. */
    description: 'Un diario visual tejido con luz e imágenes del fediverso (Pixelfed).',

    /** Idioma y formato de fechas (ej: 'es-ES', 'en-US'). */
    locale: 'es-ES',

    /**
     * Colores propios (formato #rrggbb). `null` = el del tema.
     *   accent → detalles y énfasis.   title → títulos del sitio y de las entradas.
     */
    colors: {
      accent: null as string | null,
      title: null as string | null,
    },

    /** Letra y color de fondo del favicon dinámico SVG (/favicon.svg) */
    favicon: {
      letter: 'M',
      background: '#1a1a1a',
      color: '#ffffff',
    },
    /** Tipografía del sitio: 'sans' (Inter), 'serif' (Newsreader) o 'mono' (JetBrains Mono). */
    font: 'sans' as 'sans' | 'serif' | 'mono',

    /**
     * Tamaño del texto en cada elemento, a elegir entre xs, s, m, l y xl
     * (m = el del tema). No tiene que ver con el S/M/L de los lectores, que
     * cambia el diseño general.
     */
    fontSize: {
      /** Nombre del sitio en la cabecera. */
      brand: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
      /** Títulos de los listados (inicio, archivo, etiquetas). */
      title: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
      /** Título dentro de cada entrada. */
      postTitle: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
      /** Texto de lectura de las entradas y extractos. */
      body: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
    },
    /**
     * Modo oscuro:
     *   'toggle' → botón en la cabecera (claro/oscuro), recordado en el navegador.
     *   'auto'   → sigue al sistema, sin botón.
     *   'light'  → siempre claro.
     *   'dark'   → siempre oscuro.
     */
    darkMode: 'toggle' as 'toggle' | 'auto' | 'light' | 'dark',

    /** Ocultar enlaces sociales en la cabecera móvil si no caben */
    hideSocialOnMobile: true,

    /**
     * Panel lateral de vista previa: marca o desmarca opciones y ve el efecto
     * al momento, sin tocar este archivo. Pensado para decidir la
     * configuración ANTES de instalar el tema (o para enseñarlo) — no para uso
     * normal del blog ya en marcha, así que por defecto está apagado.
     */
    previewSidebar: false,
    /** Slugs legibles basados en el pie de foto o fecha */
    readableSlugs: true,
    /**
     * Enlaces del menú: el texto que se muestra y su icono (de Lucide, o de
     * Phosphor con prefijo `ph:`, p. ej. `'ph:house'`). Icono vacío = solo texto.
     */
    menu: {
      about: {
        label: 'about',
        icon: 'user',
      },
      archive: {
        label: 'archivo',
        icon: 'archive',
      },
      rss: {
        label: 'rss',
        icon: 'rss',
      },
    },
    /**
     * Dónde sustituir los enlaces de texto por iconos: 'both' | 'mobile' | 'desktop' | 'none'
     */
    navIconsMode: 'both' as 'both' | 'mobile' | 'desktop' | 'none',
  },

  // ─── Ajustes de la galería visual ─────────────────────────────────────────
  gallery: {
    /** Entradas por página en el inicio (el calendario siempre muestra todas). */
    postsPerPage: 40,
    /**
     * Vistas disponibles, a tu elección. Una sola = el blog siempre se ve así
     * y no aparece el selector; varias = el selector solo ofrece esas.
     * Valores: 'images' | 'dashboard' | 'calendar'.
     */
    views: ['images', 'dashboard', 'calendar'] as ('images' | 'dashboard' | 'calendar')[],
    /** Vista por defecto al abrir la página principal (debe estar en `views`; si no, se usa la primera). */
    defaultView: 'images' as 'images' | 'dashboard' | 'calendar',
    /**
     * Tamaños (S / M / L) que ofrece el selector. Uno solo = el blog siempre se
     * ve a ese tamaño y no aparece el selector.
     */
    sizes: ['sm', 'md', 'lg'] as ('sm' | 'md' | 'lg')[],
    /** Tamaño con el que se abre el blog (debe estar en `sizes`; si no, M o el primero). */
    defaultSize: 'md' as 'sm' | 'md' | 'lg',
    /**
     * Proporción de aspecto de las imágenes:
     * 'original' (respeta el aspect ratio natural de cada fotografía sin recortar),
     * 'square' (fuerza 1:1 cuadrado),
     * '4/5' (fuerza 4:5 vertical editorial),
     * '16/9' (fuerza 16:9 apaisado panorámico).
     * Por defecto activado: 'original'.
     */
    aspectRatio: 'original' as 'original' | 'square' | '4/5' | '16/9',
  },

  // ─── Editor  (página oculta /editor/ — el editor lo mantiene Fediblog y se
  //     incrusta aquí en un <iframe>, así se actualiza solo para todos los
  //     temas) ───────────────────────────────────────────────────────────────
  editor: {
    /** Genera la página /editor/: un editor Markdown para redactar y copiar a Mastodon/Pixelfed. */
    show: true,
  },

  // ─── Redes sociales (pie de página y perfil) ──────────────────────────────
  social: {
    pixelfed: 'https://pixelfed.social/fediblogtest',
    mastodon: 'https://mastodon.social/@mastodon',
    bluesky: 'https://bsky.app/profile/bsky.app',
    instagram: 'https://instagram.com/instagram',
  },

  // ─── Perfil del autor (página /about/) ───────────────────────────────────
  profile: {
    /** Página «Acerca de» y su enlace en el menú. Si la desactivas, ni existe la página ni sale el enlace. */
    show: true,
    /** Tu nombre en «Acerca de». `null` = el de tu cuenta del fediverso. */
    name: null as string | null,
    /** Tu texto en «Acerca de» (párrafos separados por una línea en blanco). `null` = la biografía de tu cuenta. */
    bio: null as string | null,
    /** Texto libre adicional, bajo la biografía (párrafos separados por una línea en blanco). Vacío = nada: no se añade ningún texto automático. */
    extraText: null as string | null,
    avatar: '',
    /**
     * Mostrar la imagen de cabecera (banner) de la red social en /about/.
     * Usa la cabecera de la cuenta principal (`handle`) o la indicada en `headerFrom`.
     */
    showBanner: true,
    /** Foto de perfil junto al nombre. */
    showAvatar: true,
    /** Biografía (la tuya o la de la cuenta). */
    showBio: true,
    /** Número de seguidores, si la instancia lo hace público. */
    showFollowers: true,
    /** Campos del perfil de la cuenta (web, pronombres…). */
    showFields: true,
    /**
     * Cuenta o URL opcional de la que traer la cabecera si tu cuenta principal
     * no tiene o prefieres usar la de otra red social (Mastodon, Bluesky, Pixelfed…).
     * Acepta `@usuario@instancia`, `usuario.bsky.social` o la URL del perfil.
     * Vacío o `null` = usa la cabecera de la cuenta principal (`handle`).
     */
    headerFrom: null as string | null,
    /** Ruta o URL manual de cabecera (reserva si la cuenta no tiene). */
    header: '',
  },

  // ─── Archivo ──────────────────────────────────────────────────────────────
  archive: {
    /** Página /archivo/ con todas las entradas y su enlace en el menú. Si la desactivas, ni existe la página ni sale el enlace. */
    show: true,
  },

  // ─── Ingesta de contenido ─────────────────────────────────────────────────
  ingest: {
    /** Límite de publicaciones a recuperar */
    maxPosts: 100,
    /** Agrupar hilos de autorrespuestas */
    joinThreads: true,
    /** Filtro opcional por marcador (ej. '📷' o null para todas) */
    marker: null as string | null,
    markerMode: 'start' as 'start' | 'end' | 'contain',
    firstSentenceAsTitle: false,
    renderMarkdown: true,
    featureMarker: '⭐',
    /**
     * Marca para silenciar comentarios en una publicación: si el mensaje
     * raíz lleva este emoji (en cualquier posición), esa entrada no trae ni
     * muestra comentarios, aunque `post.showComments` esté activo. Se quita
     * del contenido. `null` = nunca se silencian por marca.
     */
    muteCommentsMarker: '🔇' as string | null,
  },

  // ─── Interacción y comentarios ────────────────────────────────────────────
  post: {
    showComments: true,
    /** Mostrar «me gusta» y compartidas al final de cada entrada (a 0 no se muestran). */
    showMetrics: true,
    commentLimit: 30,
    commentAvatars: 'remote' as 'remote' | 'dicebear',
    dicebearStyle: 'glass', // gradientes suaves, como la luz de una foto
  },
};
