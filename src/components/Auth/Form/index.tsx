import React, { useState } from 'react';
import { Button } from '../Button';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, 
  Box, InputGroup, Input, Label, ShowModal,
  UseForm, Forgot, BoxButton, RegisterLabel, Anchor } from './styles';
import { ISignIn } from '../../../dtos/user';
import { Loader } from '../../partials/Loader'; 
import { ModalPassword } from '../ModalPassword';

export const Form: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ISignIn>();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [email, setEmail] = useState<string>('dedaldinodv4@gmail.com');

  const toggleModal = () => {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 100)
  }

  const showLoading = () => {
    setLoading(true)
    
  } 

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }


  const onSubmit: SubmitHandler<ISignIn> = (data) => {
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
          <h2>Boas-vindas de volta!</h2>
          <p>Estamos muito animados em te ver novamente!</p>
          <UseForm onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <Label>Email ou Número de telefone
                {errors.email && <span> - Preencha o campo</span>}</Label>
              <Input 
                
                type={'email'} 
                placeholder={''}
                {...register("email", { required: true})} 
              />
            </InputGroup>
            <InputGroup>
              <Label>
                Senha {errors.password && <span> - Preencha o campo</span>}
              </Label>
              <Input 
                type={'password'} 
                placeholder={''}
                {...register("password", { required: true})} 
                
              />
            </InputGroup>
            <Forgot>
              <ShowModal onClick={toggleModal}>
                Esqueceu sua senha?
              </ShowModal>
            </Forgot>
            <BoxButton>
              <Button type={'submit'} />
              <RegisterLabel>
                Precisa de uma conta? <Anchor to={'/register'}>Registre-se</Anchor>
              </RegisterLabel>
            </BoxButton>

            
          </UseForm>
        </Box>
        }
        {loading && <Loader />}

        <ModalPassword 
          isOpen= {isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          email={email}
          onEscapeKeydown={toggleModal}
          backgroundProps={ {opacity} }
          closed={toggleModal}
        />
      </Container> 

    </Wrapper>
  );
}
