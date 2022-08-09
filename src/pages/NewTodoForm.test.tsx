import { render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

describe('Test the form component', () => {
  test('render the login form with 2 button', async () => {
    render(<NewTodoForm />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(1);
  });
});
