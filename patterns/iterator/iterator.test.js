const rangeIterator = require("./iterator");

test("range function returns correct values", () => {
  const iterator = rangeIterator(0, 3);

  expect(iterator.next().value).toBe(0);
  expect(iterator.next().value).toBe(1);
  expect(iterator.next().value).toBe(2);
  expect(iterator.next().done).toBe(true);
  expect(iterator.next().value).toBe(3);
});
