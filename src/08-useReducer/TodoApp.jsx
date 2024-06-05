import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoAdd, TodoList } from './components';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

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

  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={handlerDelete}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
