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
  connectSocketIO = () => {
    const socket = SocketIOClient("http://127.0.0.1:4001"); 
    
    let tries = 0;
    //Caso o servidor esteja offline, tentará se conectar até três vezes
    socket.on('reconnecting', () => {     
      tries++; 
      if (tries === 3) {
           socket.disconnect();
      }    
    });
  }

  componentDidMount(){
    this.connectSocketIO();
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
