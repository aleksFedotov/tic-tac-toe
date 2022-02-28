import { createSlice } from '@reduxjs/toolkit';

import { setupActions } from './setup';

const initialState = {
  turn: 'x',
  currentBoard: [null, null, null, null, null, null, null, null, null],
  score: {
    o: 0,
    ties: 0,
    x: 0,
  },
  isModalOpened: false,
  winner: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeTurn(state) {
      if (state.turn === 'x') {
        state.turn = 'o';
      } else {
        state.turn = 'x';
      }
    },
    updateBoard(state, action) {
      state.currentBoard[action.payload.index] = action.payload.turn;
    },

    setWinner(state, action) {
      state.winner = action.payload;
    },

    cleanBoard(state) {
      state.currentBoard = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ];
      state.turn = 'x';
      state.winner = null;
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
      state.winner = null;
    },
  },
});

export const quitGame = () => {
  return (dispatch) => {
    dispatch(gameActions.toggleModal());
    dispatch(setupActions.resetGame());
    dispatch(gameActions.cleanBoard());
    dispatch(gameActions.cleanScore());
  };
};

export const restartGame = () => {
  return (dispatch) => {
    dispatch(gameActions.toggleModal());
    dispatch(setupActions.resetGame());
    dispatch(gameActions.cleanBoard());
  };
};

export const gameActions = gameSlice.actions;

export default gameSlice;
