import ACTIONS from '../utils/actions';
import { actionTypes } from '../const/reducerObject';
import { especialNumbersValues } from '../const/const';

class EnterPointStrategy {
  execute(value, state, callback) {
    const { currentValue, transitionValue } = state;
    const isNumberEspecial = Object.values(especialNumbersValues).includes(currentValue);
    const isCurrentValueDecimal = currentValue.includes('.');
    const isMaxDigits = currentValue.length <= 12;

    if (!transitionValue && !isCurrentValueDecimal && isMaxDigits) {
      ACTIONS[actionTypes.addDigit](value, callback);
    } else if (transitionValue || isNumberEspecial) {
      ACTIONS[actionTypes.setFirstDigit](`0${value}`, callback);
    }
  }
}

export default new EnterPointStrategy();
