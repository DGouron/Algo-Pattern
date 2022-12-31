/*The Strategy design pattern allows you to define a family of algorithms, encapsulate them, and make them interchangeable. 
The context uses these algorithms without knowing their specific implementation. By changing the strategy used by the context, 
you can change the context's behavior dynamically.
 */
class Strategy {
  execute() {
    throw new Error("Cette méthode doit être implémentée");
  }
}

class StrategyA extends Strategy {
  execute() {
    console.log("Exécution de la stratégie A");
  }
}

class StrategyB extends Strategy {
  execute() {
    console.log("Exécution de la stratégie B");
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  doSomething() {
    this.strategy.execute();
  }
}

module.exports = { Strategy, StrategyA, StrategyB, Context };
