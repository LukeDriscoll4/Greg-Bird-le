import React from 'react';

const Signup = (props) => {
  return (
    <form
      className={props.signupWindow ? 'popup' + ' ' + 'open-popup' : 'popup'}
      autoComplete='off'
    >
      <h2>Sign-Up</h2>
      <div id='inputs'>
        <input
          className='new_username'
          id='login'
          type='text'
          placeholder='Username'
        ></input>
        <input
          className='new_password'
          id='login'
          type='password'
          placeholder='Password'
        ></input>
      </div>
      <div className='signup_guest'>
        <button type='button' id='signup-btn' onClick={props.createAccount}>
          Create Account
        </button>
        <button type='button' id='signup-btn' onClick={props.backToLogin}>
          Back to Login
        </button>
      </div>
    </form>
  );
};

export default Signup;
