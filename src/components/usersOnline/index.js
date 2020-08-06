import React, { useState, useEffect } from 'react'

 import { Container, UserName } from './styles';

function UsersOnline({socketIOClient}) {
  const socket = socketIOClient;
  const [usersInChat, setNewUsersInChat] = useState([]);

    //Função que se conecta ao servidor
    const handleSocketIO = () => {            

      //Recebe a resposta do servidor referente a lista de usuários online
      socket.on('usersList', (response) => {             
        setNewUsersInChat(response);    
      });
  }
  
  //Evento disparado ao iniciar a página
  useEffect(() => {    
    handleSocketIO();
  }, []);

  return (
      <Container>
        {usersInChat.map((item, key) => 
          <UserName key={item.id}>{item.username}</UserName>
        )}
      </Container>
  )
}

export default UsersOnline;