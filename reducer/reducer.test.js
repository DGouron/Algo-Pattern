const reducer = require("./reducer");

test("reducer", () => {
  expect(reducer([1, 3, 44], 0)).toBe(48);
  expect(reducer(["tarte", "aux", "fraise"], "")).toBe("tarteauxfraise");
  expect(reducer([1, 2, 3, " ", 5], 0)).toBe("6 5");
});
