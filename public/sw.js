// This is the "Offline page" service worker

const cacheName = "pwabuilder-page";
const precacheResources = [
    '/',
    'index.html',
    'manifest.json',
    'favicon.ico'
];

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function (event) {
  console.log("PWA Install Event processing");
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName)
        .then(cache => {
            return cache.addAll(precacheResources);
    })
  );
});

// If any fetch fails, it will show the offline page.
self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(async () => {
            if (event.request.destination === "document") {
                return caches.match('index.html');
            } else
                return caches.match(event.request);
        }),
    );
});