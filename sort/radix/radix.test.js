const radixSort = require("./radix");

test("radixSort function sorts an array of numbers", () => {
  const unsortedArray = [4, 3, 2, 1];
  const sortedArray = [1, 2, 3, 4];
  expect(radixSort(unsortedArray, 10)).toEqual(sortedArray);
});

test("radixSort function handles empty array input", () => {
  expect(radixSort([], 10)).toEqual([]);
});

test("radixSort function handles single element array input", () => {
  expect(radixSort([5], 10)).toEqual([5]);
});

test("radixSort function returns null for non-array input", () => {
  expect(radixSort("string", 10)).toBeNull();
  expect(radixSort(123, 10)).toBeNull();
  expect(radixSort({}, 10)).toBeNull();
});
