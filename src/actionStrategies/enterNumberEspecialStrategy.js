import ACTIONS from '../utils/actions';
import { actionTypes } from '../const/reducerObject';
import { especialNumbersValues } from '../const/const';

class EnterNumberEspecialStrategy {
  execute(value, state, callback) {
    ACTIONS[actionTypes.setFirstDigit](especialNumbersValues[value], callback);
  }
}

export default new EnterNumberEspecialStrategy();
