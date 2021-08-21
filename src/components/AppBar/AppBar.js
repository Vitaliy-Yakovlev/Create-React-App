import { useContext } from 'react';
import UserMenu from '../UserMenu/UserMenu';
import authContext from '../../contexts/auth/context';
import Navigation from '../Navigation';
import s from './AppBar.module.css';

export default function AppBar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button className={s.btn} type="button" onClick={onLogIn}>
          Войти
        </button>
      )}
    </header>
  );
}
