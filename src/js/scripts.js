import quicklink from "quicklink";
import dnstradamus from "dnstradamus";
import preconnect from "preconnect";
import { getCLS, getFID, getLCP, getFCP, getTTFB } from "web-vitals";

document.addEventListener("DOMContentLoaded", () => {
  quicklink({
    ignores: uri => /\.(xml|jpe?g|webp|gif|png|svg|m?jsx?|css)$/i.test(uri) || (uri.indexOf(document.location.host) > -1 && /#/.test(uri))
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

window.addEventListener("load", () => {
  let sent = false;

  const reportMetrics = metrics => {
    if (!sent) {
      const endpoint = "https://jlwagner.net/jot/index.php";

      const fetchOptions = {
        body: JSON.stringify(metrics),
        method: "POST",
        keepalive: true,
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      };

      const fetchCallback = () => {
        sent = true;
      };

      // if ("sendBeacon" in navigator) {
      //   navigator.sendBeacon(endpoint, body);
      //
      //   return;
      // }

      if ("fetch" in window) {
        if ("requestIdleCallback" in window) {
          fetch(endpoint, fetchOptions).then(fetchCallback);

          return;
        } else {
          fetch(endpoint, fetchOptions).then(fetchCallback);
        }

        return;
      }
    }
  };

  let metrics = {
    uri: document.location.pathname
  };

  if ("connection" in navigator) {
    if ("saveData" in navigator.connection) {
      metrics.savedata = navigator.connection.saveData ? "on" : "off";
    }

    metrics.ect = navigator.connection.effectiveType;
    metrics.downlink = navigator.connection.downlink;
    metrics.rtt = navigator.connection.rtt;
  }

  if ("deviceMemory" in navigator) {
    metrics.devicemem = navigator.deviceMemory;
  }

  const addMetric = metric => {
    metrics[metric.name.toLowerCase()] = metric.value;
  };

  getCLS(addMetric, true);
  getFID(addMetric, true);
  getLCP(addMetric, true);
  getTTFB(addMetric, true);
  getFCP(addMetric, true);

  setTimeout(() => {
    reportMetrics(metrics);
  }, 5e3);
});
