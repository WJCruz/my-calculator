import STRATEGIES from './actionStrategies';
import ActionContext from './actionContext';
import { numbers, especialNumbersValues, operators, especialOperators } from './const/const';

class FactoryActions {
  constructor(strategies, actionContext) {
    this.strategies = strategies;
    this.actionContext = actionContext;
  }

  defineAction(value) {
    if (numbers.includes(value)) {
      return this.strategies.numbers;
    } else if (especialNumbersValues[value] !== undefined) {
      return this.strategies.especialNumbers;
    } else if (value === '.') {
      return this.strategies.point; 
    } else if (operators.includes(value)) {
      return this.strategies.operators;
    } else if (value === '=' || value === 'AC') {
      return this.strategies.equalOrReset;
    } else if (especialOperators.includes(value)) {
      return this.strategies.especialOperators;
    } else if (value === 'rad' || value === 'deg') {
      return this.strategies.typeAngle;
    }
  }

  executeAction(value, state, callback) {
    const action = this.defineAction(value);
    this.actionContext.setStrategy(action);
    this.actionContext.execute(value, state, callback);
  }
}

export default new FactoryActions(STRATEGIES, new ActionContext(STRATEGIES.numbers));
