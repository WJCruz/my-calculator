import React from 'react';

import './digitButton.css';
import { operators } from '../../const/const';

function DigitButton(props) {
  return (
    <div className="p-1">
      <button
        className={`btn btn-primary w-100 ${
          operators.includes(props.value) ? 'class-operators' : ''
        }`}
        onClick={() => props.handleClick(props.value)}
      >
        {props.value}
      </button>
    </div>
  );
}

export default DigitButton;
