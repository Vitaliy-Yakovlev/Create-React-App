import React from 'react';
import s from './Controls.module.css';

const Controls = ({ onIncriment, onDecrement }) => (
  <div className={s.controls}>
    <button type="button" onClick={onIncriment} className={s.button}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement} className={s.button}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;
