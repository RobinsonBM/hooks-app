export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...initialState, action.payload];
    default:
      return initialState;
  }
};
