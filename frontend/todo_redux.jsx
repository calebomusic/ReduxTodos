import ReactDOM from 'react-dom';
import React from 'react';
import { fetchTodos } from './util/todo_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  let content = document.getElementById('content');
  ReactDOM.render( <h1>Todos Apps</h1>, content);
});

// TODO: testing
window.fetchTodos = fetchTodos;
