import idleCallback from "./idle-callback.js";
import sendBeacon from "./send-beacon.js";
import sendFetch from "./send-fetch.js";
import {
  RUM_ENDPOINT,
  SEND_BEACON_SUPPORTED,
  FETCH_SUPPORTED
} from "./constants.js";

export default function (metric) {
  if (SEND_BEACON_SUPPORTED) {
    idleCallback(() => {
      sendBeacon(RUM_ENDPOINT, metric);
    });

    return;
  }

  if (FETCH_SUPPORTED) {
    idleCallback(() => {
      sendFetch(RUM_ENDPOINT, metric);
    });

    return;
  }

  import (/* webpackChunkName: "fetch-polyfill" */ "whatwg-fetch").then(() => {
    idleCallback(() => {
      sendFetch(RUM_ENDPOINT, metric);
    });
  }).catch(error => {
    console.warn("Couldn't load fetch polyfill:");
    console.warn(error);
  });
}
