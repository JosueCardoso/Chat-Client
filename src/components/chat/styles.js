import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  border: 1px solid #CACACA;
`;

export const MessageContainer = styled.div`
  height: 500px; 
  border: 1px solid #CACACA;
`;

export const InputMessageContainer = styled.div`
  height: 94px;
  border: 1px solid #CACACA;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputMessage = styled.textarea`
  width: 670px;
  height: 50px;
  border: 2px solid #CACACA;
  border-radius: 15px 0px 0px 15px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  resize: none;  
`;

export const ButtonSend = styled.button`
  width: 70px;
  height: 72px;
  background-color: #FFF;
  border: 2px solid #CACACA;
  font-weight: bold;
  color: #767676;
  border-radius: 0px 15px 15px 0px;
  margin-left: 10px;
  cursor: pointer;  
  outline: none;

  &:hover{
    color: #000;
    box-shadow: 0px 0px 5px 1px #CACACA;
  }
`;


