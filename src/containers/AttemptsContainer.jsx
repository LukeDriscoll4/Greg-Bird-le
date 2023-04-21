import React from 'react';
import Attempt from '../components/Attempt.jsx';

const AttemptsContainer = (props) => {
  const boxes = [];
  for (let i = 0; i < props.attempts.length; i++) {
    const attempt = (
      <Attempt
        key={i}
        name={props.attempts[i].name}
        sydney={props.attempts[i].sydney}
        team={props.attempts[i].team}
        f_b={props.attempts[i].f_b}
        position={props.attempts[i].position}
        age={props.attempts[i].age}
        height={props.attempts[i].height}
        targetPlayer={props.targetPlayer}
      />
    );
    boxes.push(attempt);
  }
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
        {boxes}
      </tbody>
    </table>
  );
};

export default AttemptsContainer;
