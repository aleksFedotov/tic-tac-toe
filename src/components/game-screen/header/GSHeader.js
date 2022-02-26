import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as MarkO } from '../../../assets/icon-o.svg';
import { ReactComponent as MarkX } from '../../../assets/icon-x.svg';
import { ReactComponent as RestartIcon } from '../../../assets/icon-restart.svg';

import { HeaderWrapper, TurnDisplay, RestartBtn } from './GSHeaderStyles';

const GSHeader = () => {
  const [turn, setTurn] = useState('x');
  return (
    <HeaderWrapper>
      <Logo />
      <TurnDisplay>
        {turn === 'x' ? (
          <MarkX className="markDisplay" />
        ) : (
          <MarkO className="markDisplay" />
        )}
        Turn
      </TurnDisplay>
      <RestartBtn>
        <RestartIcon />
      </RestartBtn>
    </HeaderWrapper>
  );
};

export default GSHeader;
