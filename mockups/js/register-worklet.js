if ("registerProperty" in window.CSS && "paintWorklet" in window.CSS) {
  // Register paint worklet custom properties
  const properties = {
    "tile-width": {
      syntax: "<integer>",
      value: 48
    },
    "stroke-weight": {
      syntax: "<number>",
      value: 1
    },
    "stroke-color": {
      syntax: "<color>",
      value: "#050d1e"
    },
    "stroke-probability": {
      syntax: "<number>",
      value: 0.571
    }
  };

  Object.entries(properties).forEach(([ name, { syntax, value }]) => {
    CSS.registerProperty({
      name: `--chemistreak-${name}`,
      syntax,
      inherits: false,
      initialValue: value
    });
  });

  // Register paint worklet
  CSS.paintWorklet.addModule("/js/chemistreak.js");
}
