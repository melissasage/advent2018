const fs = require("fs");

const puzzleInput = fs
  .readFileSync("01/input.txt", "utf-8", error => console.error(error))
  .split(/\n/);

// puzzleInput.pop(); // get rid of empty last element

const calculateFrequency = (frequency, inputs) => {
  for (let i = 0; i < inputs.length; i++) {
    frequency += +inputs[i];
  }
  return frequency;
};

// get answer for part 1
console.log("Frequency:", calculateFrequency(0, puzzleInput));

const findFirstRepeat = (frequency, inputs) => {
  let frequencies = new Set();
  let currFreq = frequency;
  let i = 0;

  while (!frequencies.has(currFreq)) {
    frequencies.add(currFreq);
    currFreq += +inputs[i];
    if (i === inputs.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }

  return currFreq;
};

// get answer for part 2
console.log("First repeat:", findFirstRepeat(0, puzzleInput));

module.exports = { calculateFrequency, findFirstRepeat };
