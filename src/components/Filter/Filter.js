import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChenge }) => (
  <label className={s.label}>
    Фильтер по имени
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={onChenge}
    ></input>
  </label>
);

export default Filter;
