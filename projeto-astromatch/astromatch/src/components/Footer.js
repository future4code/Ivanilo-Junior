import React from 'react';
import aceptvazio from '../icones/acptvazio.png';
import cancelvazio from '../icones/cancelvazio.png';
import styled from 'styled-components';
import axios from 'axios';

const DivBotoes = styled.div`
display: flex;
justify-content: space-evenly;
`

export default function Footer(props){
    
    const body = {
        "id":props.id,
        "choise":true
    }
    const bod = {
        "id":props.id,
        "choise":false
    }

    const onclickAceitar = () =>{
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ivan/choose-person',body,{
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((r)=>{
        })
        props.funcao()
    }
    const onclickCancelar = () =>{
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ivan/choose-person',bod,{
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((r)=>{
        })
        props.funcao()
    }
    return(
        <DivBotoes>
        <img src={cancelvazio} alt='icone' onClick={onclickCancelar}></img>
        <img src={aceptvazio} alt='icone'onClick={onclickAceitar}></img>
        </DivBotoes>
    )
}