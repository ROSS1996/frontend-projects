/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-desktop': "url('./assets/bg-header-desktop.svg')",
        'header-mobile': "url('./assets/bg-header-mobile.svg')",
      },
      colors: {
        desaturatedDark: 'hsl(180, 29%, 50%)',
        lightGrayishCyan: 'hsl(180, 52%, 96%)',
        lightGrayishCyanTwo: 'hsl(180, 31%, 95%)',
        darkGrayishCyan: 'hsl(180, 8%, 52%)',
        vDarkGrayishCyan: 'hsl(180, 14%, 20%)',
      },
      fontFamily: {
        leagueSpartan: ['Century Gothic', 'sans-serif'],
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        filter: '1fr 50px',
      },
    },
  },
  plugins: [],
};
