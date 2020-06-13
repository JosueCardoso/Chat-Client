import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #CACACA;
`;

export const UserName = styled.span`
  width: 130px;
  margin-bottom: 10px;
  color: ${({isCurrentUser}) => isCurrentUser ? 'blue' : '#767676'};
`;
