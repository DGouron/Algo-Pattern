const { StrategyA, StrategyB, Context } = require("./strategy");

test("utilisation du design pattern", () => {
  const context = new Context(new StrategyA());
  context.doSomething(); // Exécution de la stratégie A

  context.setStrategy(new StrategyB());
  context.doSomething(); // Exécution de la stratégie B
});
