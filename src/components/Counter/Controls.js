import React from 'react';
import s from './Controls.module.css';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div className={s.controls}>
    <button type="button" onClick={onIncrement} className={s.button}>
      Увеличить на {step}
    </button>
    <button type="button" onClick={onDecrement} className={s.button}>
      Уменьшить на {step}
    </button>
  </div>
);

export default Controls;
