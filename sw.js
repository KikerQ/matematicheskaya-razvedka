const scope = self.registration.scope
const prefix = 'math-expedition-assets:' + new URL(scope).pathname + ':'
const cacheName = prefix + "68bf501df35a83"
const files = ["./assets/index-Bjr7V7EM.js","./assets/index-C3gV3UI6.css","./assets/nunito-cyrillic-wght-normal-CY6AOgYE.woff2","./assets/nunito-latin-wght-normal-BzFMHfZw.woff2","./font-license.txt","./index.html","./manifest.webmanifest"]
self.addEventListener('install', event => event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(files)).then(() => self.skipWaiting())))
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(prefix) && key !== cacheName).map(key => caches.delete(key)))).then(() => self.clients.claim())))
self.addEventListener('fetch', event => {
  const request = event.request
  if (request.method !== 'GET' || !request.url.startsWith(scope)) return
  event.respondWith(caches.open(cacheName).then(async cache => {
    if (request.mode === 'navigate') return (await cache.match(new URL('index.html', scope))) || fetch(request)
    return (await cache.match(request)) || fetch(request)
  }))
})
