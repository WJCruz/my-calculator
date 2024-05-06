const operators = ['+', '-', 'x', '÷'];

const especialOperators = ['+/-', '%', 'sin', 'cos', 'tan', 'log'];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const indeterminate = 'Indeterminate';

const especialNumbersValues = {
  'π': Math.PI.toString(),
  'e': Math.E.toString(),
};

const buttons = [
  ['AC', 'π', 'e', '÷', 'sin'],
  ['7', '8', '9', 'x', 'cos'],
  ['4', '5', '6', '-', 'tan'],
  ['1', '2', '3', '+', 'log'],
  ['0', '.', '=', '+/-', '%'],
];

export {
  buttons,
  operators,
  numbers,
  especialOperators,
  especialNumbersValues,
  indeterminate
};
