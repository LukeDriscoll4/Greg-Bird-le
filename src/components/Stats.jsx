import React from 'react';

const Stats = (props) => {
  const percent = (props.wins / (props.wins + props.losses)) * 100;
  const rounded = percent.toFixed(2);
  return (
    <div
      className={props.stats === true ? 'popup' + ' ' + 'open-popup' : 'popup'}
    >
      <h2>Stats:</h2>
      <ul>
        <li>Wins: {props.wins}</li>
        <li>Losses: {props.losses}</li>
        <li>Win Ratio: {rounded ? rounded : 0}%</li>
      </ul>
    </div>
  );
};

export default Stats;
