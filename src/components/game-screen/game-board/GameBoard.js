import React from 'react';
import { useSelector } from 'react-redux';

import BoardCell from './board-cell/BoardCell';

import { GameBoardWrapper } from './GameBoardStyles';

const GameBoard = () => {
  const game = useSelector((state) => state.game);

  const { board } = game;

  return (
    <GameBoardWrapper>
      {board.map((mark, ind) => (
        <BoardCell key={ind} mark={mark} index={ind} />
      ))}
    </GameBoardWrapper>
  );
};

export default GameBoard;
