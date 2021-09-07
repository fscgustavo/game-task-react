import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';

jest.mock('react-query', () => ({
  useQueryClient: jest.fn(),
  useMutation: jest.fn().mockReturnValue({
    isLoading: false,
  }),
}));

describe('Form', () => {
  it('should render the accordion button', () => {
    render(<Form />);

    expect(
      screen.getByRole('button', { name: /inserir nova tarefa/i }),
    ).toBeInTheDocument();
  });

  it('should render the register button', () => {
    render(<Form />);

    expect(
      screen.getByRole('button', { name: /registrar/i }),
    ).toBeInTheDocument();
  });

  it('should render the fields', () => {
    render(<Form />);

    expect(
      screen.getByRole('textbox', {
        name: /título da tarefa/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('textbox', {
        name: /detalhes da tarefa/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('combobox', {
        name: /dificuldade da tarefa/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/prazo/i)).toBeInTheDocument();
  });
});
