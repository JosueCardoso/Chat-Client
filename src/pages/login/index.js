import React, { Component } from 'react'
import SocketIOClient from "socket.io-client";

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

export default class Login extends Component {  

  handleSocketIO = () => {
    const socket = SocketIOClient("http://127.0.0.1:4001"); 
    
      let tries = 0;
      //Caso o servidor esteja offline, tentará se conectar até três vezes
      socket.on('reconnecting', () => {     
        tries++; 
        if (tries === 3) {
             socket.disconnect();
        }    
      });

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

  componentDidMount(){
    this.handleSocketIO();
  }

  render() {  
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
}
