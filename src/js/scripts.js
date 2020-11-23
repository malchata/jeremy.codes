// Vendors
import dnstradamus from "dnstradamus";

// App-specific
import processMetrics from "./lib/process-metrics.js";

document.addEventListener("DOMContentLoaded", dnstradamus);

window.addEventListener("load", processMetrics);
