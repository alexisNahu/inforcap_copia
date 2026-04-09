// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

import vercel from '@astrojs/vercel/serverless'; // Importación recomendada para SSR

// https://astro.build/config
export default defineConfig({
  output: 'server',

  // Eliminamos la línea duplicada que decía adapter: 'vercel()' como string
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
