import React from 'react';

import Display from '../../components/display/Display';
import './app.css';
import ContainerButtons from '../containerButtons/ContainerButtons';
import { numbers, operators, especialOperators } from '../../const/const';
import { reducerObject, actionTypes } from '../../const/reducerObject';

function App() {
  const initialState = {
    previusValue: null,
    currentValue: '0',
    operator: null,
    transitionValue: false,
  };

  const reducer = (state, action) => {
    console.log(action);
    if(reducerObject(state)[action.type]) {
      return reducerObject(state, action.payload)[action.type];
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addDigit = (value) => dispatch({ type: actionTypes.addDigit, payload: value });
  const setFirstDigit = (value) => dispatch({ type: actionTypes.setFirstDigit, payload: value });
  const setOperator = (value) => dispatch({ type: actionTypes.setOperator, payload: value });
  const calculateResult = (setTransition = true) => dispatch({ type: actionTypes.calculateResult, payload: setTransition});
  const resetValues = () => dispatch({ type: actionTypes.resetValues, payload: initialState });

  const isZeroCurrentValue = state.currentValue === '0';
  const isCurrentValueDecimal = state.currentValue.includes('.');

  const enterDigit = (value) => {
    if (!isZeroCurrentValue && !state.transitionValue) {
      addDigit(value);
    } else if ((!isZeroCurrentValue && state.transitionValue) || (isZeroCurrentValue && value !== '0')) {
      setFirstDigit(value);
    }
  };

  const enterPoint = (value) => {
    if (!state.transitionValue && !isCurrentValueDecimal) {
      addDigit(value);
    } else if (state.transitionValue) {
      setFirstDigit(`0${value}`);
    }
  };

  const showDisplay = (value) => {
    if (numbers.includes(value)) {
      enterDigit(value);
    }
    if (value === '.') {
      enterPoint(value);
    }
    if (operators.includes(value)) {
      setOperator(value);
    }
    if (value === '=') {
      calculateResult();
    }
    if (value === 'AC') {
      resetValues();
    }
    if (especialOperators.includes(value)) {
      setOperator(value);
      calculateResult(false);
    }
  };
  console.log(state);

  return (
    <div className="container-general p-4">
      <Display initialState={state} />
      <ContainerButtons handleClick={showDisplay} />
    </div>
  );
}

export default App;
