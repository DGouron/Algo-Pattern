const {
  reverseArrayReading,
  reverseArrayReadingWithForOf,
  reverseArrayReadingWithWhile,
  reverseArrayReadingWithReduce,
  reverseArrayReadingWithEntries,
  reverseArrayReadingWithCopyWithin,
} = require("./reverseArrayReading");

describe("reverseArrayReading", () => {
  it("should reverse the array", () => {
    const arrayToRead = [1, 2, 3, 4, 5];
    const expectedArray = [5, 4, 3, 2, 1];
    expect(reverseArrayReading(arrayToRead)).toEqual(expectedArray);
  });
});

describe("reverseArrayReadingWithForOf", () => {
  it("should reverse the array", () => {
    const arrayToRead = [1, 2, 3, 4, 5];
    const expectedArray = [5, 4, 3, 2, 1];
    expect(reverseArrayReadingWithForOf(arrayToRead)).toEqual(expectedArray);
  });
});

describe("reverseArrayReadingWithWhile", () => {
  it("should reverse the array", () => {
    const arrayToRead = [1, 2, 3, 4, 5];
    const expectedArray = [5, 4, 3, 2, 1];
    expect(reverseArrayReadingWithWhile(arrayToRead)).toEqual(expectedArray);
  });
});

describe("reverseArrayReadingWithReduce", () => {
  it("should reverse the array", () => {
    const arrayToRead = [1, 2, 3, 4, 5];
    const expectedArray = [5, 4, 3, 2, 1];
    expect(reverseArrayReadingWithReduce(arrayToRead)).toEqual(expectedArray);
  });
});

describe("reverseArrayReadingWithEntries", () => {
  it("should reverse the array", () => {
    const arrayToRead = [1, 2, 3, 4, 5];
    const expectedArray = [5, 4, 3, 2, 1];
    expect(reverseArrayReadingWithEntries(arrayToRead)).toEqual(expectedArray);
  });
});
