import ACTIONS from '../utils/actions';
import { actionTypes } from '../const/reducerObject';

class EnterTypeAngleStrategy {
  execute(value, state, callback) {
    if (value === 'deg') {
      ACTIONS[actionTypes.changeTypeAngle](true, callback);
    } else {
      ACTIONS[actionTypes.changeTypeAngle](false, callback);
    }
  }
}

export default new EnterTypeAngleStrategy();
