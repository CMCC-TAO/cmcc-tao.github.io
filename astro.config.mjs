import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// This repository (cmcc-tao.github.io) is a GitHub Pages *user/org* site,
// served from the domain root. Use base: '/' (only switch to a sub-path
// if you later bind a custom domain under a project-style URL).
export default defineConfig({
  base: '/',
  site: 'https://cmcc-tao.github.io',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
