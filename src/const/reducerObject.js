import calculateResult from '../utils/operations';

const initialState = {
  previusValue: null,
  currentValue: '0',
  operator: null,
  transitionValue: true,
  isRadian: false,
};

const actionTypes = {
  addDigit: 'ADD_DIGIT',
  setFirstDigit: 'SET_FIRST_DIGIT',
  setOperator: 'SET_OPERATOR',
  calculateResult: 'CALCULATE_RESULT',
  resetValues: 'RESET_VALUES',
  changeTypeAngle: 'CHANGE_TYPE_ANGLE',
};

const reducerObject = (state, action) => {
  switch(action.type) {
    case actionTypes.addDigit:
      return {
        ...state,
        currentValue: state.currentValue + action.payload,
      };
    case actionTypes.setFirstDigit:
      return {
        ...state,
        currentValue: action.payload,
        transitionValue: false,
      };
    case actionTypes.setOperator:
      return {
        ...state,
        operator: action.payload,
        previusValue: state.currentValue,
        transitionValue: true,
      };
    case actionTypes.calculateResult:
      return {
        ...state,
        operator: null,
        currentValue: calculateResult(state).toString(),
        transitionValue: true,
      };
    case actionTypes.resetValues:
      return {
        ...action.payload,
        isRadian: state.isRadian,
      };
    case actionTypes.changeTypeAngle:
      return {
        ...state,
        isRadian: action.payload,
      };
    default:
      return state;
  }
};

export { reducerObject, actionTypes, initialState };
