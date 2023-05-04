import React, { Component, useState, useEffect } from 'react';
import './App.scss';
import Menu_Bar from './components/Menu_Bar.jsx';
import Popup from './components/Popup.jsx';
import Input from './components/Input.jsx';
import AttemptsContainer from './containers/AttemptsContainer.jsx';
import players from './db/players.js';
import image from './image.png';
import Instructions from './components/Instructions.jsx';
import Stats from './components/Stats.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import confetti from 'canvas-confetti';
import axios from 'axios';
import Dropdown from './components/Dropdown.jsx';

const App = () => {
  const [attempts, setAttempts] = useState([]);
  const [playerOfTheDay, setPlayerOfTheDay] = useState({});
  const [winner, setWinner] = useState(null);
  const [instructions, setInstructions] = useState(false);
  const [statsWindow, setStatsWindow] = useState(false);
  const [stats, setStats] = useState({ wins: 0, losses: 0 });
  const [userInput, setUserInput] = useState(null);

  // logic for closing modals (instructions, stats, etc.)
  // document.addEventListener('click', this.closeMenu);

  // each time the page loads, retrieve the user's stats and set the player of the day
  useEffect(() => {
    const existingStats = JSON.parse(window.localStorage.getItem('stats'));
    if (existingStats) {
      setStats(existingStats);
    } else {
      window.localStorage.setItem('stats', JSON.stringify(stats));
    }

    const randIdx = Math.floor(Math.random() * players.length);
    setPlayerOfTheDay(players[randIdx]);
  }, []);

  // each time the user wins or loses, reset the player of the day
  useEffect(() => {
    const randIdx = Math.floor(Math.random() * players.length);
    setPlayerOfTheDay(players[randIdx]);
  }, [winner]);

  const handleUserInput = (selectedOption) => {
    setUserInput(selectedOption);
  };

  // removeDropdown() {
  //   const listElement = document.getElementById('player-list');
  //   if (listElement) listElement.remove();
  // }

  // dropdownClick(e) {
  //   e.preventDefault();
  //   const button = e.target;
  //   const userInput = document.getElementById('player-input');
  //   userInput.value = button.innerHTML;
  //   this.removeDropdown();
  // }

  // createPlayerDropdown(list) {
  //   const listElement = document.createElement('ul');
  //   listElement.id = 'player-list';
  //   listElement.className = 'player-list';
  //   list.forEach((player) => {
  //     const playerItem = document.createElement('li');
  //     const playerButton = document.createElement('button');
  //     playerButton.innerHTML = player;
  //     playerButton.addEventListener('click', this.dropdownClick);
  //     playerItem.appendChild(playerButton);
  //     listElement.appendChild(playerItem);
  //   });
  //   document.getElementById('playerlist-wrapper').appendChild(listElement);
  // }

  // handleInput() {
  //   this.removeDropdown();
  //   let playerNames = players.map((player) => player.name);
  //   const userInput = document.getElementById('player-input');
  //   const value = userInput.value.toLowerCase();
  //   if (value.length === 0) return;
  //   const filteredNames = [];
  //   playerNames.forEach((playerName) => {
  //     if (playerName.toLowerCase().includes(value))
  //       filteredNames.push(playerName);
  //   });
  //   this.createPlayerDropdown(filteredNames.sort());
  // }

  // playAgain(e) {
  //   e.preventDefault();
  //   const randIdx = Math.floor(Math.random() * players.length);
  //   const currPlayer = players[randIdx];
  //   this.setState({
  //     attempts: [],
  //     currentPlayer: currPlayer,
  //     winner: null,
  //   });
  // }

  // instructions(e) {
  //   e.preventDefault();
  //   this.setState({
  //     instructions: !this.state.instructions,
  //     winner: null,
  //     statsWindow: false,
  //   });
  // }

  // statsOpen(e) {
  //   e.preventDefault();
  //   this.setState({
  //     statsWindow: !this.state.statsWindow,
  //     instructions: false,
  //     winner: null,
  //   });
  // }

  // closeMenu(e) {
  //   if (!e.target.closest('.icons')) {
  //     this.setState({ instructions: false, statsWindow: false });
  //   }
  // }

  // login(e) {
  //   e.preventDefault();
  //   const username = document.querySelector('.username').value;
  //   const password = document.querySelector('.password').value;
  //   axios
  //     .post('http://localhost:3000/users', {
  //       username: username,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data === null) {
  //         this.setState({ loginWindow: false, signupWindow: true });
  //       } else {
  //         this.setState({ loginWindow: false });
  //       }
  //     });
  // }

  // createAccount(e) {
  //   e.preventDefault();
  //   const username = document.querySelector('.new_username').value;
  //   const password = document.querySelector('.new_password').value;
  //   axios.post('http://localhost:3000/newusers', {
  //     username: username,
  //     password: password,
  //   });
  //   this.setState({ signupWindow: false });
  // }

  // guestPlayer(e) {
  //   e.preventDefault();
  //   this.setState({ loginWindow: false, signupWindow: false });
  // }

  // signup(e) {
  //   e.preventDefault();
  //   this.setState({ signupWindow: true, loginWindow: false });
  // }

  // backToLogin(e) {
  //   e.preventDefault();
  //   this.setState({ signupWindow: false, loginWindow: true });
  // }

  const handleSubmit = () => {
    if (!userInput) return;
    const { value } = userInput;

    for (let i = 0; i < players.length; i++) {
      if (value === players[i].name) setAttempts([...attempts, players[i]]);
    }

    setUserInput(null);

    // check if the user has won or lost
    if (playerOfTheDay === attempts[attempts.length - 1]) {
      setStats({ ...stats, wins: stats.wins + 1 });
      setWinner(true);
      confetti({ particleCount: 300, spread: 180 });
    } else if (attempts.length === 8) {
      setStats({ ...stats, losses: stats.losses + 1 });
      setWinner(false);
    }
  };

  return (
    <div>
      <Dropdown
        handleUserInput={handleUserInput}
        userInput={userInput}
        handleSubmit={handleSubmit}
      ></Dropdown>
    </div>
    // <div className='App'>
    //   <header className='App-header'>
    //     <p className='guesses'>Guesses: {attempts.length} of 8</p>
    //     <Menu_Bar instructions={instructions} stats={statsWindow} />
    //     <div id='skeleton'>
    //       <img src={image} alt='Greg Bird' className='birdy'></img>
    //       <h1>Greg Bird-le</h1>
    //       <Popup
    //         winner={winner}
    //         image={currentPlayer.image}
    //         name={currentPlayer.name}
    //         playAgain={playAgain}
    //         length={attempts.length}
    //       />
    //       <Instructions instructions={instructions} />
    //       <Stats stats={statsWindow} wins={stats.wins} losses={stats.losses} />
    //     </div>
    //     <Dropdown handleUserInput={handleUserInput}></Dropdown>
    //     {/* <Input onInput={handleInput} onClick={handleSubmit} /> */}
    //     <button type='submit' className='btn-submit' onClick={handleSubmit}>
    //       Submit
    //     </button>
    //     <AttemptsContainer attempts={attempts} targetPlayer={currentPlayer} />
    //   </header>
    // </div>
  );
};

export default App;
