import { h, render, Component } from "preact";
import commandList from "../helpers/command-list";
import { CommandLink } from "../components/CommandLink";

export default () => {
  let commands = commandList.map(commandPair => {
    if (commandPair[1] === false) {
      return <li><CommandLink>{commandPair[0]}</CommandLink></li>;
    }
  });

  return [
    <p>
      Available commands:<br />
      <ul>
        {commands}
      </ul>
    </p>
  ];
};
