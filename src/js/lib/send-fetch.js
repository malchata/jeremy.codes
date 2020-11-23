import idleCallback from "./idle-callback.js";

export default function (endpoint, metrics) {
  const fetchOptions = {
    body: JSON.stringify(metrics),
    method: "POST",
    keepalive: true,
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  };

  idleCallback(() => {
    fetch(endpoint, fetchOptions);
  });
}
