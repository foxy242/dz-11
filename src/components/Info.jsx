import React from 'react';
import { InfoContainer, InfoText } from '../styles/Info.styles';

const Info = ({ total, completed }) => {
  return (
    <InfoContainer>
      <InfoText>Усього завдань: {total}</InfoText>
      <InfoText>Виконано: {completed}</InfoText>
    </InfoContainer>
  );
};

export default Info;