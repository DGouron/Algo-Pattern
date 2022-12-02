//https://refactoring.guru/design-patterns/factory-method

/**
 *
 * @param {String} type
 * @returns {Object}
 */
function factory(type) {
  if (type === "car") {
    return new Car();
  } else if (type === "truck") {
    return new Truck();
  }
}

class Car {
  constructor() {
    this.type = "car";
  }

  info() {
    return this.type;
  }
}

class Truck {
  constructor() {
    this.type = "truck";
  }

  info() {
    return this.type;
  }
}

module.exports = factory;
