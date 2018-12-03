const { expect } = require("chai");
const { parseData } = require("./03.js");

describe("Day 03: No Matter How You Slice It", () => {
  xit(`parseData() turns a string into a JavaScript object`, () => {
    const data = parseData(`#123 @ 3,2: 5x4`);
    expect(typeof data).to.equal(`object`);
    expect(data.id).to.equal(123);
    expect(data.fromLeft).to.equal(3);
    expect(data.fromRight).to.equal(2);
    expect(data.width).to.equal(5);
    expect(data.height).to.equal(4);
  });
});
