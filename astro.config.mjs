// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import path from 'path'; // Importamos path para manejar las rutas

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: 'vercel()',
  image: {
      domains: ['inforcap.fincreativo.com'], // Agrega aquí el dominio de tu servidor
    },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },

  adapter: vercel(),
});
