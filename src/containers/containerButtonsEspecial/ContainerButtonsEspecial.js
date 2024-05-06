import React from 'react';

import './containerButtonsEspecial.css';
import DigitButton from '../../components/digitButton/DigitButton';

function ContainerButtonsEspecial(props) {
  return (
    <div className='container-buttons-especial'>
      <DigitButton value={props.isRadian ? 'rad' : 'deg'} handleClick={props.handleClick} />
    </div>
  );
}

export default ContainerButtonsEspecial;
