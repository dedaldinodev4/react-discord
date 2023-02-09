import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import { Container, Wrapper, 
  Box, UseForm, InputGroup, Label, RegisterLabel,
  Input, BoxButton 
} from '../Form/styles';
import { Button } from '../Button';
import { Anchor } from './styles';
import { ISignUp } from '../../../dtos/user';
import { Loader } from '../../partials/Loader';

export const SignUp: React.FC = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<ISignUp>()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const showLoading = () => {
    setLoading(true)    
  } 

  const onSubmit: SubmitHandler<ISignUp> = data => {  
    console.log(data);
    showLoading()
    setTimeout(() => {
      navigate('/dashboard'); 
    }, 4000)
  }

  return (
    
      <Wrapper>
      <Container>
        {!loading && <Box>
          <h2>Criar uma conta</h2>
          <UseForm onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <Label>
                Email 
                {errors.email && <span> - Preencha o campo Email. </span>}
              </Label>
              <Input 
                type={'email'} 
                placeholder={''} 
                {...register('email', { required: true})}
              />
            </InputGroup>
            <InputGroup>
              <Label>
                Nome de Usuário 
                {errors.email && <span> - Preencha o campo Nome de Usuário. </span>}
              </Label>
              <Input 
                type={'text'} 
                placeholder={''}
                {...register('name', { required: true})}
              />
            </InputGroup>
            <InputGroup>
              <Label>
                Senha 
                {errors.email && <span> - Preencha o campo Senha. </span>}
              </Label>
              <Input 
                type={'password'} 
                placeholder={''} 
                {...register('password', { required: true})}
              />
            </InputGroup>
            <InputGroup>
              <Label>
                Data de Nascimento 
                {errors.email && <span> - Preencha o campo data de nascimento. </span>}
                </Label>
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
        }
        {loading && <Loader />}
      </Container> 

    </Wrapper>
    
  );

}