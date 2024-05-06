import ACTIONS from '../utils/actions';
import { actionTypes } from '../const/reducerObject';
import { especialNumbersValues } from '../const/const';

class EnterNumberStrategy {
  execute(value, state, callback) {
    const { currentValue, transitionValue } = state;
    const isZeroCurrentValue = currentValue === '0';
    const isNumberEspecial = Object.values(especialNumbersValues).includes(currentValue);
    const isMaxDigits = currentValue.length <= 12;

    if (!isZeroCurrentValue && !transitionValue && !isNumberEspecial && isMaxDigits) {
      ACTIONS[actionTypes.addDigit](value, callback);
    } else if ((!isZeroCurrentValue && transitionValue) || (isZeroCurrentValue && value !== '0') || isNumberEspecial) {
      ACTIONS[actionTypes.setFirstDigit](value, callback);
    }
  }
}

export default new EnterNumberStrategy();
