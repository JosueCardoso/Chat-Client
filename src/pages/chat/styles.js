import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;  
    align-items: center;
    background-color: #F6F6F6;
`;

export const MainBox = styled.div`
    width: 1000px;
    height: 600px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding: 30px;
    border: 1px solid #cacaca;
    border-radius: 50px;
    background-color: #FFF;    
    box-shadow: 0px 0px 10px 1px #A2A2A2;
`;

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #CACACA;
    justify-content: center;
`;
