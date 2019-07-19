import { h, render } from "preact";
import Blog from "../../../components/Blog";
import CodeBlock from "../../../components/CodeBlock";

export const Metadata = {
  title: "A Less Risky Differential Serving Pattern",
  date: "18 July, 2019",
  description: "The usual pattern for differentially serving scripts is not without its risks. Here's an approach that might work a bit better for you.",
  slug: "/blog/a-less-risky-differential-serving-pattern/",
  sitemapPriority: 1.0
};

export default () => (
  <Blog title={Metadata.title} date={Metadata.date}>
    <p>2019 has been the year of differential serving for me. I've written <a href="https://calendar.perfplanet.com/2018/doing-differential-serving-in-2019/" rel="noopener">an article</a> about it. I've given <a href="https://speaking.jeremy.codes/unfnbk/making-a-difference-with-differential-serving" rel="noopener">a talk</a> about it. I've even been helping one of my clients to roll it out broadly across their entire site. It's a great way to cut down on the amount of JavaScript you serve to your site's visitors without sacrificing features.</p>
    <p>The pattern we use to ensure both modern and legacy browsers get the scripts that are appropriately transpiled according to their capabilities looks like this:</p>
    <CodeBlock>{`<script type="module" src="/js/modern.mjs"></script>
<script nomodule defer src="/js/legacy.js"></script>`}</CodeBlock>
    <p>This is the platform-provided pattern for achieving differential serving. It works a treat in those modern and evergreen browsers, but unfortunately, it backfires in some cases as <a href="https://gist.github.com/jakub-g/5fc11af85a061ca29cc84892f1059fec" rel="noopener">this Github gist</a> attests. Some legacy (and not-so-legacy) browsers will download <em>both</em> bundles. In some particularly egregious cases, some browsers will download <em>and</em> execute both bundles. If your project requirements dictate that this is unacceptable, you'll want to avoid this sort of double trouble. &quot;But how?&quot; you beseech me, &quot;<em>How</em> do I avoid this horrible outcome?&quot;</p>
    <p>Well, <em>thank you</em> for asking.</p>
    <p>There <em>is</em> another way, but be warned that it's a hack. That said, it's a hack that <em>works</em>. It ensures that your site's visitors won't download <em>or</em> execute both bundles. By checking to see if the browser supports the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-nomodule" rel="noopener"><code>nomodule</code> attribute</a>, you can infer whether or not that browser supports the <code>type=&quot;module&quot;</code> attribute:</p>
    <CodeBlock>{`<script>
  // Create a new script element to slot into the DOM.
  var scriptEl = document.createElement("script");

  // Check whether the script element supports the \`nomodule\` attribute.
  if ("noModule" in scriptEl) {
    scriptEl.src = "/js/modern.mjs";
    scriptEl.type = "module";
  } else {
    scriptEl.src = "/js/legacy.js";
    scriptEl.defer = true;
  }

  document.body.appendChild(scriptEl);
</script>`}</CodeBlock>
    <p>Again, it's a bit of a hack, but in cases where both support for older browsers and performance for them is non-negotiable, this just <em>works</em>. It won't let you down, but I hope for a time where eventually I won't need to recommend this pattern. In a world where IE 11 so tenaciously hangs on, though, this is what I'm rolling with to make sure scripts are differentially served in a way that won't penalize users on legacy browsers.</p>
  </Blog>
);
