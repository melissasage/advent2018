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
  input.map(x => {
    let counts = getCounts(x);
    twos += duplicates(counts);
    threes += triplicates(counts);
  });
  return twos * threes;
};

// get answer for part 1
// console.log(getChecksum(puzzleInput));

const compareWords = word1 => word2 => {
  const letters1 = word1.split("").map(x => x.codePointAt(0));
  const letters2 = word2.split("").map(x => x.codePointAt(0));
  const xors = letters1.map((x, i) => {
    return letters1[i] ^ letters2[i];
  });
  return xors.filter(x => x !== 0).length;
};

const findPrototype = input => {
  const processInput = i => j => {
    if (compareWords(input[i])(input[j]) === 1) {
      return input[i]
        .split("")
        .filter((x, y) => input[i][y] === input[j][y])
        .join("");
    } else {
      if (j < input.length - 1) {
        return processInput(i)(++j);
      } else {
        return processInput(++i)(0);
      }
    }
  };
  return processInput(0)(1);
};

// get answer for part 2
// Note: Node.js throws a fit with this recursive solution because of its huge call stack.
// use `node --stack_size=9999999 02/02` to override the default settings and get the answer.
// console.log(findPrototype(puzzleInput));

module.exports = {
  getChecksum,
  getCounts,
  duplicates,
  triplicates,
  compareWords,
  findPrototype
};
