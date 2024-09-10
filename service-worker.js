const CACHE_NAME = 'mimon-ver-1';

const FILES_TO_CACHE = [
    '/',
    'index.html',
    'resources/views/jobs/career.html',
    'resources/views/jobs/job-form.html',
    'resources/views/jobs/partials/application-confirmation.html',
    'resources/views/support.html',
    'public/css/styles.css',
    'public/css/views/career.css',
    'public/js/main.js',
    'public/js/views/job-form.js',
    'public/js/views/career.js',
    'manifest.json',
    'offline.html',
    'public/images/cabin-in-the-wood-destination.png',
    'public/images/call-center-crop.jpg',
    'public/images/call-center.jpg',
    'public/images/dev-working-in-office.jpg',
    'public/images/download_apple_store_dark_fr_CA.svg',
    'public/images/download_google_store_dark_fr_CA.png',
    'public/images/island-darken-blur-low-size.jpg',
    'public/images/island-destination.png',
    'public/images/mimon_logo.png',
    'public/images/north-quebec-destination.png',
    'public/images/thailand-pool-destination.png',
    'public/images/cities/jamaica.jpg',
    'public/images/cities/los-angeles.jpg',
    'public/images/cities/israel.jpg',
    'public/images/cities/portugal.jpg',
    'public/images/cities/france.jpg',
    'public/images/cities/uk.jpg',
    'public/images/cities/tahiti.jpg',
    'public/images/cities/japan.jpg',
    'public/images/places/Bethel/bethel-interior-view.png',
    'public/images/places/Bethel/bethel-back-view.png',
    'public/images/places/Bethel/bethel-front-view.png',
    'public/images/places/Bethel/bethel-side-view.png',
    'public/images/places/Farmington/farmington-front-view2.png',
    'public/images/places/Farmington/farmington-interior-view.png',
    'public/images/places/Farmington/farmington-front-view.png',
    'public/images/places/Farmington/farmington-front-night-view.png',
    'public/images/places/Venise-En-QC/venise-en-qc-lac.png',
    'public/images/places/Venise-En-QC/venise-en-qc-front-view.png',
    'public/images/places/Venise-En-QC/venise-en-qc-aerial-view.png',
    'public/images/places/Venise-En-QC/venise-en-qc.png',
    'public/images/places/Montreal/montreal-saloon-view.png',
    'public/images/places/Montreal/montreal-inside-view.png',
    'public/images/places/Montreal/montreal-city-view.png',
    'public/images/places/Montreal/montreal-top-view.png',
    'public/images/places/Huntsville/huntsville-back-view.png',
    'public/images/places/Huntsville/huntsville-hottub-view.png',
    'public/images/places/Huntsville/huntsville-aerial-view.png',
    'public/images/places/Huntsville/huntsville-shower-view.png',
    'public/images/places/Beloeil/beloeil-lake-view.png',
    'public/images/places/Beloeil/beloeil-church-view.png',
    'public/images/places/Beloeil/beloeil-aerial-view.png',
    'public/images/places/Beloeil/beloeil-inside-view.png',
    'public/images/places/Pontevedra/pontevedra-patio-view.png',
    'public/images/places/Pontevedra/pontevedra-back-view.png',
    'public/images/places/Pontevedra/pontevedra-window-view.png',
    'public/images/places/Pontevedra/pontevedra-window-view2.png',
    'public/images/places/St-Calixte/st-calixte-pool.png',
    'public/images/places/St-Calixte/st-calixte-back.png',
    'public/images/places/St-Calixte/st-calixte-front-view.png',
    'public/images/places/St-Calixte/st-calixte-front-lake.png',
    'public/images/places/Galway/galway-door-view.png',
    'public/images/places/Galway/galway-front-view.png',
    'public/images/places/Galway/galway-back-view.png',
    'public/images/places/Galway/galway-side-view.png',
    'public/images/places/Pownal/pownal-front-view.png',
    'public/images/places/Pownal/pownal-interior-view2.png',
    'public/images/places/Pownal/pownal-interior-view.png',
    'public/images/places/Pownal/pownal-bed-view.png',
    'public/images/places/LenoxUSA/lenox-kitchen.png',
    'public/images/places/LenoxUSA/lenox-yard.png',
    'public/images/places/LenoxUSA/lenox-back-view.png',
    'public/images/places/LenoxUSA/lenox-front-view.png',
    'public/images/places/Springfield/springfield-aerial-view.png',
    'public/images/places/Springfield/springfield-inside-view.png',
    'public/images/places/Springfield/springfield-front-view.png',
    'public/images/places/Springfield/springfield-side-view.png',
    'public/images/places/MooresvilleUSA/mooresville-pool-view.png',
    'public/images/places/MooresvilleUSA/mooresville-front-view.png',
    'public/images/places/MooresvilleUSA/mooresville-back-view.png',
    'public/images/places/MooresvilleUSA/mooresville-aerial-view.png',
    'public/images/places/IsleOfPalmsUSA/isleofplams-aerial-view.png',
    'public/images/places/IsleOfPalmsUSA/isleofplams-side-view.png',
    'public/images/places/IsleOfPalmsUSA/isleofplams-front-view.png',
    'public/images/places/IsleOfPalmsUSA/isleofplams-pool-view.png',
    'public/images/places/Broadcove/broadcove-aerial-view.png',
    'public/images/places/Broadcove/broadcove-interior-view.png',
    'public/images/places/Broadcove/broadcove-aerial-view2.png',
    'public/images/places/Broadcove/broadcove-mountain-view.png',
    'public/images/screenshots/narrow/screenshot-homes.png',
    'public/images/screenshots/narrow/screenshot-cities.png',
    'public/images/screenshots/narrow/screenshot-herosection.png',
    'public/images/screenshots/wide/screenshot-homes.png',
    'public/images/screenshots/wide/screenshot-cities.png',
    'public/images/screenshots/wide/screenshot-herosection.png',
    'public/icons/maskable_icon_x384.png',
    'public/icons/favicon-16x16.png',
    'public/icons/maskable_icon_x192.png',
    'public/icons/maskable_icon_x48.png',
    'public/icons/maskable_icon_x144.png',
    'public/icons/maskable_icon_x72.png',
    'public/icons/android-chrome-192x192.png',
    'public/icons/apple-touch-icon.png',
    'public/icons/android-chrome-512x512.png',
    'public/icons/maskable_icon_x128.png',
    'public/icons/maskable_icon_x512.png',
    'public/icons/maskable_icon_x96.png',
    'public/icons/apple-touch-icon-144x144.png',
    'public/icons/favicon-32x32.png'
];


self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] STEP 1: Install');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Caching app files');
            return cache.addAll(FILES_TO_CACHE);
        }).catch((error) => {
        })
    );
    self.skipWaiting(); // Force activation of the new Service Worker
});


self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] STEP 2: Activate');
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache:', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim(); // claim control of clients
});


self.addEventListener('fetch', event => {
    // Only handle requests with a supported scheme (http or https) && Ignore unsupported schemes like chrome-extension://)
    if (!event.request.url.startsWith('http')) {
        console.log('[ServiceWorker] Unsupported request scheme, skipping cache:', event.request.url);
        return
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) { // Cache hit - return response (content served from cache)
                    console.log('[ServiceWorker] Found and will be serve from cache:', event.request.url);
                    return response;
                }

                // Fetch from network and cache if request is navigation or successful
                return fetch(event.request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        // Only cache successful responses
                        if (networkResponse && networkResponse.status === 200) {
                            console.log('[ServiceWorker] Add new item to cache:', event.request.url);
                            // Clone the request because it's a stream that can only be consumed once
                            cache.put(event.request, networkResponse.clone());
                        }
                        return networkResponse;
                    });
                });
            })
            .catch(error => {
                // console.error('[ServiceWorker] Error in fetch handler:', error);
                // Fallback to offline page for navigation requests
                if (event.request.mode === 'navigate') {
                    console.log('[ServiceWorker] Fallback to offline page:', event.request.url);
                    return caches.match('offline.html');
                }
            })
    );
});
