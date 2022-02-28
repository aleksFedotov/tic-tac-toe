import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { gameActions } from '../../../store/game';

import BoardCell from './board-cell/BoardCell';

import { GameBoardWrapper } from './GameBoardStyles';

const checkLine = (a, b, c) => {
  if (a === null || b === null || c === null) return false;
  return a === b && b === c;
};
const checkForWinner = (board) => {
  //columns
  for (let i = 0; i < 3; i++) {
    if (checkLine(board[i], board[i + 3], board[i + 6])) return board[i];
  }
  //rows
  for (let i = 0; i < 9; i += 3) {
    if (checkLine(board[i], board[i + 1], board[i + 2])) return board[i];
  }
  //diagonal
  if (checkLine(board[0], board[4], board[8])) return board[0];
  if (checkLine(board[2], board[4], board[6])) return board[2];

  if (!board.includes(null)) {
    return 'ties';
  }
  return false;
};

// get all indexes of  epmty cells
const emptyIndexies = (board) => {
  return board
    .map((cell, ind) => (cell === null ? ind : ''))
    .filter((item) => item !== '');
};

const GameBoard = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const setup = useSelector((state) => state.setup);

  const { currentBoard, turn } = game;
  const { playersChoices, gameMode } = setup;

  //Checking if it is cpu turn
  useEffect(() => {
    if (playersChoices.p1 !== turn && gameMode === 'pvcpu') {
      const avalCells = emptyIndexies(currentBoard);
      const random = Math.floor(Math.random() * avalCells.length);
      const move = avalCells[random];
      dispatch(gameActions.updateBoard({ index: move, turn }));
      dispatch(gameActions.changeTurn());
    }
  }, [turn, gameMode, playersChoices.p1, currentBoard, dispatch]);

  // Whinner check

  useEffect(() => {
    let updateWinner = checkForWinner(currentBoard);

    if (updateWinner) {
      dispatch(gameActions.setWinner(updateWinner));
      dispatch(gameActions.updateScore(updateWinner));
      dispatch(gameActions.toggleModal());
      return;
    }
  }, [currentBoard, dispatch]);

  // Variants for framer motion
  const BoardVariants = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: -200, transition: { duration: 1 } },
  };

  return (
    <GameBoardWrapper
      initial="initial"
      animate="animate"
      exit="exit"
      variants={BoardVariants}
    >
      {currentBoard.map((mark, ind) => (
        <BoardCell key={ind} mark={mark} index={ind} />
      ))}
    </GameBoardWrapper>
  );
};

export default GameBoard;
