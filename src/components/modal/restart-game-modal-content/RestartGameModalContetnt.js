import React from 'react';

import { useDispatch } from 'react-redux';

import { gameActions } from '../../../store/game';
import { quitGame } from '../../../store/game';

import { RestartHeader } from './RestartGameModalContetntStyles';
import { ButtonWrapper, Button } from '../ModalStyles';

const RestartGameModalContetnt = () => {
  const dispatch = useDispatch();

  const cancelHandler = () => {
    dispatch(gameActions.toggleModal());
  };

  const restartHandler = () => {
    dispatch(quitGame());
  };
  return (
    <>
      <RestartHeader>restart game?</RestartHeader>
      <ButtonWrapper>
        <Button type="silver" onClick={cancelHandler}>
          no, cancel
        </Button>
        <Button type="yellow" onClick={restartHandler}>
          yes, restart
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default RestartGameModalContetnt;
