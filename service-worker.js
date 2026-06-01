const CACHE_NAME = "calculadora-pediatrica-emergencia-v3";

const APP_SHELL = [
  "./",
  "./index.html",
  "./privacy.html",
  "./manifest.json",
  "./logo.png",
  "./icon-192.png",
  "./icon-512.png",
  "./maskable-icon-512.png",
  "./referencias/curvas_oms.pdf",
  "./referencias/fanta_bmi_charts_espanol.pdf",
  "./referencias/presentacion_curvas.pdf"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
        APP_SHELL.map(url =>
          cache.add(url).catch(error => {
            console.warn("No se pudo cachear:", url, error);
          })
        )
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) return cachedResponse;

        return fetch(event.request)
          .then(networkResponse => {
            const responseClone = networkResponse.clone();

            if (networkResponse.ok) {
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseClone));
            }

            return networkResponse;
          })
          .catch(() => caches.match("./index.html"));
      })
  );
});
