import React from 'react'

import { Container, MainBox, ChatContainer } from './styles'

import ProjectTitle from '../../components/projectTitle'
import ChatComponent from '../../components/chat'
import UsersOnline from '../../components/usersOnline'

function Chat({socketIOClient}) {
    //TODO: Fazer controle de conexão, para o caso do servidor cair, o usuário deverá ser redirecionado para a tela de login
 return (
    <Container>
        <ProjectTitle/>
        <MainBox>
            <ChatContainer>                        
                <ChatComponent/>
                <UsersOnline/>
            </ChatContainer>
        </MainBox>
    </Container>
)
}

export default Chat;