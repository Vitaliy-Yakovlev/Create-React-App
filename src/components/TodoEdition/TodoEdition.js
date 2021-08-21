import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as todosActions from '../../redux/todos/todos-actions';
import s from './TodoEdition.module.css';

export default function TodoEdition({ onSave }) {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (message === '') {
      return alert('Введите имя ');
    }
    dispatch(todosActions.addTodo(message));
    onSave();
    setMessage('');
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
