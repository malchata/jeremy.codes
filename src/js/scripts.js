import quicklink from "quicklink";
import dnstradamus from "dnstradamus";
import yall from "yall-js";

document.addEventListener("DOMContentLoaded", () => {
  quicklink({
    ignores: uri => /\.(xml|jpe?g|gif|svg|js|css)$/i.test(uri)
  });

  if ([].slice.call(document.querySelectorAll("a[href^=\"http://\"],a[href^=\"https://\"]")).length) {
    dnstradamus();
  }

  if ([].slice.call(document.querySelectorAll(".lazy")).length) {
    yall({
      events: {
        load: event => {
          if (event.target.nodeName == "IMG" && !event.target.classList.contains("lazy")) {
            event.target.classList.add("yall__loaded");
          }
        }
      }
    });
  }
});
