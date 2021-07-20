import React from 'react';
import IconButton from '../../IconButton';
import { ReactComponent as DeleteIcon } from '../../icon/delete.svg';
import s from './Todo.module.css';

const Todo = ({ text, completed, onDeletTodo, onToggleCompleted }) => (
  <>
    <input
      type="checkbox"
      className={s.checkbox}
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className={s.text}>{text}</p>
    {/* <button type="button" className={s.btn} onClick={onDeletTodo}>
      Удалить
    </button> */}

    <IconButton onClick={onDeletTodo} aria-label="Удолить todo">
      <DeleteIcon width="30px" hanging="30px" fill="#fff" />
    </IconButton>
  </>
);

export default Todo;
