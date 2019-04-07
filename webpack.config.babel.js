/* eslint-env node */
/* eslint no-console: "off" */

// Built-ins
import { readdirSync, lstatSync } from "fs";
import { resolve, join } from "path";

// webpack-specific
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// App-specific
import { h } from "preact";
import renderToString from "preact-render-to-string";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Writing from "./src/components/Writing";

const mode = process.env.NODE_ENV !== "production" ? "development": "production";
const src = (...args) => resolve(__dirname, "src", ...args);
let entryPoints = {
  "scripts": src("js", "scripts.js"),
  "blog-css": src("css", "blog.css"),
  "contact-css": src("css", "contact.css"),
  "global-css": src("css", "global.css"),
  "home-css": src("css", "home.css"),
  "subpage-css": src("css", "subpage.css"),
  "writing-css": src("css", "writing.css"),
};
let htmlOutputs = [];

function buildRoutes(routes) {
  const defaultHtmlOpts = {
    template: join("src", "html", "template.html"),
    inject: false,
    minify: {
      removeComments: mode === "development" ? false : true,
      collapseWhitespace: mode === "development" ? false : true,
      minifyJS: mode === "development" ? false : true,
      minifyCSS: mode === "development" ? false : true
    },
    footer: renderToString(<Footer />)
  };

  readdirSync(routes).forEach(route => {
    if (/index\.js$/i.test(route) === true) {
      let routeModule = require(join(routes, route));
      let routeParts = routes.split("/");
      let routeSlug = routeParts[routeParts.length - 2] === "blog" ? "blog" : routeParts[routeParts.length - 1];
      let metadata = routeModule.Metadata;

      if (!metadata.exclude) {
        if (routeSlug === "routes") {
          const { title, link } = Writing().children[1].children[0].children[1].children[0].attributes;
          var latestArticle = {
            title,
            link
          };
        }

        const commonHtmlOpts = {
          title: metadata.title,
          description: metadata.description,
          content: routeSlug === "routes" ? renderToString(<routeModule.default latestArticleTitle={latestArticle.title} latestArticleLink={latestArticle.link} />) : renderToString(<routeModule.default />),
          header: renderToString(<Header slug={routeSlug} />),
          slug: routeSlug === "routes" ? "home" : routeSlug,
          robots: metadata.hide ? "noindex, nofollow" : "index, follow",
          pageUrl: `https://jeremy.codes${metadata.slug}`
        };

        htmlOutputs.push(new HtmlWebpackPlugin({
          filename: join(routes.replace("src/routes", "dist"), "index.html"),
          saveData: false,
          ...commonHtmlOpts,
          ...defaultHtmlOpts
        }));

        htmlOutputs.push(new HtmlWebpackPlugin({
          filename: join(routes.replace("src/routes", "dist"), "index.savedata.html"),
          saveData: true,
          ...commonHtmlOpts,
          ...defaultHtmlOpts
        }));
      }
    }

    if (lstatSync(join(routes, route)).isDirectory() === true) {
      buildRoutes(join(routes, route));
    }
  });
}

console.log("Building HTML routes...");
buildRoutes(join(__dirname, "src", "routes"));

export default {
  mode,
  entry: entryPoints,
  output: {
    filename: mode === "development" ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    chunkFilename: mode === "development" ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    path: resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules\/(?!(yall-js|quicklink|dnstradamus)\/)/i,
        use: {
          loader: "babel-loader",
          options: {
            envName: "client"
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
        test: /\.woff2?$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts",
            name: mode === "development" ? "[name].[ext]" : "[name].[hash:8].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: join("css", mode === "development" ? "[name].css" : "[name].[contenthash:8].css"),
      chunkFilename: join("css", mode === "development" ? "[name].css" : "[name].[contenthash:8].css")
    }),
    ...htmlOutputs
  ]
};
