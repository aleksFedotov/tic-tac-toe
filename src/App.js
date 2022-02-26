import { Fragment } from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Setup from './components/setup/Setup';
import GameScreen from './components/game-screen/GameScreen';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <GameScreen />
    </Fragment>
  );
}

export default App;
