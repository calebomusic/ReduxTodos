import React from 'react';
import  {merge} from 'lodash';
import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions/todo_actions.js';

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case REQUEST_TODOS:
      return newState;
    case RECEIVE_TODOS:
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    default:
      return state;
  }
};

export default TodosReducer;