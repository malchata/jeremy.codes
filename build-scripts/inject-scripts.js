const path = require("path");
const fs = require("fs");
const assets = require("../assets.json");
const html = path.resolve(__dirname, "..", "dist", "index.html");
const htmlRegex = /\.html$/i;

fs.readdir(path.resolve(__dirname, "../", "dist"), (error, files) => {
  if (error) {
    throw new Error(error);
  }

  for (let file of files) {
    if (htmlRegex.test(file) === true) {
      fs.readFile(path.resolve(__dirname, "../", "dist", file), (error, data) => {
        if (error) {
          throw new Error(error);
        }

        let newHtml = Buffer.from(data.toString().replace("</body>", `<script type="module" src="${assets.commons.mjs}"></script><script type="module" src="${assets.main.mjs}"></script><script nomodule src="${assets.commons.js}"></script><script nomodule src="${assets.main.js}"></script></body>`));

        fs.writeFile(path.resolve(__dirname, "../", "dist", file), newHtml, error => {
          if (error) {
            throw new Error(error);
          }

          console.log(`Script references injected into ./dist/${file}`);
        });
      });
    }
  }
});
