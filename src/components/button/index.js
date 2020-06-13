import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from './styles'

function CustomButton({value}) {
    const history = useHistory();

    const onClickEvent = () => {

        if(value === "Entrar"){
            //Fazer as validações, autenticações e alterar de página
            let path = `/chat`; 
            history.push(path);
        }

        if(value === "Registrar"){
            //Fazer as validações, enviar o email e limpar o formulário
        }

    }

    return (
        <Button onClick={onClickEvent}>{value}</Button>
    )
}

export default CustomButton;