import React from 'react';

import Display from '../../components/display/Display';
import ContainerButtons from '../containerButtons/ContainerButtons';
import ContainerButtonsEspecial from '../containerButtonsEspecial/ContainerButtonsEspecial';
import { reducerObject, initialState } from '../../const/reducerObject';
import { indeterminate } from '../../const/const';
import './app.css';

import factoryActions from '../../factoryActions';

function App() {

  const reducer = (state, action) => {
    return reducerObject(state, action);
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const showDisplay = (value) => {
    factoryActions.executeAction(value, state, dispatch);
  };

  React.useEffect(() => {
    if (state.currentValue === indeterminate) {
      alert('El resultado es indeterminado, por favor intente de nuevo.');
      factoryActions.executeAction('AC', state, dispatch)
    }
  }, [state.currentValue]);

  return (
    <div className="container-general p-4">
      <Display initialState={state} />
      <ContainerButtons handleClick={showDisplay} />
      <ContainerButtonsEspecial isRadian={state.isRadian} handleClick={showDisplay} />
    </div>
  );
}

export default App;
