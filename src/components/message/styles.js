import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const UsernameContainer = styled.p`
    margin: 5px;
    color: ${({messageColor}) => messageColor };
`;

export const MessageContainer = styled.p`
    margin: 5px;
    line-break: anywhere;
    color: ${({messageColor}) => messageColor };
`;
