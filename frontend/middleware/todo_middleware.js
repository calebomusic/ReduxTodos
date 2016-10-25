import { REQUEST_TODOS, CREATE_TODO } from "../actions/todo_actions";
import { receiveTodo, receiveTodos } from "../actions/todo_actions";
import { fetchTodos, createTodo } from "../util/todo_api_util";

const TodoMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e);

  switch (action.type) {
    case REQUEST_TODOS:
      success = data => dispatch(receiveTodos(data));
      fetchTodos(success, error);
      return next(action);
    case CREATE_TODO:
      success = data => dispatch(receiveTodo(data));
      createTodo(action.todo, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default TodoMiddleware;
