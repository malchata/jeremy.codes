import { h, render, Component } from "preact";
import CommandLink from "../components/CommandLink";
import fileList from "../helpers/file-list";

export default (args) => {
  let output;
  let fileIndex = fileList.indexOf(args);

  if (args === null) {
    output = [<p>cat: No file specified!</p>];
  } else if (fileIndex !== -1) {
    let fileName = fileList[fileIndex];
    let ext = fileName.split(".")[1];

    if (typeof ext === "undefined") {
      switch (fileName) {
        case "CREDITS":
          output = [<p>Design and development: <a href="https://twitter.com/malchata" rel="noopener">Jeremy Wagner</a></p>];
          break;

        case "CHANGELOG":
          output = [
            <p>
              <strong><u>1.1.0</u></strong><br />
              <ul>
                <li>Command history can be accessed through up and down arrows (<a href="https://github.com/malchata/jeremy.codes/issues/2" rel="noopener">#2</a>).</li>
                <li>Added <CommandLink>history</CommandLink> command to show command history. History buffer can be cleared by entering <CommandLink>history -c</CommandLink> command (<a href="https://github.com/malchata/jeremy.codes/issues/2" rel="noopener">#2</a>).</li>
              </ul>
              <br />
            </p>,
            <p>
              <strong><u>1.0.0</u></strong><br />
              <ul>
                <li>Initial release.</li>
              </ul>
            </p>
          ];
          break;
      }
    } else if (ext === "gif") {
      output = [<p>cat: Can't display image {fileName} in buffer. Try <CommandLink>play {fileName}</CommandLink>.</p>];
    }
  } else {
    output = [<p>cat: {args}: No such file or directory</p>];
  }

  return output;
};
