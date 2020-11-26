var CACHE_NAME = 'zetianul-cache-v1';

var urlsToCache = [
  '/dist/',
  '/dist/index.html',
  '/dist/bundle.js',
  '/dist/351.bundle.js',
]



self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      console.log('opened cache');
      return cache.addAll(urlsToCache);
    })
  )
});


self.addEventListener('fetch', function(event) {

  console.log('fetch', event)

  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function (err) {
        console.log(err)
      });
    }
  }));
});