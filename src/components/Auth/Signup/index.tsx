import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Wrapper, Box, UseForm, InputGroup, Label, 
  Forgot, RegisterLabel,
  Input, BoxButton } from '../Form/styles';
import { Button } from '../Button';
import { Anchor, FormInput } from './styles';
import { ISignUp } from '../../../dtos/user';
import { useForm, SubmitHandler } from 'react-hook-form'

export const SignUp: React.FC = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<ISignUp>()

  const onSubmit: SubmitHandler<ISignUp> = data => console.log(data)

  return (
    
      <Wrapper>
      <Container>
        <Box>
          <h2>Criar uma conta</h2>
          <UseForm onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <Label>Email {errors.email && <span> - Email is required. </span>}</Label>
              <Input 
                type={'email'} 
                placeholder={''} 
                {...register('email', { required: true})}
              />
            </InputGroup>
            <InputGroup>
              <Label>Nome de Usuário {errors.email && <span> - Username is required. </span>}</Label>
              <Input 
                type={'text'} 
                placeholder={''}
                {...register('name', { required: true})}
              />
            </InputGroup>
            <InputGroup>
              <Label>Senha {errors.email && <span> - Password is required. </span>}</Label>
              <Input 
                type={'password'} 
                placeholder={''} 
                {...register('password', { required: true})}
              />
            </InputGroup>
            <InputGroup>
              <Label>Data de Nascimento {errors.email && <span> - dateOfBrith is required. </span>}</Label>
              <Input 
                type={'date'} 
                {...register('dateOfBrith', { required: true})}
              />
            </InputGroup>
            
            <BoxButton>
              <Button type={'submit'} />
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
    
  );

}