import { h, render, Component } from "preact";
import Prompt from "./js/components/Prompt";

const terminal = document.getElementById("term");

render(<Prompt/>, terminal, terminal.firstChild);

const commandLine = document.getElementById("command-line");
const focuser = () => {
  if (document.activeElement.getAttribute("id") !== "command-line") {
    commandLine.focus();
  }
};

document.addEventListener("keypress", focuser);
window.addEventListener("click", focuser);

if (module.hot) {
  module.hot.accept();
}
