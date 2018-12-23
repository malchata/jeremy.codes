import { h, render, Component } from "preact";
import Markup from "preact-markup";
import CommandLink from "./js/components/CommandLink";
import Prompt from "./js/components/Prompt";

// Initially renders the terminal
render(h(Prompt, {
  initialContent: h(Markup, {
    markup: document.getElementById("initial-content").innerHTML,
    trim: false
  })
}), document.getElementById("term"), document.getElementById("initial-content"));

const prompt = document.getElementById("prompt");
const focuser = () => {
  if (document.activeElement.getAttribute("id") !== "prompt") {
    prompt.focus();
  }
};

document.documentElement.addEventListener("keypress", focuser);
document.documentElement.addEventListener("click", focuser);
