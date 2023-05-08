import React from 'react';

const Instructions = ({ instructionsWindow, closeMenu }) => {
  if (!instructionsWindow) return null;

  return (
    <div className='popup-overlay' onClick={closeMenu}>
      <div className='popup' onClick={(e) => e.stopPropagation()}>
        <h2>How To Play</h2>
        <h5>
          Guess the NRL player in 8 attempts. In any column, blue indicates a
          match.
        </h5>
        <p>Categories include:</p>
        <ul>
          <li>
            Does the player play for a Sydney-based team?
            <p>
              ie. Canterbury, Cronulla, Manly, Parramatta, Penrith, South
              Sydney, St. George, Sydney, or Wests
            </p>
          </li>
          <li>Does he play in the pack or backline?</li>
          <li>Is he older/younger or taller/shorter than your guess?</li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
