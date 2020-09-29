/* eslint-env node */
/* eslint no-console: "off" */

module.exports = (cacheVersion, cachedAssets) => `
const cacheName = "v${cacheVersion}";
const cachedAssets = ${JSON.stringify(cachedAssets)};

// Precache top-level pages
cachedAssets.push("/", "/writing/", "/projects/", "/contact/");

self.addEventListener("install", event => {
  event.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll(cachedAssets);
  }).then(() => {
    return self.skipWaiting();
  }));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const staticAssets = /\\.(woff2|css|js|gif|avif|webp|png|svg|jpe?g|txt|ico)$/i;

  // Only GET requests up in here!
  if (request.method !== "GET") {
    return;
  }

  // HTML requests
  if (request.headers.get("Accept").includes("text/html")) {
    // Hit the network first
    event.respondWith(fetch(request).then(response => {
      caches.open(cacheName).then(cache => {
        cache.put(request, response);
      });

      return response.clone();
    }).catch(() => {
      // Fall back to the cache if we're offline
      return caches.match(request);
    }));

    return;
  }

  // Static asset requests
  if (staticAssets.test(request.url)) {
    event.respondWith(caches.match(request).then(cachedResponse => {
      return cachedResponse || fetch(request).then(fetchedResponse => {
        caches.open(cacheName).then(cache => {
          cache.put(request, fetchedResponse);
        });

        return fetchedResponse.clone();
      });
    }));

    return;
  }
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => {
    return Promise.all([
      keys.filter(key => {
        return key !== cacheName;
      }).map(key => {
        return caches.delete(key);
      }),
      self.clients.claim()
    ]);
  }));
});
`;
