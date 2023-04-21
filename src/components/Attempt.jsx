import React from 'react';

const Attempt = (props) => {
  let sydney;
  if (props.sydney === true) sydney = '✓';
  else sydney = 'X';
  let f_b;
  if (props.f_b === 'Forward') f_b = 'Forward';
  else f_b = 'Back';
  let arrowFunc = (target, guess) => {
    let arrow;
    if (target > guess) arrow = '↑';
    if (target < guess) arrow = '↓';
    return arrow;
  };
  return (
    <tr className='attempt'>
      <td
        id='name'
        className={props.targetPlayer.name === props.name ? 'correct' : ''}
      >
        {props.name}
      </td>
      <td
        className={props.targetPlayer.sydney === props.sydney ? 'correct' : ''}
      >
        {sydney}
      </td>
      <td className={props.targetPlayer.team === props.team ? 'correct' : ''}>
        {props.team}
      </td>
      <td
        id='f_b'
        className={props.targetPlayer.f_b === props.f_b ? 'correct' : ''}
      >
        {f_b}
      </td>
      <td
        className={
          props.targetPlayer.position === props.position ? 'correct' : ''
        }
      >
        {props.position}
      </td>
      <td className={props.targetPlayer.age === props.age ? 'correct' : ''}>
        {props.age} {arrowFunc(props.targetPlayer.age, props.age)}
      </td>
      <td
        id='height'
        className={props.targetPlayer.height === props.height ? 'correct' : ''}
      >
        {props.height} {arrowFunc(props.targetPlayer.height, props.height)}
      </td>
    </tr>
  );
};

export default Attempt;
