import React, { useEffect } from 'react'

import ProjectTitle from '../../components/projectTitle'
import Input from '../../components/input'
import Button from '../../components/button'

import { 
        Container , 
        MainBox, 
        LoginContainer, 
        RegisterContainer, 
        Divider,
        Title
        } from './styles'

function Login({socketIOClient}) {
  const handleSocketIO = () => {
    const socket = socketIOClient;
    
      //Recebe a resposta do servidor
      socket.on('responseStatus', (response) => {
          if(response === "USER_AUTHENTICATED"){
            alert("Usuário autenticado");
          }
          if(response === "USER_NOT_AUTHENTICATED"){
            alert("Usuário não autenticado");
          }
          if(response === "USER_REGISTERED"){
            alert("Usuário registrado");
          }
          if(response === "USER_NOT_REGISTERED"){
            alert("Usuário não registrado");
          }
      });
  }

  useEffect(() => {
    handleSocketIO();
  });

  return (
    <Container>
      <ProjectTitle/>
      <MainBox>
        <LoginContainer>
          <Title>Login</Title>
          <Input placeholder="Usuário"/>
          <Input type="password" placeholder="Senha"/>
          <Button value="Entrar"/>
        </LoginContainer>

        <Divider/>

        <RegisterContainer>
          <Title>Cadastro</Title>
          <Input placeholder="Usuário"/>
          <Input type="password" placeholder="Senha"/>
          <Input placeholder="Email"/>
          <Button value="Registrar"/>
        </RegisterContainer>
      </MainBox>        
    </Container>
  )
}

export default Login;