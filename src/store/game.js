import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  turn: 'x',
  board: ['', '', '', '', '', '', '', '', ''],
  score: {
    o: 0,
    ties: 0,
    x: 0,
  },
  isModalOpened: false,
  winner: '',
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
      state.board[action.payload.index] = action.payload.turn;
    },

    cleanBoard(state) {
      state.board = ['', '', '', '', '', '', '', '', ''];
      state.turn = 'x';
    },

    toggleModal(state) {
      state.isModalOpened = !state.isModalOpened;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
