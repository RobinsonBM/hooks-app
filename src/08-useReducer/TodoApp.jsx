import { useTodos } from '../hooks';
import { TodoAdd, TodoList } from './components';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleToggleTodo,
    handlerDelete,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount},<small>Pendientes: {pendingTodosCount}</small>
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
