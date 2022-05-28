const initState = {
  todos: [],
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: state.todos.concat(action.payload) };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== action.payload),
      };
    default:
      return state;
  }
};
