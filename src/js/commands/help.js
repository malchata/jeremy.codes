import { h, render, Component } from "preact";
import { CommandLink } from "../components/CommandLink";

export default () => {
  return [
    <p>
      Available commands:<br />
      <CommandLink>about</CommandLink><br />
      <CommandLink>articles</CommandLink><br />
      <CommandLink>help</CommandLink>
    </p>
  ];
};
