import React from 'react';
import Attempt from '../components/Attempt.jsx';

const AttemptsContainer = ({ targetPlayer, attempts }) => {
  const attemptComponents = attempts.map((attempt, i) => (
    <Attempt key={i} targetPlayer={targetPlayer} guessedPlayer={attempt} />
  ));

  return (
    <table>
      <tbody>
        <tr className='attempt'>
          <th>Name</th>
          <th>Syd.</th>
          <th>Team</th>
          <th>F / B</th>
          <th>Pos.</th>
          <th>Age</th>
          <th>Ht.</th>
        </tr>
        {attemptComponents}
      </tbody>
    </table>
  );
};

export default AttemptsContainer;
