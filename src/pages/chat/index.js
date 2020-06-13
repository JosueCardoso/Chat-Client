import React, { Component } from 'react'

import { Container, MainBox, ChatContainer } from './styles'

import ProjectTitle from '../../components/projectTitle'
import ChatComponent from '../../components/chat'
import UsersOnline from '../../components/usersOnline'

export default class Chat extends Component {
    render() {
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
}
