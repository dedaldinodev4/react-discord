import styled from 'styled-components'
import Modal from 'styled-react-modal'



export const ModalContainer = Modal.styled`
  width: 26rem;
  height: 12rem;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--quinary);
  color: white;
  opacity: 1;
  flex-direction: column;
  border-radius: 5px;
  transition : all 0.3s ease-in-out;
  align-content: space-between;
`;

export const ModalHeader = styled.div`
  margin: 10px;
  h3 {
    margin-bottom: 14px; 
  } 
`;
export const ModalFooter = styled.div`
  background-color: var(--secondary);
  display: block;
  padding: 12px 0;
  margin-top: 19px;
  border-radius: 0 0 5px 5px;

`;
export const ModalButton = styled.button`
  border-radius: 5px;
  color: #fff;
  width:20%;
  height: 30px;
  background: var(--discord);
  font-size: 16px;
  font-weight: 600;
  transition-duration: 167ms;
  text-align: center;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border: none;
  cursor: pointer;
  float: right;
  margin: 0 10px;

  &:hover {
    opacity: .7;
  }
`;
export const ModalBody = styled.div`
  p {
    margin: 0 10px;
    text-align: left;
  }
  margin-bottom: 5px;
`;

