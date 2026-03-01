// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://loanladyclub.com',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/home/home-loan-options/': '/',
    '/now-tell-me-about-you/': '/contact',
    '/home/blog-posts/': '/',
    '/home/about/': '/about',
    '/tag/home-buying-guide-2026/': '/',
    '/tag/cash-needed-to-buy-a-home/': '/',
    '/funded-6-20-25/': '/',
    '/invest/worksheets/': '/investment-properties',
  },
});