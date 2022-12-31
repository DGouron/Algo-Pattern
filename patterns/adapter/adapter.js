/*The Adapter pattern in JavaScript is a design pattern used to adapt an existing interface to another interface 
  expected by a client. This allows incompatible interfaces to work together.
 */
class OldCalculator {
  add(x, y) {
    return x + y;
  }
}

class NewCalculator {
  sum(x, y) {
    return x + y;
  }
}

class CalculatorAdapter {
  constructor() {
    this.newCalculator = new NewCalculator();
  }

  add(x, y) {
    return this.newCalculator.sum(x, y);
  }
}

module.exports = { CalculatorAdapter, OldCalculator, NewCalculator };
