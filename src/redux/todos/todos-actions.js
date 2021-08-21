import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));
