const mix = require('laravel-mix');
mix.ts('./resources/js/main.ts', './public/js/main.js')
    .ts('./resources/js/views/job-form.ts', './public/js/views/job-form.js')
    .ts('./resources/js/views/career.ts', './public/js/views/career.js')
    .sass('./resources/scss/styles.scss', './public/css/styles.css')
    .sass('./resources/scss/views/career.scss', './public/css/views/career.css');