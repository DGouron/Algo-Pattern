const {
  OldCalculator,
  NewCalculator,
  CalculatorAdapter,
} = require("./adapter");

test("CalculatorAdapter works correctly", () => {
  const oldCalculator = new OldCalculator();
  const newCalculator = new NewCalculator();
  const calculatorAdapter = new CalculatorAdapter();

  expect(oldCalculator.add(1, 2)).toBe(3);
  expect(newCalculator.sum(1, 2)).toBe(3);
  expect(calculatorAdapter.add(1, 2)).toBe(3);
});
