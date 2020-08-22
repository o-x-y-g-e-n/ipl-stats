/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-608de7a3c88dabfafd29.js"
  },
  {
    "url": "styles.17919b85aa3c9c0301b8.css"
  },
  {
    "url": "styles-2d82ac8e3afc0c213061.js"
  },
  {
    "url": "framework-ef008381b9f22da679ce.js"
  },
  {
    "url": "app-737f72f33d824e92cf23.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0d078a43e5d0fded0a413ba47441f91a"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c9875e2473a7c518755f.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "030022335308ea122a00331f800a4dcb"
  },
  {
    "url": "polyfill-36dfa9c9b47713c99d73.js"
  },
  {
    "url": "309da1305c7d2ef0fe39e4ec7a61eeb450df5a8c-5ce357ebead3d36d2e81.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-7724911caa38121b1de3.js"
  },
  {
    "url": "component---src-pages-index-js-a96d73291eaec43d9ed7.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "f234066cb37dacfc4ef243bd168fef32"
  },
  {
    "url": "page-data/sq/d/1968170501.json",
    "revision": "5d9e43eccaeae666a49d8647fb6a9f75"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "22d69870e80c72a10310fcebf4538479"
  },
  {
    "url": "page-data/sq/d/4141030061.json",
    "revision": "52fc36d486fb488c827101cf677bd4ea"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "937ba17bf84107961e8bc76c74cc14a2"
  },
  {
    "url": "component---src-templates-team-detail-js-3a3b60526bb35920b3a6.js"
  },
  {
    "url": "page-data/team/Chennai Super Kings/page-data.json",
    "revision": "56f373d5005dd1ba43ac472b253ebbee"
  },
  {
    "url": "page-data/team/Deccan Chargers/page-data.json",
    "revision": "8aae6feb38e8778856031a70993d0b2f"
  },
  {
    "url": "page-data/team/Delhi Daredevils/page-data.json",
    "revision": "53c4dc559a4b0da282327b2c0e026375"
  },
  {
    "url": "page-data/team/Gujarat Lions/page-data.json",
    "revision": "9c28fb45f2bf043b48712557bcc9ad41"
  },
  {
    "url": "page-data/team/Kings XI Punjab/page-data.json",
    "revision": "07c74883fd0e124b3a64cc2544efc1aa"
  },
  {
    "url": "page-data/team/Kochi Tuskers Kerala/page-data.json",
    "revision": "07c8d26006573216e96c052868b9fc68"
  },
  {
    "url": "page-data/team/Kolkata Knight Riders/page-data.json",
    "revision": "a295d864383b3f03a56d94c41e2a7cf0"
  },
  {
    "url": "page-data/team/Mumbai Indians/page-data.json",
    "revision": "3ab4e865692c30cb48cb2f39f4a39f71"
  },
  {
    "url": "page-data/team/Pune Warriors/page-data.json",
    "revision": "5abe97307c89a037c67e7b110a9019a8"
  },
  {
    "url": "page-data/team/Rajasthan Royals/page-data.json",
    "revision": "bff2003c72063f7ed3f8b87d0c3ed661"
  },
  {
    "url": "page-data/team/Rising Pune Supergiant/page-data.json",
    "revision": "2ca03bcb3b4d111845f7f1ab4ec046f0"
  },
  {
    "url": "page-data/team/Royal Challengers Bangalore/page-data.json",
    "revision": "9f756991b237df79217e8a2dbaedb48b"
  },
  {
    "url": "page-data/team/Sunrisers Hyderabad/page-data.json",
    "revision": "ef8e96c6711f5ccdc137646a1938704e"
  },
  {
    "url": "component---src-templates-season-detail-js-8e78a85788b6b8572d78.js"
  },
  {
    "url": "page-data/season/2008/page-data.json",
    "revision": "1c0d47b11c71046c99eb6987f619eece"
  },
  {
    "url": "page-data/season/2009/page-data.json",
    "revision": "37c9d7cb148b9968e60c3a40f7073467"
  },
  {
    "url": "page-data/season/2010/page-data.json",
    "revision": "877e671a6b006b8927a52c0762ca5e68"
  },
  {
    "url": "page-data/season/2011/page-data.json",
    "revision": "3cc6203254e2640296870b1e5c74ff62"
  },
  {
    "url": "page-data/season/2012/page-data.json",
    "revision": "88af56ba7a993db115b9267d5301ad85"
  },
  {
    "url": "page-data/season/2013/page-data.json",
    "revision": "0849994258ad16883033f21d7a924018"
  },
  {
    "url": "page-data/season/2014/page-data.json",
    "revision": "1c283f95cfbc33fd0c62fd5e9845ddc0"
  },
  {
    "url": "page-data/season/2015/page-data.json",
    "revision": "b03814db5162f8b3e7e8b38a31c4a32e"
  },
  {
    "url": "page-data/season/2016/page-data.json",
    "revision": "0c7b4bb12e51456bcec619c70e8670a6"
  },
  {
    "url": "page-data/season/2017/page-data.json",
    "revision": "92afb0084a1a5311c51422606034b64b"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "4a9586ad442f3c03814dc7ce5766fd6b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/ipl-stats`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/ipl-stats/app-737f72f33d824e92cf23.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/ipl-stats/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
