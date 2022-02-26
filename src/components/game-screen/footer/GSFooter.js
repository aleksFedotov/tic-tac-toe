import React from 'react';

import { FooterWrapper, ScoreCard } from './GSFooterStyles';

const GSFooter = () => {
  return (
    <FooterWrapper>
      <ScoreCard bgColor="light-blue">
        <h3>X (you)</h3>
        <p>14</p>
      </ScoreCard>
      <ScoreCard bgColor="silver">
        <h3>ties</h3>
        <p>32</p>
      </ScoreCard>
      <ScoreCard bgColor="light-yellow">
        <h3>O (cpu)</h3>
        <p>11</p>
      </ScoreCard>
    </FooterWrapper>
  );
};

export default GSFooter;
