import { REQUEST_TODOS, RECEIVE_TODOS } from "../actions/todo_actions";
import { requestTodos, receiveTodos } from "../actions/todo_actions";
import { fetchTodos } from "../util/todo_api_util";

const TodoMiddleware = ({getState, dispatch}) => next => action => {

  switch (action.type) {
    case REQUEST_TODOS:
      let success = data => dispatch(receiveTodos(data));
      let error = e => console.log(e);
      fetchTodos(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default TodoMiddleware;
