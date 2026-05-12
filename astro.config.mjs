import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Cambia esto
import path from 'path';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // output: 'server',
  // adapter: vercel(),
  integrations: [tailwind()],
  image: {
      domains: ['inforcap.fincreativo.com'],
  },
  vite: {
    // ELIMINA tailwindcss() de aquí si usas la integración arriba
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});
