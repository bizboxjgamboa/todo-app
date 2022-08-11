import { render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

describe('NewTodoForm', () => {
  test('render a button', async () => {
    render(<NewTodoForm />);
    const button = await screen.findAllByRole('button', { name: 'Submit'});
    expect(button).toHaveLength(1);
  });
});
