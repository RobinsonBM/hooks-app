import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo todo',
      done: false,
    },
  ];

  test('Debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('Debe de agregar un todo', () => {
    const action = {
      type: 'ADD_TODO',
      payload: {
        id: 2,
        description: 'Learn React',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Debe eliminar un todo', () => {
    const action = {
      type: 'REMOVE_TODO',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
    expect(newState).not.toContain(action.payload);
  });

  test('Debe de realizar el toogle del todo', () => {
    const action = {
      type: 'TOGGLE_TODO',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
