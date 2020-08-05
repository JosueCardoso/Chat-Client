import React from 'react';

import { Container, UsernameContainer, MessageContainer } from './styles';

function Message({username, message, messageColor}) {
  return (
    <Container>
        <UsernameContainer messageColor={messageColor} >{username}:</UsernameContainer>
        <MessageContainer messageColor={messageColor} >{message}</MessageContainer>
    </Container>
  )
}

export default Message;