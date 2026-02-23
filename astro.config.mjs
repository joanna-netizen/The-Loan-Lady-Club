// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://loanladyclub.com',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwind(), sitemap()],
});
