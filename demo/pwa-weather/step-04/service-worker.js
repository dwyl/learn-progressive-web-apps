var cacheName = 'weatherPWA-step-5-1';
var filesToCache = [];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell', cache);
      return cache.addAll(filesToCache);
    })
  );
});
