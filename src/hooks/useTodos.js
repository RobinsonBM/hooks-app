import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: 'ADD_TODO',
      payload: todo,
    };
    dispatch(action);
  };

  const handlerDelete = (todoId) => {
    const action = {
      type: 'REMOVE_TODO',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggleTodo = (todoId) => {
    const action = {
      type: 'TOGGLE_TODO',
      payload: todoId,
    };
    dispatch(action);
  };
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleToggleTodo,
    handlerDelete,
  };
};
