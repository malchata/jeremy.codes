import dnstradamus from "dnstradamus";

document.addEventListener("DOMContentLoaded", () => {
  if ([].slice.call(document.querySelectorAll("a[href^=\"http://\"],a[href^=\"https://\"]")).length) {
    dnstradamus();
  }
});
