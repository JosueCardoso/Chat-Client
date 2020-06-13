import styled, {keyframes} from 'styled-components';

const borderAnimation = keyframes`
    0%   {border-color: #626262}
    25%  {border-color: #CACACA}
    50%  {border-color: #FFF}
    75%  {border-color: #CACACA}
    100% {border-color: #626262}
  `;

export const HeaderContainer = styled.div`
  margin-top: 50px;
  border-bottom: 2px solid #747474;
  border-top: 2px solid #747474;
  animation: ${borderAnimation} 3s linear infinite;
`;

export const Title = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 42px;
    font-weight: 400;    
    color: #747474;
    margin:10px;
`;

