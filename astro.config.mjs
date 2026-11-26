import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://advancedback.com', // change to your real domain
  integrations: [react(), sitemap({
      filter: (page) => !/\/(404|about)\/?$/.test(new URL(page).pathname),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        const u = new URL(item.url).pathname;
        item.priority = u === '/' ? 1.0 : /^\/(services|appointment|contact-us)\/?/.test(u) ? 0.9 : 0.7;
        return item;
      },
    })],
  vite: {
    plugins: [tailwindcss()],
  },
});
