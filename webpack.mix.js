const mix = require('laravel-mix');

mix.setPublicPath('./dist')
  .setResourceRoot('./')
  .disableNotifications()
  .options({
    processCssUrls: true,
  })
  .sass('src/lightbox.scss', 'dist/lightbox.min.css')
  .scripts('src/js/lightbox.js', 'dist/js/lightbox.min.js')
  .scripts([ 'node_modules/jquery/dist/jquery.js', 'src/js/lightbox.js' ], 'dist/js/lightbox-plus-jquery.js')
  .copy('src/images', 'dist/images')
