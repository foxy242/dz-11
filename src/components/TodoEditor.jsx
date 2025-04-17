import React, { useState } from 'react';
import { EditorInput, EditorButton, EditorForm } from '../styles/TodoEditor.styles';

const TodoEditor = ({ onAdd }) => {
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textValue.trim()) {
      onAdd(textValue.trim());
      setTextValue('');
    }
  };

  return (
    <EditorForm onSubmit={handleSubmit}>
      <EditorInput
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Нове завдання..."
      />
      <EditorButton type="submit">Додати</EditorButton>
    </EditorForm>
  );
};

export default TodoEditor;