/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './public/**/*.html'
    ],
    theme: {
        extend: {
            colors: {
                bordoInforcap: '#9C2D32',
                amarilloInforcap: '#FFC700',
                naranjaInforcap: '#FF8A00',
                gris: '#6A6969',
                grisClaro: '#A6A6A6',
                grisC: '#cccccc'
            },
            fontFamily: {
                body: ["'Inter'", "sans-serif"],
                petrona: ["'Petrona'", "serif"],
                sacramento: ["'Sacramento'", "cursive"],
            }
        },
    },
    plugins: [],
}
