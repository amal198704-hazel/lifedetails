/* ⭐ SAFE SERVICE WORKER FOR MAP + PWA */

self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", () => {
    self.clients.claim();
});

/* DO NOT INTERCEPT NETWORK REQUESTS */