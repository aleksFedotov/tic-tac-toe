import { render, screen, fireEvent } from '../../../test-utils';

import Setup from '../Setup';

describe('Setup component testing', () => {
  const createComponent = (initialState) => {
    const options = { preloadedState: initialState };
    // render to the screen
    return render(<Setup />, options);
  };

  test('Render Setup component', () => {
    createComponent({
      setup: {
        firstPlayerChoice: 'x',
        gameMode: '',
        gameIsRunning: false,
      },
    });
  });

  test('X is default choice for mark', () => {
    createComponent({
      setup: {
        firstPlayerChoice: 'x',
        gameMode: '',
        gameIsRunning: false,
      },
    });
    const markX = screen.getByTitle('x mark');
    const markO = screen.getByTitle('o mark');
    expect(markX).toHaveAttribute('aria-checked', 'true');
    expect(markO).toHaveAttribute('aria-checked', 'false');
  });

  test('Changing selected mark to O after pressing button', () => {
    createComponent({
      setup: {
        firstPlayerChoice: 'x',
        gameMode: '',
        gameIsRunning: false,
      },
    });
    const markX = screen.getByTitle('x mark');
    const markO = screen.getByTitle('o mark');
    expect(markX).toHaveAttribute('aria-checked', 'true');
    expect(markO).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(markO);
    expect(markX).toHaveAttribute('aria-checked', 'false');
    expect(markO).toHaveAttribute('aria-checked', 'true');
  });
});
