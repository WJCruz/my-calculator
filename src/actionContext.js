class ActionContext {
  constructor(strategy) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  execute(value, state, callback) {
    return this.strategy.execute(value, state, callback);
  }
}

export default ActionContext;
