import { render, screen, fireEvent } from '@testing-library/react';

import Setup from '../Setup';

describe('Setup component testing', () => {
  test('Render Setup component', () => {
    render(<Setup />);
  });

  test('X is default choice for mark', () => {
    render(<Setup />);
    const markX = screen.getByTitle('x mark');
    const markO = screen.getByTitle('o mark');
    expect(markX).toHaveAttribute('aria-checked', 'true');
    expect(markO).toHaveAttribute('aria-checked', 'false');
  });

  test('Changing selected mark to O after pressing button', () => {
    render(<Setup />);
    const markX = screen.getByTitle('x mark');
    const markO = screen.getByTitle('o mark');
    expect(markX).toHaveAttribute('aria-checked', 'true');
    expect(markO).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(markO);
    expect(markX).toHaveAttribute('aria-checked', 'false');
    expect(markO).toHaveAttribute('aria-checked', 'true');
  });
});
