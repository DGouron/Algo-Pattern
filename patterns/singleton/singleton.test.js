const Singleton = require("./singleton");

test("Singleton works correctly", () => {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  expect(instance1).toBe(instance2);
});
