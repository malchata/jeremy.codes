import { h, render, Component } from "preact";
import CommandLink from "./js/components/CommandLink";
import Prompt from "./js/components/Prompt";

// Initially renders the terminal
const terminal = document.getElementById("term");
render(<Prompt initialContent={<samp>Hi! This is my website! Type (or tap) <CommandLink href="/help.html">help</CommandLink> to see a list of commands.</samp>}/>, terminal, terminal.firstChild);

const commandLine = document.getElementById("command-line");
const focuser = () => {
  if (document.activeElement.getAttribute("id") !== "command-line") {
    commandLine.focus();
  }
};

document.documentElement.addEventListener("keypress", focuser);
document.documentElement.addEventListener("click", focuser);

// For hot reloading (dev mode)
if (module.hot) {
  module.hot.accept();
}
