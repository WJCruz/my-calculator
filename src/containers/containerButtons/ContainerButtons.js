import React from 'react';

import './containerButtons.css';
import DigitButton from '../../components/digitButton/DigitButton';
import { buttons } from '../../const/const';

function ContainerButtons(props) {
  return (
    <div className="container-digit-button">
      {buttons.flatMap((buttonArray) =>(
        buttonArray.map(button => (
          <DigitButton
            value={button}
            key={button}
            handleClick={props.handleClick}
          />
        ))
      ))}
    </div>
  );
}

export default ContainerButtons;
