import { h, render, Component } from "preact";
import commandList from "../helpers/command-list";
import CommandLink from "../components/CommandLink";

export default () => {
  let commands = commandList.map(commandPair => {
    if (commandPair[1] === false) {
      return h("li", {
        className: commandPair[3] ? "hide-no-js" : ""
      }, h(CommandLink, null, commandPair[0]));
    }
  });

  return [
    h("p", null, "Available commands:", h("ul", null, commands))
  ];
};
