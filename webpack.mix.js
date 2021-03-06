const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/index.js', 'public/js').react();

mix.sass('resources/scss/fonts/comfortaa/comfortaa.scss', 'public/css');
mix.sass('resources/scss/fonts/material-icons/material-icons.scss', 'public/css');

mix.disableSuccessNotifications();
if (mix.inProduction()) mix.version();
