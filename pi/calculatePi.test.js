const { calculatePi, calculatePiWithReducer } = require("./calculatePi");

describe("calculatePi", () => {
  it("should calculate pi", () => {
    expect(calculatePi(10000000)).toBeCloseTo(3.141592653, 5);
  });
});

describe("calculatePiWithReducer", () => {
  it("should calculate pi", () => {
    expect(calculatePiWithReducer(10000000)).toBeCloseTo(3.141592653, 5);
  });
});
