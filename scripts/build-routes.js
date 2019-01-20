/* eslint-env node */

// Built-ins
import path from "path";
import fs from "fs";

// App-specific
import { h } from "preact";
import renderToString from "preact-render-to-string";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Components
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function buildRoutes (routes, devMode) {
  let entryPoints = [];
  let htmlOutputs = [];

  const defaultHtmlOpts = {
    template: path.join("src", "html", "template.html"),
    inject: false,
    hash: true,
    minify: {
      removeComments: devMode ? false : true,
      collapseWhitespace: devMode ? false : true,
      minifyJS: devMode ? false : true,
      minifyCSS: devMode ? false : true
    },
    header: renderToString(<Header />),
    footer: renderToString(<Footer />)
  };

  fs.readdirSync(routes).forEach(route => {
    if (/index\.js$/i.test(route) === true) {
      let routeModule = require(path.join(routes, route));
      let metadata = routeModule.Metadata;
      let routeParts = routes.split(path.sep);
      let entryPointName = routeParts[routeParts.length - 1] === "routes" ? "index" : routeParts[routeParts.length - 1];
      let entryPointApp = `${entryPointName}-app`;
      entryPoints[entryPointName] = path.join(routes, route);
      entryPoints[entryPointApp] = path.join(routes, route).replace("index.js", "app.js");

      htmlOutputs.push(new HtmlWebpackPlugin({
        title: metadata.title,
        filename: path.join(routes.replace("src/routes", "dist"), "index.html"),
        description: metadata.description,
        content: renderToString(<routeModule.default />),
        ...defaultHtmlOpts
      }));
    }

    if (fs.lstatSync(path.join(routes, route)).isDirectory() === true) {
      buildRoutes(path.join(routes, route));
    }

    return [htmlOutputs, htmlOutputs];
  });
}

export default buildRoutes;
