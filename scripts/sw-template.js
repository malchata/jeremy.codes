const cacheName = "v${cacheVersion}";
const cacheSeparator = "::";
const cachedAssets = ${JSON.stringify(cachedAssets)};
const staticAssets = /\\.(woff2|css|js|gif|webp|png|svg|jpe?g|txt|ico)$/i;

// Precache top-level pages
cachedAssets.push("/", "/writing/", "/projects/", "/contact/");

self.addEventListener("install", installCallback);
self.addEventListener("fetch", fetchCallback);
self.addEventListener("activate", activateCallback);

/*** BEGIN INSTALL METHOD ***/

function installCallback (event) {
  event.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll(cachedAssets);
  }).then(() => {
    return self.skipWaiting();
  }));
}

/*** BEGIN FETCH METHODS ***/

function fetchCallback (event) {
  const request = event.request;

  // Only GET requests up in here!
  if (request.method !== "GET" || request.method.indexOf("?") !== -1) {
    // Just pass the request through to the browser
    return;
  }

  // HTML requests
  if (request.headers.get("Accept").includes("text/html")) {
    event.respondWith(fetchHTML(request));

    return;
  }

  // Static asset requests
  if (staticAssets.test(request.url)) {
    event.respondWith(fetchStaticAsset(request));
  }
}

function fetchHTML (request) {
  // Hit the network first
  return fetch(request).then(response => {
    caches.open(cacheName).then(cache => {
      cache.put(request, response);
    });

    return response.clone();
  }).catch(() => {
    // Fall back to the cache if we're offline
    return caches.match(request);
  });
}

function fetchStaticAsset (request) {
  return caches.match(request).then(cachedResponse => {
    return cachedResponse || fetch(request).then(fetchedResponse => {
      caches.open(cacheName).then(cache => {
        cache.put(request, fetchedResponse);
      });

      return fetchedResponse.clone();
    });
  });
}

/*** BEGIN ACTIVATE METHOD ***/

function activateCallback (event) {
  event.waitUntil(caches.keys().then(keys => Promise.all([
    keys.filter(key => {
      return key !== cacheName;
    }).map(key => {
      return caches.delete(key);
    }),
    self.clients.claim()
  ])));
}
