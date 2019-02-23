import quicklink from "quicklink";
import dnstradamus from "dnstradamus";

document.addEventListener("DOMContentLoaded", function() {
  quicklink({
    ignores: uri => /rss\.xml$/i.test(uri) === true
  });
  dnstradamus();
});
