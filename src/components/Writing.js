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
            date="19 August"
            link="https://css-tricks.com/radeventlistener-a-tale-of-client-side-framework-performance/"
            title="radEventListener: a Tale of Client-side Framework Performance"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
            description="React has its place when complex state management is required. In my experience, however, it doesn’t belong in most scenarios. When even a bit of React is a problem on devices slow and fast alike, using it is a choice to exclude those on low-end hardware."
          />
          <ArticleEntry
            date="23 June"
            link="/blog/experimenting-with-webp-recompression/"
            title="Experimenting with WebP Recompression"
            description="In which I experiment with recompressing JPEGs to lossy WebP images, but while also mitigating quality loss with a fun new tool I wrote."
          />
          <ArticleEntry
            date="31 January"
            link="https://css-tricks.com/innovation-cant-keep-the-web-fast/"
            title="Innovation Can't Keep the Web Fast"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
            description="Every so often, the fruits of innovation bear fruit in the form of improvements to the foundational layers of the web. Unfortunately, web developers are locked in an arms race between these foundational improvements, and ever-increasing page sizes."
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
            description="Jeremy Wagner shows us how to get and keep third-party JavaScript under control through clean-up sprints and eternal vigilance."
          />
          <ArticleEntry
            date="18 July"
            link="/blog/a-less-risky-differential-serving-pattern/"
            title="A Less Risky Differential Serving Pattern"
            description="The usual pattern for differentially serving scripts is not without its risks. Here's an approach that might work a bit better for you."
          />
          <ArticleEntry
            date="13 June"
            link="https://alistapart.com/article/responsible-javascript-part-2"
            title="Responsible JavaScript: Part II"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
            description="Web development is hard. We don't always get it right on the first try. Fortunately, we don't have to get everything perfect from the start. Jeremy Wagner provides some helpful ways to start recovering from our collective JavaScript hangover."
          />
          <ArticleEntry
            date="31 March"
            link="/blog/defining-productivity/"
            title="Defining Productivity"
            description="In which I ask what the true meaning of productivity is when it comes to web development."
          />
          <ArticleEntry
            date="28 March"
            link="https://alistapart.com/article/responsible-javascript-part-1"
            title="Responsible JavaScript: Part I"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
            description="The web is drowning in a sea of JavaScript, awash with unnecessary bloat, inaccessible cruft, and unsustainable patterns. Jeremy Wagner plots a course to navigate the JavaScript Sea responsibly by building the right things the right way and using the web platform the way it was meant to be used."
          />
          <ArticleEntry
            date="15 February"
            link="https://developers.google.com/web/updates/2019/02/priority-hints"
            title="Get Ready for Priority Hints"
            coauthor={true}
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
            description="Priority Hints provide developers a way to indicate a resource's relative importance to the browser, allowing more control over the order resources are loaded."
          />
          <ArticleEntry
            date="9 February"
            link="/blog/make-it-boring/"
            title="Make it Boring"
            description="In which I make the case that the web we build should be more boring to better benefit those who use what we make."
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
            description="Differential serving is a method by which we can ensure that we don't serve excessive ES6 transforms to browsers that don't need them, while serving those transforms to browsers that do. This article shows you how you can achieve this in a modern build toolchain."
          />
          <ArticleEntry
            date="22 October"
            link="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints/"
            title="Adapting to Users with Client Hints"
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
            description="Client hints are a set of HTTP request headers we can use to change how we deliver page resources based on characteristics of a users device and network connection. In this article, you'll learn all about client hints, how they work, and a few ideas on how you can use them to make your site faster for users."
          />
          <ArticleEntry
            date="24 July"
            link="https://www.smashingmagazine.com/ebooks/the-webp-manual/"
            title="The WebP Manual"
            publication="Smashing Magazine"
            publicationLink="https://www.smashingmagazine.com/"
            description="In this ebook, you'll learn all about WebP: what it's capable of, how it performs, how to convert images to the format in a variety of ways, and most importantly, how to use it."
          />
          <ArticleEntry
            date="14 June"
            link="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/"
            title="Reduce JavaScript Payloads with Tree Shaking"
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
            description="Knowing where to begin optimizing your application's JavaScript can be daunting. If you're taking advantage of modern tooling such as webpack, however, tree shaking might be a good place to start!"
          />
          <ArticleEntry
            date="8 June"
            link="https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/"
            title="Assessing Loading Performance in Real Life with Navigation and Resource Timing"
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
            description="When we measure loading performance, we often do so using testing tools that only describe performance from the perspective of the tester. If we want to measure loading performance from the user's perspective, we must rely on the Navigation and Resource Timing APIs."
          />
          <ArticleEntry
            date="4 April"
            link="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/"
            title="Delivering Fast and Light Applications with Save-Data"
            coauthor={true}
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
            description="The Save-Data client hint request header available in Chrome, Opera, and Yandex browsers enables developers to deliver fast and light applications to users who have opted-in to 'data saving' mode in the browser."
          />
          <ArticleEntry
            date="20 March"
            link="https://alistapart.com/article/designing-for-research/"
            title="Designing for Research"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
            description="Image quality may be about striking the balance between speed and quality, but there's more to it than meets the eye. What if, despite having methods to develop better and better image experiences for the web, the user disagrees? In a quest to find answers, Jeremy Wagner takes us through an image quality study that he designs, develops, and iterates on with user feedback. Asking “Why?” is no easy undertaking in research. His lossy is your gain."
          />
          <ArticleEntry
            date="15 March"
            link="https://www.creativebloq.com/how-to/4-essential-image-optimisation-tips"
            title="4 Essential Image Optimisation Tips"
            publication="Net Magazine"
            publicationLink="https://www.creativebloq.com/net-magazine"
            description="Images are typically the bulk of any site, so keep them trim with these techniques."
          />
          <ArticleEntry
            date="8 March"
            link="https://developers.google.com/web/fundamentals/performance/why-performance-matters/"
            title="Why Performance Matters"
            publication="Google Web Fundamentals"
            publicationLink="https://developers.google.com/web/fundamentals/"
            description="Thanks to mobile device and network proliferation, more people are using the web than ever before. As this user base grows, performance is more important than ever. In this article, find out why performance matters, and learn what you can do to make the web faster for everyone."
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
            description="If font loading performance is testing your users with invisible and shifting text, duck into this article for a few tips on getting your fonts to load just a bit faster."
          />
          <ArticleEntry
            date="2 October"
            link="https://css-tricks.com/help-users-save-data/"
            title="Help Your Users `Save-Data`"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
            description="When enabled, Chrome's Data Saver mode sends a `Save-Data` request header you can use to help users conserve data. How you will help your users `Save-Data`?"
          />
          <ArticleEntry
            date="16 August"
            link="https://css-tricks.com/paint-timing-api/"
            title="Using the Paint Timing API"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
            description="The Paint Timing API has landed in Chrome 60, and it allows us to gather paint timing metrics from end users. In this post, we'll show you how to use it!"
          />
          <ArticleEntry
            date="17 July"
            link="https://css-tricks.com/musings-on-http2-and-bundling/"
            title="Musings on HTTP/2 and Bundling"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
            description="When it comes to HTTP/2 and bundling assets, we're often told &quot;don't bundle!&quot; In this post, we challenge this assertion with some observations."
          />
          <ArticleEntry
            date="1 May"
            link="https://www.creativebloq.com/how-to/5-tips-for-super-fast-css"
            title="5 Tips for Super-fast CSS"
            publication="Net Magazine"
            publicationLink="https://www.creativebloq.com/net-magazine"
            description="Learn how to hasten page rendering by cutting the excess from your site's CSS."
          />
          <ArticleEntry
            date="20 April"
            link="/blog/faster-bulk-image-optimization-in-bash/"
            title="Faster Bulk Image Optimization in Bash"
            description="Continuing on from an earlier post on optimizing batches of images in bash, I show you how to do it even faster with xargs."
          />
          <ArticleEntry
            date="12 April"
            link="https://css-tricks.com/brotli-static-compression/"
            title="Brotli and Static Compression"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
            description="Content compression can be as simple as flipping a switch, but there's a lot to consider beyond that. We pretty well know what we need to compress, but what about configuring compression? Or static versus dynamic compression? Where does Brotli fit in with all of this?"
          />
          <ArticleEntry
            date="10 April"
            link="https://www.smashingmagazine.com/2017/04/guide-http2-server-push/"
            title="A Comprehensive Guide To HTTP/2 Server Push"
            publication="Smashing Magazine"
            publicationLink="https://www.smashingmagazine.com/"
            description="The landscape for the performance-minded developer has changed significantly in the last year or so, with the emergence of HTTP/2 being perhaps the most significant of all. No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!"
          />
          <ArticleEntry
            date="29 March"
            link="https://davidwalsh.name/jpeg-compression-guetzli"
            title="JPEG Compression with Guetzli"
            publication="David Walsh Blog"
            publicationLink="https://davidwalsh.name/"
            description="A little while ago Google released its Guetzli JPEG encoder, which claims a 20-30% improvement in file size over libjpeg. Being intrigued, I decided to give it a go. My tool of choice for optimizing JPEGs has long been jpeg-recompress, one of the binaries available in the jpeg-archive project. It's highly configurable, reasonably fast, and really delivers on optimizing JPEGs. But how does Guetzli compare?"
          />
          <ArticleEntry
            date="9 March"
            link="/blog/bulk-image-optimization-in-bash/"
            title="Bulk Image Optimization in Bash"
            description="Sometimes you need to optimize a whole lot of images at once. Learn how to do it offline with bash!"
          />
          <ArticleEntry
            date="2 February"
            link="https://alistapart.com/article/considering-how-we-use-http2/"
            title="Considering How We Use HTTP/2"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
            description="HTTP/2 is a rough experience on incompatible browsers. Jeremy Wagner explains the true extent of real-world performance problems, and how to adapt delivery of site assets to a user's connection."
          />
          <ArticleEntry
            date="2 February"
            link="https://alistapart.com/article/using-http-2-responsibly-adapting-for-users/"
            title="Using HTTP/2 Responsibly: Adapting for Users"
            publication="A List Apart"
            publicationLink="https://alistapart.com/"
            description="Depending on your audience's capabilities, a site optimized for HTTP/2 may be detrimental for a segment of your users. Jeremy Wagner shows us how adaptive content delivery can improve site performance caused by incompatible browsers."
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
            description="As web developers, it can be tricky to fit in time to address performance issues while also maintaining development velocity. In this article, you'll pick up a few quick tricks to make things just a bit faster."
          />
          <ArticleEntry
            date="28 November"
            link="https://css-tricks.com/cache-aware-server-push/"
            title="Creating a Cache-aware HTTP/2 Server Push Mechanism"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
            description="In this article you'll learn how to create a cache-aware HTTP/2 server push mechanism for using only a back end language and cookies."
          />
          <ArticleEntry
            date="5 October"
            link="https://www.smashingmagazine.com/2016/10/next-generation-server-compression-with-brotli/"
            title="Next Generation Server Compression With Brotli"
            publication="Smashing Magazine"
            publicationLink="https://www.smashingmagazine.com/"
            description="Chances are pretty good that you've worked with, or at least understand the concept of, server compression. By compressing website assets on the server prior to transferring them to the browser, we've been able to achieve substantial performance gains. In this article, learn how you can squeeze even more performance out of your website with Brotli."
          />
          <ArticleEntry
            date="26 August"
            link="https://css-tricks.com/using-webp-images/"
            title="Using WebP Images"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
            description="Using WebP images can yield substantially lower file sizes for your images, giving way to quicker page load times. Learn how to use them in this post!"
          />
          <ArticleEntry
            date="19 August"
            link="https://css-tricks.com/font-display-masses/"
            title="`font-display` for the Masses"
            publication="CSS-Tricks"
            publicationLink="https://css-tricks.com/"
            description="Default rendering behavior for web fonts in browsers can be fraught with peril, and sometimes can even cause accessibility problems. Learn how you can regain control of web font rendering with ease using the CSS `font-display` property!"
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
