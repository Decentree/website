import { defineConfig } from 'astro/config';
import WindiCSS from 'vite-plugin-windicss';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://decentree.com",
  sitemap: true,
  vite: {
    plugins: [WindiCSS()]
  },
  integrations: [svelte(), sitemap(), partytown()]
});