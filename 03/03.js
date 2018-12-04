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

const makeFabric = n => {
  const returnArray = [];
  const rowPrototype = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    returnArray.push(rowPrototype.slice());
  }
  return returnArray;
};

const claimFabric = data => fabric => {
  const returnFabric = fabric.slice();
  for (let x = 0; x < data.length; x++) {
    const datum = parseData(data[x]);
    for (let row = datum.fromLeft; row < datum.fromLeft + datum.width; row++) {
      for (let col = datum.fromTop; col < datum.fromTop + datum.height; col++) {
        returnFabric[row][col]++;
      }
    }
  }
  return returnFabric;
};

// could probably optimize this by using .reduce()
const countOverlapping = fabric => {
  let counter = 0;
  fabric.map(row =>
    row.map(col => {
      if (col > 1) counter++;
    })
  );
  return counter;
};

// Solution for 03-01
// console.log(countOverlapping(claimFabric(puzzleInput)(makeFabric(1000))));

const findNonOverlap = data => fabric => {
  const returnFabric = fabric.slice();
  const valid = new Set();
  for (let x = 0; x < data.length; x++) {
    const datum = parseData(data[x]);
    valid.add(datum.id);
    for (let row = datum.fromLeft; row < datum.fromLeft + datum.width; row++) {
      for (let col = datum.fromTop; col < datum.fromTop + datum.height; col++) {
        if (returnFabric[row][col] === 0) {
          returnFabric[row][col] = datum.id;
        } else {
          valid.delete(datum.id);
          valid.delete(returnFabric[row][col]);
          returnFabric[row][col] = "X";
        }
      }
    }
  }
  return valid.entries().next().value[0];
};

// Find solution
// console.log(findNonOverlap(puzzleInput)(makeFabric(1000)));

module.exports = {
  parseData,
  claimFabric,
  countOverlapping,
  makeFabric,
  findNonOverlap
};
