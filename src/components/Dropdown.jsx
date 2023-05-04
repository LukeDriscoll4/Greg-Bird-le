import React from 'react';
import Select from 'react-select';
import players from '../db/players.js';

const Dropdown = ({ handleUserInput, userInput, handleSubmit }) => {
  const options = players.map((player) => ({
    value: player.name,
    label: player.name,
  }));
  return (
    <div>
      <Select onChange={handleUserInput} options={options} value={userInput} />
      <button type='submit' className='btn-submit' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Dropdown;
