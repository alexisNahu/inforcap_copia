/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/css',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {

      colors:{
        bordoInforcap: '#9C2D32',
        amarilloInforcap:'#FFC700',
        naranjaInforcap: '#FF8A00',
        gris:'#6A6969',
        grisClaro: '#A6A6A6',
        grisC:'#cccccc'
      },
  
    },

    fontFamily: {
      body: "'Inter', sans-serif",
      petrona: "'Petrona', serif;",
      sacramento: "'Sacramento', cursive;",
  }
    
  },
  plugins: [],
}