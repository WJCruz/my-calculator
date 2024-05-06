import Decimal from 'decimal.js';

import { indeterminate } from '../const/const';

const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

const aproximation = (value) => Math.abs(value) < 1e-15 ? 0 : value;

const calculateResult = (state) => {
  const { operator, previusValue, currentValue, isRadian } = state;
  const angle = isRadian ? currentValue : toRadians(currentValue);
  let result = null;

  switch(operator) {
    case '+':
      return new Decimal(previusValue).plus(new Decimal(currentValue));
    case '-':
      return new Decimal(previusValue).minus(new Decimal(currentValue));
    case 'x':
      return new Decimal(previusValue).times(new Decimal(currentValue));
    case '÷':
      if (currentValue === '0') {
        return indeterminate;
      }
      return new Decimal(previusValue).dividedBy(new Decimal(currentValue));
    case '%':
      return new Decimal(currentValue).dividedBy(new Decimal('100'));
    case '+/-':
      return new Decimal(currentValue).negated();
    case 'sin':
      result = Math.sin(angle);
      return aproximation(result);
    case 'cos':
      result = Math.cos(angle);
      return aproximation(result);
    case 'tan':
      if (currentValue % 90 === 0 && currentValue % 180 !== 0) {
        return indeterminate;
      }
      result = Math.tan(angle);
      return aproximation(result);
    case 'log':
      return Math.log10(currentValue);
    default:
      return currentValue;
  }
};

export default calculateResult;
