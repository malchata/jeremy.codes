/* eslint-env node */
/* eslint no-console: "off" */

// Built-ins
import { readdirSync, lstatSync } from "fs";
import { resolve, join } from "path";

// webpack-specific
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import AssetsPlugin from "assets-webpack-plugin";

// App-specific
import { h } from "preact";
import renderToString from "preact-render-to-string";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Writing from "./src/components/Writing";

const mode = process.env.NODE_ENV !== "production" ? "development": "production";
const src = (...args) => resolve(__dirname, "src", ...args);
let htmlOutputs = [];

function buildRoutes (routes) {
  const defaultHtmlOpts = {
    template: join("src", "html", "template.html"),
    inject: false,
    minify: {
      removeComments: mode === "production",
      collapseWhitespace: mode === "production",
      minifyJS: mode === "production",
      minifyCSS: mode === "production"
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
          const { title, link } = Writing().props.children[1].props.children[0].props.children[1].props.children[0].props;

          var latestArticle = {
            title,
            link
          };
        }

        htmlOutputs.push(new HtmlWebpackPlugin({
          filename: join(routes.replace("src/routes", "dist"), "index.html"),
          title: metadata.title,
          description: metadata.description,
          content: routeSlug === "routes" ? renderToString(<routeModule.default latestArticleTitle={latestArticle.title} latestArticleLink={latestArticle.link} />) : renderToString(<routeModule.default />),
          header: renderToString(<Header slug={routeSlug} />),
          slug: routeSlug === "routes" ? "home" : routeSlug,
          robots: metadata.hide ? "noindex, nofollow" : "index, follow",
          pageUrl: `https://jeremy.codes${metadata.slug}`,
          ...defaultHtmlOpts
        }));
      }
    }

    if (lstatSync(join(routes, route)).isDirectory() === true) {
      buildRoutes(join(routes, route));
    } else {
      console.log(`Gathered: ${join(routes.replace("src/routes", "dist"), "index.html")}`);
    }
  });
}

// console.log("Gathering HTML routes...");
buildRoutes(join(__dirname, "src", "routes"));
// console.log("Routes gathered! Building site...");

export default {
  mode,
  entry: {
    "scripts": src("js", "scripts.js"),
    "blog-css": src("css", "blog.css"),
    "global-css": src("css", "global.css"),
    "home-css": src("css", "home.css"),
    "contact-css": src("css", "contact.css"),
    "projects-css": src("css", "projects.css"),
    "subpage-css": src("css", "subpage.css"),
    "writing-css": src("css", "writing.css"),
  },
  output: {
    filename: mode === "development" ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    chunkFilename: mode === "development" ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    path: resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules\/(?!(dnstradamus)\/)/i,
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
          {
            loader: "css-loader",
            options: {
              // Ensures that only web font URLs are parsed
              url: url => /\.woff2?/i.test(url)
            }
          },
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
  stats: {
    exclude: /\.map$/i,
    excludeAssets: /\.map$/i,
    excludeModules: /\.map$/i,
    builtAt: false,
    children: false,
    modules: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: join("css", mode === "development" ? "[name].css" : "[name].[contenthash:8].css"),
      chunkFilename: join("css", mode === "development" ? "[name].css" : "[name].[contenthash:8].css")
    }),
    new AssetsPlugin({
      filename: "assets.json",
      useCompilerPath: true,
      prettyPrint: true,
      includeAllFileTypes: false,
      fileTypes: [
        "js",
        "css",
        "woff2"
      ]
    }),
    ...htmlOutputs
  ]
};
