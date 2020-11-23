// App-specific
import metric from "./metric.js";
import reportMetric from "./report-metric.js";
import reportWebVitals from "./report-web-vitals.js";
import {
  NETINFO_SUPPORTED,
  DATA_SAVER_SUPPORTED,
  DEVICEMEM_SUPPORTED,
  HARDWARE_CONCURRENCY_SUPPORTED
} from "./constants.js";

export default function () {
  const metrics = [];
  let saveData = "unavailable";

  if (DATA_SAVER_SUPPORTED) {
    saveData = navigator.connection.saveData ? "on" : "off";
  }

  metrics.push(metric("savedata", saveData));

  if (NETINFO_SUPPORTED) {
    metrics.push(metric("ect", navigator.connection.effectiveType));
    metrics.push(metric("downlink", navigator.connection.downlink));
    metrics.push(metric("rtt", navigator.connection.rtt));
  }

  if (DEVICEMEM_SUPPORTED) {
    metrics.push(metric("devicemem", navigator.deviceMemory));
  }

  if (HARDWARE_CONCURRENCY_SUPPORTED) {
    metrics.push(metric("hardwareconcurrency", navigator.hardwareConcurrency));
  }

  reportMetric(metrics);
  reportWebVitals();
}
