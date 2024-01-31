/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        40: '40deg'
      },
      transformOrigin: {
        nav: '1.71429px center'
      },
      colors: {
        base: '#5dd39e'
      },
      animationDelay: {
        1600: '1600ms'
      },
      fontFamily: {
        sans: ['Times New Roman', 'sans-serif']
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animation-delay')]
}
