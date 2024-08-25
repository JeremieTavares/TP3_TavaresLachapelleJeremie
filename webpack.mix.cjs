const mix = require('laravel-mix');
mix.ts('./src/js/main.ts', './public/js/main.js')
    .ts('./src/js/pages/job-form.ts', './public/js/pages/job-form.js')
    .sass('./src/styles/scss/styles.scss', './public/css/styles.css')
    .sass('./src/styles/scss/pages/career.scss', './public/css/pages/career.css');
// .postCss('./src/styles/styles.css', './public/css/styles.css', [
//     require('tailwindcss'),
//     require('autoprefixer')
// ])
