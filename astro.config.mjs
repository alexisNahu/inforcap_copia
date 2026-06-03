import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Siempre usa 'server' para consistencia
  output: 'server',

  // El adapter solo es necesario para producción, pero no daña tenerlo siempre
  adapter: vercel({
    // Opcional: configuraciones específicas de Vercel
    webAnalytics: {
      enabled: false,
    },
  }),

  integrations: [tailwind()],

  image: {
    // CORREGIDO: usar remotePatterns en lugar de domains
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
