import React from 'react';
import {
  QuestionCircle,
  BarChartLineFill,
  GearFill,
} from 'react-bootstrap-icons';

const Menu_Bar = (props) => {
  return (
    <div className='icons'>
      <span type='button' onClick={props.stats}>
        <BarChartLineFill />
      </span>
      <span type='button' onClick={props.instructions}>
        <QuestionCircle />
      </span>
      <span type='button'>
        <GearFill />
      </span>
    </div>
  );
};

export default Menu_Bar;
