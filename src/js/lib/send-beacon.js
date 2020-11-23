export default function (endpoint, metrics) {
  const body = JSON.stringify(metrics);

  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      navigator.sendBeacon(endpoint, body);
    });

    return;
  }

  navigator.sendBeacon(endpoint, body);
}
