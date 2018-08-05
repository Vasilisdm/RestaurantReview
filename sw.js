let cacheName = 'v1';
let urlsForCaching = [
    "./",
    "swRegistration.js",
    "index.html",
    "restaurant.html",
    "css/styles.css",
    "css/responsive.css",
    "data/restaurants.json",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
    "js/dbhelper.js",
    "js/main.js",
    "js/restaurant_info.js",
];

// During the sw's install event I am adding the assets to cache object
self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(urlsForCaching);
        })
    );
});

//  A fetch event fires every time any resource controlled by a sw is fetched
self.addEventListener('fetch', function(event) {
    event.respondWith(
        // Matching each resource requested from the network with the equivalent available in the cache
        caches.match(event.request).then(function(response) {
            // If the resources is not in the cache it is requested from the network.
            return response || fetch(event.request);
        })
    );
});