import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  image: {
    domains: ['inforcap.fincreativo.com'],
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});
