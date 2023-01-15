'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9fc19ee97d5f441b3cb8d53848e1400e",
"assets/assets/icons/app-logo.png": "827b418e8d4abd42e19e05321fff0be6",
"assets/assets/png/c++.png": "a4f63d922d33956d76ae675fb118abef",
"assets/assets/png/c-sharp.png": "a5872eacff1e2e8cd604b3ba6c65c6c8",
"assets/assets/png/c.png": "7eb89e32dcccc414eb6f82a669d8f5cb",
"assets/assets/png/css.png": "a8e534a7f972531d2b3596e38f292e89",
"assets/assets/png/dart.png": "f3e99dc3d9b19e3efd6f053e2400fcbc",
"assets/assets/png/go.png": "b22728d6eabd02474e85820463c7968b",
"assets/assets/png/html.png": "25c018603ebf0e842a12b3917e920d4f",
"assets/assets/png/java.png": "06c28c73d7ac552decd14c5eb9e4a429",
"assets/assets/png/javascript.png": "45011016666c13b54911dcdbf2904cfb",
"assets/assets/png/kotlin.png": "4e49af9c0616d82b1c759c8c477189b8",
"assets/assets/png/lua.png": "e6c76a308f2d34ea70cbdda41bb97269",
"assets/assets/png/objective-c.png": "f53cb9ae1512d500dde96b95262b2c59",
"assets/assets/png/perl.png": "4f54e1421154cd3bd93057348934f326",
"assets/assets/png/php.png": "ddb2f0a36d05fcccd2bde112f83bfad1",
"assets/assets/png/python.png": "98fcf310ba0ee050720acde4bbbae1f7",
"assets/assets/png/ruby.png": "3114292e2f4c1f86d9d4cb74b3a05490",
"assets/assets/png/rust.png": "47911b5f6634a025220b9c252e82e19e",
"assets/assets/png/swift.png": "c656f424f163a635fa7e0b53a6c6aa8d",
"assets/assets/png/typescript.png": "81ee2689516416251f4d1cf15b91f4be",
"assets/assets/snippets/C/CodeSnippets.md": "6f05bdfe75a2a7458dddbe1c913e9feb",
"assets/assets/snippets/C++/CodeSnippets.md": "0eababe108c0f66fb42d8db5c88de08b",
"assets/assets/snippets/C-sharp/CodeSnippets.md": "3a07dbe456099f0bcbea82481fdbe681",
"assets/assets/snippets/CSS/CodeSnippets.md": "669a7b365a14fd2a83dc4afd8ddccd97",
"assets/assets/snippets/Dart/CodeSnippets.md": "2283fcf9dec3379180277707c5297e6d",
"assets/assets/snippets/Go/CodeSnippets.md": "d844470111ba9c38e87791a28a384517",
"assets/assets/snippets/HTML/CodeSnippets.md": "8454c90cd1eb688d122cc8686ea9db92",
"assets/assets/snippets/Java/CodeSnippets.md": "cfb58d0f8e26d407b8c7769f03bae333",
"assets/assets/snippets/JavaScript/CodeSnippets.md": "39abd8384f53d472fc98ea170dcdf59b",
"assets/assets/snippets/Kotlin/CodeSnippets.md": "9fb7e845b3f4fbdb537895eb7dd05632",
"assets/assets/snippets/Lua/CodeSnippets.md": "53abe15e39f3d09a0a7e6763ee81e43e",
"assets/assets/snippets/Objective-C/CodeSnippets.md": "4434043cdc70bacc63d0f4bbe9262778",
"assets/assets/snippets/Perl/CodeSnippets.md": "8857ae436e56caa82f5f61c984a22ffa",
"assets/assets/snippets/PHP/CodeSnippets.md": "300319524cd669fea49fa8490e86d173",
"assets/assets/snippets/Python/CodeSnippets.md": "ee2fe1945773c9adf9392e902677a7ec",
"assets/assets/snippets/Ruby/CodeSnippets.md": "2f8111853e920639a2fed555d8a02150",
"assets/assets/snippets/Rust/CodeSnippets.md": "778d7de6a361b709f60bafd21e587aef",
"assets/assets/snippets/Swift/CodeSnippets.md": "8c77b0ff67c91436e9aaed33c6e2c106",
"assets/assets/snippets/TypeScript/CodeSnippets.md": "28f1df75a6aafb65d322196147266218",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a6a5ba25834698780dc9fdaff4d41902",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "c76dc49a1add0ad16420cf6a088e3daa",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "f9b7d5c652173fddbd18f99530fb1c93",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "6e730cfd52ad54288dc5ce7534487240",
"icons/Icon-512.png": "1b1d7dea4eb772c84929b3fba19824dd",
"icons/Icon-maskable-192.png": "6e730cfd52ad54288dc5ce7534487240",
"icons/Icon-maskable-512.png": "1b1d7dea4eb772c84929b3fba19824dd",
"index.html": "c7dbd357e25d2ac68effbb18a03ccf42",
"/": "c7dbd357e25d2ac68effbb18a03ccf42",
"main.dart.js": "d64192af107345400b687ef756f67fd5",
"manifest.json": "84d202c43a996e22ebfd29a8b2a8dc20",
"version.json": "ea3864bb20d6739a9fed7d7b736957ab"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
