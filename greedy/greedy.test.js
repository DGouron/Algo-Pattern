const knapsack = require("./greedy");

test("knapsack algorithm", () => {
  const items = [
    { weight: 2, value: 10 },
    { weight: 3, value: 5 },
    { weight: 5, value: 15 },
    { weight: 7, value: 7 },
    { weight: 1, value: 6 },
    { weight: 4, value: 18 },
  ];
  const maxWeight = 15;
  const value = knapsack(items, maxWeight);
  expect(value).toBe(54);
});
