import { Fragment } from 'react';
import GlobalStyles from './styles/GlobalStyles';

import { useSelector } from 'react-redux';

import Setup from './components/setup/Setup';
import GameScreen from './components/game-screen/GameScreen';
import Modal from './components/modal/Modal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const setup = useSelector((state) => state.setup);
  const game = useSelector((state) => state.game);

  const { gameIsRunning } = setup;
  const { isModalOpened } = game;

  return (
    <Fragment>
      <GlobalStyles />

      <AnimatePresence exitBeforeEnter>
        {gameIsRunning ? <GameScreen key="screen" /> : <Setup key="setup" />}
      </AnimatePresence>
      <AnimatePresence>
        {isModalOpened && <Modal key="modal" />}
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
