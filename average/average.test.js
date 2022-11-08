const { average, averageWithLoop, averageWithReduce } = require("./average");

test("average", () => {
  expect(average([1, 3, 44])).toBe(16);
  expect(average([1, 2, 3, 4, 5])).toBe(3);
  expect(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
  expect(average([])).toBe(0);
});

test("averageWithLoop", () => {
  expect(averageWithLoop([1, 3, 44])).toBe(16);
  expect(averageWithLoop([1, 2, 3, 4, 5])).toBe(3);
  expect(averageWithLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
  expect(averageWithLoop([])).toBe(0);
});

test("averageWithReduce", () => {
  expect(averageWithReduce([1, 3, 44])).toBe(16);
  expect(averageWithReduce([1, 2, 3, 4, 5])).toBe(3);
  expect(averageWithReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
  expect(averageWithReduce([])).toBe(0);
});

// Path: average\average.js
