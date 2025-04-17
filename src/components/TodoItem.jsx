import React from 'react';
import { ItemContainer, ItemText, DeleteButton } from '../styles/TodoItem.styles';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <ItemContainer>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      <ItemText completed={todo.completed}>{todo.text}</ItemText>
      <DeleteButton onClick={onDelete}>Видалити</DeleteButton>
    </ItemContainer>
  );
};

export default TodoItem;