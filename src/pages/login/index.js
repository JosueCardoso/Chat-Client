import React, { Component } from 'react'

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
