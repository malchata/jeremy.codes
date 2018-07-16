import { h, render, Component } from "preact";

export const CommandLink = (props) => (
  <a className="command" href="#">{props.children}</a>
);
