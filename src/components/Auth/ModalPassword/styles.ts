import styled from 'styled-components'
import Modal from 'styled-react-modal'



export const ModalContainer = Modal.styled`
  width: 26rem;
  height: 12rem;
  display: flex;
  flex-wrap: wrap;
  background-color: #121214;
  color: white;
  opacity: 1;
  flex-direction: column;
  border-radius: 4px;
  transition : all 0.3s ease-in-out;
  align-content: space-between;
`;

export const ModalHeader = styled.div`
`;
export const ModalFooter = styled.div``;
export const ModalButton = styled.div``;
export const ModalBody = styled.div``;

