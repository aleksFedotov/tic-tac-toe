import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../../../store/game';

import { ReactComponent as IconX } from '../../../../assets/icon-x.svg';
import { ReactComponent as IconO } from '../../../../assets/icon-o.svg';
import { ReactComponent as IconXOutline } from '../../../../assets/icon-x-outline.svg';
import { ReactComponent as IconOOutline } from '../../../../assets/icon-o-outline.svg';

import { Cell } from './BoardCellStyles';

const BoardCell = ({ mark, index }) => {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const { turn } = game;

  const cellClickHandler = () => {
    dispatch(gameActions.updateBoard({ index, turn }));
    dispatch(gameActions.changeTurn());
  };

  if (mark === 'x') {
    return (
      <Cell isMarked={true}>
        <IconX className="markSelected" />
      </Cell>
    );
  } else if (mark === 'o') {
    return (
      <Cell isMarked={true}>
        <IconO className="markSelected" />
      </Cell>
    );
  }

  return (
    <Cell
      isMarked={false}
      onClick={cellClickHandler}
      data-testid={`card-${index}`}
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
