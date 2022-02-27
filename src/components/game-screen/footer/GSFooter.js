import React from 'react';

import { useSelector } from 'react-redux';

import { FooterWrapper, ScoreCard } from './GSFooterStyles';

const GSFooter = () => {
  const game = useSelector((state) => state.game);

  const { score } = game;
  return (
    <FooterWrapper>
      <ScoreCard bgColor="light-blue" data-testid="score-x">
        <h3>X (you)</h3>
        <p>{score.o}</p>
      </ScoreCard>
      <ScoreCard bgColor="silver">
        <h3>ties</h3>
        <p>{score.ties}</p>
      </ScoreCard>
      <ScoreCard bgColor="light-yellow" data-testid="score-o">
        <h3>O (cpu)</h3>
        <p>{score.x}</p>
      </ScoreCard>
    </FooterWrapper>
  );
};

export default GSFooter;
