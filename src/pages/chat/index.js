import React from 'react'

import { Container, MainBox, ChatContainer } from './styles'

import ProjectTitle from '../../components/projectTitle'
import ChatComponent from '../../components/chat'
import UsersOnline from '../../components/usersOnline'

function Chat({socketIOClient}) {
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