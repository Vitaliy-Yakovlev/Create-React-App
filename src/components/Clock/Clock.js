import { useState, useEffect, useRef } from 'react';
import s from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  const start = () => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  return (
    <>
      <p className={s.clock}>
        <span className={s.face}>Текущее время:</span>{' '}
        {time.toLocaleTimeString()}
      </p>
      <button type="button" className={s.btn} onClick={stop}>
        Stop
      </button>
      <button type="button" className={s.btn} onClick={start}>
        Start
      </button>
    </>
  );
}
