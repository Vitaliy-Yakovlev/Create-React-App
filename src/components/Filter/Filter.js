import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/todos/todos-actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => state.todos.filter);

  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Фильтр по имени
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
