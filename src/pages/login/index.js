import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import IsNullOrEmpty from '../../helper/isNullOrEmpty'
import { setAuthenticated, setUserConnected } from '../../actions';
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

function Login({socketIOClient, isConnected, setAuthenticated, setUserConnected}) {
  const history = useHistory();
  const socket = socketIOClient;
  const initialInputValues = {
    usernameLogin: '',
    passwordLogin: '',
    usernameRegister: '',
    passwordRegister: '',
    emailRegister: ''
  }

  const[{usernameLogin, passwordLogin, usernameRegister, passwordRegister, emailRegister}, setInputValues] = useState(initialInputValues); 

  //Função que se conecta ao servidor
  const handleSocketIO = () => {
    
    if(isConnected === false){
      alert("Não foi possível conectar ao servidor!");
    }

    //Recebe a resposta do servidor referente as requisições
    socket.on('responseStatus', (response) => { 
        if(response === "USER_AUTHENTICATED"){          
          alert("Usuário autenticado");
          
          setAuthenticated(true); //Redux setando o store da aplicação como usuário autenticado

          let path = `/chat`; 
          history.push(path);
        }
        if(response === "USER_NOT_AUTHENTICATED"){
          alert("Usuário não autenticado");
        }
        if(response === "USER_REGISTERED"){
          alert("Usuário registrado");
          
          document.getElementById("myForm").reset(); 
          setInputValues({...initialInputValues});
        }
        if(response === "USER_NOT_REGISTERED"){
          alert("Usuário não registrado");
        }
    });
  }

  const handleAuthentication = async () => {
    if(await IsNullOrEmpty(usernameLogin) || await IsNullOrEmpty(passwordLogin)){
      alert("Usuário ou senha inválidos");
    }else{
      const messageObject = {
        protocol: "LOGIN",
        username: usernameLogin,
        password: passwordLogin
      }

      setUserConnected(usernameLogin); //Redux setando o usuário que foi autenticado
      
      socket.emit('sendMessage', messageObject);
    }
  }

  const handleRegister = async () => {
    if(await IsNullOrEmpty(usernameRegister) || await IsNullOrEmpty(passwordRegister) || await IsNullOrEmpty(emailRegister)){
      alert("Dados inválidos para registrar");
    }else{
      const messageObject = {
        protocol: "REGISTER",
        username: usernameRegister,
        password: passwordRegister,
        email: emailRegister,
      }
      
      socket.emit('sendMessage', messageObject);
    }
  }

  const onChangeInputValues = e => {    
    const { name, value } = e.target;
    setInputValues(prevState => ({ ...prevState, [name]: value }));
  };

  //Evento disparado ao iniciar a página
  useEffect(() => {    
    handleSocketIO();
  }, []);

  return (
    <Container>
      <ProjectTitle/>
      <MainBox>
        <LoginContainer>
          <Title>Login</Title>
          <Input placeholder="Usuário" name="usernameLogin" onInput={onChangeInputValues}/>
          <Input type="password" placeholder="Senha" name="passwordLogin" onInput={onChangeInputValues}/>
          <Button disabled={isConnected === false} onClick={() => handleAuthentication()}>Entrar</Button>
        </LoginContainer>

        <Divider/>

        <form id='myForm'>
          <RegisterContainer>
            <Title>Cadastro</Title>          
            <Input placeholder="Usuário" name="usernameRegister" onInput={onChangeInputValues}/>
            <Input type="password" placeholder="Senha" name="passwordRegister" onInput={onChangeInputValues}/>
            <Input placeholder="Email" name="emailRegister" onInput={onChangeInputValues}/>          
            <Button disabled={isConnected === false} onClick={() => handleRegister()}>Registrar</Button>
          </RegisterContainer>
        </form>

      </MainBox>        
    </Container>
  )
}

const mapStateToProps = store => ({
  isConnected: store.appState.isConnected
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({ setAuthenticated, setUserConnected }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);