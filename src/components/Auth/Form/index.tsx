import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { Wrapper, Container, Box, InputGroup, Input, Label, UseForm, Forgot, BoxButton, RegisterLabel } from './styles';



export const Form: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <h2>Boas-vindas de volta!</h2>
          <p>Estamos muito animados em te ver novamente!</p>
          <UseForm>
            <InputGroup>
              <Label>Email ou Número de telefone</Label>
              <Input required type={'email'} placeholder={''} />
            </InputGroup>
            <InputGroup>
              <Label>Senha</Label>
              <Input required type={'password'} placeholder={''} />
            </InputGroup>
            <Forgot>
              <a>Esqueceu sua senha?</a>
            </Forgot>
            <BoxButton>
              <Link to={'/dashboard'}>
                <Button />
              </Link>
              <RegisterLabel>
                Precisa de uma conta? <a>Registre-se</a>
              </RegisterLabel>
            </BoxButton>

            
          </UseForm>
        </Box>
      </Container> 

    </Wrapper>
  );
}
