import s from './TodoTotal.module.css';

const TodoTotal = ({ total, learned }) => (
  <div className={s.container}>
    <p className={s.text}>Общее кол-во: {total}</p>
    <p className={s.text}> Выучили: {learned}</p>
  </div>
);

export default TodoTotal;
