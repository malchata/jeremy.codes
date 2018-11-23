import { h, render, Component } from "preact";

export default props => h("a", {
  className: "command",
  href: props.href
}, props.children);
