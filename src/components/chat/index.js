import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import IsNullOrEmpty from '../../helper/isNullOrEmpty'
import Message from '../message'

import { Container, MessageContainer, InputMessageContainer,InputMessage, ButtonSend } from './styles';

function Chat({ socketIOClient, userConnected }) {
  const socket = socketIOClient;
  const [messageToSend, setMessageToSend] = useState('');
  const [messageReceived, setMessageReceived] = useState([]);
  let messageId = 0;

  const handleMessagePub = async () => {

    if(await IsNullOrEmpty(messageToSend) == false){      
      const messageObject = {
        protocol: "MESSAGE",
        username: userConnected,
        message: messageToSend
      }      
      socket.emit('sendMessage', messageObject);
    }    
  }

  //Função que se conecta ao servidor
  const handleSocketIO = () => {    
        
    //Recebe a resposta do servidor referente ao chat
    socket.on('receivedMessage', (response) => {

      const messageResponse = {
        id: messageId,
        username: response.username,
        message: response.text
      }
      
      messageId++;
      setMessageReceived(oldArray => [...oldArray, messageResponse]);     
    });

    //Recebe a resposta do servidor referente as requisições
    socket.on('responseStatus', (response) => { 
      if(response === "MESSAGE_NOT_VALID"){
        alert("Mensagem não encaminhada");
      }
    });
  }

  const elements = () => {
    let arrayElements = [];

    messageReceived.forEach((message) =>  {      
      arrayElements.push(<Message key={message.id} message={message.message} username={message.username}/>)     
    })
    
    return arrayElements;
  }

  //Evento disparado ao iniciar a página
  useEffect(() => {    
    handleSocketIO();
  }, []);

  return (
      <Container>     
         
          <MessageContainer>
            {elements()}
          </MessageContainer>

          <InputMessageContainer>
            <InputMessage placeholder='Escreva sua mensagem aqui...' onInput={e => setMessageToSend(e.target.value)}/>
            <ButtonSend onClick={() => handleMessagePub()}>Enviar</ButtonSend>
          </InputMessageContainer>
      </Container>
  )
}

const mapStateToProps = store => ({
  userConnected: store.appState.userConnected
});

export default connect(mapStateToProps)(Chat);