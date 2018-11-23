const path = require("path");
const fs = require("fs");
const assets = require("../assets.json");
const html = path.resolve(__dirname, "..", "dist", "index.html");

fs.readFile(html, (error, data) => {
  if (error) {
    throw error;
  }

  let newHtml = Buffer.from(data.toString().replace("</body>", `<script type="module" src="${assets.commons.mjs}"></script><script type="module" src="${assets.main.mjs}"></script><script nomodule src="${assets.commons.js}"></script><script nomodule src="${assets.commons.js}"></script></body>`));

  fs.writeFile(html, newHtml, error => {
    if (error) {
      throw error;
    }

    console.log("Scripts injected into generated HTML.");
  });
});
