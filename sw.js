const cacheName = 'v2';

const assets = [
	'index.html',
	'js/main.js',
];

self.addEventListener('install', e => {
	console.log('Service Worker: Installed');
	e.waitUntil(
		caches.open(cacheName).then((cache) => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener('activate', e => {
	console.log('Service Worker: Activated');
});

self.addEventListener('fetch', e => {
	e.respondWith(
		fetch(e.request)
		.then(res => {
			const resClone = res.clone();
			caches.open(cacheName).then(cache => {
				cache.put(e.request, resClone);
			});
			return res;
		})
		.catch(err => caches.match(e.request).then(res => res))
	);
});
