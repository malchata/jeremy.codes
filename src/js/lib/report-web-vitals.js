// Vendors
import { getCLS, getFID, getLCP, getFCP, getTTFB } from "web-vitals";

// App-specific
import metric from "./metric.js";
import reportMetric from "./report-metric.js";

export default function () {
  const callback = metricData => {
    reportMetric(metric(metricData.name.toLowerCase(), metricData.value));
  };

  getCLS(callback);
  getFID(callback);
  getLCP(callback);
  getTTFB(callback);
  getFCP(callback);
}
