const fs = require("fs");

const puzzleInput = fs
  .readFileSync("02/input.txt", "utf-8", error => console.error(error))
  .split(/\n/);