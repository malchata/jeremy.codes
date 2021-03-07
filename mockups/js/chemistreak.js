/* global registerPaint */

class Chemistreak {
  static get inputProperties () {
    return [
      "--chemistreak-tile-width",
      "--chemistreak-stroke-weight",
      "--chemistreak-stroke-color",
      "--chemistreak-stroke-probability"
    ];
  }

  paint (ctx, geom, properties) {
    const tileWidth = parseInt(properties.get("--chemistreak-tile-width"));
    const strokeProbability = parseFloat(properties.get("--chemistreak-stroke-probability"));
    const tileHeight = tileWidth * (7 / 6);
    const halfTileWidth = tileWidth / 2;
    const heightIncrement = tileHeight * (1 / 7);
    const xTiles = geom.width / tileWidth;
    const yTiles = geom.height / tileHeight;
    const strokeWeight = parseFloat(properties.get("--chemistreak-stroke-weight"));

    // These need to adjust on every pass, so no const here
    let strokeColor = properties.get("--chemistreak-stroke-color").toString().trim();

    ctx.lineWidth = strokeWeight;
    ctx.lineCap = "round";
    ctx.strokeStyle = strokeColor;

    for (let y = 0; y < yTiles; y++) {
      const yOffset = y * tileHeight;

      for (let x = 0; x < xTiles; x++) {
        if (Math.random() >= strokeProbability) {
          const xOffset = x * tileWidth;
          const xMidTile = xOffset + halfTileWidth;
          const xFullTile = xOffset + tileWidth;
          const midTop = yOffset + (heightIncrement * 2);
          const midBottom = yOffset + (heightIncrement * 5);
          const coords = [
            [xMidTile , yOffset             ],  // Top middle
            [xFullTile, midTop              ],  // Right top
            [xFullTile, midBottom           ],  // Right bottom
            [xMidTile , yOffset + tileHeight],  // Bottom middle
            [xOffset  , midBottom           ],  // Left bottom
            [xOffset  , midTop              ]   // Left top
          ];

          const randoms = [
            Math.random() >= strokeProbability,
            Math.random() >= strokeProbability,
            Math.random() >= strokeProbability,
            Math.random() >= strokeProbability,
            Math.random() >= strokeProbability,
            Math.random() >= strokeProbability
          ];

          for (let i = 0; i < coords.length; i++) {
            if (randoms[i]) {
              const coord = i < coords.length - 1 ? coords[i] : coords[5];
              const nextCoord = i < coords.length - 1 ? coords[i + 1] : coords[0];

              ctx.beginPath();
              ctx.moveTo(coord[0], coord[1]);
              ctx.lineTo(nextCoord[0], nextCoord[1]);
              ctx.closePath();
              ctx.stroke();
            }
          }
        }
      }
    }
  }
}

registerPaint("chemistreak", Chemistreak);
