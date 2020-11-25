var CACHE_NAME = 'zetianul-cache-v1';

var urlsToCache = [
  '/',
  '/index.html',
  '/dist/bundle.js'
]



this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      console.log('opened cache');
      return cache.addAll(urlsToCache);
    })
  )
});


this.addEventListener('fetch', function(event) {
  console.log(event)
  event.respondWith(
    caches.match(event.request)
  );
});