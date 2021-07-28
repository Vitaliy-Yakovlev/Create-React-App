import React from 'react';
import s from './UserMenu.module.css';

export default function UserMenu({ onLogOut, user }) {
  return (
    <div className={s.container}>
      <img
        src={user.avatar}
        alt=""
        width="32"
        height="32"
        className={s.avatar}
      />
      <p className={s.name}>Добро пожаловать, {user.name}</p>
      <button className={s.btn} type="button" onClick={onLogOut}>
        Выйти
      </button>
    </div>
  );
}
