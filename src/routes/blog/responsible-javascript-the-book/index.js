import { h, render } from "preact";
import Blog from "../../../components/Blog";

export const Metadata = {
  title: "Call for Publishers: Responsible JavaScript",
  date: "15 January, 2020",
  description: "2019 was the year of Responsible JavaScript. 2020 is the year that I develop this theme into a book, and I'm seeking a publisher interested in working with me to make it happen.",
  slug: "/blog/call-for-publishers-responsible-javascript/",
  sitemapPriority: 1.0
};

export default () => (
  <Blog title={Metadata.title} date={Metadata.date}>
    <p>Last year, I put considerable effort into writing a series for <a href="https://alistapart.com/" rel="noopener">A List Apart</a> titled <a href="https://alistapart.com/article/responsible-javascript-part-1/" rel="noopener"><em>Responsible JavaScript</em></a>. This series delved into what it meant to make architectural and organizational choices that prioritized the user experience when it comes to our preference for JavaScript-centric web development. After <a href="https://alistapart.com/article/responsible-javascript-part-3/" rel="noopener">the third part</a> ended on something of a cliffhanger in which I vowed to continue, I had some difficulty figuring out a way forward.</p>
    <p>The difficulty comes from the fact that I've often felt like my work is focused on too many fronts. Now that I'm in the midst of reprioritizing some things in my professional life, I've been able to focus and set some career goals for myself in 2020. One of those goals is that I would like to take what I've learned while writing the <em>Responsible JavaScript</em> series, and re-approach the topic in book form. Ideally, I'd like to write the entirety of it within the year, but an acceptable outcome would be to have it well under way.</p>
    <p>This post serves two purposes: the first is that by announcing this, I'm far more likely to hold myself accountable. The second is that I'm gauging interest in the community, as well as publishers in particular.</p>
    <p>So, if you're an acquisitions editor for a reputable publisher (or otherwise involved in publishing technical books), I have considerable experience as a writer. I've written <a href="/writing/" rel="noopener">many articles</a> and two books. I've already developed a general outline for <em>Responsible JavaScript</em> at the chapter level, and am currently developing the structure further down to the A-level headings. I anticipate the final product would be 100 to 150 pages in a small format, which would be perfect for a pocket-sized book suitable for relatively quick, yet informationally dense reading.</p>
    <p>This endeavor is not some flight of fancy. While it would take me longer to self-publish this title, I'm prepared to do just that&mdash;but I would strongly prefer to work hand in hand with a publisher whose goals align with my own. If you're interested, please <a href="/contact/" rel="noopener">contact me</a> and let's chat.</p>
    <p>I'm looking forward to realizing this goal in 2020. Perhaps you might be the publisher that could help bring it to a wider audience than I could on my own.</p>
  </Blog>
);
