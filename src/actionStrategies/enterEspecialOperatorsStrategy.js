import ACTIONS from '../utils/actions';
import { actionTypes } from '../const/reducerObject';

class EnterEspecialOperatorsStrategy {
  execute(value, state, callback) {
    const { transitionValue, operator } = state;

    if (!transitionValue && operator) {
      ACTIONS[actionTypes.calculateResult](callback);
    }
    ACTIONS[actionTypes.setOperator](value, callback);
    ACTIONS[actionTypes.calculateResult](callback);
  }
}

export default new EnterEspecialOperatorsStrategy();
