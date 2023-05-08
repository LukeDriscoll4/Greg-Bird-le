import React from 'react';

const Stats = ({ statsWindow, wins, losses }) => {
  const percent =
    wins + losses > 0 ? ((wins / (wins + losses)) * 100).toFixed(2) : 0;
  return (
    <div className={`popup ${statsWindow && 'open-popup'}`}>
      <h2>Stats:</h2>
      <ul>
        <li>Wins: {wins}</li>
        <li>Losses: {losses}</li>
        <li>Win Ratio: {percent}%</li>
      </ul>
    </div>
  );
};

export default Stats;
