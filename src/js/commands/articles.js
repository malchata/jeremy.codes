import { h, render, Component } from "preact";

export default () => {
  return [<p>I write often about the web. Here's some stuff I've written:</p>,
    <br />,
    <h2>A List Apart</h2>,
    <ol>
      <li><a href="https://alistapart.com/article/designing-for-research" rel="noopener">Designing for Research</a></li>
      <li><a href="https://alistapart.com/article/considering-how-we-use-http2/" rel="noopener">Considering How We Use HTTP/2</a></li>
      <li><a href="https://alistapart.com/article/using-http-2-responsibly-adapting-for-users/" rel="noopener">Using HTTP/2 Responsibly: Adapting for Users</a></li>
    </ol>,
    <br />,
    <h2>CSS-Tricks</h2>,
    <ol>
      <li><a href="https://css-tricks.com/help-users-save-data/" rel="noopener">Help Your Users `Save-Data`</a></li>
      <li><a href="https://css-tricks.com/paint-timing-api/" rel="noopener">Using the Paint Timing API</a></li>
      <li><a href="https://css-tricks.com/musings-on-http2-and-bundling/" rel="noopener">Musings on HTTP/2 and Bundling</a></li>
      <li><a href="https://css-tricks.com/brotli-static-compression/" rel="noopener">Brotli and Static Compression</a></li>
      <li><a href="https://css-tricks.com/cache-aware-server-push/" rel="noopener">Creating a Cache-aware HTTP/2 Server Push Mechanism</a></li>
      <li><a href="https://css-tricks.com/using-webp-images/" rel="noopener">Using WebP Images</a></li>
      <li><a href="https://css-tricks.com/font-display-masses/" rel="noopener">`font-display` for the Masses</a></li>
    </ol>,
    <br />,
    <h2>David Walsh Blog</h2>,
    <ol>
      <li><a href="https://davidwalsh.name/jpeg-compression-guetzli/" rel="noopener">JPEG Compression with Guetzli</a></li>
    </ol>,
    <br />,
    <h2>Google Web Fundamentals</h2>,
    <ol>
      <li><a href="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/" rel="noopener">Reduce JavaScript Payloads with Code Splitting*</a></li>
      <li><a href="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/" rel="noopener">Reduce JavaScript Payloads with Tree Shaking</a></li>
      <li><a href="https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/" rel="noopener">Assessing Loading Performance in Real Life with Navigation and Resource Timing</a></li>
      <li><a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/" rel="noopener">Replace Animated GIFS with Video</a></li>
      <li><a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/" rel="noopener">Delivering Fast and Light Applications with `Save-Data`*</a></li>
      <li><a href="https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/" rel="noopener">Lazy Loading Images and Video</a></li>
      <li><a href="https://developers.google.com/web/fundamentals/performance/why-performance-matters/" rel="noopener">Why Performance Matters</a></li>
    </ol>,
    <br />,
    <h2>Manning Publications</h2>,
    <ol>
      <li><a href="https://manning.com/books/web-performance-in-action?a_aid=webopt&a_bid=63c31090" rel="noopener">Web Performance in Action</a></li>
    </ol>,
    <br />,
    <h2>Net Magazine</h2>,
    <ol>
      <li><a href="https://www.creativebloq.com/how-to/4-essential-image-optimisation-tips" rel="noopener">4 Quick Image Optimization Tips</a></li>
      <li><a href="https://www.creativebloq.com/how-to/5-tips-for-super-fast-css" rel="noopener">5 Tips for Super-fast CSS</a></li>
    </ol>,
    <br />,
    <h2>Planet Performance</h2>,
    <ol>
      <li><a href="https://calendar.perfplanet.com/2017/3-tips-for-faster-font-loading/" rel="noopener">3 Tips for Faster Font Loading</a></li>
      <li><a href="https://calendar.perfplanet.com/2016/speed-versus-speed-to-market/" rel="noopener">Speed vs. Speed to Market</a></li>
    </ol>,
    <br />,
    <h2>Smashing Magazine</h2>,
    <ol>
      <li><a href="https://www.smashingmagazine.com/2017/04/guide-http2-server-push/" rel="noopener">A Comprehensive Guide to HTTP/2 Server Push</a></li>
      <li><a href="https://www.smashingmagazine.com/2016/10/next-generation-server-compression-with-brotli/" rel="noopener">Next Generation Server Compression with Brotli</a></li>
    </ol>,
    <br />,
    <p><em>*I was not the sole author of the article concerned.</em></p>
  ];
};
