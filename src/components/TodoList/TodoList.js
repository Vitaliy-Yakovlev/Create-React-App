import s from './TodoList.module.css';

const TodoList = ({ todos, onDeletTodo, onToggleCompleted }) => (
  <ul className={s.todoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={s.item}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={s.text}>{text}</p>
        <button type="button" className={s.btn} onClick={() => onDeletTodo(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
