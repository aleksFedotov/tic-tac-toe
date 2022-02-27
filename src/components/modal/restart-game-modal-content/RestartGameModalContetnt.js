import React from 'react';

import { useDispatch } from 'react-redux';

import { gameActions } from '../../../store/game';
import { setupActions } from '../../../store/setup';

import {
  RestartHeader,
  Button,
  ButtonWrapper,
} from './RestartGameModalContetntStyles';

const RestartGameModalContetnt = () => {
  const dispatch = useDispatch();

  const cancelHandler = () => {
    dispatch(gameActions.toggleModal());
  };

  const restartHandler = () => {
    dispatch(gameActions.toggleModal());
    dispatch(setupActions.resetGame());
    dispatch(gameActions.cleanBoard());
  };
  return (
    <>
      <RestartHeader>restart game?</RestartHeader>
      <ButtonWrapper>
        <Button type="cancel" onClick={cancelHandler}>
          no, cancel
        </Button>
        <Button type="restart" onClick={restartHandler}>
          yes, restart
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default RestartGameModalContetnt;
