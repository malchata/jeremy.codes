export default (href, as) => {
  if ("connection" in navigator) {
    if (navigator.connection.saveData === true) {
      return;
    }
  }

  let prefetchLink = document.createElement("link");
  let resourceExtension = href.split(".").pop();
  let asValue;

  switch (as) {
    case "jpg":
    case "png":
    case "gif":
    case "svg":
      asValue = "image";

    case "js":
      asValue = "script";

    case "css":
      asValue = "style";

    case "woff":
    case "woff2":
    case "ttf":
      asValue = "font";
  }

  prefetchLink.setAttribute("rel", "prefetch");
  prefetchLink.setAttribute("href", href);
  prefetchLink.setAttribute("as", asValue);
  document.head.appendChild(prefetchLink);
};
