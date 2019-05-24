import quicklink from "quicklink";
import dnstradamus from "dnstradamus";
import yall from "yall-js";

document.addEventListener("DOMContentLoaded", () => {
  quicklink({
    ignores: uri => /\.(xml|jpe?g|gif|svg|m?js?x|css)$/i.test(uri)
  });

  if ([].slice.call(document.querySelectorAll("a[href^=\"http://\"],a[href^=\"https://\"]")).length) {
    dnstradamus();
  }

  if ([].slice.call(document.querySelectorAll(".lazy")).length) {
    yall();
  }
});
