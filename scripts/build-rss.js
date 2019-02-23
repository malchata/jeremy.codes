/* eslint-env node */

const fs = require("fs");
const path = require("path");

let rssXml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><rss version=\"2.0\"><channel><title>Jeremy Wagner's web development blog.</title><description>The assorted thoughts, research, and opinion of web developer and speaker Jeremy Wagner.</description><link>https://jeremy.codes/</link>";
rssXml += buildRoutes(path.resolve("src", "routes", "blog"));
rssXml += "</channel></rss>";

console.log(rssXml);

function buildRoutes(routes, rssXml = "") {
  fs.readdirSync(routes).forEach(route => {
    let postMeta = require(path.join(routes, route, "index.js")).Metadata;
    rssXml += `<item><title>${postMeta.title}</title><description>${postMeta.description}</description><link>https://jeremy.codes${postMeta.slug}</link><pubDate>${pubDate(postMeta.date)}</pubDate></item>`;
  });

  return rssXml;
}

function pubDate (dateString) {
  let date = new Date(Date.parse(dateString));
  let pieces = date.toString().split(" ");
  let offsetTime = pieces[5].match(/[-+]\d{4}/);
  let offset = (offsetTime) ? offsetTime : pieces[5];
  let parts = [
    pieces[0] + ",",
    pieces[2],
    pieces[1],
    pieces[3],
    pieces[4],
    offset
  ];

  return parts.join(" ");
}
