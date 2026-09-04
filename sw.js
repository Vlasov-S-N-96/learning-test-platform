const CACHE_VERSION = 'v1.0.1';
const CACHE_NAME = `qa-cache-${CACHE_VERSION}`;

// Все файлы, которые должны кешироваться для офлайн‑работы
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './open-nagish.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-180.png'
];

// Установка — кешируем ресурсы
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Кеширование ресурсов');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Активация — очищаем старые кеши
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('[SW] Удалён старый кеш:', name);
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Перехват запросов — отдаём из кеша, если есть
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Если ресурс есть в кеше — отдаём его
        if (response) {
          return response;
        }
        // Иначе идём в сеть и сохраняем в кеш (для будущих запросов)
        return fetch(event.request).then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }).catch(() => {
          // Если сеть недоступна и ресурса нет в кеше — можно показать fallback
          // (опционально, здесь просто вернём ошибку)
        });
      })
  );
});