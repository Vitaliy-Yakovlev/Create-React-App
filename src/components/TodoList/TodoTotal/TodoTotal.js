import { useSelector } from 'react-redux';
import { getTodos } from '../../../redux/todos/todos-selectors';

import s from './TodoTotal.module.css';

const TodoTotal = () => {
  const todos = useSelector(getTodos);
  const totalTodos = todos.length;

  const learned = todos.reduce((total, todo) => {
    return todo.completed ? total + 1 : total;
  }, 0);

  return (
    <div className={s.container}>
      <p className={s.text}>Общее кол-во: {totalTodos}</p>
      <p className={s.text}> Выучили: {learned}</p>
    </div>
  );
};

export default TodoTotal;
