import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import todosArray from '../../components/TodoList/todos.json';
import * as action from './todos-actions';

const items = createReducer(todosArray, {
  [action.addTodo]: (state, { payload }) => {
    return [...state, payload];
  },

  [action.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [action.toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

const filter = createReducer('', {
  [action.changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
