import { h, render, Component } from "preact";
import CommandLink from "./js/components/CommandLink";
import Prompt from "./js/components/Prompt";

// Initially renders the terminal
render(
  h(Prompt, {
    initialContent: h("p", null, "Hi! This is my website! Type (or tap) ", h(CommandLink, {
      href: "/help.html"
    }, "help"), " to see a list of commands.")
  }), document.getElementById("term")
);

const prompt = document.getElementById("prompt");
const focuser = () => {
  if (document.activeElement.getAttribute("id") !== "prompt") {
    prompt.focus();
  }
};

document.documentElement.addEventListener("keypress", focuser);
document.documentElement.addEventListener("click", focuser);
