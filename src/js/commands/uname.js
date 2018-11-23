import { h, render, Component } from "preact";
import { version } from "../../../package.json";

export default () => {
  return [
    h("p", null, "MalchatOS jeremy.codes MalchatOS Kernel Version ", version, ": ", new Date().toString(), "; guest:", navigator.userAgent)
  ];
};
