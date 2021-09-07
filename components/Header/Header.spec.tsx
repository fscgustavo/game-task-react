import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render the logo', () => {
    render(<Header />);

    expect(screen.getByText(/protoman/i)).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: /logo da gametask/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render the avatar information', () => {
    render(<Header />);

    expect(screen.getByText(/olá, protoman/i)).toBeInTheDocument();
  });
});
