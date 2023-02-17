/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'poke-dark': '#0A071B',
        'poke-gray': '#8C87A2',
        'poke-grass': '#49D0B0',
        'poke-fire': '#FC6C6D',
        'poke-water': '#76BEFE',
        'poke-lighting': '#FFD76F',
        softpur: '#3D3762',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '50px',
        xl: '120px',
      },
    },
    fontFamily: {
      poppins: 'Poppins, sans-serif',
    },
  },
  plugins: [],
}
