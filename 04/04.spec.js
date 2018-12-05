const { expect } = require("chai");
const {
  processDatum,
  getData,
  findSleepiestGuard,
  returnSolution
} = require("./04.js");

describe(`Day 04: Repose Record`, () => {
  it("processDatum() takes an input string and returns an object with properties .time and .action", () => {
    expect(
      typeof processDatum("[1518-11-01 00:00] Guard #10 begins shift")
    ).to.equal("object");
    expect(processDatum("[1518-11-01 00:05] falls asleep").time).to.equal(5);
    expect(processDatum(`[1518-11-01 00:25] wakes up`).action).to.equal(
      "wakes up"
    );
  });
  it("getData() takes an input array and returns an array of data objects", () => {
    const input = [
      "[1518-11-01 00:00] Guard #10 begins shift",
      "[1518-11-01 00:05] falls asleep",
      "[1518-11-01 00:25] wakes up"
    ];
    expect(getData(input).length).to.equal(3);
  });

  it("findSleepiestGuard() finds the sleepiest guard", () => {
    const input = [
      "[1518-11-01 00:00] Guard #10 begins shift",
      "[1518-11-01 00:05] falls asleep",
      "[1518-11-01 00:25] wakes up",
      "[1518-11-01 00:30] falls asleep",
      "[1518-11-01 00:55] wakes up",
      "[1518-11-01 23:58] Guard #99 begins shift",
      "[1518-11-02 00:40] falls asleep",
      "[1518-11-02 00:50] wakes up",
      "[1518-11-03 00:05] Guard #10 begins shift",
      "[1518-11-03 00:24] falls asleep",
      "[1518-11-03 00:29] wakes up",
      "[1518-11-04 00:02] Guard #99 begins shift",
      "[1518-11-04 00:36] falls asleep",
      "[1518-11-04 00:46] wakes up",
      "[1518-11-05 00:03] Guard #99 begins shift",
      "[1518-11-05 00:45] falls asleep",
      "[1518-11-05 00:55] wakes up"
    ];
    expect(findSleepiestGuard(getData(input))[0]).to.equal("10");
  });

  it("returnSolution() takes a map key for a guard and returns an object with an ID and a minute", () => {
    const input = [
      "[1518-11-01 00:00] Guard #10 begins shift",
      "[1518-11-01 00:05] falls asleep",
      "[1518-11-01 00:25] wakes up",
      "[1518-11-01 00:30] falls asleep",
      "[1518-11-01 00:55] wakes up",
      "[1518-11-01 23:58] Guard #99 begins shift",
      "[1518-11-02 00:40] falls asleep",
      "[1518-11-02 00:50] wakes up",
      "[1518-11-03 00:05] Guard #10 begins shift",
      "[1518-11-03 00:24] falls asleep",
      "[1518-11-03 00:29] wakes up",
      "[1518-11-04 00:02] Guard #99 begins shift",
      "[1518-11-04 00:36] falls asleep",
      "[1518-11-04 00:46] wakes up",
      "[1518-11-05 00:03] Guard #99 begins shift",
      "[1518-11-05 00:45] falls asleep",
      "[1518-11-05 00:55] wakes up"
    ];
    const solution = returnSolution(findSleepiestGuard(getData(input)));
    expect(solution.id).to.equal(10);
    expect(solution.minute).to.equal(24);
  });
});
