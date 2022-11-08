const average = require("./average");

test("average", () => {
  expect(average([1, 3, 44])).toBe(16);
  expect(average([1, 2, 3, 4, 5])).toBe(3);
  expect(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
  expect(average([])).toBe(0);
});
