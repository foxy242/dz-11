import styled from 'styled-components';

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const ItemText = styled.span`
  flex: 1;
  margin-left: 10px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;