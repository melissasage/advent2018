const fs = require("fs");

const puzzleInput = fs
  .readFileSync("04/input.txt", "utf-8", error => console.error(error))
  .split(/\n/);

const processDatum = datum => {
  /\[\d+\-\d+-\d+ \d+:(\d+)\] (.*$)/.test(datum);
  return { time: +RegExp.$1, action: RegExp.$2 };
};

const getData = input => {
  return input
    .slice()
    .sort()
    .map(x => processDatum(x));
};

const findSleepiestGuard = data => {
  let guards = new Map();
  let currentGuard;
  data.map(x => {
    let guardChange = /Guard #(\d+) begins shift/.test(x.action);
    if (guardChange === true) {
      currentGuard = RegExp.$1;
      if (guards.get(currentGuard) === undefined) {
        guards.set(currentGuard, {
          total: 0,
          asleepAt: 0,
          sleepMap: new Array(60).fill(0)
        });
      }
    } else {
      const asleep = /falls asleep/.test(x.action);
      if (asleep) {
        guards.set(currentGuard, {
          ...guards.get(currentGuard),
          asleepAt: x.time
        });
      } else {
        let newSleepMap = guards.get(currentGuard).sleepMap;
        const sleepStart = guards.get(currentGuard).asleepAt;
        for (let i = sleepStart; i < x.time; i++) {
          newSleepMap[i]++;
        }
        guards.set(currentGuard, {
          ...guards.get(currentGuard),
          sleepMap: newSleepMap,
          total: guards.get(currentGuard).total + x.time - sleepStart
        });
      }
    }
  });
  const allGuards = [...guards];
  return allGuards.reduce((currentSleepiestGuard, currentGuard) => {
    if (currentSleepiestGuard[1].total > currentGuard[1].total) {
      return currentSleepiestGuard;
    } else return currentGuard;
  });
};

const returnSolution = guard => {
  return {
    minute: guard[1].sleepMap.indexOf(Math.max(...guard[1].sleepMap)),
    id: +guard[0]
  };
};

// get solution
const sleepiestGuard = returnSolution(findSleepiestGuard(getData(puzzleInput)));
console.log(sleepiestGuard.id * sleepiestGuard.minute);

//todo:
// sort inputs. fuck that
// find the minute that they're asleep the most often

module.exports = { processDatum, getData, findSleepiestGuard, returnSolution };
