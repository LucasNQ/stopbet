/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#121212',
          white: '#FAFAFA',
          red: '#C62828',
          gray: '#BDBDBD',
        },
      },
    },
  },
  plugins: [],
};
