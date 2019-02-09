/* eslint-env node */

const devMode = process.env.NODE_ENV !== "production";

let plugins = [
  require("autoprefixer")({
    browsers: ["last 2 versions", "> 0.25%", "IE >= 11", "iOS >= 9", "Firefox ESR", "not dead"]
  })
];

if (devMode === false) {
  plugins.push(require("cssnano"));
}

module.exports = {
  plugins
};
