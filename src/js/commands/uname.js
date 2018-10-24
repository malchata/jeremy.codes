import { h, render, Component } from "preact";
import { version } from "../../../package.json";

export default () => {
  return [
    <p>MalchatOS jeremy.codes MalchatOS Kernel Version {version}: {new Date().toString()}; guest:{navigator.userAgent}</p>
  ];
};
