/* eslint-env node */
/* eslint no-console: "off" */

const fs = require("fs");
const path = require("path");

const template = require("./sw-template.js");
const assetManifest = require("../dist/assets.json");
const assets = [
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

console.log(template(+new Date(), assets));
