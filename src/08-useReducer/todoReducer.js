// Definición de las acciones
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Reducer
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...initialState, action.payload];
    case REMOVE_TODO:
      return initialState.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
