const mix = require('laravel-mix');
mix.ts('./src/js/main.ts', './public/js/main.js')
.sass('./src/styles/scss/styles.scss', './public/css/styles.css');
// .postCss('./src/styles/styles.css', './public/css/styles.css', [
//     require('tailwindcss'),
//     require('autoprefixer')
// ])
