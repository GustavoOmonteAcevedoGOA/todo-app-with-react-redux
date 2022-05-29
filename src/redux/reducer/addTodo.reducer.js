const initState = {
  todos: [],
  text: '',
  selected: undefined,
};

const setPersist = (todo) => {
  window.localStorage.setItem('todos', JSON.stringify(todo));
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PERSIST_TODOS':
      const getTodos = JSON.parse(window.localStorage.getItem('todos'));
      return { ...state, todos: getTodos ? getTodos : [] };
    case 'ADD_TEXT':
      return { ...state, text: action.payload };
    case 'ADD_TODO':
      const setTodos = state.todos.concat(action.payload);
      setPersist(setTodos);
      return { ...state, todos: setTodos, text: '' };
    case 'DELETE_TODO':
      const setdeleteTodo = state.todos.filter(
        (todo, i) => i !== action.payload
      );
      setPersist(setdeleteTodo);
      return {
        ...state,
        todos: setdeleteTodo,
      };
    case 'EDIT_TODO':
      return {
        ...state,
        text: state.todos[action.payload],
        selected: action.payload,
      };
    case 'EDIT_ADD_TODO':
      const seteditAddTodo = state.todos.map((todo, i) =>
        i !== action.payload.selected ? todo : action.payload.value
      );
      setPersist(seteditAddTodo);
      return {
        ...state,
        todos: seteditAddTodo,
        selected: undefined,
        text: '',
      };
    case 'DELETE_ALL':
      setPersist([]);
      return {
        ...state,
        todos: [],
        selected: undefined,
        text: '',
      };
    default:
      return state;
  }
};
