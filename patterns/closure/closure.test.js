const createCounter = require("./closure");

test("Closure works correctly", () => {
  const counter1 = createCounter();
  const counter2 = createCounter();

  expect(counter1()).toBe(1);
  expect(counter1()).toBe(2);
  expect(counter2()).toBe(1);
  expect(counter1()).toBe(3);
  expect(counter2()).toBe(2);
});
