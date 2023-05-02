import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attempts: [],
      currentPlayer: {},
      winner: null,
      instructions: false,
      statsWindow: false,
      stats: JSON.parse(window.localStorage.getItem('stats')),
      loginWindow: true,
      signupWindow: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.dropdownClick = this.dropdownClick.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.instructions = this.instructions.bind(this);
    this.statsOpen = this.statsOpen.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.guestPlayer = this.guestPlayer.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.backToLogin = this.backToLogin.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.closeMenu);
    const randIdx = Math.floor(Math.random() * players.length);
    const currPlayer = players[randIdx];
    this.setState((s) => ({ currentPlayer: currPlayer }));
  }

  componentDidUpdate() {
    window.localStorage.setItem('stats', JSON.stringify(this.state.stats));
    if (
      this.state.currentPlayer ==
        this.state.attempts[this.state.attempts.length - 1] &&
      this.state.winner === null
    ) {
      this.setState(({ stats }) => ({
        winner: true,
        stats: { ...stats, wins: stats.wins + 1 },
      }));
      confetti({ particleCount: 300, spread: 180 });
    } else if (this.state.attempts.length === 8 && this.state.winner === null) {
      this.setState(({ stats }) => ({
        winner: false,
        stats: { ...stats, losses: stats.losses + 1 },
      }));
    }
  }

  removeDropdown() {
    const listElement = document.getElementById('player-list');
    if (listElement) listElement.remove();
  }

  dropdownClick(e) {
    e.preventDefault();
    const button = e.target;
    const userInput = document.getElementById('player-input');
    userInput.value = button.innerHTML;
    this.removeDropdown();
  }

  createPlayerDropdown(list) {
    const listElement = document.createElement('ul');
    listElement.id = 'player-list';
    listElement.className = 'player-list';
    list.forEach((player) => {
      const playerItem = document.createElement('li');
      const playerButton = document.createElement('button');
      playerButton.innerHTML = player;
      playerButton.addEventListener('click', this.dropdownClick);
      playerItem.appendChild(playerButton);
      listElement.appendChild(playerItem);
    });
    document.getElementById('playerlist-wrapper').appendChild(listElement);
  }

  handleInput() {
    this.removeDropdown();
    let playerNames = players.map((player) => player.name);
    const userInput = document.getElementById('player-input');
    const value = userInput.value.toLowerCase();
    if (value.length === 0) return;
    const filteredNames = [];
    playerNames.forEach((playerName) => {
      if (playerName.toLowerCase().includes(value))
        filteredNames.push(playerName);
    });
    this.createPlayerDropdown(filteredNames.sort());
  }

  playAgain(e) {
    e.preventDefault();
    const randIdx = Math.floor(Math.random() * players.length);
    const currPlayer = players[randIdx];
    this.setState({
      attempts: [],
      currentPlayer: currPlayer,
      winner: null,
    });
  }

  instructions(e) {
    e.preventDefault();
    this.setState({
      instructions: !this.state.instructions,
      winner: null,
      statsWindow: false,
    });
  }

  statsOpen(e) {
    e.preventDefault();
    this.setState({
      statsWindow: !this.state.statsWindow,
      instructions: false,
      winner: null,
    });
  }

  closeMenu(e) {
    if (!e.target.closest('.icons')) {
      this.setState({ instructions: false, statsWindow: false });
    }
  }

  login(e) {
    e.preventDefault();
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;
    axios
      .post('http://localhost:3000/users', {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data === null) {
          this.setState({ loginWindow: false, signupWindow: true });
        } else {
          this.setState({ loginWindow: false });
        }
      });
  }

  createAccount(e) {
    e.preventDefault();
    const username = document.querySelector('.new_username').value;
    const password = document.querySelector('.new_password').value;
    axios.post('http://localhost:3000/newusers', {
      username: username,
      password: password,
    });
    this.setState({ signupWindow: false });
  }

  guestPlayer(e) {
    e.preventDefault();
    this.setState({ loginWindow: false, signupWindow: false });
  }

  signup(e) {
    e.preventDefault();
    this.setState({ signupWindow: true, loginWindow: false });
  }

  backToLogin(e) {
    e.preventDefault();
    this.setState({ signupWindow: false, loginWindow: true });
  }

  handleClick(e) {
    e.preventDefault();
    const userInput = document.getElementById('player-input');
    const value = userInput.value.toLowerCase();
    if (!value) return;
    let playerObj;
    for (let i = 0; i < players.length; i++) {
      if (players[i].name.toLowerCase() === value) playerObj = players[i];
    }
    this.setState((s) => ({ attempts: [...s.attempts, playerObj] }));
    userInput.value = '';
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p className='guesses'>Guesses: {this.state.attempts.length} of 8</p>
          <Menu_Bar instructions={this.instructions} stats={this.statsOpen} />
          <div id='skeleton'>
            <img src={image} alt='Greg Bird' className='birdy'></img>
            <h1>Greg Bird-le</h1>
            <Popup
              winner={this.state.winner}
              image={this.state.currentPlayer.image}
              name={this.state.currentPlayer.name}
              playAgain={this.playAgain}
              length={this.state.attempts.length}
            />
            <Instructions instructions={this.state.instructions} />
            <Stats
              stats={this.state.statsWindow}
              // wins={this.state.stats.wins}
              // losses={this.state.stats.losses}
            />
            <Login
              loginWindow={this.state.loginWindow}
              guest={this.guestPlayer}
              login={this.login}
              signup={this.signup}
            />
            <Signup
              signupWindow={this.state.signupWindow}
              createAccount={this.createAccount}
              backToLogin={this.backToLogin}
            />
          </div>
          <Input onInput={this.handleInput} onClick={this.handleClick} />
          <AttemptsContainer
            attempts={this.state.attempts}
            targetPlayer={this.state.currentPlayer}
          />
        </header>
      </div>
    );
  }
}

export default App;
