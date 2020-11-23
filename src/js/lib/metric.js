export default function (metric, value) {
  return {
    pathName: document.location.pathname,
    metric,
    value: String(value)
  };
}
