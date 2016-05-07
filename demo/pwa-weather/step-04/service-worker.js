var cacheName = 'weatherPWA-step-5-1';
var filesToCache = [
  '/',
  'index.html',
  'scripts/app.js',
  'styles/inline.css',
  'images/clear.png',
  'images/cloudy-scattered-showers.png',
  'images/cloudy.png',
  'images/fog.png',
  'images/ic\_add\_white\_24px.svg',
  'images/ic\_refresh\_white\_24px.svg',
  'images/partly-cloudy.png',
  'images/rain.png',
  'images/scattered-showers.png',
  'images/sleet.png',
  'images/snow.png',
  'images/thunderstorm.png',
  'images/wind.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell', cache);
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        console.log('[ServiceWorker] Removing old cache', key);
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});
