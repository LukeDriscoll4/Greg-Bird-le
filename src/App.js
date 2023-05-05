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
  const [instructionsWindow, setInstructionsWindow] = useState(false);
  const [statsWindow, setStatsWindow] = useState(false);
  const [stats, setStats] = useState({ wins: 0, losses: 0 });
  const [userInput, setUserInput] = useState(null);

  // logic for closing modals (instructions, stats, etc.)
  document.addEventListener('click', closeMenu);

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

  const handleUserInput = (selectedOption) => {
    setUserInput(selectedOption);
  };

  const playAgain = () => {
    const randIdx = Math.floor(Math.random() * players.length);
    setPlayerOfTheDay(players[randIdx]);
    setAttempts([]);
    setWinner(null);
  };

  const closeMenu = (e) => {
    if (!e.target.closest('.icons')) {
      setInstructionsWindow(false);
      setStatsWindow(false);
    }
  };

  const handleSubmit = () => {
    if (!userInput) return;
    const { value } = userInput;
    const attemptNumber = attempts.length + 1;

    for (let i = 0; i < players.length; i++) {
      if (value === players[i].name) setAttempts([...attempts, players[i]]);
    }

    setUserInput(null);

    // check if the user has won or lost
    if (playerOfTheDay.name === value) {
      setStats({ ...stats, wins: stats.wins + 1 });
      setWinner(true);
      confetti({ particleCount: 300, spread: 180 });
    } else if (attemptNumber === 8) {
      setStats({ ...stats, losses: stats.losses + 1 });
      setWinner(false);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p className='guesses'>Guesses: {attempts.length} of 8</p>
        <Menu_Bar
          setInstructionsWindow={setInstructionsWindow}
          setStatsWindow={setStatsWindow}
        />
        <div id='skeleton'>
          <img src={image} alt='Greg Bird' className='birdy'></img>
          <h1>Greg Bird-le</h1>
          <Popup
            winner={winner}
            image={playerOfTheDay.image}
            name={playerOfTheDay.name}
            playAgain={playAgain}
          />
          <Instructions instructionsWindow={instructionsWindow} />
          <Stats
            statsWindow={statsWindow}
            wins={stats.wins}
            losses={stats.losses}
          />
        </div>
        <Dropdown
          handleUserInput={handleUserInput}
          userInput={userInput}
          handleSubmit={handleSubmit}
        ></Dropdown>
        <AttemptsContainer attempts={attempts} targetPlayer={playerOfTheDay} />
      </header>
    </div>
  );
};

export default App;
