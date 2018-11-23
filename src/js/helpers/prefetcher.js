export default (href) => {
  if ("connection" in navigator && navigator.connection.saveData === true) {
    return;
  }

  let prefetchLink = document.createElement("link");
  prefetchLink.setAttribute("rel", "prefetch");
  prefetchLink.setAttribute("href", href);
  prefetchLink.setAttribute("as", "script");
  document.head.appendChild(prefetchLink);
};
