/* eslint-env node */

module.exports = {
  env: {
    production: {
      presets: [
        [
          "@babel/preset-react", {
            pragma: "h"
          }
        ],
        [
          "@babel/preset-env", {
            targets: {
              node: "current"
            }
          }
        ]
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import"
      ],
    },
    development: {
      presets: [
        [
          "@babel/preset-react", {
            pragma: "h"
          }
        ],
        [
          "@babel/preset-env", {
            targets: {
              node: "current"
            }
          }
        ]
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import"
      ],
    },
    client: {
      presets: [
        [
          "@babel/preset-react", {
            pragma: "h"
          }
        ],
        [
          "@babel/preset-env", {
            modules: false,
            loose: true,
            targets: "> 0.25%, last 2 versions, IE > 10, Firefox ESR"
          }
        ]
      ],
      plugins: [
        "@babel/plugin-syntax-dynamic-import",
        [
          "@babel/plugin-transform-runtime", {
            useESModules: true,
            helpers: false,
            corejs: 2
          }
        ]
      ]
    }
  }
};
