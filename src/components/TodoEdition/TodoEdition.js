import { useState } from 'react';
import s from './TodoEdition.module.css';

export default function TodoEdition({ onSubmit }) {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(message);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Добавить к списку
        <input
          className={s.input}
          value={message}
          onChange={handleChange}
        ></input>
      </label>

      <button type="submit" className={s.btn}>
        Сохранить
      </button>
    </form>
  );
}
