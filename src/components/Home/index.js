import { h, render } from "preact";

export default () => (
  <main>
    <section className="section section--intro">
      <div className="section__container">
        <div className="section__copy">
          <h1 className="section__header">Hi, I'm Jeremy.</h1>
          <h2 className="section__body">I'm a web developer, writer, and speaker. I love to make the web both fast and fun for everyone, everywhere.</h2>
        </div>
        <picture>
          <source srcset="/img/home/jeremy-384w.webp 384w, /img/home/jeremy-512w.webp 512w, /img/home/jeremy-640w.webp 640w, /img/home/jeremy-768w.webp 768w, /img/home/jeremy-896w.webp 896w, /img/home/jeremy-1024w.webp 1024w, /img/home/jeremy-1152w.webp 1152w" type="image/webp" />
          <img className="section__image" width="1152" height="1748" src="/img/home/jeremy-384w.png" srcset="/img/home/jeremy-384w.png 384w, /img/home/jeremy-512w.png 512w, /img/home/jeremy-640w.png 640w, /img/home/jeremy-768w.png 768w, /img/home/jeremy-896w.png 896w, /img/home/jeremy-1024w.png 1024w, /img/home/jeremy-1152w.png 1152w" alt="A photo of Jeremy Wagner smiling with his arms crossed. He usually doesn't look this relaxed." sizes="(min-width: 1060px) 339px, (min-width: 640px) 32.25vw, calc(66.88vw - 23px)" />
        </picture>
      </div>
    </section>
    <section className="section section--writing">
      <div className="section__container">
        <div className="section__copy">
          <h2 className="section__header">I write.</h2>
          <h3 className="section__body">A central part of my learning involves documenting it. This has lead to <a href="/writing/" rel="noopener">articles and books</a>. I also write on my blog when the mood strikes. <em>Latest post: <a href="/blog/make-it-boring/" rel="noopener">Make it Boring</a></em></h3>
        </div>
        <div className="books">
          <a href="https://www.manning.com/books/web-performance-in-action?a_aid=webopt&amp;a_bid=63c31090" rel="noopener" className="book__link">
            <picture>
              <source data-srcset="/img/home/wpia-128w.webp 128w, /img/home/wpia-256w.webp 256w, /img/home/wpia-384w.webp 384w, /img/home/wpia-512w.webp 512w, /img/home/wpia-640w.webp 640w" type="image/webp" />
              <img className="book__image lazy" width="128" height="160" src="/img/home/wpia-placeholder.png" data-src="/img/home/wpia-128w.png" data-srcset="/img/home/wpia-128w.png 128w, /img/home/wpia-256w.png 256w, /img/home/wpia-384w.png 384w, /img/home/wpia-512w.png 512w, /img/home/wpia-640w.png 640w" alt="The book cover for Web Performance in Action" sizes="(min-width: 960px) 199px, (min-width: 800px) calc(23.57vw - 37px), (min-width: 640px) calc(22.14vw - 35px), calc(41.56vw - 37px)" />
            </picture>
            <noscript>
              <picture>
                <source srcset="/img/home/wpia-128w.webp 128w, /img/home/wpia-256w.webp 256w, /img/home/wpia-384w.webp 384w, /img/home/wpia-512w.webp 512w, /img/home/wpia-640w.webp 640w" type="image/webp" />
                <img className="book__image" width="128" height="160" src="/img/home/wpia-128w.png" srcset="/img/home/wpia-128w.png 128w, /img/home/wpia-256w.png 256w, /img/home/wpia-384w.png 384w, /img/home/wpia-512w.png 512w, /img/home/wpia-640w.png 640w" alt="The book cover for Web Performance in Action" sizes="(min-width: 960px) 199px, (min-width: 800px) calc(23.57vw - 37px), (min-width: 640px) calc(22.14vw - 35px), calc(41.56vw - 37px)" />
              </picture>
            </noscript>
          </a>
          <a href="https://www.smashingmagazine.com/ebooks/the-webp-manual/" rel="noopener" className="book__link">
            <picture>
              <source data-srcset="/img/home/twm-128w.webp 128w, /img/home/twm-256w.webp 256w, /img/home/twm-384w.webp 384w, /img/home/twm-512w.webp 512w, /img/home/twm-640w.webp 640w" type="image/webp" />
              <img className="book__image lazy" width="128" height="160" src="/img/home/twm-placeholder.png" data-src="/img/home/twm-128w.png" data-srcset="/img/home/twm-128w.png 128w, /img/home/twm-256w.png 256w, /img/home/twm-384w.png 384w, /img/home/twm-512w.png 512w, /img/home/twm-640w.png 640w" alt="The book cover for The WebP Manual" sizes="(min-width: 960px) 199px, (min-width: 800px) calc(23.57vw - 37px), (min-width: 640px) calc(22.14vw - 35px), calc(41.56vw - 37px)" />
            </picture>
            <noscript>
              <picture>
                <source srcset="/img/home/twm-128w.webp 128w, /img/home/twm-256w.webp 256w, /img/home/twm-384w.webp 384w, /img/home/twm-512w.webp 512w, /img/home/twm-640w.webp 640w" type="image/webp" />
                <img className="book__image" width="128" height="160" src="/img/home/twm-128w.png" srcset="/img/home/twm-128w.png 128w, /img/home/twm-256w.png 256w, /img/home/twm-384w.png 384w, /img/home/twm-512w.png 512w, /img/home/twm-640w.png 640w" alt="The book cover for The WebP Manual" sizes="(min-width: 960px) 199px, (min-width: 800px) calc(23.57vw - 37px), (min-width: 640px) calc(22.14vw - 35px), calc(41.56vw - 37px)" />
              </picture>
            </noscript>
          </a>
        </div>
      </div>
    </section>
    <section className="section section--speaking">
      <div className="section__container">
        <div className="section__copy">
          <h2 className="section__header">I speak.</h2>
          <h3 className="section__body">Sometimes <a href="https://speaking.jeremy.codes/" rel="noopener">I speak at conferences</a> about the web. If you think I'd be a good fit for your event, <a href="/contact/" rel="noopener">let's chat</a>. <em>Latest talk: <a href="https://www.youtube.com/watch?v=md7Ua82fPe4" rel="noopener">Take a (Client) Hint!</a></em>
          </h3>
        </div>
        <picture>
          <source data-srcset="/img/home/jeremy-speaking-256w.webp 256w, /img/home/jeremy-speaking-384w.webp 384w, /img/home/jeremy-speaking-512w.webp 512w, /img/home/jeremy-speaking-640w.webp 640w, /img/home/jeremy-speaking-768w.webp 768w, /img/home/jeremy-speaking-896w.webp 896w, /img/home/jeremy-speaking-1024w.webp 1024w" type="image/webp" />
          <img className="section__image lazy" width="256" height="299" src="/img/home/jeremy-speaking-placeholder.png" data-src="/img/home/jeremy-speaking-256w.png" data-srcset="/img/home/jeremy-speaking-256w.png 256w, /img/home/jeremy-speaking-384w.png 384w, /img/home/jeremy-speaking-512w.png 512w, /img/home/jeremy-speaking-640w.png 640w, /img/home/jeremy-speaking-768w.png 768w, /img/home/jeremy-speaking-896w.png 896w, /img/home/jeremy-speaking-1024w.png 1024w" alt="A stylized photo of Jeremy Wagner speaking at an event. I mean, look at this guy, you'd think he was a pro at stuff judging by how good this photo looks." sizes="(min-width: 640px) 352px, calc(66.88vw - 23px)" />
        </picture>
        <noscript>
          <picture>
            <source srcset="/img/home/jeremy-speaking-256w.webp 256w, /img/home/jeremy-speaking-384w.webp 384w, /img/home/jeremy-speaking-512w.webp 512w, /img/home/jeremy-speaking-640w.webp 640w, /img/home/jeremy-speaking-768w.webp 768w, /img/home/jeremy-speaking-896w.webp 896w, /img/home/jeremy-speaking-1024w.webp 1024w" type="image/webp" />
            <img className="section__image" width="256" height="299" src="/img/home/jeremy-speaking-256w.png" srcset="/img/home/jeremy-speaking-256w.png 256w, /img/home/jeremy-speaking-384w.png 384w, /img/home/jeremy-speaking-512w.png 512w, /img/home/jeremy-speaking-640w.png 640w, /img/home/jeremy-speaking-768w.png 768w, /img/home/jeremy-speaking-896w.png 896w, /img/home/jeremy-speaking-1024w.png 1024w" alt="A stylized photo of Jeremy Wagner speaking at an event. I mean, look at this guy, you'd think he was a pro at stuff judging by how good this photo looks." sizes="(min-width: 640px) 352px, calc(66.88vw - 23px)" />
          </picture>
        </noscript>
      </div>
    </section>
    <section className="section section--work">
      <div className="section__container">
        <div className="section__copy">
          <h2 className="section__header">I work.</h2>
          <h3 className="section__body">I work to make the web faster as a web performance consultant. If you think I can help you to be faster on the web, <a href="/contact/" rel="noopener">get in touch</a>!</h3>
        </div>
        <picture>
          <source data-srcset="/img/home/keyboard-256w.webp 256w, /img/home/keyboard-384w.webp 384w, /img/home/keyboard-512w.webp 512w, /img/home/keyboard-640w.webp 640w, /img/home/keyboard-768w.webp 768w, /img/home/keyboard-896w.webp 896w, /img/home/keyboard-1024w.webp 1024w, /img/home/keyboard-1152w.webp 1152w" type="image/webp" />
          <img className="section__image lazy" width="256" height="159" src="/img/home/keyboard-placeholder.png" data-src="/img/home/keyboard-256w.png" data-srcset="/img/home/keyboard-256w.png 256w, /img/home/keyboard-384w.png 384w, /img/home/keyboard-512w.png 512w, /img/home/keyboard-640w.png 640w, /img/home/keyboard-768w.png 768w, /img/home/keyboard-896w.png 896w, /img/home/keyboard-1024w.png 1024w, /img/home/keyboard-1152w.png 1152w" alt="A stylized photo of a very stylish mechanical keyboard (it's a Night Fox)." />
        </picture>
        <noscript>
          <picture>
            <source srcset="/img/home/keyboard-256w.webp 256w, /img/home/keyboard-384w.webp 384w, /img/home/keyboard-512w.webp 512w, /img/home/keyboard-640w.webp 640w, /img/home/keyboard-768w.webp 768w, /img/home/keyboard-896w.webp 896w, /img/home/keyboard-1024w.webp 1024w, /img/home/keyboard-1152w.webp 1152w" type="image/webp" />
            <img className="section__image" width="256" height="159" src="/img/home/keyboard-256w.png" srcset="/img/home/keyboard-256w.png 256w, /img/home/keyboard-384w.png 384w, /img/home/keyboard-512w.png 512w, /img/home/keyboard-640w.png 640w, /img/home/keyboard-768w.png 768w, /img/home/keyboard-896w.png 896w, /img/home/keyboard-1024w.png 1024w, /img/home/keyboard-1152w.png 1152w" alt="A stylized photo of a very stylish mechanical keyboard (it's a Night Fox)." />
          </picture>
        </noscript>
      </div>
    </section>
  </main>
);
