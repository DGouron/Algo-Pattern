class CarBuilder {
  result = {};
  constructor() {
    this.result.doors = 4;
    this.result.wheels = 4;
    this.result.engine = "none";
  }

  addDoors(doors) {
    this.result.doors = doors;
    return this;
  }
  addWheels(wheels) {
    this.result.wheels = wheels;
    return this;
  }
  addEngine(engine) {
    this.result.engine = engine;
    return this;
  }
  build() {
    return this.result;
  }
}

module.exports = CarBuilder;
