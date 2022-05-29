export const addText = (value) => ({
  type: 'ADD_TEXT',
  payload: value,
});
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});
export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});
export const editTodo = (id) => ({
  type: 'EDIT_TODO',
  payload: id,
});
export const editAddTodo = (obj) => ({
  type: 'EDIT_ADD_TODO',
  payload: obj,
});
export const deleteAll = () => ({
  type: 'DELETE_ALL',
});
