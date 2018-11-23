import { h, render, Component } from "preact";
import commandList from "../helpers/command-list";
import CommandLink from "../components/CommandLink";

export default (showSecrets = false) => {
  let commands = commandList.map(commandPair => {
    if (commandPair[1] === false || showSecrets === true) {
      return h("li", null,
        h(CommandLink, null, commandPair[0])
      );
    }
  });

  return [
    h("p", null, "Available commands:", h("br"), h("ul", null, commands))
  ];
};
