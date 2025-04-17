import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Info from './components/Info';
import { Container, Header } from './styles/App.Styles';
import { GlobalStyle } from './styles/globalStyles';
import { nanoid } from 'nanoid';
import initialTodos from './todo.json';

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('');

  const addTodo = (text) => {
    const newTodo = {
      id: nanoid(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <Container>
      <GlobalStyle />
      <Header>Список Завдань</Header>
      <TodoEditor onAdd={addTodo} />
      <Filter value={filter} onChange={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <Info total={todos.length} completed={completedCount} />
    </Container>
  );
};

export default App;