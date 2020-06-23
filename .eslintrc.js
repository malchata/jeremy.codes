/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  plugins: [
    "react"
  ],
  rules: {
    "no-useless-escape": "off",
    "react/jsx-uses-vars": 2,
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^(h|render|Fragment|Component|.*Styles)$"
      }
    ],
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ]
  }
};
