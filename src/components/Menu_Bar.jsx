import React from 'react';
import {
  QuestionCircle,
  BarChartLineFill,
  GearFill,
} from 'react-bootstrap-icons';

const Menu_Bar = ({ setStatsWindow, setInstructionsWindow }) => {
  return (
    <div className='icons'>
      <span type='button' onClick={() => setStatsWindow(true)}>
        <BarChartLineFill />
      </span>
      <span type='button' onClick={() => setInstructionsWindow(true)}>
        <QuestionCircle />
      </span>
      <span type='button'>
        <GearFill />
      </span>
    </div>
  );
};

export default Menu_Bar;
