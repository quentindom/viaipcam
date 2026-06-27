// Single source of truth — site-wide only. Page content stays in pages.

export const site = {
  url: 'https://viaipcam.pages.dev',
  lang: 'fr',

  name: 'VIAIPCAM',
  person: {
    full: 'Vincent Domenjoud',
  },
  tagline: 'Installateur indépendant de caméras, réseau, antennes et informatique',
  slogan: 'Surveillance, réseau et sérénité numérique en Auvergne-Rhône-Alpes',
  schemaDescription:
    'Vincent Domenjoud, installateur indépendant : caméras IP, alarmes, réseau Wi-Fi et câblage, antennes et accompagnement informatique à Roanne, Lyon, Clermont-Ferrand et en Auvergne-Rhône-Alpes.',

  contact: {
    email: 'contact@viaipcam.fr',
    phone: '+33685762772',
    phoneDisplay: '06 85 76 27 72',
    phoneWhatsApp: '33685762772',
  },

  address: {
    locality: 'Roanne',
    region: 'Auvergne-Rhône-Alpes',
    country: 'FR',
  },
  areaServed: ['Roanne', 'Lyon', 'Clermont-Ferrand', 'Loire', 'Auvergne-Rhône-Alpes'],

  legal: {
    copyrightYear: 2026,
  },

  assets: {
    favicon: '/favicon.svg',
    logo: '/logo.svg',
    logoLight: '/logo-light.svg',
    logoMark: '/logo-mark.svg',
    logoAlt: 'VIAIPCAM — Vincent Domenjoud, installateur indépendant',
    portrait: '/images/vincent-domenjoud.webp',
    portraitAlt: 'Vincent Domenjoud, installateur indépendant à Roanne',
    ogImage: '/og-image.png',
    ogImageAlt: 'VIAIPCAM — Vincent Domenjoud, installateur indépendant en Auvergne-Rhône-Alpes',
  },

  seo: {
    titleSuffix: 'Vincent Domenjoud',
    locale: 'fr_FR',
  },

  social: {
    facebook: 'https://www.facebook.com/viaipcam/',
    linkedin: 'https://www.linkedin.com/in/vincent-d-860368b/',
  },

  googleBusiness:
    'https://www.google.com/maps/place/Viaipcam+Roanne/@46.0407547,4.0708441,17z/data=!4m6!3m5!1s0x47f40f67fc9dc661:0xa92032749efed469!8m2!3d46.0407547!4d4.0708441!16s%2Fg%2F11ghpp4pfw',

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
    ctaButton:
      'inline-flex items-center justify-center leading-none bg-cta hover:opacity-90 text-white px-8 py-3.5 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg',
    ctaButtonSm:
      'px-4 py-2 sm:px-6 sm:py-2.5 bg-cta hover:opacity-90 text-white text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap',
    ctaButtonFooter:
      'inline-block mt-4 px-6 py-3 bg-cta text-white rounded-full text-sm hover:opacity-90',
  },
};
