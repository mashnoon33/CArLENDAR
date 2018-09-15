importScripts('./js/workbox-sw.js');


const match = ({url, event}) => {
  return {
    name: 'Workbox',
    type: 'guide',
  };
};

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

workbox.precaching.precacheAndRoute([

  './css/semantic.min.css',  './css/style_purged.css',  './css/style.css',  './css/themes/default/assets/fonts/brand-icons.eot',  './css/themes/default/assets/fonts/brand-icons.svg',  './css/themes/default/assets/fonts/brand-icons.ttf',  './css/themes/default/assets/fonts/brand-icons.woff',  './css/themes/default/assets/fonts/brand-icons.woff2',  './css/themes/default/assets/fonts/icons.eot',  './css/themes/default/assets/fonts/icons.otf',  './css/themes/default/assets/fonts/icons.svg',  './css/themes/default/assets/fonts/icons.ttf',
   './css/themes/default/assets/fonts/icons.woff',  './css/themes/default/assets/fonts/icons.woff2',  './css/themes/default/assets/fonts/outline-icons.eot',  './css/themes/default/assets/fonts/outline-icons.svg',
    './css/themes/default/assets/fonts/outline-icons.ttf',  './css/themes/default/assets/fonts/outline-icons.woff',  './css/themes/default/assets/fonts/outline-icons.woff2',  './css/themes/default/assets/images/flags.png',
     './data/Classes.json',  './images/icons/icon-128x128.png',
     './test/', './test/script.js',
    './images/icons/icon-144x144.png',  './images/icons/icon-152x152.png',  './images/icons/icon-192x192.png',  './images/icons/icon-384x384.png',  './images/icons/icon-512x512.png',  './images/icons/icon-72x72.png',
    './images/icons/icon-96x96.png',  './index.html',  './js/ics.deps.min.js',  './js/scripts.js',  './js/semantic.js',  './manifest.json', './'

    ]);

workbox.routing.registerRoute(
  match,
  workbox.strategies.networkFirst()
);

}

else {
  console.log(`booo`);

}
