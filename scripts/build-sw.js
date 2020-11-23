/* eslint-env node */
/* eslint no-console: "off" */

// Built-ins
const fs = require("fs");
const path = require("path");

// Vendors
const compile = require("es6-template-strings/compile");
const resolveToString = require("es6-template-strings/resolve-to-string");
const terser = require("terser");

// Asset manifest
const assetManifest = require("../dist/assets.json");

// Service worker template
const serviceWorkerTemplate = fs.readFileSync(path.join(__dirname, "/sw-template.js")).toString();
const compiledServiceWorkerString = compile(serviceWorkerTemplate);

// Service worker cache name
const cacheVersion = +new Date();

// Assets to pass to CacheStorage
const cachedAssets = [
  assetManifest["global-css"].css,
  assetManifest["home-css"].css,
  assetManifest["scripts"].js,
  assetManifest["blog-css"].css,
  assetManifest["contact-css"].css,
  assetManifest["projects-css"].css,
  assetManifest["subpage-css"].css,
  assetManifest["writing-css"].css,
  ...assetManifest[""].woff2
];

const serviceWorker = resolveToString(compiledServiceWorkerString, {
  cacheVersion,
  cachedAssets
});

const result = terser.minify(serviceWorker, {
  toplevel: true
});

console.log(result.code);
