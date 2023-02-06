import React from 'react';
import { Button } from '../Button';
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, redirect } from 'react-router-dom';
import { Wrapper, Container, 
  Box, InputGroup, Input, Label, 
  UseForm, Forgot, BoxButton, RegisterLabel, Anchor } from './styles';
import { ISignIn } from '../../../dtos/user';

export const Form: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ISignIn>();
  const onSubmit: SubmitHandler<ISignIn> = async (data) => {
    console.log(data);
    return redirect('/dashboard'); 
  }

  return (
    <Wrapper>
      <Container>
        <Box>
          <h2>Boas-vindas de volta!</h2>
          <p>Estamos muito animados em te ver novamente!</p>
          <UseForm onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <Label>Email ou Número de telefone
                {errors.email && <span> - Email is required</span>}</Label>
              <Input 
                type={'email'} 
                placeholder={''}
                {...register("email", { required: true})} 
              />
            </InputGroup>
            <InputGroup>
              <Label>
                Senha {errors.password && <span> - Password is required</span>}
              </Label>
              <Input 
                type={'password'} 
                placeholder={''}
                {...register("password", { required: true})} 
                
              />
            </InputGroup>
            <Forgot>
              <Anchor to={'/forgot'}>
                Esqueceu sua senha?
              </Anchor>
            </Forgot>
            <BoxButton>
              <Button type={'submit'} />
              <RegisterLabel>
                Precisa de uma conta? <Anchor to={'/register'}>Registre-se</Anchor>
              </RegisterLabel>
            </BoxButton>

            
          </UseForm>
        </Box>
      </Container> 

    </Wrapper>
  );
}
