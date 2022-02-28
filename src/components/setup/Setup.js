import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as IconX } from '../../assets/icon-x.svg';
import { ReactComponent as IconO } from '../../assets/icon-o.svg';

import { useSelector, useDispatch } from 'react-redux';

import { setupActions } from '../../store/setup';

import {
  SetupWrapper,
  LogoWrapper,
  MarkPicker,
  Header,
  MarkWrapper,
  Mark,
  Info,
  ModeButton,
} from './SetupStyles';

const Setup = () => {
  const setup = useSelector((state) => state.setup);
  const dispatch = useDispatch();

  const { firstPlayerChoice } = setup;

  const selectModeHandler = (e) => {
    dispatch(setupActions.setGameMode(e.target.dataset.mode));
    dispatch(setupActions.startNewGame());
  };

  const logoMarkVariants = {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -200, transition: { duration: 1 } },
  };

  const pvcpuVariants = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: -200, transition: { duration: 1 } },
  };

  const pvpVariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 200, transition: { duration: 1 } },
  };

  return (
    <SetupWrapper>
      <LogoWrapper
        initial="initial"
        animate="animate"
        exit="exit"
        variants={logoMarkVariants}
      >
        <Logo />
      </LogoWrapper>
      <MarkPicker
        initial="initial"
        animate="animate"
        exit="exit"
        variants={logoMarkVariants}
      >
        <Header>pick player 1's mark</Header>
        <MarkWrapper>
          <Mark
            firstPlayerChoice={firstPlayerChoice === 'x'}
            title="x mark"
            onClick={() => {
              dispatch(setupActions.setFirstPlayerChoice('x'));
            }}
            aria-checked={firstPlayerChoice === 'x'}
          >
            <IconX className="mark" />
          </Mark>
          <Mark
            firstPlayerChoice={firstPlayerChoice === 'o'}
            title="o mark"
            onClick={() => {
              dispatch(setupActions.setFirstPlayerChoice('o'));
            }}
            aria-checked={firstPlayerChoice === 'o'}
          >
            <IconO className="mark" />
          </Mark>
        </MarkWrapper>
        <Info>remember: x goes first</Info>
      </MarkPicker>
      <ModeButton
        mode="pvcpu"
        onClick={selectModeHandler}
        data-mode="pvcpu"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pvcpuVariants}
      >
        new game (vs cpu)
      </ModeButton>
      <ModeButton
        mode="pvp"
        onClick={selectModeHandler}
        data-mode="pvp"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pvpVariants}
      >
        new game (vs player)
      </ModeButton>
    </SetupWrapper>
  );
};

export default Setup;
