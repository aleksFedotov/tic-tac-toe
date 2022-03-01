import React from 'react';
import { useDispatch } from 'react-redux';

import { gameActions } from '../../../store/game';

import {
  DifficultyList,
  DifficultyItem,
  Header,
} from './DifficaltyGameModalContentStyles';

const DifficaltyGameModalContent = () => {
  const dispatch = useDispatch();

  const selectDifficultyHandler = (e) => {
    dispatch(gameActions.setGameMode('pvcpu'));

    dispatch(gameActions.toggleModal());

    dispatch(gameActions.setDifficalty(e.target.dataset.difficulty));
    setTimeout(() => {
      dispatch(gameActions.startNewGame());
    }, 500);
  };
  return (
    <>
      <Header>Select difficulty</Header>
      <DifficultyList>
        <DifficultyItem
          data-difficulty="ease"
          onClick={selectDifficultyHandler}
        >
          ease
        </DifficultyItem>
        <DifficultyItem
          data-difficulty="normal"
          onClick={selectDifficultyHandler}
        >
          normal
        </DifficultyItem>
        <DifficultyItem
          data-difficulty="hard"
          onClick={selectDifficultyHandler}
        >
          hard
        </DifficultyItem>
      </DifficultyList>
    </>
  );
};

export default DifficaltyGameModalContent;
