const factory = require("./factory");

describe("Check factory", () => {
  test("factory", () => {
    expect(factory("car").info()).toBe("car");
    expect(factory("truck").info()).toBe("truck");
  });
});
