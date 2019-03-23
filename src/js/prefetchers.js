import quicklink from "quicklink";
import dnstradamus from "dnstradamus";

document.addEventListener("DOMContentLoaded", () => {
  quicklink({
    ignores: uri => /\.(xml|jpe?g|gif|svg|js|css)$/i.test(uri)
  });

  dnstradamus();
});
