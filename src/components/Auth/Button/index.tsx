import React from 'react';
import { ButtonContainer } from './styles';

type Props = {
  type?: 'submit' | 'button' | 'reset'
}

export const Button: React.FC<Props> = ({ type }) => {
  return (
    <ButtonContainer type={type}>Entrar</ButtonContainer>    
  );
}
