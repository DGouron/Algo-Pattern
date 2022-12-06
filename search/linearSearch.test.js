const { linearSearch } = require("./linearSearch");

test("linearSearch", () => {
  expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(2);
  expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  expect(linearSearch(["salad", "tomate", "oignon"], "tomate")).toBe(1);
  expect(linearSearch([1, 2, 3, 4, 5], 5)).toBe(4);
});
