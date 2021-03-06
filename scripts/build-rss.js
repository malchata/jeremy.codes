/* eslint-env node */
/* eslint no-console: "off" */

import Writing from "../src/components/Writing";

// Begin RSS feed markup
let rssXml = "<?xml version=\"1.0\" encoding=\"utf-8\" ?><rss version=\"2.0\"><channel><title>Jeremy Wagner's web development blog.</title><description>The assorted thoughts, research, and opinion of web developer and speaker Jeremy Wagner.</description><link>https://jeremy.codes/</link>";

const postLists = Writing().props.children[1].props.children;

for (let postList of postLists) {
  const posts = postList.props.children[1].props.children;
  const year = postList.props.children[0].props.children;

  for (let post of posts) {
    const { date, title, description } = post.props;
    let { link } = post.props;

    if (link.indexOf("?") > -1) {
      const linkParts = link.split("?");

      link = linkParts[0] + "?" + encodeURIComponent(linkParts[1]);
    }

    rssXml += `<item><title>${title}</title><link>${link.search(/^https?:\/\//i) < 0 ? `https://jeremy.codes${link}` : link}</link><description>${description}</description><guid isPermaLink="true">${link.search(/^https?:\/\//i) < 0 ? `https://jeremy.codes${link}` : link}</guid><pubDate>${pubDate(`${date}, ${year}`)}</pubDate></item>`;
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
