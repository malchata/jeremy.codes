class Randots {
  constructor() {
    this.tileSize = 1;
    this.alpha = 0.001;
    this.alphaIncrement = this.alpha / 1.5;
    this.probability = 0.005;
    this.probabilityIncrement = this.probability / 1.5;
    this.fillColor = "#f79256";
  }

  paint(ctx, geom) {
    ctx.globalAlpha = this.alpha;
    let dots = geom.width / this.tileSize;
    let lines = geom.height / this.tileSize;
    ctx.fillStyle = this.fillColor;

    for (let line = 0; line < lines; line += this.tileSize) {
      for (let dot = 0; dot < dots; dot += this.tileSize) {
        if (Math.random() < this.probability) {
          ctx.rect((dot * this.tileSize), (line * this.tileSize), this.tileSize, this.tileSize);
        }
      }

      this.alpha += this.alphaIncrement;
      this.probability += this.probabilityIncrement;
      ctx.globalAlpha = this.alpha;
    }

    ctx.fill();
  }
}

registerPaint("randots", Randots);
