const BuilderCar = require("./builder");

describe("Check car builder", () => {
  test("Check car builder", () => {
    const car = new BuilderCar()
      .addEngine("V8")
      .addWheels(4)
      .addDoors(4)
      .build();
    expect(car).toEqual({
      engine: "V8",
      wheels: 4,
      doors: 4,
    });
  });

  test("Check with variables", () => {
    const wheels = 8;
    const doors = 2;
    const engine = "V12";
    const car = new BuilderCar();
    expect(
      car.addWheels(wheels).addDoors(doors).addEngine(engine).build()
    ).toEqual({
      engine,
      wheels,
      doors,
    });
  });
});
