/* eslint-env node */
/* eslint no-console: "off" */
const path = require("path");
const express = require("express");
const app = express();
const htdocs = path.join(__dirname, "mockups");

// Run static server
app.use(express.static(htdocs));
app.listen(8080);

console.log("Site up and running at http://localhost:8080/");
console.log("Press Ctrl+C to quit.");
