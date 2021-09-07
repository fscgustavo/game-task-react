import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Stats from './Stats';

describe('Stats', () => {
  it('should render the user information', () => {
    render(<Stats />);

    expect(screen.getByText(/protoman/i)).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /imagem de perfil do protoman/i }),
    ).toBeInTheDocument();
  });

  it('should render the progress indicator', () => {
    render(<Stats />);

    expect(screen.getByText(/100\/100/i)).toBeInTheDocument();

    expect(screen.getByText(/50\/200/i)).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: /coração \(vida\)/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /estrela \(experiência\)/i }),
    ).toBeInTheDocument();
  });
});
