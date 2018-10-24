import { h, render, Component } from "preact";
import CommandLink from "../components/CommandLink";

export default () => {
  return [
    <p>Hello! My name is Jeremy, and I live and work in Minnesota. I write code, and write <em>about</em> code. You can find out more about me elsewhere on the web by entering the <CommandLink>links</CommandLink> command. You can also read the articles I've written by entering the <CommandLink>articles</CommandLink> command.</p>,
  ];
};
