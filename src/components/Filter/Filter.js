import React from 'react';

const Filter = ({ value, onChenge }) => (
  <label>
    Фильтер по имени
    <input type="text" value={value} onChange={onChenge}></input>
  </label>
);

export default Filter;
