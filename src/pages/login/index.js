import React, { useEffect } from 'react'
import { connect } from 'react-redux';

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

function Login({socketIOClient, isConnected}) {
  const handleSocketIO = () => {
    const socket = socketIOClient;

    if(isConnected === false){
      alert("Não foi possível conectar ao servidor!");
    }

    //Recebe a resposta do servidor referente as requisições
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
          <Button disabled={isConnected === false} value="Entrar"/>
        </LoginContainer>

        <Divider/>

        <RegisterContainer>
          <Title>Cadastro</Title>
          <Input placeholder="Usuário"/>
          <Input type="password" placeholder="Senha"/>
          <Input placeholder="Email"/>
          <Button disabled={isConnected === false} value="Registrar"/>
        </RegisterContainer>
      </MainBox>        
    </Container>
  )
}

const mapStateToProps = store => ({
  isConnected: store.appState.isConnected
});

export default connect(mapStateToProps)(Login);