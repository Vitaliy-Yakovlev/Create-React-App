import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleted } from '../../redux/todos/todos-actions';
import { getFilter } from '../../redux/todos/todos-selectors';
import Todo from './Todo';
import s from './TodoList.module.css';

const TodoList = () => {
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();

  const todos = useSelector(state =>
    state.todos.items.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    ),
  );

  const dispatch = useDispatch();
  const onDeleteTodo = id => dispatch(deleteTodo(id));
  const onToggleCompleted = id => dispatch(toggleCompleted(id));

  return (
    <ul className={s.todoList}>
      {todos.map(({ id, text, completed }) => (
        <li key={id} className={s.item}>
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDeleteTodo={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
