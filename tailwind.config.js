/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#D4AF37',
          ocre: '#B89F5F',
          bordeaux: '#8B3A50',
        },
        text: {
          main: '#2C2C2C',
          secondary: '#666666',
        },
        bg: {
          cream: '#FFF8F0',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
