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

    if(await IsNullOrEmpty(messageToSend) === false){      
      const messageObject = {
        protocol: "MESSAGE",
        username: userConnected,
        message: messageToSend
      }      
      socket.emit('sendMessage', messageObject);
    }    

    setMessageToSend('');
  }

  //Função que se conecta ao servidor
  const handleSocketIO = () => {    
        
    //Recebe a resposta do servidor referente ao chat
    socket.on('receivedMessage', (response) => {

      const messageResponse = {
        id: messageId,
        username: response.username,
        message: response.text,
        messageColor: 'black'
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

    //Recebe a resposta do servidor referente algum usuário que entrou
    socket.on('userJoin', (response) => {

      const messageResponse = {
        id: messageId,
        username: 'Sistema',
        message: `${response.username} entrou no chat!`,
        messageColor: 'blue'
      }
      
      messageId++;
      setMessageReceived(oldArray => [...oldArray, messageResponse]);     
    });

    //Recebe a resposta do servidor referente algum usuário que saiu
    socket.on('userLeft', (response) => {

      const messageResponse = {
        id: messageId,
        username: 'Sistema',
        message: `${response.username} saiu do chat!`,
        messageColor: 'red'
      }
      
      messageId++;
      setMessageReceived(oldArray => [...oldArray, messageResponse]);     
    });
  }

  const elements = () => {
    let arrayElements = [];

    messageReceived.forEach((message) =>  {      
      arrayElements.push(< Message key={message.id} message={message.message} username={message.username} messageColor={message.messageColor} />)     
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
            <InputMessage placeholder='Escreva sua mensagem aqui...' onChange={e => setMessageToSend(e.target.value)} value={messageToSend}/>
            <ButtonSend onClick={() => handleMessagePub()}>Enviar</ButtonSend>
          </InputMessageContainer>
      </Container>
  )
}

const mapStateToProps = store => ({
  userConnected: store.appState.userConnected
});

export default connect(mapStateToProps)(Chat);