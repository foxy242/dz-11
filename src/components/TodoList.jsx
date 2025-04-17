import React from 'react';
import TodoItem from './TodoItem';
import { ListContainer } from '../styles/TodoList.styles';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ListContainer>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ListContainer>
  );
};

export default TodoList;