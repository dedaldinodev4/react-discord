import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--tertiary);
`;

export const Container = styled.div`
  padding: 24px 24px;
  
`;

export const Box = styled.div`
  color: #fff;
  max-width: 475px;
  border: 1px solid #121214;
  padding: 20px 16px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #121214;
  margin-top: 32px;

  h2 {
    text-align: left;
    margin-bottom: 14px;
    text-align: center;
  }
  
  p {
    margin: 10px 0;
    text-align: center;
  }
`;


export const InputGroup = styled.div`
  margin-bottom: 12px;
`;

export const Input = styled.input`
  padding: 14px 12px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: var(--tertiary);
  color: var(--senary);
  margin: 10px 0;
  font-weight: 600;


`;

export const Label = styled.label`
  margin: 10px 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: var(--senary);
`;

export const UseForm = styled.form`
  margin-top: 30px;
`;

export const Forgot = styled.div`
  margin-bottom: 5px;
  text-align: left;
  font-size: 1rem;
  a {
    color: var(--discord);
    cursor: pointer;
  }
`;
export const BoxButton = styled.div`
  margin-top: 36px;
  margin-bottom: 10px;
`;

export const RegisterLabel = styled.div`
  margin-top: 15px;
  a {
    color: var(--link);
  }
`;



  