import React from 'react';

 import { Container, MessageContainer, InputMessageContainer,InputMessage, ButtonSend } from './styles';

function chat() {
  return (
      <Container>
          <MessageContainer>

          </MessageContainer>
          <InputMessageContainer>
            <InputMessage placeholder='Escreva sua mensagem aqui...'/>
            <ButtonSend>Enviar</ButtonSend>
          </InputMessageContainer>
      </Container>
  )
}

export default chat;