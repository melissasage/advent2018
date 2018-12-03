const { expect } = require("chai");
const { parseData, claimFabric, countOverlapping } = require("./03.js");

describe("Day 03: No Matter How You Slice It", () => {
  let fabric;
  beforeEach(() => {
    fabric = new Array(10).fill(new Array(10).fill(0));
  });

  it(`parseData() turns a string into a correctly formatted JavaScript object`, () => {
    const data = parseData(`#123 @ 3,2: 5x4`);
    expect(typeof data).to.equal(`object`);
    expect(data.id).to.equal(123);
    expect(data.fromLeft).to.equal(3);
    expect(data.fromTop).to.equal(2);
    expect(data.width).to.equal(5);
    expect(data.height).to.equal(4);
  });
  it(`claimFabric() increments indices representing claimed squares`, () => {
    claimFabric([`#1 @ 1,3: 4x4`])(fabric);
    expect(fabric[1][3]).to.equal(1);
    expect(fabric[3][4]).to.equal(1);
    expect(fabric[1][0]).to.equal(0);

    claimFabric([`#2 @ 3,1: 4x4`, `#3 @ 5,5: 2x2`])(fabric);

    expect(fabric[3][4]).to.equal(2);
    expect(fabric[1][4]).to.equal(1);
  });
  xit(
    `countOverlapping() returns the number of square inches of fabric with multiple claims`
  );
});
