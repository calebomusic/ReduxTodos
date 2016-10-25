
export const allTodos = (state) => {
  let ids = Object.keys(state.todos);
  let todos = ids.map( (id) => state.todos[id] );
  return todos;
};
