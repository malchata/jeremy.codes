const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const paths = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};
let plugins = [
  new CleanWebpackPlugin(paths.dist),
  new MiniCssExtractPlugin({
    filename: path.join("css", "styles.[contenthash:8].css"),
    chunkFilename: path.join("css", "styles.[contenthash:8].css")
  }),
  new HtmlWebpackPlugin({
    template: path.join(paths.src, "html", "app.html"),
    filename: path.join(paths.dist, "index.html"),
    minify: {
      removeComments: devMode ? false : true,
      collapseWhitespace: devMode ? false : true,
      minifyJS: devMode ? false : true,
      minifyCSS: devMode ? false : true
    }
  })
];

if (devMode === true) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

module.exports = {
  mode: devMode ? "development" : "production",
  entry: [
    "webpack-hot-middleware/client",
    path.join(paths.src, "index.js")
  ],
  output: {
    filename: devMode ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    path: paths.dist,
    publicPath: "/"
  },
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: devMode ? "img/[name].[ext]" : "img/[name].[hash:8].[ext]"
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/i,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    runtimeChunk: {
      name: "vendors"
    }
  },
  plugins: plugins
};
