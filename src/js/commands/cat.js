import { h, render, Component } from "preact";
import CommandLink from "../components/CommandLink";
import fileList from "../helpers/file-list";

export default (args) => {
  let output;
  let fileIndex = fileList.indexOf(args);

  if (args === null) {
    output = [
      h("p", null, "cat: No file specified!")
    ];
  } else if (fileIndex !== -1) {
    let fileName = fileList[fileIndex];
    let ext = fileName.split(".")[1];

    if (typeof ext === "undefined") {
      switch (fileName) {
        case "CREDITS":
          output = [
            h("p", null, "Design and development: ", h("a", {
              href: "https://twitter.com/malchata",
              rel: "noopener"
            }, "Jeremy Wagner"))
          ];
          break;

        case "CHANGELOG":
          output = [
            h("p", null,
              h("strong", null,
                h("u", null, "1.1.0")
              ),
              h("br"),
              h("ul", null,
                h("li", null, "Command history can be accessed through up and down arrows (", h("a", {
                  href: "https://github.com/malchata/jeremy.codes/issues/2",
                  rel: "noopener"
                }, "#2"), ")."),
                h("li", null, "Added ", h(CommandLink, null, "history"), " command to show command history. History buffer can be cleared by entering ", h(CommandLink, null, "history -c"), " command (", h("a", {
                  href: "https://github.com/malchata/jeremy.codes/issues/2",
                  rel: "noopener"
                }, "#2"), ").")
              )
            ),
            h("p", null,
              h("strong", null,
                h("u", null, "1.0.0")
              ),
              h("ul", null,
                h("li", null, "Initial release.")
              )
            )
          ];
          break;
      }
    } else if (ext === "gif") {
      output = [
        h("p", null, "Not implemented (yet).")
      ];
    }
  } else {
    output = [
      h("p", null, "cat: ", args, ": No such file or directory")
    ];
  }

  return output;
};
