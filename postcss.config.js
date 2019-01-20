/* eslint-env node */

module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: ["last 2 versions", "> 0.25%", "IE >= 11", "iOS >= 9", "Firefox ESR", "not dead"]
    }),
    require("cssnano")
  ]
};
