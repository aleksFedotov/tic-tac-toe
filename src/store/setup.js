import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstPlayerChoice: 'x',
  gameMode: '',
  gameIsRunning: false,
  playersChoices: {
    p1: 'x',
    p2: 'o',
  },
};

const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
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

    resetGame(state) {
      state.gameIsRunning = false;
      state.gameMode = '';
      state.firstPlayerChoice = 'x';
      state.playersChoices = {
        p1: 'x',
        p2: 'o',
      };
    },
  },
});

export const setupActions = setupSlice.actions;

export default setupSlice;
