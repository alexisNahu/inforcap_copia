import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static', // Genera HTML plano en la carpeta /dist

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
