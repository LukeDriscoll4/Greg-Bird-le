import React from 'react';

const Popup = ({ winner, image, name, playAgain }) => {
  if (winner === null) return null;

  return (
    <div className='popup-overlay'>
      <div className='popup'>
        <h2>{winner ? 'Nice Job!' : 'You Lose'}</h2>
        <img src={image} alt={name} className='currPlayer'></img>
        <h4>Answer: {name}</h4>
        <button className='popup-btn' onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Popup;
