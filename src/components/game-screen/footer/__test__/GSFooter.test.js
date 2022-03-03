import { render, screen } from '../../../../test-utils';

import GSFooter from '../GSFooter';

describe('GS footer component testing', () => {
  const createComponent = (initialState) => {
    const options = { preloadedState: initialState };
    // render to the screen
    return render(<GSFooter />, options);
  };

  test('scores renders with right number', () => {
    createComponent({
      game: {
        score: {
          o: 1,
          ties: 2,
          x: 3,
        },
        playersChoices: {
          p1: 'x',
          p2: 'o',
        },

        gameMode: 'pvp',
      },
    });

    const x = screen.getByTestId('score-x');
    const ties = screen.getByTestId('score-ties');
    const o = screen.getByTestId('score-o');

    expect(x).toHaveTextContent('3');
    expect(ties).toHaveTextContent('2');
    expect(o).toHaveTextContent('1');
  });

  test('Players have right marks', () => {
    createComponent({
      game: {
        score: {
          o: 1,
          ties: 2,
          x: 3,
        },
        playersChoices: {
          p1: 'o',
          p2: 'x',
        },

        gameMode: 'pvp',
      },
    });

    const x = screen.getByTestId('score-x');
    const o = screen.getByTestId('score-o');

    expect(x).toHaveTextContent('p2');

    expect(o).toHaveTextContent('p1');
  });

  test('In cpu mode you and cpu score tables render', () => {
    createComponent({
      game: {
        score: {
          o: 1,
          ties: 2,
          x: 3,
        },
        playersChoices: {
          p1: 'o',
          p2: 'x',
        },

        gameMode: 'pvcpu',
      },
    });
    const x = screen.getByTestId('score-x');
    const o = screen.getByTestId('score-o');

    expect(x).toHaveTextContent('cpu');

    expect(o).toHaveTextContent('you');
  });
});
