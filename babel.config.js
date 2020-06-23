/* eslint-env node */

module.exports = {
  env: {
    production: {
      presets: [
        [
          "@babel/preset-react", {
            pragma: "h",
            pragmaFrag: "Fragment"
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
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        [
          "@babel/plugin-transform-runtime", {
            useESModules: true,
            helpers: false
          }
        ]
      ],
    },
    development: {
      presets: [
        [
          "@babel/preset-react", {
            pragma: "h",
            pragmaFrag: "Fragment"
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
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        [
          "@babel/plugin-transform-runtime", {
            useESModules: true,
            helpers: false
          }
        ]
      ],
    },
    client: {
      presets: [
        [
          "@babel/preset-react", {
            pragma: "h",
            pragmaFrag: "Fragment"
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
        "@babel/plugin-proposal-object-rest-spread",
        [
          "@babel/plugin-transform-runtime", {
            useESModules: true,
            helpers: false
          }
        ]
      ]
    }
  }
};
