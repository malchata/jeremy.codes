import { h, render, Component } from "preact";

export default (props) => (
  <a className="command" href={props.href}>{props.children}</a>
);
