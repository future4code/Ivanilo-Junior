import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
height: 75%;
padding:5px;
`
const FotoUsuario = styled.img`
width: 100%;
max-height: 75%;
min-height: 75%;
`
export default function CardPessoa(props){
    return(
        <Div>
            <FotoUsuario src={props.foto} alt='imagem usuario'></FotoUsuario>
            <b>{props.nome},  </b>
            <b>{props.idade}</b>
            <p>{props.bio}</p>
        </Div>
    )
}