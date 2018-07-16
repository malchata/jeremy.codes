import Styles from "./css/styles.css";
import { h, render, Component } from "preact";
import Prompt from "./js/components/Prompt";

const terminal = document.getElementById("term");
render(<Prompt/>, terminal, terminal.firstChild);

document.addEventListener("keypress", () => {
  if (document.activeElement.getAttribute("id") !== "command-line") {
    document.getElementById("command-line").focus();
  }
});

if (module.hot) {
  module.hot.accept();
}
