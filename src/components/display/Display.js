import React from 'react';

import './display.css';

function Display(props) {
  return (
    <div className="container-display">
      <p>{parseFloat(props.initialState.currentValue)}</p>
    </div>
  );
}

export default Display;
