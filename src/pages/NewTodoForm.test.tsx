import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewTodoForm from './NewTodoForm';

describe('NewTodoForm', () => {
  test('render a button', async () => {
    render(<NewTodoForm />);
    const button = await screen.findAllByRole('button', { name: 'Submit' });
    expect(button).toHaveLength(1);
  });

  test('render a label', () => {
    render(<NewTodoForm />);
    const label = screen.getByText(/add new todo/i);
    expect(label).toBeInTheDocument();
  });
});
