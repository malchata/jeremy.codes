import { h, render, Component } from "preact";
import { CommandLink } from "../components/CommandLink";

export default () => {
  return [
    <p>Hello! My name is Jeremy. I live and work in Minnesota, and I write code and write about code. You can learn about the code I write by entering the <CommandLink>projects</CommandLink> command, and the articles I write by entering the <CommandLink>articles</CommandLink> command.</p>,
  ]
};
