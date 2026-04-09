// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import path from 'path'; // Importamos path para manejar las rutas

// https://astro.build/config
export default defineConfig({
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
});
