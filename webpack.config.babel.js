/* eslint-env node */

// Built-ins
import fs from "fs";
import path from "path";

// webpack-specific
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// App-specific
import { h } from "preact";
import renderToString from "preact-render-to-string";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

const devMode = process.env.NODE_ENV !== "production";
const paths = {
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist")
};
let entryPoints = {
  "yall": path.join(paths.src, "js", "yall.js"),
  "prefetchers": path.join(paths.src, "js", "prefetchers.js"),
  "blog-css": path.join(paths.src, "css", "blog.css"),
  "contact-css": path.join(paths.src, "css", "contact.css"),
  "global-css": path.join(paths.src, "css", "global.css"),
  "home-css": path.join(paths.src, "css", "home.css"),
  "subpage-css": path.join(paths.src, "css", "subpage.css"),
  "writing-css": path.join(paths.src, "css", "writing.css"),
};
let htmlOutputs = [];

function buildRoutes(routes) {
  const defaultHtmlOpts = {
    template: path.join("src", "html", "template.html"),
    inject: false,
    minify: {
      removeComments: devMode ? false : true,
      collapseWhitespace: devMode ? false : true,
      minifyJS: devMode ? false : true,
      minifyCSS: devMode ? false : true
    },
    footer: renderToString(<Footer />)
  };

  fs.readdirSync(routes).forEach(route => {
    if (/index\.js$/i.test(route) === true) {
      let routeModule = require(path.join(routes, route));
      let routeParts = routes.split("/");
      let routeSlug = routeParts[routeParts.length - 2] === "blog" ? "blog" : routeParts[routeParts.length - 1];
      let metadata = routeModule.Metadata;

      const commonHtmlOpts = {
        title: metadata.title,
        description: metadata.description,
        content: renderToString(<routeModule.default />),
        header: renderToString(<Header slug={routeSlug} />),
        slug: routeSlug === "routes" ? "home" : routeSlug,
        robots: metadata.hide ? "noindex, nofollow" : "index, follow",
        pageUrl: `https://jeremy.codes${metadata.slug}`
      };

      htmlOutputs.push(new HtmlWebpackPlugin({
        filename: path.join(routes.replace("src/routes", "dist"), "index.html"),
        saveData: false,
        ...commonHtmlOpts,
        ...defaultHtmlOpts
      }));

      htmlOutputs.push(new HtmlWebpackPlugin({
        filename: path.join(routes.replace("src/routes", "dist"), "index.savedata.html"),
        saveData: true,
        ...commonHtmlOpts,
        ...defaultHtmlOpts
      }));
    }

    if (fs.lstatSync(path.join(routes, route)).isDirectory() === true) {
      buildRoutes(path.join(routes, route));
    }
  });
}

buildRoutes(path.join(__dirname, "src", "routes"));

export default {
  mode: devMode ? "development" : "production",
  entry: entryPoints,
  output: {
    filename: devMode ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    chunkFilename: devMode ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    path: paths.dist,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader",
          options: {
            envName: "legacy"
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.woff2?/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts",
            name: devMode ? "[name].[ext]" : "[name].[hash:8].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join("css", devMode ? "[name].css" : "[name].[contenthash:8].css"),
      chunkFilename: path.join("css", devMode ? "[name].css" : "[name].[contenthash:8].css")
    }),
    ...htmlOutputs
  ]
};
