const { expect } = require("chai");
const {
  parseData,
  claimFabric,
  makeFabric,
  countOverlapping,
  findNonOverlap
} = require("./03.js");

describe("Day 03: No Matter How You Slice It", () => {
  xit(`parseData() turns a string into a correctly formatted JavaScript object`, () => {
    const data = parseData(`#123 @ 3,2: 5x4`);
    expect(typeof data).to.equal(`object`);
    expect(data.id).to.equal(123);
    expect(data.fromLeft).to.equal(3);
    expect(data.fromTop).to.equal(2);
    expect(data.width).to.equal(5);
    expect(data.height).to.equal(4);
  });
  xit(`makeFabric() returns an array of arrays, each of which references a different object`, () => {
    const x = makeFabric(10);
    expect(x[0] === x[1]).to.be.false;
  });
  xit(`claimFabric() increments indices representing claimed squares`, () => {
    const fabric = makeFabric(10);
    claimFabric([`#1 @ 1,3: 4x4`])(fabric);
    expect(fabric[1][3]).to.equal(1);
    expect(fabric[3][4]).to.equal(1);
    expect(fabric[1][0]).to.equal(0);

    claimFabric([`#2 @ 3,1: 4x4`, `#3 @ 5,5: 2x2`])(fabric);

    expect(fabric[3][4]).to.equal(2);
    expect(fabric[1][4]).to.equal(1);
  });
  xit(`countOverlapping() returns the number of square inches of fabric with multiple claims`, () => {
    const fabric = claimFabric([
      `#1 @ 1,3: 4x4`,
      `#2 @ 3,1: 4x4`,
      `#3 @ 5,5: 2x2`
    ])(makeFabric(10));
    expect(countOverlapping(fabric)).to.equal(4);
  });
  xit(`findNonOverlap() returns the ID of the claim that does not overlapp all other claims`, () => {
    const nonOverlapping = findNonOverlap([
      `#1 @ 1,3: 4x4`,
      `#2 @ 3,1: 4x4`,
      `#3 @ 5,5: 2x2`
    ])(makeFabric(10));
    expect(nonOverlapping).to.equal(3);
  });
});
