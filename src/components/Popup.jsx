import React from 'react';

const Popup = (props) => {
  return (
    <div
      className={props.winner !== null ? 'popup' + ' ' + 'open-popup' : 'popup'}
    >
      <h2>{props.winner ? 'Nice Job!' : 'You Lose'}</h2>
      <img src={props.image} alt={props.name} className='currPlayer'></img>
      <h4>Answer: {props.name}</h4>
      <button className='popup-btn' onClick={props.playAgain}>
        Play Again
      </button>
    </div>
  );
};

export default Popup;
