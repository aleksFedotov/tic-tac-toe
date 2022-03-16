import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  isModalOpened: 'false',
  winner: null,
  winnerCombo: [],
  isCpuTurn: false,
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
    },
    setWinner(state, action) {
      state.winner = action.payload.winner;
      state.winnerCombo = action.payload.winnerCombo;
    },

    resetWinner(state) {
      state.winner = null;
      state.winnerCombo = [];
    },

    cleanBoard(state) {
      state.winnerCombo = [];
      state.currentBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      state.turn = 'x';
      state.isCpuTurn = false;
    },

    toggleModal(state) {
      state.isModalOpened = !state.isModalOpened;
    },

    updateScore(state, action) {
      state.score[action.payload] += 1;
    },

    cleanScore(state) {
      state.score = {
        o: 0,
        ties: 0,
        x: 0,
      };
    },
    setFirstPlayerChoice(state, action) {
      state.firstPlayerChoice = action.payload;
      state.playersChoices = {
        p1: action.payload,
        p2: action.payload === 'x' ? 'o' : 'x',
      };
    },

    setGameMode(state, action) {
      state.gameMode = action.payload;
    },
    startNewGame(state) {
      state.gameIsRunning = true;
    },
    setDifficalty(state, action) {
      state.gameDiffculty = action.payload;
    },

    resetDifficalty(state) {
      state.gameDiffculty = null;
    },
    resetGame(state) {
      state.gameIsRunning = false;
      state.gameMode = '';
      state.firstPlayerChoice = 'x';
      state.playersChoices = {
        p1: 'x',
        p2: 'o',
      };
    },
    toggleCpuTurt(state) {
      state.isCpuTurn = !state.isCpuTurn;
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
