import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/create-react-app"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Главная
    </NavLink>

    <NavLink to="/painting" className={s.link} activeClassName={s.activeLink}>
      Painting List
    </NavLink>

    <NavLink
      to="/color_picker"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Color Picker
    </NavLink>

    <NavLink to="/alert" className={s.link} activeClassName={s.activeLink}>
      Alert
    </NavLink>
    <NavLink to="/counter" className={s.link} activeClassName={s.activeLink}>
      Counter
    </NavLink>

    <NavLink to="/dropdown" className={s.link} activeClassName={s.activeLink}>
      Dropdown
    </NavLink>

    <NavLink to="/todos" className={s.link} activeClassName={s.activeLink}>
      Todos
    </NavLink>

    <NavLink to="/form_input" className={s.link} activeClassName={s.activeLink}>
      Form Input
    </NavLink>

    <NavLink to="/time" className={s.link} activeClassName={s.activeLink}>
      Time
    </NavLink>

    <NavLink to="/pokemon" className={s.link} activeClassName={s.activeLink}>
      Pokemon
    </NavLink>

    <NavLink
      to="/home_work_1"
      className={s.link}
      activeClassName={s.activeLink}
    >
      React. Home Wort -1
    </NavLink>

    <NavLink
      to="/home_work_2"
      className={s.link}
      activeClassName={s.activeLink}
    >
      React. Home Wort - 2
    </NavLink>
  </nav>
);

export default Navigation;
