import { actionTypes } from '../const/reducerObject';
import { initialState } from '../const/reducerObject';

const addDigit = (value, callback) => callback({ type: actionTypes.addDigit, payload: value });
const setFirstDigit = (value, callback) => callback({ type: actionTypes.setFirstDigit, payload: value });
const setOperator = (value, callback) => callback({ type: actionTypes.setOperator, payload: value });
const calculateResult = (callback) => callback({ type: actionTypes.calculateResult});
const resetValues = (callback) => callback({ type: actionTypes.resetValues, payload: initialState });
const changeTypeAngle = (value, callback) => callback({ type: actionTypes.changeTypeAngle, payload: value});

function returnActions () {
  return {
    [actionTypes.addDigit]: addDigit,
    [actionTypes.setFirstDigit]: setFirstDigit,
    [actionTypes.setOperator]: setOperator,
    [actionTypes.calculateResult]: calculateResult,
    [actionTypes.resetValues]: resetValues,
    [actionTypes.changeTypeAngle]: changeTypeAngle,
  }
}

const  ACTIONS = returnActions();

export default ACTIONS;
