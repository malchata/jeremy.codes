import quicklink from "quicklink";
import dnstradamus from "dnstradamus";

document.addEventListener("DOMContentLoaded", () => {
  quicklink({
    ignores: uri => /\.(xml|jpe?g|webp|gif|png|svg|m?jsx?|css)$/i.test(uri)
  });

  if ([].slice.call(document.querySelectorAll("a[href^=\"http://\"],a[href^=\"https://\"]")).length) {
    dnstradamus();
  }
});
