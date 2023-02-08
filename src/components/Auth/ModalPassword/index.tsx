import React from 'react';
import { ModalProps } from 'styled-react-modal'
import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from './styles';

interface IModal extends ModalProps {
  email: string;
}
export const ModalPassword: React.FC<IModal> = ({
  isOpen, afterOpen, afterClose, onBackgroundClick,
  onEscapeKeydown, backgroundProps, beforeClose, email
}) => {
  return (
    <ModalContainer
      isOpen = {isOpen}
      afterOpen = {afterOpen}
      beforeClose = {beforeClose}
      onBackgroundClick = {onBackgroundClick}
      onEscapeKeydown = {onEscapeKeydown}
      backgroundProps = {backgroundProps}
    >
      <ModalHeader>
        <h3>Instruções Enviadas</h3>
      </ModalHeader>
      <ModalBody>
        <p>
          Nós enviamos-lhe as instruções para alterar sua senha
          no email {email}, por favor verifique sua caixa de entrada
          ou pasta de spam.
        </p>
      </ModalBody>
      <ModalFooter>
        <button>Ok</button>
      </ModalFooter>
      
    </ModalContainer>
  );
}
