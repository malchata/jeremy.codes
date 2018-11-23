import { h, render, Component } from "preact";
import fileList from "../helpers/file-list";

export default () => {
  let files = fileList.map(file => h("li", null, file));

  return [
    h("ul", null, files)
  ];
};
