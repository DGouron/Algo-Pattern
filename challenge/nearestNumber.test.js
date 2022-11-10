const nearestNumberWithForOf = require("./nearestNumber");

test("nearestNumberWithForOf", () => {
  expect(nearestNumberWithForOf(1, [1, 2, 3])).toBe(1);
  expect(nearestNumberWithForOf(2, [1, 2, 3])).toBe(2);
  expect(nearestNumberWithForOf(3, [1, 2, 3])).toBe(3);
  expect(nearestNumberWithForOf(0, [-1, 1, 3])).toBe(1);
  expect(nearestNumberWithForOf(8, [-28, -7, 122])).toBe(-7);
  expect(nearestNumberWithForOf(9, [])).toBe(undefined);
  expect(nearestNumberWithForOf(9)).toBe(undefined);
});
