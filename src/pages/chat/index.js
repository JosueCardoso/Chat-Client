import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, MainBox, ChatContainer } from './styles'

import ProjectTitle from '../../components/projectTitle'
import ChatComponent from '../../components/chat'
import UsersOnline from '../../components/usersOnline'

function Chat({socketIOClient, isConnected}) { //TODO: Fazer controle de conexão, para o caso do servidor cair, o usuário deverá ser redirecionado para a tela de login (pra fazer isso é necessário utilizar um middleware redux)      
    const socket = socketIOClient;
    const history = useHistory();

    return (
       <Container>           
           <ProjectTitle/>
           <MainBox>
               <ChatContainer>                        
                   <ChatComponent socketIOClient={socketIOClient}/>
                   <UsersOnline socketIOClient={socketIOClient}/>
               </ChatContainer>
           </MainBox>
       </Container>
    )   
}

const mapStateToProps = store => ({
    isConnected: store.appState.isConnected
  });

export default connect(mapStateToProps)(Chat);