const fs = require("fs");

const puzzleInput = fs
  .readFileSync("02/input.txt", "utf-8", error => console.error(error))
  .split(/\n/);

const getCounts = input => {
  return Object.values(
    input.split("").reduce(function(count, x) {
      if (x in count) {
        count[x]++;
      } else {
        count[x] = 1;
      }
      return count;
    }, {})
  );
};

const duplicates = input => (input.filter(x => x === 2).length ? 1 : 0);
const triplicates = input => (input.filter(x => x === 3).length ? 1 : 0);
const getChecksum = input => {
  const counts = input.map(x => getCounts(x));
  return duplicates(counts) * triplicates(counts);
};

module.exports = { getChecksum, getCounts, duplicates, triplicates };
