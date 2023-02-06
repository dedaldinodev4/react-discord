import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Wrapper, Box, UseForm, InputGroup, Label, 
  Forgot, RegisterLabel,
  Input, BoxButton } from '../Form/styles';
import { Button } from '../Button';
import { Anchor, FormInput } from './styles';

export const SignUp: React.FC = () => {
  
  return (
    <>
      <Wrapper>
      <Container>
        <Box>
          <h2>Criar uma conta</h2>
          <UseForm>
            <InputGroup>
              <Label>Email</Label>
              <Input required type={'email'} placeholder={''} />
            </InputGroup>
            <InputGroup>
              <Label>Nome de Usuário</Label>
              <Input required type={'email'} placeholder={''} />
            </InputGroup>
            <InputGroup>
              <Label>Senha</Label>
              <Input required type={'password'} placeholder={''} />
            </InputGroup>
            <InputGroup>
              <Label>Data de Nascimento</Label><br/>
              <FormInput type={'day'} placeholder={'Dia'} />
              <FormInput type={'month'} placeholder={'Mês'} />
              <FormInput type={'year'} placeholder={'Ano'} />
            </InputGroup>
            <Forgot>
              <a>Esqueceu sua senha?</a>
            </Forgot>
            <BoxButton>
              <Link to={'/dashboard'}>
                <Button />
              </Link>
              <RegisterLabel>
                <Anchor to={'/'}>
                  Já tem uma conta?
                </Anchor>
              </RegisterLabel>
            </BoxButton>

            
          </UseForm>
        </Box>
      </Container> 

    </Wrapper>
    </>
  );

}