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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
workbox.setConfig({
    debug: false
});
/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "89f628def0afc6318e8a5ecaf5cbe44b"
  },
  {
    "url": "about/index.html",
    "revision": "a395455821d1ff5765bc84342b80cf64"
  },
  {
    "url": "amp/index.html",
    "revision": "b30fbf842293faa05611d579dce07a24"
  },
  {
    "url": "css/coder-rtl.min.a2effa06e3d5657b0e39e023ceeb179c67358644022e3d6ed74b0126f6528b76.css",
    "revision": "9c3093312b983e6dbffab901fee74ec4"
  },
  {
    "url": "css/coder.min.b652b910d30c4237bc8bc495a80d051eab52432d49492ba9dfaf8b86842643c2.css",
    "revision": "1cdcc487f5475c3bb1c6cf00e6b1dd0f"
  },
  {
    "url": "en/index.html",
    "revision": "7dac416e66b05b2af33d3ef8424e4224"
  },
  {
    "url": "en/sitemap.xml",
    "revision": "069632b19af65dfe8cd33c8a742c88f6"
  },
  {
    "url": "fa/404.html",
    "revision": "498d351ae7bd3656b1ba1c2156a82195"
  },
  {
    "url": "fa/about/index.html",
    "revision": "2e3f3c9075063c7bf5022f59645c7faf"
  },
  {
    "url": "fa/amp/index.html",
    "revision": "977262d3cce5355fa491cf2573f0165a"
  },
  {
    "url": "fa/index.html",
    "revision": "977262d3cce5355fa491cf2573f0165a"
  },
  {
    "url": "fa/index.xml",
    "revision": "827143cb3dcb5ad79b0f44f1b7bfef52"
  },
  {
    "url": "fa/robots.txt",
    "revision": "ca121b5d03245bf82db00d14cee04e22"
  },
  {
    "url": "fa/sitemap.xml",
    "revision": "4c348e061287aeb06d7c910dd1f563b1"
  },
  {
    "url": "fonts/IRANSansWeb_Black.eot",
    "revision": "465387eeda5050a622ba869f13e53119"
  },
  {
    "url": "fonts/IRANSansWeb_Black.ttf",
    "revision": "7174439308f3d61c0c1f67fd3e052c78"
  },
  {
    "url": "fonts/IRANSansWeb_Black.woff",
    "revision": "818f7796aeb3cc761b74334bb0b9aa35"
  },
  {
    "url": "fonts/IRANSansWeb_Black.woff2",
    "revision": "63911f38b2d0bb0650d18555d793dad3"
  },
  {
    "url": "fonts/IRANSansWeb_Bold.eot",
    "revision": "a65cbf91ec2b253357f7621900ef29a4"
  },
  {
    "url": "fonts/IRANSansWeb_Bold.ttf",
    "revision": "9471804b0f92127716fabbbb2c6647e5"
  },
  {
    "url": "fonts/IRANSansWeb_Bold.woff",
    "revision": "d44408d0941f077f60b1306e1331e806"
  },
  {
    "url": "fonts/IRANSansWeb_Bold.woff2",
    "revision": "2f6f164c3e1f1329cc658b3c725bfd98"
  },
  {
    "url": "fonts/IRANSansWeb_Light.eot",
    "revision": "9d7efb918cab94704068d84361d3f898"
  },
  {
    "url": "fonts/IRANSansWeb_Light.ttf",
    "revision": "e5b2acaef933a97fa3fb026d8ee73d46"
  },
  {
    "url": "fonts/IRANSansWeb_Light.woff",
    "revision": "aac7a640c059ee7f46c35c2019434117"
  },
  {
    "url": "fonts/IRANSansWeb_Light.woff2",
    "revision": "7c207019aa62aa4778add0c2b3372720"
  },
  {
    "url": "fonts/IRANSansWeb_Medium.eot",
    "revision": "c18ca268db923d61b1c9f06415f4c143"
  },
  {
    "url": "fonts/IRANSansWeb_Medium.ttf",
    "revision": "894895856574b0e65e2739d1a2d1de42"
  },
  {
    "url": "fonts/IRANSansWeb_Medium.woff",
    "revision": "7bfa046de6ec101d790ba8a54886dc9a"
  },
  {
    "url": "fonts/IRANSansWeb_Medium.woff2",
    "revision": "7c1c84da23760b0d3f59f8de58c47605"
  },
  {
    "url": "fonts/IRANSansWeb_UltraLight.eot",
    "revision": "eb6bb7948783b20ce01dbb2d103db8df"
  },
  {
    "url": "fonts/IRANSansWeb_UltraLight.ttf",
    "revision": "f8a4f6910724c0373ffd38add5cea6ac"
  },
  {
    "url": "fonts/IRANSansWeb_UltraLight.woff",
    "revision": "2097362beeb263fdd902ad249202cd79"
  },
  {
    "url": "fonts/IRANSansWeb_UltraLight.woff2",
    "revision": "e0e6c92f90cf30782f81d80a37c22c54"
  },
  {
    "url": "fonts/IRANSansWeb.eot",
    "revision": "70a5f97c18c45e8ef620a374be61c6c3"
  },
  {
    "url": "fonts/IRANSansWeb.ttf",
    "revision": "244a401eb43afb0fe739f8dcd8530ae4"
  },
  {
    "url": "fonts/IRANSansWeb.woff",
    "revision": "50f4bba2f37081daeca8c423abdced8b"
  },
  {
    "url": "fonts/IRANSansWeb.woff2",
    "revision": "9d38733b8a7b9153f2bf9bfe476ef8e3"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Black.eot",
    "revision": "0cbe440ec1a4fe42b009993fd8997102"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Black.ttf",
    "revision": "879c6f004e698c7b5c0d46b211ea0c5e"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Black.woff",
    "revision": "6e6d05b40fcf673a30ba169b0a253f3a"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Black.woff2",
    "revision": "3d585538e07c21fcb21ae1b8a22b15f6"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Bold.eot",
    "revision": "cacb94575d6d37423b7395837795b5d9"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Bold.ttf",
    "revision": "cf916372aab6c12b1ff00b062e843315"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Bold.woff",
    "revision": "6ed6ddfe60d741b22e0e8ba1cb6797fb"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Bold.woff2",
    "revision": "924be0f8e3cabca094307ecb48684f46"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Light.eot",
    "revision": "fe6168031376d4b4d922d0bad21a4b9a"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Light.ttf",
    "revision": "160493399f8b048d4186ca4e22bc431d"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Light.woff",
    "revision": "74955f1682e35e2e0dbb713f1c2e4ccd"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Light.woff2",
    "revision": "d11c4908fd4ced3fcc8d3d7930977c6b"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Medium.eot",
    "revision": "5a250015803362c88ca2ece29e25cc32"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Medium.ttf",
    "revision": "caa93b16eb15d10bd1437ba92f9d80dc"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Medium.woff",
    "revision": "32cc2377fd676f2386d705b3b6870020"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_Medium.woff2",
    "revision": "84518599d382334f09e67ade7fc530a0"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_UltraLight.eot",
    "revision": "368174c01a61e691225ce1e4d57a97e4"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_UltraLight.ttf",
    "revision": "264f4a4b036c9a87bee09f4e20929ac6"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_UltraLight.woff",
    "revision": "b35fd8e1a262d49862daa44b80af1b84"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum)_UltraLight.woff2",
    "revision": "b543a9ad792d1ad75925c1836e3db5dc"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum).eot",
    "revision": "07e13ce12b31374a49045aa55af2c0ad"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum).ttf",
    "revision": "a5080d9e55b71a50ecd7b7d7ad022754"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum).woff",
    "revision": "d4bb655d07591559e417030519d6fa20"
  },
  {
    "url": "fonts/IRANSansWeb(FaNum).woff2",
    "revision": "38d4b5fba7a4955e035b5a3898a8cd5d"
  },
  {
    "url": "google74c70e5e3d8c92a3.html",
    "revision": "9b185ad59764216697e14daffd1f7072"
  },
  {
    "url": "images/favicon-16x16.png",
    "revision": "74321d76bc04bdc877cddcb1681267ad"
  },
  {
    "url": "images/favicon-32x32.png",
    "revision": "3259819ed6e6dac804cfe3b17f79723e"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "8c9bd1ef75f55e0c5cdb573429a1c525"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "fe3bed7760a9ab809799d2821da019ad"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "8d2435526f93cca3bceb55c6874a6a96"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "46c64dd7b221b5df42484ef56bc892b8"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "7824b8b91e173254a1ee3d44e37ae373"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "2b1d761ccb07451223ac8f9c104abae6"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "fc22c101ed9e71df890505992ee79e6f"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "898d99d37a8c19cc1296b5a860d44407"
  },
  {
    "url": "index.html",
    "revision": "b30fbf842293faa05611d579dce07a24"
  },
  {
    "url": "index.xml",
    "revision": "82b8f38baf4b0741834ac4315ec612c6"
  },
  {
    "url": "manifest.json",
    "revision": "aa30306f266d689df52e55551417fe0e"
  },
  {
    "url": "README.md",
    "revision": "2f45232dd591461e868be328d902368b"
  },
  {
    "url": "robots.txt",
    "revision": "ca121b5d03245bf82db00d14cee04e22"
  },
  {
    "url": "sitemap.xml",
    "revision": "6f71ed83e5fbc99e329c79eed0327467"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.navigationPreload.enable();
const strategy = workbox.strategies.networkFirst({cacheName: 'cached-navigations'});
const navigationRoute = new workbox.routing.NavigationRoute(strategy, {});
workbox.routing.registerRoute(navigationRoute);
workbox.googleAnalytics.initialize({});
