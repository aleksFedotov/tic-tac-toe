import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../../../store/game';

import { ReactComponent as IconX } from '../../../../assets/icon-x.svg';
import { ReactComponent as IconO } from '../../../../assets/icon-o.svg';
import { ReactComponent as IconXOutline } from '../../../../assets/icon-x-outline.svg';
import { ReactComponent as IconOOutline } from '../../../../assets/icon-o-outline.svg';

import { Cell } from './BoardCellStyles';

const BoardCell = ({ mark, index, isWinCell }) => {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const { turn, isCpuTurn } = game;

  const cellClickHandler = () => {
    dispatch(gameActions.updateBoard({ index, turn }));
  };

  let bgColor = 'var(--color-semi-dark-navy)';
  if (isWinCell) {
    bgColor =
      mark === 'x' ? 'var(--color-light-blue)' : 'var(--color-light-yellow)';
  }

  let winCellIcon = isWinCell ? 'winIcon' : '';

  if (mark === 'x') {
    return (
      <Cell isMarked={true} bg={bgColor} isWinCell={isWinCell}>
        <IconX className={`markSelected ${winCellIcon}`} />
      </Cell>
    );
  } else if (mark === 'o') {
    return (
      <Cell isMarked={true} bg={bgColor} isWinCell={isWinCell}>
        <IconO className={`markSelected ${winCellIcon}`} />
      </Cell>
    );
  }

  return (
    <Cell
      bg={bgColor}
      isMarked={false}
      onClick={isCpuTurn ? () => {} : cellClickHandler}
      data-testid={`cell-${index}`}
      data-cputurn={isCpuTurn}
    >
      {turn === 'x' ? (
        <IconXOutline className="markHover" />
      ) : (
        <IconOOutline className="markHover" />
      )}
    </Cell>
  );
};

export default BoardCell;
