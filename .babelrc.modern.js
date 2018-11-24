module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "usage",
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import"
  ]
};
