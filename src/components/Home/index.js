import { h, render } from "preact";

export default () => (
  <main>
    <section class="section section--intro">
      <div class="section__container">
        <div class="section__copy">
          <h1 class="section__header">Hi, I'm Jeremy.</h1>
          <h2 class="section__body">I'm a web developer, writer, and speaker. I love to make the web both fast and fun for everyone, everywhere.</h2>
        </div>
        <img class="section__image" width="1152" height="1748" src="/img/jeremy-384w.png" srcset="/img/jeremy-384w.png 384w, /img/jeremy-512w.png 512w, /img/jeremy-640w.png 640w, /img/jeremy-768w.png 768w, /img/jeremy-896w.png 896w, /img/jeremy-1024w.png 1024w, /img/jeremy-1152w.png 1152w" alt="A photo of Jeremy Wagner smiling with his arms crossed." sizes="(min-width: 1120px) 362px, (min-width: 640px) 33.04vw, calc(66.88vw - 23px)" />
      </div>
    </section>
    <section class="section section--writing">
      <div class="section__container">
        <div class="section__copy">
          <h2 class="section__header">I write.</h2>
          <h3 class="section__body">A central part of my learning involves documenting it. This has lead to <a href="/writing/" rel="noopener">articles and books</a>. I also <a href="/" rel="noopener">write on my blog</a> when the mood strikes.</h3>
        </div>
        <div class="books">
          <a href="https://www.manning.com/books/web-performance-in-action?a_aid=webopt&amp;a_bid=63c31090" rel="noopener" class="book__link">
            <img class="book__image lazy" width="128" height="160" src="/img/wpia-placeholder.png" data-src="/img/wpia-128w.png" data-srcset="/img/wpia-128w.png 128w, /img/wpia-256w.png 256w, /img/wpia-384w.png 384w, /img/wpia-512w.png 512w, /img/wpia-640w.png 640w" alt="The book cover for Web Performance in Action" sizes="(min-width: 1160px) 227px, (min-width: 960px) calc(13.33vw + 75px), (min-width: 800px) calc(23.57vw - 37px), (min-width: 640px) calc(21.43vw - 30px), calc(31.25vw - 11px)" />
            <noscript>
              <img class="book__image" width="128" height="160" src="/img/wpia-128w.png" srcset="/img/wpia-128w.png 128w, /img/wpia-256w.png 256w, /img/wpia-384w.png 384w, /img/wpia-512w.png 512w, /img/wpia-640w.png 640w" alt="The book cover for Web Performance in Action" sizes="(min-width: 1160px) 227px, (min-width: 960px) calc(13.33vw + 75px), (min-width: 800px) calc(23.57vw - 37px), (min-width: 640px) calc(21.43vw - 30px), calc(31.25vw - 11px)" />
            </noscript>
          </a>
          <a href="https://www.smashingmagazine.com/ebooks/the-webp-manual/" rel="noopener" class="book__link">
            <img class="book__image lazy" width="128" height="160" src="/img/twm-placeholder.png" data-src="/img/twm-128w.png" data-srcset="/img/twm-128w.png 128w, /img/twm-256w.png 256w, /img/twm-384w.png 384w, /img/twm-512w.png 512w, /img/twm-640w.png 640w" alt="The book cover for The WebP Manual" sizes="(min-width: 1160px) 227px, (min-width: 960px) calc(13.33vw + 75px), (min-width: 800px) calc(23.57vw - 37px), (min-width: 640px) calc(21.43vw - 30px), calc(31.25vw - 11px)" />
            <noscript>
              <img class="book__image" width="128" height="160" src="/img/twm-128w.png" srcset="/img/twm-128w.png 128w, /img/twm-256w.png 256w, /img/twm-384w.png 384w, /img/twm-512w.png 512w, /img/twm-640w.png 640w" alt="The book cover for The WebP Manual" sizes="(min-width: 1160px) 227px, (min-width: 960px) calc(13.33vw + 75px), (min-width: 800px) calc(23.57vw - 37px), (min-width: 640px) calc(21.43vw - 30px), calc(31.25vw - 11px)" />
            </noscript>
          </a>
        </div>
      </div>
    </section>
    <section class="section section--speaking">
      <div class="section__container">
        <div class="section__copy">
          <h2 class="section__header">I speak.</h2>
          <h3 class="section__body">Sometimes <a href="https://noti.st/malchata" rel="noopener">I speak at conferences</a> about the web. If you think I'd be a good fit for your event, <a href="/contact/" rel="noopener">let's chat</a>.</h3>
        </div>
        <img class="section__image lazy" width="256" height="299" src="/img/jeremy-speaking-placeholder.png" data-src="/img/jeremy-speaking-256w.png" data-srcset="/img/jeremy-speaking-256w.png 256w, /img/jeremy-speaking-384w.png 384w, /img/jeremy-speaking-512w.png 512w, /img/jeremy-speaking-640w.png 640w, /img/jeremy-speaking-768w.png 768w, /img/jeremy-speaking-896w.png 896w, /img/jeremy-speaking-1024w.png 1024w" alt="A stylized photo of Jeremy Wagner speaking at an event." sizes="(min-width: 640px) 349px, calc(66.88vw - 23px)" />
        <noscript>
          <img class="section__image" width="256" height="299" src="/img/jeremy-speaking-256w.png" srcset="/img/jeremy-speaking-256w.png 256w, /img/jeremy-speaking-384w.png 384w, /img/jeremy-speaking-512w.png 512w, /img/jeremy-speaking-640w.png 640w, /img/jeremy-speaking-768w.png 768w, /img/jeremy-speaking-896w.png 896w, /img/jeremy-speaking-1024w.png 1024w" alt="A stylized photo of Jeremy Wagner speaking at an event." sizes="(min-width: 640px) 349px, calc(66.88vw - 23px)" />
        </noscript>
      </div>
    </section>
    <section class="section section--work">
      <div class="section__container">
        <div class="section__copy">
          <h2 class="section__header">I work.</h2>
          <h3 class="section__body">I work to make the web faster as a web performance consultant. If you think I can help you to be faster on the web, <a href="/contact" rel="noopener">get in touch</a>!</h3>
        </div>
        <img class="section__image lazy" width="256" height="159" src="/img/keyboard-placeholder.png" data-src="/img/keyboard-256w.png" data-srcset="/img/keyboard-256w.png 256w, /img/keyboard-384w.png 384w, /img/keyboard-512w.png 512w, /img/keyboard-640w.png 640w, /img/keyboard-768w.png 768w, /img/keyboard-896w.png 896w, /img/keyboard-1024w.png 1024w, /img/keyboard-1152w.png 1152w" alt="A stylized photo of a very stylish mechanical keyboard (it's a Night Fox)." sizes="(min-width: 1120px) 362px, (min-width: 640px) 33.04vw, calc(66.88vw - 23px)" />
        <noscript>
          <img class="section__image" width="256" height="159" src="/img/keyboard-256w.png" srcset="/img/keyboard-256w.png 256w, /img/keyboard-384w.png 384w, /img/keyboard-512w.png 512w, /img/keyboard-640w.png 640w, /img/keyboard-768w.png 768w, /img/keyboard-896w.png 896w, /img/keyboard-1024w.png 1024w, /img/keyboard-1152w.png 1152w" alt="A stylized photo of a very stylish mechanical keyboard (it's a Night Fox)." sizes="(min-width: 1120px) 362px, (min-width: 640px) 33.04vw, calc(66.88vw - 23px)" />
        </noscript>
      </div>
    </section>
  </main>
);
