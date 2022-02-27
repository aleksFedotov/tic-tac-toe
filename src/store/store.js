import { configureStore } from '@reduxjs/toolkit';

import setupSlice from './setup';
import gameSlice from './game';

const store = configureStore({
  reducer: { setup: setupSlice.reducer, game: gameSlice.reducer },
});

export default store;
