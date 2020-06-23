import { h, render } from "preact";
import ArticleEntry from "./ArticleEntry";

export default () => (
  <main>
    <section className="subpage__intro">
      <h1 className="subpage__header">Bylines &amp; blog posts</h1>
      <h4 className="subpage__subheader">Whenever I write something&mdash;and write I will&mdash;I'll post it here. If I wrote an article for someone else, you'll see that publication's name under the title. Otherwise, it's just another one of my random blog posts.</h4>
    </section>
    <ol className="writing__archive">
      <li className="writing__year">
        <h2 className="writing__year__header">2020</h2>
        <ol className="articles">
          <ArticleEntry
            date="23 June"
            link="/blog/experimenting-with-webp-recompression/"
            title="Experimenting with WebP Recompression"
          />
          <ArticleEntry
            date="31 January"
            link="https://css-tricks.com/innovation-cant-keep-the-web-fast/"
            title="Innovation Can't Keep the Web Fast"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
          />
          <ArticleEntry
            date="12 January"
            link="/blog/achievement-is-no-substitute-for-happiness/"
            title="Achievement is No Substitute for Happiness"
          />
        </ol>
      </li>
      <li className="writing__year">
        <h2 className="writing__year__header">2019</h2>
        <ol className="articles">
          <ArticleEntry
            date="14 November"
            link="https://alistapart.com/article/responsible-javascript-part-3"
            title="Responsible JavaScript: Part III"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
          />
          <ArticleEntry
            date="9 October"
            link="/blog/indelible-lines/"
            title="Indelible Lines"
          />
          <ArticleEntry
            date="18 July"
            link="/blog/a-less-risky-differential-serving-pattern/"
            title="A Less Risky Differential Serving Pattern"
          />
          <ArticleEntry
            date="13 June"
            link="https://alistapart.com/article/responsible-javascript-part-2"
            title="Responsible JavaScript: Part II"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
          />
          <ArticleEntry
            date="31 March"
            link="/blog/defining-productivity/"
            title="Defining Productivity"
          />
          <ArticleEntry
            date="28 March"
            link="https://alistapart.com/article/responsible-javascript-part-1"
            title="Responsible JavaScript: Part I"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
          />
          <ArticleEntry
            date="15 February"
            link="https://developers.google.com/web/updates/2019/02/priority-hints"
            title="Get Ready for Priority Hints"
            coauthor={true}
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
          />
          <ArticleEntry
            date="9 February"
            link="/blog/make-it-boring/"
            title="Make it Boring"
          />
        </ol>
      </li>
      <li className="writing__year">
        <h2 className="writing__year__header">2018</h2>
        <ol className="articles">
          <ArticleEntry
            date="28 December"
            link="https://calendar.perfplanet.com/2018/doing-differential-serving-in-2019/"
            title="Doing Differential Serving in 2019"
            publication="Performance Calendar (2018)"
            publicationLink="https://calendar.perfplanet.com/2018/"
          />
          <ArticleEntry
            date="22 October"
            link="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints/"
            title="Adapting to Users with Client Hints"
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
          />
          <ArticleEntry
            date="6 August"
            link="http://web.archive.org/web/20200526175237/https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/"
            title="Reduce JavaScript Payloads with Code Splitting"
            coauthor={true}
            archived={true}
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
          />
          <ArticleEntry
            date="24 July"
            link="https://www.smashingmagazine.com/ebooks/the-webp-manual/"
            title="The WebP Manual"
            publication="Smashing Magazine"
            publicationLink="https://www.smashingmagazine.com/"
          />
          <ArticleEntry
            date="14 June"
            link="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/"
            title="Reduce JavaScript Payloads with Tree Shaking"
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
          />
          <ArticleEntry
            date="8 June"
            link="https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/"
            title="Assessing Loading Performance in Real Life with Navigation and Resource Timing"
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
          />
          <ArticleEntry
            date="4 April"
            link="https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/"
            title="Lazy Loading Images and Video"
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
          />
          <ArticleEntry
            date="4 April"
            link="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/"
            title="Delivering Fast and Light Applications with Save-Data"
            coauthor={true}
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
          />
          <ArticleEntry
            date="31 March"
            link="http://web.archive.org/web/20200513231155/https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/"
            title="Replace Animated GIFs with Video"
            archived={true}
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
          />
          <ArticleEntry
            date="20 March"
            link="https://alistapart.com/article/designing-for-research/"
            title="Designing for Research"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
          />
          <ArticleEntry
            date="15 March"
            link="https://www.creativebloq.com/how-to/4-essential-image-optimisation-tips"
            title="4 Essential Image Optimisation Tips"
            publication="Net Magazine"
            publicationLink="https://www.creativebloq.com/net-magazine"
          />
          <ArticleEntry
            date="8 March"
            link="https://developers.google.com/web/fundamentals/performance/why-performance-matters/"
            title="Why Performance Matters"
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
          />
        </ol>
      </li>
      <li className="writing__year">
        <h2 className="writing__year__header">2017</h2>
        <ol className="articles">
          <ArticleEntry
            date="21 December"
            link="https://calendar.perfplanet.com/2017/3-tips-for-faster-font-loading/"
            title="3 Tips for Faster Font Loading"
            publication="Performance Calendar (2017)"
            publicationLink="https://calendar.perfplanet.com/2017/"
          />
          <ArticleEntry
            date="2 October"
            link="https://css-tricks.com/help-users-save-data/"
            title="Help Your Users `Save-Data`"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
          />
          <ArticleEntry
            date="16 August"
            link="https://css-tricks.com/paint-timing-api/"
            title="Using the Paint Timing API"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
          />
          <ArticleEntry
            date="17 July"
            link="https://css-tricks.com/musings-on-http2-and-bundling/"
            title="Musings on HTTP/2 and Bundling"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
          />
          <ArticleEntry
            date="1 May"
            link="https://www.creativebloq.com/how-to/5-tips-for-super-fast-css"
            title="5 Tips for Super-fast CSS"
            publication="Net Magazine"
            publicationLink="https://www.creativebloq.com/net-magazine"
          />
          <ArticleEntry
            date="20 April"
            link="/blog/faster-bulk-image-optimization-in-bash/"
            title="Faster Bulk Image Optimization in Bash"
          />
          <ArticleEntry
            date="12 April"
            link="https://css-tricks.com/brotli-static-compression/"
            title="Brotli and Static Compression"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
          />
          <ArticleEntry
            date="10 April"
            link="https://www.smashingmagazine.com/2017/04/guide-http2-server-push/"
            title="A Comprehensive Guide To HTTP/2 Server Push"
            publication="Smashing Magazine"
            publicationLink="https://www.smashingmagazine.com/"
          />
          <ArticleEntry
            date="29 March"
            link="https://davidwalsh.name/jpeg-compression-guetzli"
            title="JPEG Compression with Guetzli"
            publication="David Walsh Blog"
            publicationLink="https://davidwalsh.name/"
          />
          <ArticleEntry
            date="9 March"
            link="/blog/bulk-image-optimization-in-bash/"
            title="Bulk Image Optimization in Bash"
          />
          <ArticleEntry
            date="2 February"
            link="https://alistapart.com/article/considering-how-we-use-http2/"
            title="Considering How We Use HTTP/2"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
          />
          <ArticleEntry
            date="2 February"
            link="https://alistapart.com/article/using-http-2-responsibly-adapting-for-users/"
            title="Using HTTP/2 Responsibly: Adapting for Users"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
          />
        </ol>
      </li>
      <li className="writing__year">
        <h2 className="writing__year__header">2016</h2>
        <ol className="articles">
          <ArticleEntry
            date="10 December"
            link="https://calendar.perfplanet.com/2016/speed-versus-speed-to-market/"
            title="Speed Versus Speed to Market"
            publication="Performance Calendar (2016)"
            publicationLink="https://calendar.perfplanet.com/2016/"
          />
          <ArticleEntry
            date="28 November"
            link="https://css-tricks.com/cache-aware-server-push/"
            title="Creating a Cache-aware HTTP/2 Server Push Mechanism"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
          />
          <ArticleEntry
            date="5 October"
            link="https://www.smashingmagazine.com/2016/10/next-generation-server-compression-with-brotli/"
            title="Next Generation Server Compression With Brotli"
            publication="Smashing Magazine"
            publicationLink="https://www.smashingmagazine.com/"
          />
          <ArticleEntry
            date="26 August"
            link="https://css-tricks.com/using-webp-images/"
            title="Using WebP Images"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
          />
          <ArticleEntry
            date="19 August"
            link="https://css-tricks.com/font-display-masses/"
            title="`font-display` for the Masses"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
          />
        </ol>
      </li>
    </ol>
    <p className="writing__footnote">
      &dagger; Indicates a co-written article.<br />
      &Dagger; Indicates an article which has been deleted by the publisher, and that the link is to an archived version.
    </p>
  </main>
);
