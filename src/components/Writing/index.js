import { h, render } from "preact";

export default () => (
  <main>
    <section className="subpage__intro">
      <h1 className="subpage__header">Bylines &amp; blog posts</h1>
      <h4 className="subpage__subheader">Whenever I write something&mdash;and write I will&mdash;I'll post it here. If I wrote an article for someone else, you'll see that publication's name under the title. Otherwise, it's just one of my random blog posts.</h4>
    </section>
    <ol className="writing__archive">
      <li className="writing__year">
        <h2 className="writing__year__header">2018</h2>
        <ol className="articles">
          <li className="article">
            <p className="article__date">28 December</p>
            <div className="article__meta">
              <a className="article__title" href="https://calendar.perfplanet.com/2018/doing-differential-serving-in-2019/" rel="noopener">Doing Differential Serving in 2019</a>
              <a className="article__publication" href="https://calendar.perfplanet.com/2018/" rel="noopener">Performance Calendar</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">22 October</p>
            <div className="article__meta">
              <a className="article__title" href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints/" rel="noopener">Adapting to Users with Client Hints</a>
              <a className="article__publication" href="https://developers.google.com/web/fundamentals/" rel="noopener">Google Web Fundamentals</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">6 August</p>
            <div className="article__meta">
              <a className="article__title" href="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/" rel="noopener">Reduce JavaScript Payloads with Code Splitting<sup>&dagger;</sup></a>
              <a className="article__publication" href="https://developers.google.com/web/fundamentals/" rel="noopener">Google Web Fundamentals</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">24 July</p>
            <div className="article__meta">
              <a className="article__title" href="https://www.smashingmagazine.com/ebooks/the-webp-manual/" rel="noopener">The WebP Manual</a>
              <a className="article__publication" href="https://www.smashingmagazine.com/" rel="noopener">Smashing Magazine</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">14 June</p>
            <div className="article__meta">
              <a className="article__title" href="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/" rel="noopener">Reduce JavaScript Payloads with Tree Shaking</a>
              <a className="article__publication" href="https://developers.google.com/web/fundamentals/" rel="noopener">Google Web Fundamentals</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">8 June</p>
            <div className="article__meta">
              <a className="article__title" href="https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/" rel="noopener">Assessing Loading Performance in Real Life with Navigation and Resource Timing</a>
              <a className="article__publication" href="https://developers.google.com/web/fundamentals/" rel="noopener">Google Web Fundamentals</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">4 April</p>
            <div className="article__meta">
              <a className="article__title" href="https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/" rel="noopener">Lazy Loading Images and Video</a>
              <a className="article__publication" href="https://developers.google.com/web/fundamentals/" rel="noopener">Google Web Fundamentals</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">4 April</p>
            <div className="article__meta">
              <a className="article__title" href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/" rel="noopener">Delivering Fast and Light Applications with Save-Data<sup>&dagger;</sup></a>
              <a className="article__publication" href="https://developers.google.com/web/fundamentals/" rel="noopener">Google Web Fundamentals</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">31 March</p>
            <div className="article__meta">
              <a className="article__title" href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/" rel="noopener">Replace Animated GIFs with Video</a>
              <a className="article__publication" href="https://developers.google.com/web/fundamentals/" rel="noopener">Google Web Fundamentals</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">20 March</p>
            <div className="article__meta">
              <a className="article__title" href="https://alistapart.com/article/designing-for-research/" rel="noopener">Designing for Research</a>
              <a className="article__publication" href="https://alistapart.com/" rel="noopener">A List Apart</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">15 March</p>
            <div className="article__meta">
              <a className="article__title" href="https://www.creativebloq.com/how-to/4-essential-image-optimisation-tips" rel="noopener">4 Essential Image Optimisation Tips</a>
              <a className="article__publication" href="https://www.creativebloq.com/net-magazine" rel="noopener">Net Magazine</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">8 March</p>
            <div className="article__meta">
              <a className="article__title" href="https://developers.google.com/web/fundamentals/performance/why-performance-matters/" rel="noopener">Why Performance Matters</a>
              <a className="article__publication" href="https://developers.google.com/web/fundamentals/" rel="noopener">Google Web Fundamentals</a>
            </div>
          </li>
        </ol>
      </li>
      <li className="writing__year">
        <h2 className="writing__year__header">2017</h2>
        <ol className="articles">
          <li className="article">
            <p className="article__date">21 December</p>
            <div className="article__meta">
              <a className="article__title" href="https://calendar.perfplanet.com/2017/3-tips-for-faster-font-loading/" rel="noopener">3 Tips for Faster Font Loading</a>
              <a className="article__publication" href="https://calendar.perfplanet.com/2017/" rel="noopener">Performance Calendar</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">2 October</p>
            <div className="article__meta">
              <a className="article__title" href="https://css-tricks.com/help-users-save-data/" rel="noopener">Help Your Users `Save-Data`</a>
              <a className="article__publication" href="https://css-tricks.com/" rel="noopener">CSS-Tricks</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">16 August</p>
            <div className="article__meta">
              <a className="article__title" href="https://css-tricks.com/paint-timing-api/" rel="noopener">Using the Paint Timing API</a>
              <a className="article__publication" href="https://css-tricks.com/" rel="noopener">CSS-Tricks</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">17 July</p>
            <div className="article__meta">
              <a className="article__title" href="https://css-tricks.com/musings-on-http2-and-bundling/" rel="noopener">Musings on HTTP/2 and Bundling</a>
              <a className="article__publication" href="https://css-tricks.com/" rel="noopener">CSS-Tricks</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">1 May</p>
            <div className="article__meta">
              <a className="article__title" href="https://www.creativebloq.com/how-to/5-tips-for-super-fast-css" rel="noopener">5 Tips for Super-fast CSS</a>
              <a className="article__publication" href="https://www.creativebloq.com/net-magazine" rel="noopener">Net Magazine</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">20 April</p>
            <div className="article__meta">
              <a className="article__title" href="/blog/faster-bulk-image-optimization-in-bash" rel="noopener">Faster Bulk Image Optimization in Bash</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">12 April</p>
            <div className="article__meta">
              <a className="article__title" href="https://css-tricks.com/brotli-static-compression/" rel="noopener">Brotli and Static Compression</a>
              <a className="article__publication" href="https://css-tricks.com/" rel="noopener">CSS-Tricks</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">10 April</p>
            <div className="article__meta">
              <a className="article__title" href="https://www.smashingmagazine.com/2017/04/guide-http2-server-push/" rel="noopener">A Comprehensive Guide To HTTP/2 Server Push</a>
              <a className="article__publication" href="https://www.smashingmagazine.com/" rel="noopener">Smashing Magazine</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">29 March</p>
            <div className="article__meta">
              <a className="article__title" href="https://davidwalsh.name/jpeg-compression-guetzli" rel="noopener">JPEG Compression with Guetzli</a>
              <a className="article__publication" href="https://davidwalsh.name/" rel="noopener">David Walsh Blog</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">2 February</p>
            <div className="article__meta">
              <a className="article__title" href="https://alistapart.com/article/considering-how-we-use-http2/" rel="noopener">Considering How We Use HTTP/2</a>
              <a className="article__publication" href="https://alistapart.com/" rel="noopener">A List Apart</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">2 February</p>
            <div className="article__meta">
              <a className="article__title" href="https://alistapart.com/article/using-http-2-responsibly-adapting-for-users/" rel="noopener">Using HTTP/2 Responsibly: Adapting for Users</a>
              <a className="article__publication" href="https://alistapart.com/" rel="noopener">A List Apart</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">16 January</p>
            <div className="article__meta">
              <a className="article__title" href="https://www.manning.com/books/web-performance-in-action?a_aid=webopt&a_bid=63c31090" rel="noopener">Web Performance in Action</a>
              <a className="article__publication" href="https://www.manning.com/" rel="noopener">Manning Publications</a>
            </div>
          </li>
        </ol>
      </li>
      <li className="writing__year">
        <h2 className="writing__year__header">2016</h2>
        <ol className="articles">
          <li className="article">
            <p className="article__date">10 December</p>
            <div className="article__meta">
              <a className="article__title" href="https://calendar.perfplanet.com/2016/speed-versus-speed-to-market/" rel="noopener">Speed Versus Speed to Market</a>
              <a className="article__publication" href="https://calendar.perfplanet.com/2016/" rel="noopener">Performance Calendar</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">28 November</p>
            <div className="article__meta">
              <a className="article__title" href="https://css-tricks.com/cache-aware-server-push/" rel="noopener">Creating a Cache-aware HTTP/2 Server Push Mechanism</a>
              <a className="article__publication" href="https://css-tricks.com/" rel="noopener">CSS-Tricks</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">5 October</p>
            <div className="article__meta">
              <a className="article__title" href="https://www.smashingmagazine.com/2016/10/next-generation-server-compression-with-brotli/" rel="noopener">Next Generation Server Compression With Brotli</a>
              <a className="article__publication" href="https://www.smashingmagazine.com/" rel="noopener">Smashing Magazine</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">26 August</p>
            <div className="article__meta">
              <a className="article__title" href="https://css-tricks.com/using-webp-images/" rel="noopener">Using WebP Images</a>
              <a className="article__publication" href="https://css-tricks.com/" rel="noopener">CSS-Tricks</a>
            </div>
          </li>
          <li className="article">
            <p className="article__date">19 August</p>
            <div className="article__meta">
              <a className="article__title" href="https://css-tricks.com/font-display-masses/" rel="noopener">`font-display` for the Masses</a>
              <a className="article__publication" href="https://css-tricks.com/" rel="noopener">CSS-Tricks</a>
            </div>
          </li>
        </ol>
      </li>
    </ol>
    <p className="writing__footnote">&dagger; Indicates a co-written article.</p>
  </main>
);
