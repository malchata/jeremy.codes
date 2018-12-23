import path from "path";
import render from "preact-render-to-string";
import { h } from "preact";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default function (commandList, src, dist, devMode) {
  let htmlOutputs = [];

  for (let command of commandList) {
    let renderOnServer = command[2];

    if (renderOnServer === true) {
      let commandName = command[0];
      let commandModule = require(`../src/js/commands/${commandName}.js`).default();
      let commandOutput = "";

      for (let line of commandModule) {
        commandOutput += render(line);
      }

      htmlOutputs.push(new HtmlWebpackPlugin({
        template: path.join(src, "html", "index.html"),
        filename: path.join(dist, `${commandName}.html`),
        inject: false,
        initialContent: commandOutput,
        commandName: commandName,
        minify: {
          removeComments: devMode ? false : true,
          collapseWhitespace: devMode ? false : true,
          minifyJS: devMode ? false : true,
          minifyCSS: devMode ? false : true
        }
      }));
    }
  }

  return htmlOutputs.length > 0 ? htmlOutputs : [];
}
