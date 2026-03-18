const CACHE_NAME = 'budget-app-v1';
const assets = ['./', './index.html', './manifest.json', './icon.png'];

// התקנה ושמירת קבצים בסיסיים בזיכרון המטמון
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

// מאפשר לאפליקציה להיפתח גם כשאין אינטרנט
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
