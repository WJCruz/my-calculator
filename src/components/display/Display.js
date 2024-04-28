import React from 'react';

import './display.css';

function Display(props) {
  return (
    <div className="container-display">
      <p>{props.initialState.currentValue || 0}</p>
    </div>
  );
}

export default Display;
