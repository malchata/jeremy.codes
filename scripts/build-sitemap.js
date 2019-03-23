/* eslint-env node */
/* eslint no-console: "off" */

const fs = require("fs");
const path = require("path");

let sitemapXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">";
buildRoutes(path.resolve("src", "routes"));
sitemapXml += "</urlset>";

console.log(sitemapXml);

function buildRoutes(routes) {
  fs.readdirSync(routes).forEach(route => {
    if (/index\.js$/i.test(route) === true) {
      let postMeta = require(path.join(routes, route)).Metadata;
      sitemapXml += `<url><loc>https://jeremy.codes${postMeta.slug}</loc><lastmod>${lastmod(postMeta.date)}</lastmod><priority>${postMeta.sitemapPriority}</priority></url>`;
    }

    if (fs.lstatSync(path.join(routes, route)).isDirectory() === true) {
      buildRoutes(path.join(routes, route));
    }
  });
}

function lastmod (dateString) {
  let date = new Date(Date.parse(dateString));
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
