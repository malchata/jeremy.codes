import { h, render, Component } from "preact";

export default () => {
  return [
    h("p", null, "I write often about the web. Here's some stuff I've written:"),
    h("br"),
    h("h2", null, "A List Apart"),
    h("ol", null,
      h("li", null,
        h("a", {
          href: "https://alistapart.com/article/designing-for-research/",
          rel: "noopener"
        }, "Designing for Research")
      ),
      h("li", null,
        h("a", {
          href: "https://alistapart.com/article/considering-how-we-use-http2/",
          rel: "noopener"
        }, "Considering How We Use HTTP/2")
      ),
      h("li", null,
        h("a", {
          href: "https://alistapart.com/article/using-http-2-responsibly-adapting-for-users/",
          rel: "noopener"
        }, "Using HTTP/2 Responsibly: Adapting for Users")
      )
    ),
    h("br"),
    h("h2", null, "CSS-Tricks"),
    h("ol", null,
      h("li", null,
        h("a", {
          href: "https://css-tricks.com/help-users-save-data/",
          rel: "noopener"
        }, "Help Your Users `Save-Data`")
      ),
      h("li", null,
        h("a", {
          href: "https://css-tricks.com/paint-timing-api/",
          rel: "noopener"
        }, "Using the Paint Timing API")
      ),
      h("li", null,
        h("a", {
          href: "https://css-tricks.com/musings-on-http2-and-bundling/",
          rel: "noopener"
        }, "Musings on HTTP/2 and Bundling")
      ),
      h("li", null,
        h("a", {
          href: "https://css-tricks.com/brotli-static-compression/",
          rel: "noopener"
        }, "Brotli and Static Compression")
      ),
      h("li", null,
        h("a", {
          href: "https://css-tricks.com/cache-aware-server-push/",
          rel: "noopener"
        }, "Creating a Cache-aware HTTP/2 Server Push Mechanism")
      ),
      h("li", null,
        h("a", {
          href: "https://css-tricks.com/using-webp-images/",
          rel: "noopener"
        }, "Using WebP Images")
      ),
      h("li", null,
        h("a", {
          href: "https://css-tricks.com/font-display-masses/",
          rel: "noopener"
        }, "`font-display` for the Masses")
      )
    ),
    h("br"),
    h("h2", null, "David Walsh Blog"),
    h("ol", null,
      h("li", null,
        h("a", {
          href: "https://davidwalsh.name/jpeg-compression-guetzli/",
          rel: "noopener"
        }, "JPEG Compression with Guetzli")
      )
    ),
    h("br"),
    h("h2", null, "Google Web Fundamentals"),
    h("ol", null,
      h("li", null,
        h("a", {
          href: "https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/",
          rel: "noopener"
        }, "Reduce JavaScript Payloads with Tree Shaking")
      ),
      h("li", null,
        h("a", {
          href: "https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/",
          rel: "noopener"
        }, "Assessing Loading Performance in Real Life with Navigation and Resource Timing")
      ),
      h("li", null,
        h("a", {
          href: "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/",
          rel: "noopener"
        }, "Replace Animated GIFS with Video")
      ),
      h("li", null, h("a",
        {
          href: "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/",
          rel: "noopener"
        }, "Delivering Fast and Light Applications with `Save-Data`*")
      ),
      h("li", null,
        h("a", {
          href: "https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/",
          rel: "noopener"
        }, "Lazy Loading Images and Video")
      ),
      h("li", null,
        h("a", {
          href: "https://developers.google.com/web/fundamentals/performance/why-performance-matters/",
          rel: "noopener"
        }, "Why Performance Matters")
      ),
    ),
    h("br"),
    h("h2", null, "Manning Publications"),
    h("ol", null,
      h("li", null,
        h("a", {
          href: "https://manning.com/books/web-performance-in-action?a_aid=webopt&a_bid=63c31090",
          rel: "noopener"
        }, "Web Performance in Action")
      )
    ),
    h("br"),
    h("h2", null, "Net Magazine"),
    h("ol", null,
      h("li", null,
        h("a", {
          href: "https://www.creativebloq.com/how-to/4-essential-image-optimisation-tips",
          rel: "noopener"
        }, "4 Quick Image Optimization Tips")
      ),
      h("li", null,
        h("a", {
          href: "https://www.creativebloq.com/how-to/5-tips-for-super-fast-css",
          rel: "noopener"
        }, "5 Tips for Super-fast CSS")
      )
    ),
    h("br"),
    h("h2", null, "Planet Performance"),
    h("ol", null,
      h("li", null,
        h("a", {
          href: "https://calendar.perfplanet.com/2017/3-tips-for-faster-font-loading/",
          rel: "noopener"
        }, "3 Tips for Faster Font Loading")
      ),
      h("li", null,
        h("a", {
          href: "https://calendar.perfplanet.com/2016/speed-versus-speed-to-market/",
          rel: "noopener"
        }, "Speed vs. Speed to Market")
      )
    ),
    h("br"),
    h("h2", null, "Smashing Magazine"),
    h("ol", null,
      h("li", null,
        h("a", {
          href: "https://www.smashingmagazine.com/2017/04/guide-http2-server-push/",
          rel: "noopener"
        }, "A Comprehensive Guide to HTTP/2 Server Push")
      ),
      h("li", null,
        h("a", {
          href: "https://www.smashingmagazine.com/2016/10/next-generation-server-compression-with-brotli/",
          rel: "noopener"
        }, "Next Generation Server Compression with Brotli")
      )
    ),
    h("br"),
    h("p", null,
      h("em", null, "* I was not the sole author of this article.")
    )
  ];
};
