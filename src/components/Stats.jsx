import React from 'react';

const Stats = ({ statsWindow, wins, losses, closeMenu }) => {
  if (!statsWindow) return null;

  const percent =
    wins + losses > 0 ? ((wins / (wins + losses)) * 100).toFixed(2) : 0;
  return (
    <div className='popup-overlay' onClick={closeMenu}>
      <div className='popup' onClick={(e) => e.stopPropagation()}>
        <h2>Stats:</h2>
        <ul>
          <li>Wins: {wins}</li>
          <li>Losses: {losses}</li>
          <li>Win Ratio: {percent}%</li>
        </ul>
      </div>
    </div>
  );
};

export default Stats;
