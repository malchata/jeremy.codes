const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;

const devMode = process.env.NODE_ENV !== "production";
const paths = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};

let entryPoints = [path.join(paths.src, "index.js"), path.join(paths.src, "css", "styles.css")];
let plugins = [
  new MiniCssExtractPlugin({
    filename: path.join("css", "styles.[contenthash:8].css"),
    chunkFilename: path.join("css", "styles.[contenthash:8].css")
  }),
  new HtmlWebpackPlugin({
    template: path.join(paths.src, "html", "index.html"),
    filename: path.join(paths.dist, "index.html"),
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
  new ImageminWebpackPlugin({
    disable: devMode,
    test: path.join(paths.src, "img", "*.png"),
    pngquant: {
      speed: 1,
      strip: true
    }
  })
];

if (devMode === true) {
  entryPoints.push("webpack-hot-middleware/client");
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

module.exports = {
  mode: devMode ? "development" : "production",
  entry: entryPoints,
  output: {
    filename: devMode ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    path: paths.dist,
    publicPath: "/",
    chunkFilename: devMode ? "js/[name].js" : "js/[name].[chunkhash:8].js"
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
          chunks: "all"
        },
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 1
        }
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  },
  plugins: plugins
};
