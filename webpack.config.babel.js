// Built-ins
import path from "path";

// webpack stuff
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";
import AssetsWebpackPlugin from "assets-webpack-plugin";

// App stuff
import pkg from "./package.json";
import getHtmlOutputs from "./build-scripts/get-html-outputs";
import commandList from "./src/js/helpers/command-list";

const devMode = process.env.NODE_ENV !== "production";
const paths = {
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist")
};
const assetsWebpackPluginInstance = new AssetsWebpackPlugin({
  filename: "assets.json",
  update: true,
  fileTypes: [
    "js",
    "mjs"
  ],
  entryPoints: true
});

let plugins = [
  new MiniCssExtractPlugin({
    filename: path.join("css", "styles.[contenthash:8].css"),
    chunkFilename: path.join("css", "styles.[contenthash:8].css")
  }),
  new HtmlWebpackPlugin({
    template: path.join(paths.src, "html", "index.html"),
    filename: path.join(paths.dist, "index.html"),
    inject: false,
    minify: {
      removeComments: devMode ? false : true,
      collapseWhitespace: devMode ? false : true,
      minifyJS: devMode ? false : true,
      minifyCSS: devMode ? false : true
    }
  }),
  new CopyWebpackPlugin([{
    from: path.join(paths.src, "js", "worklets", "*.js"),
    to: path.join(paths.dist, "js", "worklets", "[name].[ext]")
  }]),
  new CopyWebpackPlugin([{
    from: path.join(paths.src, ".htaccess"),
    to: path.join(paths.dist, ".htaccess"),
    flatten: true,
    toType: "file"
  }])
];

const commonConfig = {
  mode: devMode ? "development" : "production",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/i,
          chunks: "all"
        },
        commons: {
          name: "commons",
          chunks (chunk) {
            let excludedChunks = [
              "articles-js",
              "cat-js",
              "whoami-js",
              "sudo-js",
              "talks-js"
            ];

            return excludedChunks.indexOf(chunk.name) === -1;
          }
        }
      }
    }
  }
};

const modernConfig = {
  name: "modern",
  entry: [
    path.resolve(paths.src, "index.js")
  ],
  output: {
    filename: devMode ? "js/[name].mjs" : "js/[name].[chunkhash:8].mjs",
    chunkFilename: devMode ? "js/[name].mjs" : "js/[name].[chunkhash:8].mjs",
    path: paths.dist,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader",
          options: {
            envName: "modern"
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: devMode ? "assets/[name].[ext]" : "assets/[name].[hash:8].[ext]",
            emitFile: false
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        test: /\.m?js$/i,
        parallel: 8,
        terserOptions: {
          ecma: 8,
          module: true
        }
      })
    ]
  },
  plugins: [
    assetsWebpackPluginInstance
  ],
  ...commonConfig
};

const legacyConfig = {
  name: "legacy",
  entry: [
    path.join(paths.src, "css", "styles.css"),
    path.join(paths.src, "index-legacy.js")
  ],
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
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: devMode ? "assets/[name].[ext]" : "assets/[name].[hash:8].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    assetsWebpackPluginInstance,
    ...plugins,
    ...getHtmlOutputs(commandList, paths.src, paths.dist, devMode)
  ],
  ...commonConfig
};

export default [modernConfig, legacyConfig];
