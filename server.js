const path = require("path");
const express = require("express");
const app = express();
const devMode = process.env.NODE_ENV !== "production";

if (devMode === true) {
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config.js");
  const compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require("webpack-hot-middleware")(compiler));
} else {
  app.use(express.static(path.join(__dirname, "dist")));
}

app.listen(8080);
