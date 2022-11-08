const recursion = require("./recursion");

test("recurce", () => {
  expect(recursion(0)).toBe(0);
  expect(recursion(1)).toBe(1);
  expect(recursion(2)).toBe(3);
  expect(recursion(3)).toBe(6);
  expect(recursion(4)).toBe(10);
  expect(recursion(5)).toBe(15);
});
