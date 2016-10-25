import React from 'react';
import  {merge} from 'lodash';
import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions.js';

const defaultState = {};

const TodosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => ( newState[todo.id] = todo ));
      return newState;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default TodosReducer;
