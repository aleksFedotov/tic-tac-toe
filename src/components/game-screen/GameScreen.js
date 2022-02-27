import React from 'react';
import { GameScreenWrapper } from './GameScreenStyles';
import GSHeader from './header/GSHeader';
import GSFooter from './footer/GSFooter';
import GameBoard from './game-board/GameBoard';

const GameScreen = () => {
  return (
    <GameScreenWrapper>
      <GSHeader />
      <GameBoard />
      <GSFooter />
    </GameScreenWrapper>
  );
};

export default GameScreen;
