const fs = require("fs");

const puzzleInput = fs
  .readFileSync("03/input.txt", "utf-8", error => console.error(error))
  .split(/\n/);

const parseData = datum => {};
