import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from './styles'

function CustomButton({value, disabled}) {
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
        <Button disabled={disabled} onClick={onClickEvent}>{value}</Button>
    )
}

export default CustomButton;