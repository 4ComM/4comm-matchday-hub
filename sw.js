// Service worker do Hub Matchday — rede primeiro, cache como fallback
// (garante que o time sempre veja a versão mais nova quando online,
// mas o hub abre mesmo sem conexão no estádio).
const CACHE = 'hub-matchday-v1';
const SHELL = ['./', 'index.html', 'data.js', 'template_central.html', 'manifest.webmanifest'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      const clone = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
