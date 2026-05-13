import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import vercel from '@astrojs/vercel';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  // Solo usa SSR y el adaptador si estamos en Vercel
  output: isVercel ? 'server' : 'static',
  adapter: isVercel ? vercel() : undefined,

  integrations: [tailwind()],
  image: {
    domains: ['inforcap.fincreativo.com'],
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});
