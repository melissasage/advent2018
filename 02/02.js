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
  let twos = 0,
    threes = 0;
  const counts = input.map(x => {
    let counts = getCounts(x);
    twos += duplicates(counts);
    threes += triplicates(counts);
  });
  return twos * threes;
};

// get answer for part 1
// console.log(getChecksum(puzzleInput));

module.exports = { getChecksum, getCounts, duplicates, triplicates };
