import React from 'react';

import { Container, UsernameContainer, MessageContainer } from './styles';

function Message({username, message}) {
  return (
    <Container>
        <UsernameContainer>{username}</UsernameContainer>
        <MessageContainer>{message}</MessageContainer>
    </Container>
  )
}

export default Message;