if ("registerProperty" in window.CSS && "paintWorklet" in window.CSS) {
  // Register paint worklet custom properties
  const properties = {
    "tile-width": {
      syntax: "<integer>",
      value: 64
    },
    "stroke-weight": {
      syntax: "<number>",
      value: 0.833
    },
    "stroke-color": {
      syntax: "<color>",
      value: "#050d1e"
    },
    "fill-color": {
      syntax: "<color>",
      value: "#ce6c47"
    },
    "stroke-probability": {
      syntax: "<number>",
      value: 0.666
    },
    "cap-probability": {
      syntax: "<number>",
      value: 0.75
    },
    "color-step": {
      syntax: "<integer>",
      value: -4
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
