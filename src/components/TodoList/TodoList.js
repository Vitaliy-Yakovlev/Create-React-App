import React from 'react';
import Todo from './Todo';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeletTodo, onToggleCompleted }) => (
  <ul className={s.todoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={s.item}>
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeletTodo={() => onDeletTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
