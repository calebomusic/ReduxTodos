
export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const requestTodos = () => ({
  type: REQUEST_TODOS
});

export const recieveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});
