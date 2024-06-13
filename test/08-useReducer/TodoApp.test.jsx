import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/components';
import { useTodos } from '../../src/hooks';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en el TodoApp', () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Aprender React',
        done: false,
      },
      {
        id: 2,
        description: 'Aprender Mongo',
        done: false,
      },
      {
        id: 3,
        description: 'Aprender Node',
        done: true,
      },
    ],
    todosCount: 3,
    pendingTodosCount: 2,
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handlerDelete: jest.fn(),
  });

  test('Debe de mostrar el componente correctamente', () => {
    render(<TodoApp />);
    expect(screen.getByText('Aprender React')).toBeTruthy();
    expect(screen.getByText('Aprender Mongo')).toBeTruthy();
    expect(screen.getByText('Aprender Node')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
