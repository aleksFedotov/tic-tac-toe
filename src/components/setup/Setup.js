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

  return (
    <SetupWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <MarkPicker>
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
      <ModeButton mode="pvcpu" onClick={selectModeHandler} data-mode="pvcpu">
        new game (vs cpu)
      </ModeButton>
      <ModeButton mode="pvp" onClick={selectModeHandler} data-mode="pvp">
        new game (vs player)
      </ModeButton>
    </SetupWrapper>
  );
};

export default Setup;
