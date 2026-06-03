import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react'

export default defineConfig({
  output: 'server',

  adapter: vercel({
    webAnalytics: {
      enabled: false,
    },
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
