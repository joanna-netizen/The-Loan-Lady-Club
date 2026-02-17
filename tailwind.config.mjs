/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'warm-cream': '#F5F0E8',
        'warm-taupe': '#E8E2D9',
        'warm-gold': '#B8860B',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.2' }],
        'section': ['2rem', { lineHeight: '1.3' }],
        'subsection': ['1.5rem', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
};
