import Decimal from 'decimal.js';

const actionTypes = {
  addDigit: 'ADD_DIGIT',
  setFirstDigit: 'SET_FIRST_DIGIT',
  setOperator: 'SET_OPERATOR',
  calculateResult: 'CALCULATE_RESULT',
  resetValues: 'RESET_VALUES',
};

const calculateResult = (operator, previusValue, currentValue) => {
  switch(operator) {
    case '+':
      return new Decimal(previusValue).plus(new Decimal(currentValue));
    case '-':
      return new Decimal(previusValue).minus(new Decimal(currentValue));
    case 'x':
      return new Decimal(previusValue).times(new Decimal(currentValue));
    case '÷':
      return new Decimal(previusValue).dividedBy(new Decimal(currentValue));
    case '%':
      return new Decimal(currentValue).dividedBy(new Decimal('100'));
    case '+/-':
      return new Decimal(currentValue).negated();
    default:
      return currentValue;
  }
};

const reducerObject = (state, payload) => ({
  [actionTypes.addDigit]: {
    ...state,
    currentValue: state.currentValue + payload,
  },
  [actionTypes.setFirstDigit]: {
    ...state,
    currentValue: payload,
    transitionValue: false,
  },
  [actionTypes.setOperator]: {
    ...state,
    operator: payload,
    previusValue: state.currentValue,
    transitionValue: true,
  },
  [actionTypes.calculateResult]: {
    ...state,
    currentValue: (calculateResult(state.operator, state.previusValue, state.currentValue)).toString(),
    transitionValue: payload,
  },
  [actionTypes.resetValues]: {
    ...payload,
  },
})

export { reducerObject, actionTypes };
