import React from 'react';

const Stats = ({ statsWindow, wins, losses }) => {
  const percent = (wins / (wins + losses)) * 100;
  const rounded = percent.toFixed(2);
  return (
    <div
      className={statsWindow === true ? 'popup' + ' ' + 'open-popup' : 'popup'}
    >
      <h2>Stats:</h2>
      <ul>
        <li>Wins: {wins}</li>
        <li>Losses: {losses}</li>
        <li>Win Ratio: {rounded ? rounded : 0}%</li>
      </ul>
    </div>
  );
};

export default Stats;
