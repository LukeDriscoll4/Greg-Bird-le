import React from 'react';

const Login = (props) => {
  return (
    <form
      className={props.loginWindow ? 'popup' + ' ' + 'open-popup' : 'popup'}
      autoComplete='off'
    >
      <h2>Login</h2>
      <div id='inputs'>
        <input
          className='username'
          id='login'
          type='text'
          placeholder='Username'
        ></input>
        <input
          className='password'
          id='login'
          type='password'
          placeholder='Password'
        ></input>
      </div>
      <div className='login/guest'>
        <button type='button' id='login-btn' onClick={props.login}>
          Log In
        </button>
        <button type='button' id='login-btn' onClick={props.guest}>
          Play As Guest
        </button>
      </div>
      <p>New User?</p>
      <button type='button' id='login-btn' onClick={props.signup}>
        Sign-Up
      </button>
    </form>
  );
};

export default Login;
