// import { render, screen, fireEvent } from './test-utils';
import { render, screen, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';

describe('App testing', () => {
  // const createComponent = () => {
  //   // render to the screen
  //   return render(<App />, {
  //     game: {
  //       firstPlayerChoice: 'x',
  //       gameMode: '',
  //       gameDiffculty: null,
  //       gameIsRunning: false,
  //       playersChoices: {
  //         p1: 'x',
  //         p2: 'o',
  //       },
  //       turn: 'x',
  //       currentBoard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  //       score: {
  //         o: 0,
  //         ties: 0,
  //         x: 0,
  //       },
  //       isModalOpened: false,
  //       winner: null,
  //       winnerCombo: [],
  //       isCpuTurn: false,
  //     },
  //   });
  // };

  test('App renders', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('Game starts with default setting (p1 - x, p2- o)', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const pvpModeBtn = screen.getByText('new game (vs player)');

    fireEvent.click(pvpModeBtn);

    // const gameScreen = await screen.findByTestId('game-screen');

    // expect(gameScreen).toBeInTheDocument();

    // await new Promise((r) => setTimeout(r, 100));

    const gameScreen = screen.getByTestId('game-screen');
    const x = screen.getByTestId('score-x');
    const o = screen.getByTestId('score-o');

    expect(gameScreen).toBeInTheDocument();
    expect(x).toHaveTextContent('p1');
    expect(o).toHaveTextContent('p2');
  });

  test('Player one wins (x)', async () => {
    const overlay = document
      .createElement('div')
      .setAttribute('id', 'overlays');

    document.body.appendChild(overlay);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const cellOne = screen.getByTestId('cell-0');
    const cellTwo = screen.getByTestId('cell-1');
    const cellThree = screen.getByTestId('cell-2');
    const cellFour = screen.getByTestId('cell-3');
    const cellFive = screen.getByTestId('cell-4');

    fireEvent.click(cellOne);
    fireEvent.click(cellFour);
    fireEvent.click(cellTwo);
    fireEvent.click(cellFive);
    fireEvent.click(cellThree);

    const nextRoundBtn = await screen.findByText('next round');
  });
});
