const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.listen(8080);

console.log("Up and running at http://localhost:8080/");
console.log("Press Ctrl+C to quit.");
