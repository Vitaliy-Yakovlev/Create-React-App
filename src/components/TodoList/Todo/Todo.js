import React from 'react';
import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../icon/delete.svg';
import s from './Todo.module.css';

const Todo = ({ text, completed, onDeleteTodo, onToggleCompleted }) => (
  <>
    <input
      type="checkbox"
      className={s.checkbox}
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className={s.text}>{text}</p>
    {/* <button type="button" className={s.btn} onClick={onDeleteTodo}>
    Удалить
  </button> */}

    <IconButton onClick={onDeleteTodo} aria-label="Удалить todo">
      <DeleteIcon width="30px" hanging="30px" fill="#fff" />
    </IconButton>
  </>
);

export default Todo;
