import React from 'react';

 import { Container, UserName } from './styles';

function usersOnline() {
  const usersInChat = [
                      {
                        id: 1,
                        username: 'Usuário1',
                        isCurrentUser: false
                      }, 
                      {
                        id: 2,
                        username: 'Usuário2',
                        isCurrentUser: false
                      }, 
                      {
                        id: 3,                        
                        username: 'Usuário3',
                        isCurrentUser: true
                      }
                    ];

  return (
      <Container>
        {usersInChat.map((item, key) => 
          <UserName key={item.id} isCurrentUser={item.isCurrentUser}>{item.username}</UserName>
        )}
      </Container>
  )
}

export default usersOnline;