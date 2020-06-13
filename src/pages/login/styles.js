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
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    padding: 30px;
    border: 1px solid #cacaca;
    border-radius: 50px;
    background-color: #FFF;    
    box-shadow: 0px 0px 10px 1px #A2A2A2;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`;

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Divider = styled.div`
    width: 2px;
    height: 300px;
    background-color: #cacaca;
`;

export const Title = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #747474;
`;