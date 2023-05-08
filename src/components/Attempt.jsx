import React from 'react';

const Attempt = ({ targetPlayer, guessedPlayer }) => {
  let getArrow = (target, guess) => {
    let arrow = '';
    if (target > guess) arrow = '↑';
    if (target < guess) arrow = '↓';
    return arrow;
  };

  return (
    <tr className='attempt'>
      <td
        id='name'
        className={targetPlayer.name === guessedPlayer.name ? 'correct' : ''}
      >
        {guessedPlayer.name}
      </td>
      <td
        className={
          targetPlayer.sydney === guessedPlayer.sydney ? 'correct' : ''
        }
      >
        {guessedPlayer.sydney ? '✓' : 'X'}
      </td>
      <td className={targetPlayer.team === guessedPlayer.team ? 'correct' : ''}>
        {guessedPlayer.team}
      </td>
      <td
        id='f_b'
        className={targetPlayer.f_b === guessedPlayer.f_b ? 'correct' : ''}
      >
        {guessedPlayer.f_b}
      </td>
      <td
        className={
          targetPlayer.position === guessedPlayer.position ? 'correct' : ''
        }
      >
        {guessedPlayer.position}
      </td>
      <td className={targetPlayer.age === guessedPlayer.age ? 'correct' : ''}>
        {guessedPlayer.age} {getArrow(targetPlayer.age, guessedPlayer.age)}
      </td>
      <td
        id='height'
        className={
          targetPlayer.height === guessedPlayer.height ? 'correct' : ''
        }
      >
        {guessedPlayer.height}{' '}
        {getArrow(targetPlayer.height, guessedPlayer.height)}
      </td>
    </tr>
  );
};

export default Attempt;
