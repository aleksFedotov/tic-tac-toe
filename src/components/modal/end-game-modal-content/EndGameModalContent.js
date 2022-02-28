import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as MarkX } from '../../../assets/icon-x.svg';
import { ReactComponent as MarkO } from '../../../assets/icon-o.svg';

import { quitGame } from '../../../store/game';

import { gameActions } from '../../../store/game';

import {
  ResultInfo,
  ResultHeaderWrapper,
  ResultHeader,
} from './EndGameModalContentStyles';

import { ButtonWrapper, Button } from '../ModalStyles';

const EndGameModalContent = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const setup = useSelector((state) => state.setup);

  const { winner } = game;
  const { playersChoices, gameMode } = setup;

  const quitHandler = () => {
    dispatch(quitGame());
  };

  const nextRoundHandler = () => {
    dispatch(gameActions.toggleModal());
    dispatch(gameActions.cleanBoard());
  };

  // Getting color for header
  let headerColor = '--color-light-blue';

  if (winner === 'o') {
    headerColor = '--color-light-yellow';
  } else if (winner === 'ties') {
    headerColor = '--color-silver';
  }

  // Getting result info text
  let resultInfoText;
  if (winner !== 'ties' && gameMode === 'pvp') {
    resultInfoText =
      playersChoices.p1 === winner ? 'player 1 wins!' : 'player 2 wins!';
  }
  if (winner !== 'ties' && gameMode === 'pvcpu') {
    resultInfoText =
      playersChoices.p1 === winner ? 'you won' : 'oh no, you lost...';
  }

  return (
    <>
      {resultInfoText && <ResultInfo>{resultInfoText}</ResultInfo>}
      <ResultHeaderWrapper>
        {winner === 'x' && <MarkX />}
        {winner === 'o' && <MarkO />}
        <ResultHeader color={headerColor}>
          {(winner === 'x' || winner === 'o') && 'takes the round'}
          {winner === 'ties' && 'round tied'}
        </ResultHeader>
      </ResultHeaderWrapper>
      <ButtonWrapper>
        <Button type="silver" onClick={quitHandler}>
          quit
        </Button>
        <Button type="yellow" onClick={nextRoundHandler}>
          next round
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default EndGameModalContent;
