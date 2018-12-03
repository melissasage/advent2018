const { expect } = require("chai");
const {
  getChecksum,
  getCounts,
  duplicates,
  triplicates,
  compareWords,
  findPrototype
} = require("./02.js");

describe("Day 02: Calculate checksums", () => {
  const examples1 = [
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
  xit("getCounts() returns an array of numbers equal to the letter counts", () => {
    expect(getCounts(examples1[0])).to.deep.equal([1, 1, 1, 1, 1, 1]);
    expect(getCounts(examples1[1])).to.deep.equal([3, 2, 1]);
    expect(getCounts(examples1[2])).to.deep.equal([1, 2, 1, 1, 1]);
    expect(getCounts(examples1[3])).to.deep.equal([1, 1, 3, 1]);
    expect(getCounts(examples1[4])).to.deep.equal([2, 1, 1, 2]);
    expect(getCounts(examples1[5])).to.deep.equal([1, 1, 1, 1, 2]);
    expect(getCounts(examples1[6])).to.deep.equal([3, 3]);
  });
  xit("duplicates() takes an array of counts returns 1 if there is at least one duplicate, 0 otherwise", () => {
    expect(duplicates([1, 1, 1, 1, 1, 1])).to.equal(0);
    expect(duplicates([3, 2, 1])).to.equal(1);
    expect(duplicates([2, 1, 1, 2])).to.equal(1);
  });
  xit("triplicates() takes an array of counts returns 1 if there is at least one triplicate, 0 otherwise", () => {
    expect(triplicates([1, 1, 1, 1, 1, 1])).to.equal(0);
    expect(triplicates([3, 2, 1])).to.equal(1);
    expect(triplicates([3, 3])).to.equal(1);
  });
  xit("getChecksum() passes the example provided", () => {
    expect(getChecksum(examples1)).to.equal(12);
  });

  const examples2 = [
    "abcde",
    "fghij",
    "klmno",
    "pqrst",
    "fguij",
    "axcye",
    "wvxyz"
  ];
  it("compareWords() returns the number of characters different in two words", () => {
    expect(compareWords("abcde")("abcde")).to.equal(0);
    expect(compareWords("abcde")("axcye")).to.equal(2);
    expect(compareWords("fghij")("fguij")).to.equal(1);
    expect(compareWords("klmno")("pqrst")).to.equal(5);
  });
  it("findPrototype() returns the letters in common between the correct IDs", () => {
    expect(findPrototype(examples2)).to.equal("fgij");
  });
});
