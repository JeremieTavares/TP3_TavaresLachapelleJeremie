const mix = require('laravel-mix');
mix.ts('./resources/js/main.ts', './public/js/main.js')
    .ts('./resources/js/views/job-form.ts', './public/js/views/job-form.js')
    .sass('./resources/scss/styles.scss', './public/css/styles.css')
    .sass('./resources/scss/views/career.scss', './public/css/views/career.css');
// .postCss('./resources/scss/styles.css', './public/css/styles.css', [
//     require('tailwindcss'),
//     require('autoprefixer')
// ])
