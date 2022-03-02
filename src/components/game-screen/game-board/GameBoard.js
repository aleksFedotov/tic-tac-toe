import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { gameActions } from '../../../store/game';

import BoardCell from './board-cell/BoardCell';

import { GameBoardWrapper } from './GameBoardStyles';

const checkLine = (a, b, c) => {
  if (typeof a == 'number' || typeof b == 'number' || typeof c == 'number')
    return false;
  return a === b && b === c;
};
const checkForWinner = (board) => {
  //columns
  for (let i = 0; i < 3; i++) {
    if (checkLine(board[i], board[i + 3], board[i + 6]))
      return {
        winner: board[i],
        winnerCombo: [i, i + 3, i + 6],
      };
  }
  //rows
  for (let i = 0; i < 9; i += 3) {
    if (checkLine(board[i], board[i + 1], board[i + 2]))
      return {
        winner: board[i],
        winnerCombo: [i, i + 1, i + 2],
      };
  }
  //diagonal
  if (checkLine(board[0], board[4], board[8]))
    return { winner: board[0], winnerCombo: [0, 4, 8] };
  if (checkLine(board[2], board[4], board[6]))
    return { winner: board[2], winnerCombo: [2, 4, 6] };

  if (!board.filter((cell) => typeof cell == 'number').length) {
    return { winner: 'ties', winnerCombo: [] };
  }
  return false;
};

// get all indexes of  epmty cells
const emptyIndexies = (board) => {
  return board.filter((item) => typeof item === 'number');
};

// random easey mode

const cpuMove = (board, humanMark, cpuMark, difficulty) => {
  // checking if ai or human wins
  const isPlayerWinning = (board, player) => {
    return checkForWinner(board).winner === player;
  };

  // minmax algorithm -- hard mode

  const minmax = (newBoard, player) => {
    //add one to function calls

    //available spots
    const availSpots = emptyIndexies(newBoard);

    // checks for the terminal states such as win, lose, and tie and returning a value accordingly
    if (isPlayerWinning(newBoard, humanMark)) {
      return { score: -10 };
    } else if (isPlayerWinning(newBoard, cpuMark)) {
      return { score: 10 };
    } else if (availSpots.length === 0) {
      return { score: 0 };
    }

    // an array to collect all the objects
    const moves = [];

    // loop through available spots
    for (let i = 0; i < availSpots.length; i++) {
      //create an object for each and store the index of that spot that was stored as a number in the object's index key
      const move = {};
      move.index = newBoard[availSpots[i]];

      // set the empty spot to the current player
      newBoard[availSpots[i]] = player;

      //if collect the score resulted from calling minimax on the opponent of the current player
      if (player === cpuMark) {
        const result = minmax(newBoard, humanMark);
        move.score = result.score;
      } else {
        const result = minmax(newBoard, cpuMark);
        move.score = result.score;
      }

      //reset the spot to empty
      newBoard[availSpots[i]] = move.index;

      // push the object to the array
      moves.push(move);
    }

    // if it is the computer's turn loop over the moves and choose the move with the highest score
    let bestMove;
    if (player === cpuMark) {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      // else loop over the moves and choose the move with the lowest score
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    // return the chosen move (object) from the array to the higher depth

    return moves[bestMove];
  };

  const EasyMode = (newBoard) => {
    const availSpots = emptyIndexies(newBoard);
    const random = Math.floor(Math.random() * availSpots.length);

    return { index: availSpots[random] };
  };

  const NormalMode = () => {
    const random = Math.floor(Math.random() * 2);
    if (random) {
      return minmax(board, cpuMark);
    } else {
      return EasyMode(board);
    }
  };

  if (difficulty === 'ease') {
    return EasyMode(board);
  } else if (difficulty === 'normal') {
    return NormalMode();
  } else if (difficulty === 'hard') {
    return minmax(board, cpuMark);
  }
};

const GameBoard = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);

  const {
    currentBoard,
    turn,
    winnerCombo,
    playersChoices,
    gameMode,
    gameDiffculty,
  } = game;

  useEffect(() => {
    let updateWinner = checkForWinner(currentBoard);

    if (updateWinner) {
      dispatch(
        gameActions.setWinner({
          winner: updateWinner.winner,
          winnerCombo: updateWinner.winnerCombo,
        })
      );

      dispatch(gameActions.updateScore(updateWinner.winner));

      let timerModal = setTimeout(
        () => dispatch(gameActions.toggleModal()),
        1000
      );

      return () => {
        clearTimeout(timerModal);
      };
    } else if (playersChoices.p1 !== turn && gameMode === 'pvcpu') {
      dispatch(gameActions.toggleCpuTurt());
      const player = playersChoices.p1;
      const cpu = playersChoices.p1 === 'x' ? 'o' : 'x';
      const board = [...currentBoard];

      const cpuNextmove = cpuMove(board, player, cpu, gameDiffculty).index;

      let timer = setTimeout(() => {
        dispatch(gameActions.updateBoard({ turn, index: cpuNextmove }));
        dispatch(gameActions.toggleCpuTurt());
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [
    turn,
    gameMode,
    playersChoices.p1,
    currentBoard,
    dispatch,
    gameDiffculty,
  ]);

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
        <BoardCell
          key={ind}
          mark={mark}
          index={ind}
          isWinCell={winnerCombo.includes(ind)}
        />
      ))}
    </GameBoardWrapper>
  );
};

export default GameBoard;
