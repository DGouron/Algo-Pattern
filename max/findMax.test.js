const {
  findMax,
  findMaxWithLoop,
  findMaxWithRecursion,
  findMaxWithReduce,
} = require("./findMax");

test("findMax", () => {
  expect(findMax([1, 3, 44])).toBe(44);
  expect(findMax([1, 2, 3, 4, 5])).toBe(5);
  expect(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
  expect(findMax([])).toBe(0);
});

test("findMaxWithLoop", () => {
  expect(findMaxWithLoop([1, 3, 44])).toBe(44);
  expect(findMaxWithLoop([1, 2, 3, 4, 5])).toBe(5);
  expect(findMaxWithLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
  expect(findMaxWithLoop([])).toBe(0);
});

test("findMaxWithRecursion", () => {
  expect(findMaxWithRecursion([1, 3, 44])).toBe(44);
  expect(findMaxWithRecursion([1, 2, 3, 4, 5])).toBe(5);
  expect(findMaxWithRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
  expect(findMaxWithRecursion([])).toBe(0);
});

test("findMaxWithReduce", () => {
  expect(findMaxWithReduce([1, 3, 44])).toBe(44);
  expect(findMaxWithReduce([1, 2, 3, 4, 5])).toBe(5);
  expect(findMaxWithReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
  expect(findMaxWithReduce([])).toBe(0);
});

// Path: max\findMax.js
