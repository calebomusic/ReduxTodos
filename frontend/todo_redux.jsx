import ReactDOM from 'react-dom';
import React from 'react';
import { fetchTodos } from './util/todo_api_util.js';
import configureStore from './store/store.js';
import { requestTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selector';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, content);

  // TODO: testing!
  window.store = store;
  window.requestTodos = requestTodos;
  window.allTodos = allTodos;
});

// TODO: testing
window.fetchTodos = fetchTodos;
window.configureStore = configureStore;
