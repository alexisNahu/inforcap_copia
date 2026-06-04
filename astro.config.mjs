import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import react from '@astrojs/react';
import node from '@astrojs/node'; // 1. Cambiaste la importación de vercel por node

export default defineConfig({
  output: 'server',

  // 2. Cambiaste el adaptador de vercel por el de node en modo standalone
  adapter: node({
    mode: 'standalone',
  }),

  integrations: [tailwind(), react()],

  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'inforcap.fincreativo.com',
    }],
  },

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});
