import quicklink from "quicklink";
import dnstradamus from "dnstradamus";
import preconnect from "preconnect";

document.addEventListener("DOMContentLoaded", () => {
  quicklink({
    ignores: uri => /\.(xml|jpe?g|webp|gif|png|svg|m?jsx?|css)$/i.test(uri)
  });

  dnstradamus();

  const outboundLinks = [].slice.call(document.querySelectorAll("a[href^=\"http://\"],a[href^=\"https://\"]"));

  if (outboundLinks.length) {
    const preconnector = new preconnect();
    const callback = event => {
      if ("href" in event.target) {
        preconnector.add(event.target.href);
      }
    };
    const eventOptions = {
      once: true
    };

    outboundLinks.forEach(outboundLink => {
      outboundLink.addEventListener("touchstart", callback, eventOptions);
      outboundLink.addEventListener("mousedown", callback, eventOptions);
    });
  }
});

const images = [].slice.call(document.querySelectorAll("img.lazy"));

if ("loading" in HTMLImageElement.prototype && images.length) {
  images.forEach(img => {
    if (img.parentNode.nodeName === "PICTURE") {
      const sources = [].slice.call(img.parentNode.querySelectorAll("source"));

      sources.forEach(source => {
        if (source.dataset.srcset) {
          source.srcset = source.dataset.srcset;
        }
      });
    }

    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
    }

    img.src = img.dataset.src;
  });
} else if (!("loading" in HTMLImageElement.prototype) && images.length) {
  import(/* webpackChunkName: "yall" */ "yall-js").then(yall => {
    yall.default();
  });
}
