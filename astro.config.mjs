// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.js';

export default defineConfig({
  site: site.url,
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith('/merci'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
