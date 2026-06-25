'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "125e7afb88fc6e009b62824cb432efba",
"assets/AssetManifest.bin.json": "4db310c98082cb226de173cf5548db84",
"assets/FontManifest.json": "cf9253062c7dad721479205ae0bff730",
"assets/fonts/iconfont.json": "e875986324ef2081cd4d2e43429beba5",
"assets/fonts/iconfont.ttf": "1b9a87ebf84cbbcd3fda729cddbd169e",
"assets/fonts/MaterialIcons-Regular.otf": "f6c611ddd6587c1865a7ce5da1ac0b3f",
"assets/images/%25E4%25B8%259C%25E4%25BA%2591%25E5%25BD%25B0%25E4%25BA%25BA_%25E7%2589%25B9%25E8%25AE%25AD.png": "e43329680c87daa3ad8d59b92af7b397",
"assets/images/%25E4%25B8%259C%25E4%25BA%2591%25E5%25BD%25B0%25E4%25BA%25BA_%25E9%2580%259A%25E5%25B8%25B8.png": "9185804c797c11dc15981755093de015",
"assets/images/%25E4%25B8%259C%25E4%25BA%2591%25E7%25BB%2598%25E5%2590%258D_%25E7%2589%25B9%25E8%25AE%25AD.png": "f83061a976130dc4ace4750da619279d",
"assets/images/%25E4%25B8%259C%25E4%25BA%2591%25E7%25BB%2598%25E5%2590%258D_%25E9%2580%259A%25E5%25B8%25B8.png": "d26d8b97de3076ef28d2f49b573e595d",
"assets/images/%25E5%2587%25A4%25E7%25AC%2591%25E6%25A2%25A6_%25E7%2589%25B9%25E8%25AE%25AD.png": "c8ece8a699f9c1aa51f114e909abcde8",
"assets/images/%25E5%2587%25A4%25E7%25AC%2591%25E6%25A2%25A6_%25E9%2580%259A%25E5%25B8%25B8.png": "f531c47adf2a60a00d070897185c84d6",
"assets/images/%25E5%2588%259D%25E9%259F%25B3%25E6%259C%25AA%25E6%259D%25A5_%25E7%2589%25B9%25E8%25AE%25AD.png": "971bd4f67079b7aa1d72b812763421a6",
"assets/images/%25E5%2588%259D%25E9%259F%25B3%25E6%259C%25AA%25E6%259D%25A5_%25E9%2580%259A%25E5%25B8%25B8.png": "b3c766b6737952de843f2d9f5a220162",
"assets/images/%25E5%25A4%25A9%25E9%25A9%25AC%25E5%258F%25B8_%25E9%2580%259A%25E5%25B8%25B8.png": "9cb7a59f6b4533275518a6e0f7f9edc2",
"assets/images/%25E5%25A4%25A9%25E9%25A9%25AC%25E5%2592%25B2%25E5%25B8%258C_%25E7%2589%25B9%25E8%25AE%25AD.png": "5dec3dd34661a7acade576ad0416c1a0",
"assets/images/%25E5%25A4%25A9%25E9%25A9%25AC%25E5%2592%25B2%25E5%25B8%258C_%25E9%2580%259A%25E5%25B8%25B8.png": "cb0a1e34b85bb1b5006628a8fa99e6b6",
"assets/images/%25E5%25AE%25B5%25E5%25B4%258E%25E5%25A5%258F_%25E7%2589%25B9%25E8%25AE%25AD.png": "498aab107c67fc559c92e04290c5598a",
"assets/images/%25E5%25AE%25B5%25E5%25B4%258E%25E5%25A5%258F_%25E9%2580%259A%25E5%25B8%25B8.png": "2a2ceb14d6142da113dd30c666286292",
"assets/images/%25E5%25B0%258F%25E8%25B1%2586%25E6%25B3%25BD%25E5%25BF%2583%25E7%25BE%25BD_%25E7%2589%25B9%25E8%25AE%25AD.png": "49f75193900798dc4d210bb92f39af58",
"assets/images/%25E5%25B0%258F%25E8%25B1%2586%25E6%25B3%25BD%25E5%25BF%2583%25E7%25BE%25BD_%25E9%2580%259A%25E5%25B8%25B8.png": "e2db817203ce751dd82c0a86f60861a8",
"assets/images/%25E5%25B7%25A1%25E9%259F%25B3%25E6%25B5%2581%25E6%25AD%258C_%25E7%2589%25B9%25E8%25AE%25AD.png": "5d74d015419ecf64dca74a3f71905144",
"assets/images/%25E5%25B7%25A1%25E9%259F%25B3%25E6%25B5%2581%25E6%25AD%258C_%25E9%2580%259A%25E5%25B8%25B8.png": "8e15c85cd753868f9da79c67bf033fd5",
"assets/images/%25E6%2597%25A5%25E9%2587%258E%25E6%25A3%25AE%25E5%25BF%2597%25E6%25AD%25A5_%25E9%2580%259A%25E5%25B8%25B8.png": "5c76d083ba000f60cb889ab36aab2411",
"assets/images/%25E6%2597%25A5%25E9%2587%258E%25E6%25A3%25AE%25E9%259B%25AB_%25E7%2589%25B9%25E8%25AE%25AD.png": "9b34564032d9614904af986af05612d9",
"assets/images/%25E6%2597%25A5%25E9%2587%258E%25E6%25A3%25AE%25E9%259B%25AB_%25E9%2580%259A%25E5%25B8%25B8.png": "374e5706b5a13a204912b7bc3045a8fc",
"assets/images/%25E6%2598%259F%25E4%25B9%2583%25E4%25B8%2580%25E6%25AD%258C_%25E7%2589%25B9%25E8%25AE%25AD.png": "4a592369fe6a1f35287228dbdd34cfee",
"assets/images/%25E6%2598%259F%25E4%25B9%2583%25E4%25B8%2580%25E6%25AD%258C_%25E9%2580%259A%25E5%25B8%25B8.png": "0fa7d8905306582bbaa5334f0723d9f5",
"assets/images/%25E6%2599%2593%25E5%25B1%25B1%25E7%2591%259E%25E5%25B8%258C_%25E7%2589%25B9%25E8%25AE%25AD.png": "524d379907fca3cfe93c964ad6328a0d",
"assets/images/%25E6%2599%2593%25E5%25B1%25B1%25E7%2591%259E%25E5%25B8%258C_%25E9%2580%259A%25E5%25B8%25B8.png": "b329c3a9ea799b29892668bf90b462fc",
"assets/images/%25E6%259C%259B%25E6%259C%2588%25E7%25A9%2597%25E6%25B3%25A2_%25E7%2589%25B9%25E8%25AE%25AD.png": "bcec3417ecb8148bf93dc14b428b2e42",
"assets/images/%25E6%259C%259B%25E6%259C%2588%25E7%25A9%2597%25E6%25B3%25A2_%25E9%2580%259A%25E5%25B8%25B8.png": "35081b7b3cacd686431429cfaff18b59",
"assets/images/%25E6%259C%259D%25E6%25AF%2594%25E5%25A5%2588%25E7%259C%259F%25E5%2586%25AC_%25E7%2589%25B9%25E8%25AE%25AD.png": "1f792c6244c629a6354200b2432917b0",
"assets/images/%25E6%259C%259D%25E6%25AF%2594%25E5%25A5%2588%25E7%259C%259F%25E5%2586%25AC_%25E9%2580%259A%25E5%25B8%25B8.png": "71e38d3da9a471f44c9d27ca01294598",
"assets/images/%25E6%25A1%2583%25E4%25BA%2595%25E7%2588%25B1%25E8%258E%2589_%25E7%2589%25B9%25E8%25AE%25AD.png": "4f50cd2fcdd73d71341d3273d7ed3903",
"assets/images/%25E6%25A1%2583%25E4%25BA%2595%25E7%2588%25B1%25E8%258E%2589_%25E9%2580%259A%25E5%25B8%25B8.png": "49be451301132f420aadd1dede0860b0",
"assets/images/%25E6%25A1%2590%25E8%25B0%25B7%25E9%2581%25A5_%25E7%2589%25B9%25E8%25AE%25AD.png": "75e67f7bfe85117696600628054c8bb3",
"assets/images/%25E6%25A1%2590%25E8%25B0%25B7%25E9%2581%25A5_%25E9%2580%259A%25E5%25B8%25B8.png": "ca23cd174aba7877860ba12e53cc52a5",
"assets/images/%25E7%2599%25BD%25E7%259F%25B3%25E6%259D%258F_%25E7%2589%25B9%25E8%25AE%25AD.png": "343bf41dde87266f08c77e7b161b1ab9",
"assets/images/%25E7%2599%25BD%25E7%259F%25B3%25E6%259D%258F_%25E9%2580%259A%25E5%25B8%25B8.png": "f109f1de73b9cfe3cde672966b1f8a38",
"assets/images/%25E7%25A5%259E%25E4%25BB%25A3%25E7%25B1%25BB_%25E9%2580%259A%25E5%25B8%25B8.png": "99d55c7d0f1c133a305267ef81e3264f",
"assets/images/%25E8%258A%25B1%25E9%2587%258C%25E5%25AE%259E%25E4%25B9%2583%25E7%2590%2586_%25E7%2589%25B9%25E8%25AE%25AD.png": "da83833712852ef8372b5d2aa3668980",
"assets/images/%25E8%258A%25B1%25E9%2587%258C%25E5%25AE%259E%25E4%25B9%2583%25E7%2590%2586_%25E9%2580%259A%25E5%25B8%25B8.png": "cdc449a3efeee63e1be5ad522910c9ca",
"assets/images/%25E8%258D%2589%25E8%2596%2599%25E5%25AE%2581%25E5%25AE%2581_%25E7%2589%25B9%25E8%25AE%25AD.png": "92f2a52e02d4733b79f3832f8d49f08c",
"assets/images/%25E8%258D%2589%25E8%2596%2599%25E5%25AE%2581%25E5%25AE%2581_%25E9%2580%259A%25E5%25B8%25B8.png": "79a1ad5e3693c2944c11ee8e23b1a8a1",
"assets/images/%25E9%2595%259C%25E9%259F%25B3%25E8%25BF%259E_%25E7%2589%25B9%25E8%25AE%25AD.png": "7629b19cc268c2b34923cc77dbd6c75f",
"assets/images/%25E9%2595%259C%25E9%259F%25B3%25E8%25BF%259E_%25E9%2580%259A%25E5%25B8%25B8.png": "775a88111aed63fa825b0dd0ff77920c",
"assets/images/%25E9%2595%259C%25E9%259F%25B3%25E9%2593%2583_%25E7%2589%25B9%25E8%25AE%25AD.png": "ae823fd5f8af42de0c0cd40271f8f545",
"assets/images/%25E9%2595%259C%25E9%259F%25B3%25E9%2593%2583_%25E9%2580%259A%25E5%25B8%25B8.png": "6e0c7388ee52c1616109e1711bc48f6c",
"assets/images/%25E9%259D%2592%25E6%259F%25B3%25E5%2586%25AC%25E5%25BC%25A5_%25E9%2580%259A%25E5%25B8%25B8.png": "7b811e3ccf8a25f049f359361117fca4",
"assets/images/bg.png": "749911bcf05d66f48354940887106edc",
"assets/images/gacha.png": "3556d90bdffca13a0f2ea74b32a6afdb",
"assets/images/icon.png": "52f15281cb74bc3b45a19af76f4369bd",
"assets/images/KAITO_%25E9%2580%259A%25E5%25B8%25B8.png": "459ad1f5d6474342cc8f67cdb651862b",
"assets/images/logo.png": "ec6eb1af5efe281e2d0d62c27ed10ae7",
"assets/images/MEIKO_%25E9%2580%259A%25E5%25B8%25B8.png": "9271dd363a98233e0d9194deaf05d63c",
"assets/NOTICES": "6467c0a3d78a8a706508cbcea0829247",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "780664eb9b8a5bdf3e1a7da210e842b1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d272471cd6bbbdd7aad02ae22a74d2a3",
"/": "d272471cd6bbbdd7aad02ae22a74d2a3",
"main.dart.js": "147832d353410e440ba168ac69e98172",
"manifest.json": "1a62bab74dd6f60771c4e22ecbbc46a7",
"version.json": "f465e160f1fde790b390cb0a63903efc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
