import { defineConfig } from 'astro/config';
import WindiCSS from 'vite-plugin-windicss'

import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [WindiCSS()],
  },
  integrations: [svelte(), sitemap()],
});
