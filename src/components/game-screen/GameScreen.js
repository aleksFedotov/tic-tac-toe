import React from 'react';
import { GameScreenWrapper } from './GameScreenStyles';
import GSHeader from './header/GSHeader';
import GSFooter from './footer/GSFooter';

const GameScreen = () => {
  return (
    <GameScreenWrapper>
      <GSHeader />
      <GSFooter />
    </GameScreenWrapper>
  );
};

export default GameScreen;
