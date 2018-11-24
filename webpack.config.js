const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const BrotliWebpackPlugin = require("brotli-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const AssetsWebpackPlugin = require("assets-webpack-plugin");
const babelConfigs = {
  legacy: require("./.babelrc.legacy"),
  modern: require("./.babelrc.modern")
};

const devMode = process.env.NODE_ENV !== "production";
const paths = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
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

let entryPoints = [
  path.join(paths.src, "index.js"),
  path.join(paths.src, "css", "styles.css")
];

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

let commonPlugins = [];

if (devMode === false) {
  commonPlugins.push(new CompressionWebpackPlugin({
    test: /\.(m?js|svg|css)$/i,
    cache: true,
    filename: "[path].gz"
  }), new BrotliWebpackPlugin({
    test: /\.(m?js|svg|css)$/i,
    asset: "[path].br"
  }));
}

const commonConfig = {
  mode: devMode ? "development" : "production",
  entry: entryPoints,
  devtool: "sourcemap",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/i,
          chunks: "all"
        },
        commons: {
          name: "commons",
          chunks: "initial"
        }
      }
    }
  },
  stats: {
    exclude: /\.map$/i,
    excludeModules: /\.map$/i,
    excludeAssets: /\.map$/i
  }
};

const modernConfig = Object.assign({
  name: "modern",
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
          options: babelConfigs.modern
        }
      },
      {
        test: /\.css$/i,
        use: [
          devMode ? "style-loader" : "null-loader"
        ]
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
  plugins: [
    assetsWebpackPluginInstance,
    ...commonPlugins
  ]
}, commonConfig);

modernConfig.optimization["minimizer"] = [
  new TerserWebpackPlugin({
    test: /\.m?js$/i,
    parallel: true,
    sourceMap: !devMode
  })
];

const legacyConfig = Object.assign({
  name: "legacy",
  output: {
    filename: devMode ? "js/[name].js" : "js/[name].[chunkhash:8].js",
    chunkFilename: devMode ? "js/[name].js" : "js/[name].[chunkhash:8].js",
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
          options: babelConfigs.legacy
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
            name: devMode ? "assets/[name].[ext]" : "assets/[name].[hash:8].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    assetsWebpackPluginInstance,
    ...plugins,
    ...commonPlugins
  ]
}, commonConfig);

module.exports = [modernConfig, legacyConfig];
