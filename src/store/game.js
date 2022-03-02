import { createSlice } from '@reduxjs/toolkit';

const gameSettingsTicTacToe = localStorage.getItem('gameSettingsTicTacToe');

if (!gameSettingsTicTacToe) {
  const settings = {
    firstPlayerChoice: 'x',
    gameMode: '',
    gameDiffculty: null,
    gameIsRunning: false,
    playersChoices: {
      p1: 'x',
      p2: 'o',
    },
    turn: 'x',
    currentBoard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    score: {
      o: 0,
      ties: 0,
      x: 0,
    },
    isModalOpened: false,
    winner: null,
    winnerCombo: [],
    isCpuTurn: false,
  };
  localStorage.setItem('gameSettingsTicTacToe', JSON.stringify(settings));
}

let firstPlayerChoice = 'x';
let gameMode = '';
let gameDiffculty = null;
let gameIsRunning = false;
let playersChoices = {
  p1: 'x',
  p2: 'o',
};
let turn = 'x';
let currentBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let score = {
  o: 0,
  ties: 0,
  x: 0,
};

let isModalOpened = false;
let winner = null;
let winnerCombo = [];
let isCpuTurn = false;

if (gameSettingsTicTacToe !== null) {
  firstPlayerChoice = JSON.parse(gameSettingsTicTacToe).firstPlayerChoice;
  gameMode = JSON.parse(gameSettingsTicTacToe).gameMode;
  gameDiffculty = JSON.parse(gameSettingsTicTacToe).gameDiffculty;
  gameIsRunning = JSON.parse(gameSettingsTicTacToe).gameIsRunning;
  playersChoices = JSON.parse(gameSettingsTicTacToe).playersChoices;
  turn = JSON.parse(gameSettingsTicTacToe).turn;
  currentBoard = JSON.parse(gameSettingsTicTacToe).currentBoard;
  score = JSON.parse(gameSettingsTicTacToe).score;
  isModalOpened = JSON.parse(gameSettingsTicTacToe).isModalOpened;
  winner = JSON.parse(gameSettingsTicTacToe).winner;
  winnerCombo = JSON.parse(gameSettingsTicTacToe).winnerCombo;
  isCpuTurn = JSON.parse(gameSettingsTicTacToe).isCpuTurn;
}

const initialState = {
  firstPlayerChoice,
  gameMode,
  gameDiffculty,
  gameIsRunning,
  playersChoices,
  turn,
  currentBoard,
  score,
  isModalOpened,
  winner,
  winnerCombo,
  isCpuTurn,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateBoard(state, action) {
      state.currentBoard[action.payload.index] = action.payload.turn;
      if (state.turn === 'x') {
        state.turn = 'o';
      } else {
        state.turn = 'x';
      }

      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          turn: state.turn,
          currentBoard: state.currentBoard,
        })
      );
    },
    setWinner(state, action) {
      state.winner = action.payload.winner;
      state.winnerCombo = action.payload.winnerCombo;
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          winner: state.winner,
          winnerCombo: state.winnerCombo,
        })
      );
    },

    resetWinner(state) {
      state.winner = null;
      state.winnerCombo = [];
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          winner: state.winner,
          winnerCombo: state.winnerCombo,
        })
      );
    },

    cleanBoard(state) {
      state.winnerCombo = [];
      state.currentBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      state.turn = 'x';
      state.isCpuTurn = false;
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          turn: state.turn,
          currentBoard: state.currentBoard,
          winnerCombo: state.winnerCombo,
          isCpuTurn: state.isCpuTurn,
        })
      );
    },

    toggleModal(state) {
      state.isModalOpened = !state.isModalOpened;
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          isModalOpened: state.isModalOpened,
        })
      );
    },

    updateScore(state, action) {
      state.score[action.payload] += 1;
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          score: state.score,
        })
      );
    },

    cleanScore(state) {
      state.score = {
        o: 0,
        ties: 0,
        x: 0,
      };
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          score: state.score,
        })
      );
    },
    setFirstPlayerChoice(state, action) {
      state.firstPlayerChoice = action.payload;
      state.playersChoices = {
        p1: action.payload,
        p2: action.payload === 'x' ? 'o' : 'x',
      };

      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );

      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          firstPlayerChoice: state.firstPlayerChoice,

          playersChoices: state.playersChoices,
        })
      );
    },

    setGameMode(state, action) {
      state.gameMode = action.payload;
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          gameMode: state.gameMode,
        })
      );
    },
    startNewGame(state) {
      state.gameIsRunning = true;
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          gameIsRunning: state.gameIsRunning,
        })
      );
    },
    setDifficalty(state, action) {
      state.gameDiffculty = action.payload;
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          gameDiffculty: state.gameDiffculty,
        })
      );
    },

    resetDifficalty(state) {
      state.gameDiffculty = null;
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          gameDiffculty: state.gameDiffculty,
        })
      );
    },
    resetGame(state) {
      state.gameIsRunning = false;
      state.gameMode = '';
      state.firstPlayerChoice = 'x';
      state.playersChoices = {
        p1: 'x',
        p2: 'o',
      };

      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          firstPlayerChoice: state.firstPlayerChoice,
          gameMode: state.gameMode,
          gameIsRunning: state.gameIsRunning,
          playersChoices: state.playersChoices,
        })
      );
    },
    toggleCpuTurt(state) {
      state.isCpuTurn = !state.isCpuTurn;
      const curretntSettings = JSON.parse(
        localStorage.getItem('gameSettingsTicTacToe')
      );
      localStorage.setItem(
        'gameSettingsTicTacToe',
        JSON.stringify({
          ...curretntSettings,
          isCpuTurn: state.isCpuTurn,
        })
      );
    },
  },
});

export const quitGame = () => {
  return (dispatch) => {
    dispatch(gameActions.toggleModal());
    dispatch(gameActions.cleanBoard());
    dispatch(gameActions.cleanScore());

    setTimeout(() => {
      dispatch(gameActions.resetGame());
    }, 500);
  };
};

export const makeMove = (index, turn) => {
  return (dispatch) => {
    dispatch(gameActions.updateBoard({ turn, index }));
  };
};

export const gameActions = gameSlice.actions;

export default gameSlice;
