import React from 'react';
import { useSelector } from 'react-redux';
import { getStep } from '../../redux/counter/counter-selectors';
import s from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
  const step = useSelector(getStep);

  return (
    <div className={s.controls}>
      <button type="button" onClick={onIncrement} className={s.button}>
        Увеличить на {step}
      </button>
      <button type="button" onClick={onDecrement} className={s.button}>
        Уменьшить на {step}
      </button>
    </div>
  );
};

export default Controls;
