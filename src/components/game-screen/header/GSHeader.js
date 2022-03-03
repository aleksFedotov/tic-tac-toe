import React from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { gameActions } from '../../../store/game';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as MarkO } from '../../../assets/icon-o.svg';
import { ReactComponent as MarkX } from '../../../assets/icon-x.svg';
import { ReactComponent as RestartIcon } from '../../../assets/icon-restart.svg';

import { HeaderWrapper, TurnDisplay, RestartBtn } from './GSHeaderStyles';

const GSHeader = () => {
  const game = useSelector((state) => state.game);

  const { turn } = game;

  const dispatch = useDispatch();

  const restartHandler = () => {
    dispatch(gameActions.toggleModal());
    dispatch(gameActions.resetWinner());
  };

  const headerVariants = {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -200, transition: { duration: 1 } },
  };

  return (
    <HeaderWrapper
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
    >
      <Logo />
      <TurnDisplay>
        {turn === 'x' ? (
          <MarkX className="markDisplay" />
        ) : (
          <MarkO className="markDisplay" />
        )}
        Turn
      </TurnDisplay>
      <RestartBtn onClick={restartHandler} data-testid="restart-btn">
        <RestartIcon />
      </RestartBtn>
    </HeaderWrapper>
  );
};

export default GSHeader;
