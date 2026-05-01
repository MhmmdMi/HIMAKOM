const CACHE_NAME = "himakom-v2"; // Berubah ke v2 untuk memaksa update di HP
const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/script.js",
  "/js/supabase-loader.js",
  "/js/chatbot.js",
  "/manifest.json",
  "/images/HIMAKOM.jpeg"
];

// Install Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Caching assets...");
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Memaksa SW baru langsung aktif
  );
});

// Activate Service Worker & Clean old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Mengambil kendali client segera
  );
});

// Fetch Strategy: Network First for API, Cache First for Assets
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Jika permintaan ke Supabase API, gunakan Network First
  if (url.hostname.includes("supabase.co")) {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Untuk aset statis lainnya, gunakan Cache First
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request).then(fetchRes => {
          return caches.open(CACHE_NAME).then(cache => {
            // Jangan cache file yang bukan dari origin kita atau gagal
            if (event.request.url.startsWith(self.location.origin)) {
              cache.put(event.request, fetchRes.clone());
            }
            return fetchRes;
          });
        });
      })
  );
});
