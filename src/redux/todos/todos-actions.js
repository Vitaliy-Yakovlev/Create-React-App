import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));

export const deleteTodo = createAction('todos/delete');
export const changeFilter = createAction('counter/changeFilter');
export const toggleCompleted = createAction('todos/toggleCompleted');
