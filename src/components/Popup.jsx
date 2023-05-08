import React from 'react';

const Popup = ({ winner, image, name, playAgain }) => {
  return (
    <div className={`popup ${winner !== null && 'open-popup'}`}>
      <h2>{winner ? 'Nice Job!' : 'You Lose'}</h2>
      <img src={image} alt={name} className='currPlayer'></img>
      <h4>Answer: {name}</h4>
      <button className='popup-btn' onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
};

export default Popup;
