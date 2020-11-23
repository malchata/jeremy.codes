export const RUM_ENDPOINT = "https://jlwagner.net/jot/record.php";
export const SEND_BEACON_SUPPORTED = "sendBeacon" in navigator;
export const FETCH_SUPPORTED = "fetch" in window;
export const NETINFO_SUPPORTED = "connection" in navigator;
export const DATA_SAVER_SUPPORTED = "connection" in navigator && "saveData" in navigator.connection;
export const DEVICEMEM_SUPPORTED = "deviceMemory" in navigator;
export const HARDWARE_CONCURRENCY_SUPPORTED = "hardwareConcurrency" in navigator;
export const REQUEST_IDLE_CALLBACK_SUPPORTED = "requestIdleCallback" in window;
