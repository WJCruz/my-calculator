import ACTIONS from '../utils/actions';
import { actionTypes } from '../const/reducerObject';

class EnterEqualOrResetStrategy {
  execute(value, state, callback) {
    if (value === '=') {
      ACTIONS[actionTypes.calculateResult](callback);
    }
    if (value === 'AC') {
      ACTIONS[actionTypes.resetValues](callback);
    }
  }
}

export default new EnterEqualOrResetStrategy();
