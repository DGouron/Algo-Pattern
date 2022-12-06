const binarySearch = require("./binarySearch");
const recursiveBinarySearch = require("./recursiveBinarySearch");

test("should return the index of the targetToFind in the arrayOfItems", () => {
  const arrayOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetToFind = 5;
  const expected = 4;
  const actual = binarySearch(arrayOfItems, targetToFind);
  expect(actual).toEqual(expected);
});

test("should return -1 if the targetToFind is not in the arrayOfItems", () => {
  const arrayOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetToFind = 10;
  const expected = -1;
  const actual = recursiveBinarySearch(
    arrayOfItems,
    targetToFind,
    0,
    arrayOfItems.length - 1
  );
  expect(actual).toEqual(expected);
});
