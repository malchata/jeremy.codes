/* eslint-env node */
/* eslint no-console: "off" */

import Writing from "../src/components/Writing";

// Begin RSS feed markup
let rssXml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><rss version=\"2.0\"><channel><title>Jeremy Wagner's web development blog.</title><description>The assorted thoughts, research, and opinion of web developer and speaker Jeremy Wagner.</description><link>https://jeremy.codes/</link>";

const postLists = Writing().children[1].children;

for (let postList of postLists) {
  const posts = postList.children[1].children;
  const year = postList.children[0].children;

  for (let post of posts) {
    const { date, title } = post.attributes;
    let { link } = post.attributes;

    if (link.indexOf("?") > -1) {
      const linkParts = link.split("?");

      link = linkParts[0] + "?" + encodeURIComponent(linkParts[1]);
    }

    rssXml += `<item><title>${title}</title><link>${link.search(/^https?:\/\//i) < 0 ? `https://jeremy.codes${link}` : link}</link><guid isPermaLink="true">${link.search(/^https?:\/\//i) < 0 ? `https://jeremy.codes${link}` : link}</guid><pubDate>${pubDate(`${date}, ${year}`)}</pubDate></item>`;
  }
}

// End RSS feed markup
rssXml += "</channel></rss>";

console.log(rssXml);

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
