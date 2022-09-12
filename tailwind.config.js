/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '8px',

    },
    extend: {
      colors: {
        primary: '#84cc16',
        secondary: '#64748b',
        dark: '#0F172A',
      },
      screens: {
        '2xl': '1000px',
      },
    },
  },
  plugins: [],
};
