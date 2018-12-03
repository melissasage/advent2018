const fs = require("fs");

const puzzleInput = fs
  .readFileSync("03/input.txt", "utf-8", error => console.error(error))
  .split(/\n/);

const parseData = datum => {
  /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/.test(datum);
  return {
    id: +RegExp.$1,
    fromLeft: +RegExp.$2,
    fromTop: +RegExp.$3,
    width: +RegExp.$4,
    height: +RegExp.$5
  };
};

let puzzleFabric = new Array(1000).fill(new Array(1000).fill(0));

const claimFabric = data => fabric => {
  for (let x = 0; x < data.length; x++) {
    const datum = parseData(data[x]);
    console.log(datum);
    for (let row = datum.fromLeft; row < datum.fromLeft + datum.width; row++) {
      for (let col = datum.fromTop; col < datum.fromTop + datum.height; col++) {
        console.log(`square before change: ${fabric[row][col]}`);
        fabric[col][row] = 1;
        console.log(
          `this ran: row=${row} and col=${col} and fabric=${fabric[row][col]}`
        );
        console.log(fabric);
      }
    }
  }
};

const countOverlapping = () => {};

module.exports = { parseData, claimFabric, countOverlapping };
