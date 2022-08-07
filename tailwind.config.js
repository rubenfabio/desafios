const withAnimations = require('animated-tailwindcss')
module.exports = withAnimations({
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'Lexend-Deca': ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        desafio01: {
          Dark: '#574AE8',
          Light: '#3EA1DB',
          white: {
            200: '#F3F5F7',
          },
          'gray-dark': '#1A202C',
          gray: '#717171',
        },
      },
    },
  },
  plugins: [],
})
