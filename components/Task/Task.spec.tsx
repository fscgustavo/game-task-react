import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Task from './Task';

describe('Task', () => {
  it('should render the information', () => {
    render(
      <Task
        title="title"
        description="description"
        deadline="123"
        difficulty="facil"
      />,
    );

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByText(/fácil/i)).toBeInTheDocument();
  });
});
