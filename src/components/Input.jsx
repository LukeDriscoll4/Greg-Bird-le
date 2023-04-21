import React from 'react';

const Input = (props) => {
  return (
    <form autoComplete='off'>
      <div id='playerlist-wrapper' className='wrapper'>
        <input
          id='player-input'
          type='text'
          placeholder='Player...'
          onChange={props.onInput}
        ></input>
      </div>
      <button type='submit' className='btn-submit' onClick={props.onClick}>
        Submit
      </button>
    </form>
  );
};

export default Input;
