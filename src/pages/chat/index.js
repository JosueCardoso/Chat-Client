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

    //Função que se conecta ao servidor
    const handleSocketIO = () => {    
        
        //Recebe a resposta do servidor referente as requisições
        socket.on('responseStatus', (response) => { 
            if(response === "USER_JOINED"){      
                alert("Usuário entrou");
            }
            if(response === "USER_LEFT"){
                alert("Usuário saiu");
            }
            if(response === "NEW_MESSAGE"){
                alert("Nova mensagem no chat")
            }
        });
    }

    //Evento disparado ao iniciar a página
    useEffect(() => {    
      handleSocketIO();
    }, []);

    return (
       <Container>           
           <ProjectTitle/>
           <MainBox>
               <ChatContainer>                        
                   <ChatComponent socketIOClient={socketIOClient}/>
                   <UsersOnline/>
               </ChatContainer>
           </MainBox>
       </Container>
    )   
}

const mapStateToProps = store => ({
    isConnected: store.appState.isConnected
  });

export default connect(mapStateToProps)(Chat);