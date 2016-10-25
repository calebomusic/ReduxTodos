import React from 'react';
import todos from './todos_reducer.js';
import {combineReducers} from 'redux';

const RootReducer = combineReducers( {
  todos
});

export default RootReducer;
