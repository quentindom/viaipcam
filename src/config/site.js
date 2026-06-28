// Single source of truth — site-wide only. Page content stays in pages.

export const site = {
  url: 'https://viaipcam.pages.dev',
  lang: 'fr',

  name: 'VIAIPCAM',
  person: {
    full: 'Vincent Domenjoud',
    fullCaps: 'Vincent DOMENJOUD',
  },
  tagline: 'Installateur indépendant de caméras, réseau, antennes et informatique',
  slogan: 'Surveillance, réseau et sérénité numérique en Auvergne-Rhône-Alpes',
  schemaDescription:
    'Vincent Domenjoud, installateur indépendant : caméras IP, alarmes, réseau Wi-Fi et câblage, antennes et accompagnement informatique à Roanne, Lyon, Clermont-Ferrand et en Auvergne-Rhône-Alpes.',
  foundingDate: '2015-05',

  contact: {
    email: 'contact@viaipcam.fr',
    phone: '+33685762772',
    phoneDisplay: '06 85 76 27 72',
    phoneWhatsApp: '33685762772',
  },

  address: {
    street: '26 rue des aqueducs',
    postalCode: '42300',
    city: 'ROANNE',
    locality: 'Roanne',
    region: 'Auvergne-Rhône-Alpes',
    country: 'FR',
  },
  areaServed: ['Roanne', 'Lyon', 'Clermont-Ferrand', 'Loire', 'Auvergne-Rhône-Alpes'],

  legal: {
    copyrightYear: 2026,
    siret: '38244969200039',
    host: {
      name: 'Cloudflare Pages',
      company: 'Cloudflare, Inc.',
      address: '101 Townsend St, San Francisco, CA 94107, USA',
    },
    credits: 'QLB',
  },

  knowsAbout: [
    'caméras IP',
    'alarmes connectées',
    'vidéosurveillance',
    'réseau Wi-Fi',
    'câblage réseau',
    'antennes TNT',
    'antennes paraboliques',
    'accompagnement informatique',
    'sauvegarde de données',
  ],

  assets: {
    favicon: '/favicon.svg',
    logo: '/logo.svg',
    logoLight: '/logo-light.svg',
    logoMark: '/logo-mark.svg',
    logoAlt: 'VIAIPCAM — Vincent Domenjoud, installateur indépendant',
    logoMarkAlt: 'VIAIPCAM — symbole double regard',
    portrait: '/images/vincent-domenjoud.webp',
    portraitAlt: 'Vincent Domenjoud, installateur indépendant à Roanne',
    ogImage: '/og-image.webp',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: 'VIAIPCAM — Votre installateur de confiance en Auvergne-Rhône-Alpes',
  },

  seo: {
    titleSuffix: 'Vincent Domenjoud',
    titleSuffixLegal: 'VIAIPCAM',
    locale: 'fr_FR',
    homeTitle: 'Vincent Domenjoud — caméras, réseau & informatique | Roanne',
    homeDescription:
      'Installateur indépendant à Roanne : caméras IP, alarmes, réseau Wi-Fi, antennes et informatique. Lyon, Clermont-Ferrand, AURA. Devis gratuit.',
  },

  social: {
    facebook: 'https://www.facebook.com/viaipcam/',
    linkedin: 'https://www.linkedin.com/in/vincent-d-860368b/',
  },

  googleBusiness:
    'https://www.google.com/maps/place/Viaipcam+Roanne/@46.0407547,4.0708441,17z/data=!4m6!3m5!1s0x47f40f67fc9dc661:0xa92032749efed469!8m2!3d46.0407547!4d4.0708441!16s%2Fg%2F11ghpp4pfw',

  integrations: {
    formspree: {
      action: 'https://formspree.io/f/xzdlgylw',
      subject: 'Nouveau message — VIAIPCAM',
    },
  },

  nav: [
    { href: '/', label: 'Accueil' },
    { href: '/video-surveillance', label: 'Caméras' },
    { href: '/reseau', label: 'Réseau' },
    { href: '/antennes', label: 'Antennes' },
    { href: '/accompagnement-informatique', label: 'Informatique' },
    { href: '/realisations', label: 'Réalisations' },
    { href: '/contact', label: 'Contact' },
  ],

  footerExtra: [{ href: '/a-propos', label: 'À propos' }],

  serviceSchemas: {
    '/video-surveillance': {
      name: 'Installation caméras IP et alarmes',
      description:
        'Surveillance IP sans abonnement, alarmes connectées, live et différé depuis smartphone. Particuliers et TPE.',
    },
    '/reseau': {
      name: 'Réseau Wi-Fi et câblage',
      description:
        'Extension Wi-Fi, points d\'accès, tirage de câbles Ethernet. Étude sur place pour particuliers et TPE.',
    },
    '/antennes': {
      name: 'Antennes TNT et satellite',
      description:
        'Installation et dépannage d\'antennes TNT et parabolique. Conseils avant travaux ou rénovation.',
    },
    '/accompagnement-informatique': {
      name: 'Accompagnement informatique',
      description:
        'Sauvegarde, optimisation, formation et anticipation numérique à domicile pour particuliers et TPE.',
    },
  },

  services: {
    featured: [
      {
        href: '/video-surveillance',
        title: 'Caméras & alarmes',
        description:
          'Surveillance IP <strong>sans abonnement</strong>, alarmes connectées, live et différé depuis votre smartphone.',
        image: '/images/camera-setup.webp',
      },
      {
        href: '/reseau',
        title: 'Réseau',
        description:
          'Wi-Fi fiable partout chez vous, tirage de câbles et réseau filaire pour particuliers et TPE.',
        image: '/images/installation-tools.webp',
      },
    ],
    secondary: [
      {
        href: '/antennes',
        title: 'Antennes',
        description: 'TNT par antenne ou parabole, conseils avant travaux ou rénovation.',
      },
      {
        href: '/accompagnement-informatique',
        title: 'Informatique',
        description: 'Sauvegarde, optimisation, formation et anticipation en cas d\'urgence numérique.',
      },
    ],
  },

  realisations: [
    { title: 'Caméras IP', location: 'Roanne', image: '/images/camera-setup.webp' },
    { title: 'Alarme connectée', location: 'Roanne', image: '/images/cctv-concept.webp' },
    { title: 'Réseau Wi-Fi', location: 'Lyon', image: '/images/camera-setup-2.webp' },
    { title: 'Câblage réseau', location: 'Clermont-Ferrand', image: '/images/installation-tools.webp' },
    { title: 'Antenne TNT', location: 'Roanne', image: '/images/camera-setup.webp' },
    { title: 'Accompagnement informatique', location: 'Loire', image: '/images/installation-tools.webp' },
  ],

  styles: {
    h1: 'text-3xl md:text-4xl font-bold text-primary mb-8',
    h2: 'text-2xl font-bold text-primary mb-6',
    h3: 'text-xl font-semibold text-primary mb-4',
    h2Sub: 'text-lg font-semibold text-primary mb-2',
    portrait:
      'mx-auto rounded-3xl w-full max-w-[26rem] aspect-square object-cover shadow-2xl border-8 border-white mb-8',
    secondaryButton:
      'inline-flex items-center justify-center leading-none px-8 py-3.5 rounded-full text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all',
    ctaButton:
      'inline-flex items-center justify-center leading-none bg-cta hover:opacity-90 text-white px-8 py-3.5 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg',
    ctaButtonSm:
      'px-4 py-2 sm:px-6 sm:py-2.5 bg-cta hover:opacity-90 text-white text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap',
    ctaButtonFooter:
      'inline-block mt-4 px-6 py-3 bg-cta text-white rounded-full text-sm hover:opacity-90',
  },
};
