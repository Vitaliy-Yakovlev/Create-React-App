import { useEffect } from 'react';
import Controls from './Controls';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import { getStep, getValue } from '../../redux/counter/counter-selectors';
import s from './Counter.module.css';

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `HomeWork:${value}`;
  }, [value]);

  return (
    <div className={s.counter}>
      <span className={s.value}>({value})</span>

      <Controls
        step={step}
        onIncrement={() => dispatch(actions.increment(step))}
        onDecrement={() => dispatch(actions.decrement(step))}
      />
    </div>
  );
}
