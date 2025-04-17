import React from 'react';
import { FilterInput } from '../styles/Filter.styles';

const Filter = ({ value, onChange }) => {
  return (
    <FilterInput
      type="text"
      placeholder="Фільтрувати завдання..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Filter;