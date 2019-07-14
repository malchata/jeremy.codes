/* eslint-env node */

let plugins = [
  require("autoprefixer")({
    overrideBrowserslist: ["last 2 versions", "> 0.25%", "IE > 10", "iOS >= 9", "Firefox ESR", "not dead"]
  })
];

if (process.env.NODE_ENV === "production") {
  plugins.push(require("cssnano"));
}

module.exports = {
  plugins
};
