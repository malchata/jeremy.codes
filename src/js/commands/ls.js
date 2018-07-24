import { h, render, Component } from "preact";
import fileList from "../helpers/file-list";

export default () => {
  let files = fileList.map(file => <li>{file}</li>);

  return [
    <ul>
      {files}
    </ul>
  ];
};
