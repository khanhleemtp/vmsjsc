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
        primary: '#00aeef',
        secondary: '#2e3192'
      },
      animationDelay: {
        1600: '1600ms'
      },
      fontFamily: {
        title: ['Oswald', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif']
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animation-delay')]
}
