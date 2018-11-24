import { h, render, Component } from "preact";
import CommandLink from "../components/CommandLink";

export default () => {
  return [
    h("p", null, "Hello! My name is Jeremy, and I live and work in Minnesota. I write code, and write ", h("em", null, "about"), " code. You can find out more about me elsewhere on the web by entering the ", h(CommandLink, null, "links"), " command. You can also read the articles I've written by entering the ", h(CommandLink, null, "articles"), " command, or see some of the talks I've given at conferences using the ", h(CommandLink, null, "talks"), " command.")
  ];
};
