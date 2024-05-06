import ACTIONS from '../utils/actions';
import { actionTypes } from '../const/reducerObject';

class EnterOperatorStrategy {
  execute(value, state, callback) {
    const { transitionValue, operator } = state;

    if (!transitionValue && operator) {
      ACTIONS[actionTypes.calculateResult](callback);
    }
    ACTIONS[actionTypes.setOperator](value, callback);
  }
}

export default new EnterOperatorStrategy();
