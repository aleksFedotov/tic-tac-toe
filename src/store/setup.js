import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstPlayerChoice: 'x',
  gameMode: '',
  gameIsRunning: false,
};

const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
    setFirstPlayerChoice(state, action) {
      state.firstPlayerChoice = action.payload;
    },

    setGameMode(state, action) {
      state.gameMode = action.payload;
    },
    startNewGame(state) {
      state.gameIsRunning = true;
    },

    resetGame(state) {
      state.gameIsRunning = false;
      state.gameMode = '';
      state.firstPlayerChoice = 'x';
    },
  },
});

export const setupActions = setupSlice.actions;

export default setupSlice;
