import React from 'react';

import './digitButton.css';
import { operators, especialOperators } from '../../const/const';

function DigitButton(props) {
  return (
    <div className="p-1">
      <button
        className={`btn btn-primary w-100 ${
          [...operators, ...especialOperators].includes(props.value)? 'class-operators' : ''
        }
        ${
          ['AC', '=', 'deg', 'rad'].includes(props.value) ? 'class-especial-buttons' : ''
        }`}
        onClick={() => props.handleClick(props.value)}
      >
        {props.value}
      </button>
    </div>
  );
}

export default DigitButton;
