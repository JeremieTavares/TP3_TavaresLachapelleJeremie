/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    './index.html',
    './resources/views/**/*.html',
    './resources/**/*.{js,ts,jsx,tsx,css,scss}',
    './public/css/styles.css',
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    colors: {
      ...colors,
      red: {
        ...colors.red,
        DEFAULT: '#EF3B5D',
      },
      black: {
        ...colors.black,
        DEFAULT: '#3e3939',
      },
      white: '#f1f1f1',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      container: {
        screens: {
          sm: '620px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        }
      },
      backgroundImage: {
        'island-darken-blur': "url('/public/images/island-darken-blur-low-size.jpg')", // it's a relative path to the public folder
        'dev-working-in-office': "url('/public/images/dev-working-in-office.jpg')", // it's a relative path to the public folder
        'call-center': "url('/public/images/call-center.jpg')", // it's a relative path to the public folder
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs"), require('flowbite/plugin')],
}