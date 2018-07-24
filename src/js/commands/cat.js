import { h, render, Component } from "preact";
import { CommandLink } from "../components/CommandLink";
import fileList from "../helpers/file-list";

export default (args) => {
  let output;
  let fileIndex = fileList.indexOf(args);

  if (fileIndex !== -1) {
    let fileName = fileList[fileIndex];
    let ext = fileName.split(".")[1];

    if (ext === "txt") {
      switch (fileName) {
        case "credits.txt":
          output = <p>Design and development: <a href="https://twitter.com/malchata" rel="noopener">Jeremy Wagner</a></p>;
          break;
      }
    } else if (ext === "mp4") {
      output = <p>cat: Can't output video {fileName} to buffer. Try <CommandLink>play {fileName}</CommandLink>.</p>;
    }
  } else {
    output = <p>cat: {args}: No such file or directory</p>;
  }

  return [
    output
  ];
};
