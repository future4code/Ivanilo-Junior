import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import adcplaylist from '../icones/adcplaylist.png'

const Body = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 60px;
`
const InputPlaylist = styled.input`
border-radius:30px;
border: none;
height: 20px;
border:solid 2px;
`
const BotaoAdcionar = styled.button`
border-radius: 30px;
border:none;
`
const Texto = styled.h3`
padding-right: 10px;
`
export default class CriarPlaylist extends React.Component{
state={
    InputName:'',
}

OnChangeInputName = (event) =>{
    this.setState({InputName:event.target.value})
}

CreatePlaylist = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
        'name':this.state.InputName
    },{
        headers:{
            Authorization: 'ivanilo-junior-johnson'
        }
    }).then((response)=>{
        alert('Playlist Criada!')
    }).catch((error)=>{
        alert(error)
    })
}


    render(){
        return(
    <Body>
        <Texto>Adcionar Playlist</Texto>
        <InputPlaylist 
        onChange={this.OnChangeInputName}
        placeholder='Nome'>
        </InputPlaylist>
        <img src={adcplaylist}onClick={this.CreatePlaylist}></img>
    </Body>
    )
}
}