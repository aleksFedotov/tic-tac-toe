import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as IconX } from '../../assets/icon-x.svg';
import { ReactComponent as IconO } from '../../assets/icon-o.svg';

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
import { useState } from 'react';

const Setup = () => {
  const [firstPlayerChoice, setFirstPlayerChoice] = useState('x');

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
              setFirstPlayerChoice('x');
            }}
            aria-checked={firstPlayerChoice === 'x'}
          >
            <IconX className="mark" />
          </Mark>
          <Mark
            firstPlayerChoice={firstPlayerChoice === 'o'}
            title="o mark"
            onClick={() => {
              setFirstPlayerChoice('o');
            }}
            aria-checked={firstPlayerChoice === 'o'}
          >
            <IconO className="mark" />
          </Mark>
        </MarkWrapper>
        <Info>remember: x goes first</Info>
      </MarkPicker>
      <ModeButton mode="pvcpu">new game (vs cpu)</ModeButton>
      <ModeButton mode="pvp">new game (vs player)</ModeButton>
    </SetupWrapper>
  );
};

export default Setup;
