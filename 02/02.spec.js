const { expect } = require("chai");
const { getChecksum, getCounts, duplicates, triplicates } = require("./02.js");

describe("Day 02: Calculate checksums", () => {
  const examples = [
    //           2  3
    "abcdef", // 0  0
    "bababc", // 1  1
    "abbcde", // 1  0
    "abcccd", // 0  1
    "aabcdd", // 1  0
    "abcdee", // 1  0
    "ababab" //  0  1
    // checksum is n(2) * n(3) == 4 * 3 == 12.
  ];
  it("getCounts() returns an array of numbers equal to the letter counts", () => {
    expect(getCounts(examples[0])).to.deep.equal([1, 1, 1, 1, 1, 1]);
    expect(getCounts(examples[1])).to.deep.equal([3, 2, 1]);
    expect(getCounts(examples[2])).to.deep.equal([1, 2, 1, 1, 1]);
    expect(getCounts(examples[3])).to.deep.equal([1, 1, 3, 1]);
    expect(getCounts(examples[4])).to.deep.equal([2, 1, 1, 2]);
    expect(getCounts(examples[5])).to.deep.equal([1, 1, 1, 1, 2]);
    expect(getCounts(examples[6])).to.deep.equal([3, 3]);
  });
  it("duplicates() takes an array of counts returns 1 if there is at least one duplicate, 0 otherwise", () => {
    expect(duplicates([1, 1, 1, 1, 1, 1])).to.equal(0);
    expect(duplicates([3, 2, 1])).to.equal(1);
    expect(duplicates([2, 1, 1, 2])).to.equal(1);
  });
  it("triplicates() takes an array of counts returns 1 if there is at least one triplicate, 0 otherwise", () => {
    expect(triplicates([1, 1, 1, 1, 1, 1])).to.equal(0);
    expect(triplicates([3, 2, 1])).to.equal(1);
    expect(triplicates([3, 3])).to.equal(1);
  });
  it("getChecksum() passes the example provided", () => {
    expect(getChecksum(examples)).to.equal(12);
  });
});
