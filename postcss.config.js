module.exports = {
  plugins: [
    require("postcss-easy-import"),
    require("postcss-css-variables"),
    require("autoprefixer"),
    require("cssnano")
  ]
};
