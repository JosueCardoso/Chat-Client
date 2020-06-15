import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { setAuthenticated } from '../../actions';
import ProjectTitle from '../../components/projectTitle'

import { 
        Container , 
        MainBox, 
        LoginContainer, 
        RegisterContainer, 
        Divider,
        Title,
        Input,
        Button
        } from './styles'

function Login({socketIOClient, isConnected, setAuthenticated}) {
  const history = useHistory();
  const[usernameLogin, setUsernameLogin] = useState('');
  const[passwordLogin, setPasswordLogin] = useState('');
  const socket = socketIOClient;

  const handleSocketIO = () => {
    
    if(isConnected === false){
      alert("Não foi possível conectar ao servidor!");
    }

    //Recebe a resposta do servidor referente as requisições
    socket.on('responseStatus', (response) => { 
        if(response === "USER_AUTHENTICATED"){          
          alert("Usuário autenticado");

          setAuthenticated(true);
          
          let path = `/chat`; 
          history.push(path);
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

  const handleAuthentication = () => {
    const messageObject = {
      protocol: "LOGIN",
      username: usernameLogin,
      password: passwordLogin
    }

    socket.emit('sendMessage', messageObject);
  }

  useEffect(() => {    
    handleSocketIO();
  }, []);

  return (
    <Container>
      <ProjectTitle/>
      <MainBox>
        <LoginContainer>
          <Title>Login</Title>
          <Input placeholder="Usuário" onInput={e => setUsernameLogin(e.target.value)}/>
          <Input type="password" placeholder="Senha" onInput={e => setPasswordLogin(e.target.value)}/>
          <Button disabled={isConnected === false} onClick={() => handleAuthentication()}>Entrar</Button>
        </LoginContainer>

        <Divider/>

        <RegisterContainer>
          <Title>Cadastro</Title>
          <Input placeholder="Usuário"/>
          <Input type="password" placeholder="Senha"/>
          <Input placeholder="Email"/>
          <Button disabled={isConnected === false}>Registrar</Button>
        </RegisterContainer>
      </MainBox>        
    </Container>
  )
}

const mapStateToProps = store => ({
  isConnected: store.appState.isConnected
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setAuthenticated }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);