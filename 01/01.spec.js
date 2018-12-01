const { expect } = require("chai");
const { calculateFrequency, findFirstRepeat } = require("./01.js");

describe("function calculateFrequency", () => {
  it("Correctly processes all sample arguments", () => {
    expect(calculateFrequency(0, ["+1", "-2", "+3", "+1"])).to.equal(3);
    expect(calculateFrequency(0, ["+1", "+1", "+1"])).to.equal(3);
    expect(calculateFrequency(0, ["+1", "+1", "-2"])).to.equal(0);
    expect(calculateFrequency(0, ["-1", "-2", "-3"])).to.equal(-6);
  });
});

describe("function findFirstRepeat", () => {
  it("Correctly processes all sample arguments", () => {
    expect(findFirstRepeat(0, ["+1", "-2", "+3", "+1"])).to.equal(2);
    expect(findFirstRepeat(0, ["+1", "-1"])).to.equal(0);
    expect(findFirstRepeat(0, ["+3", "+3", "+4", "-2", "-4"])).to.equal(10);
    expect(findFirstRepeat(0, ["-6", "+3", "+8", "+5", "-6"])).to.equal(5);
    expect(findFirstRepeat(0, ["+7", "+7", "-2", "-7", "-4"])).to.equal(14);
  });
});
