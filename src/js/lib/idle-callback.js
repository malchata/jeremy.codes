// App-specific
import { REQUEST_IDLE_CALLBACK_SUPPORTED } from "./constants.js";

export default function (callback) {
  if (REQUEST_IDLE_CALLBACK_SUPPORTED) {
    requestIdleCallback(callback);

    return;
  }

  callback();
}
