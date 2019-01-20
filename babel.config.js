/* global module */

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
            useBuiltIns: "usage",
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
            useBuiltIns: "usage",
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
    modern: {
      presets: [
        [
          "@babel/preset-react", {
            pragma: "h"
          }
        ],
        [
          "@babel/preset-env",
          {
            modules: false,
            targets: {
              esmodules: true
            }
          }
        ]
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import"
      ]
    },
    legacy: {
      presets: [
        [
          "@babel/preset-react", {
            pragma: "h"
          }
        ],
        [
          "@babel/preset-env", {
            modules: false,
            useBuiltIns: "entry",
            targets: "> 0.25%, last 2 versions, Firefox ESR"
          }
        ]
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import"
      ]
    }
  }
};
