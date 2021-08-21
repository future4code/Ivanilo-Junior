import React from 'react';
import axios from 'axios';

export default class CriarMusica extends React.Component{
state={
    InputNome:'',
    InputArtista:'',
    InputUrl:''
}
onChangeNome = (event) =>{
    this.setState({InputNome:event.target.value})
}
onChangeArtista = (event) =>{
    this.setState({InputArtista:event.target.value})
}
onChangeUrl = (event) =>{
    this.setState({InputUrl:event.target.value})
}
onClickCriar = (id) =>{
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,{
        'name':this.InputNome,
        'artist':this.InputArtista,
        'url':this.InputUrl
    },{
        headers:{
            Authorization:'ivanilo-junior-johnson'
        }
    }).then((response)=>{
        alert('Musica Adcionada')
    }).catch((error)=>{
        alert(error)
    })
    this.setState({InputNome:'',InputArtista:'',InputUrl:''})
}

    render(){
        return(
            <div>
                <input placeholder='Musica' onChange={this.onChangeNome}></input>
                <input placeholder='Artista'onChange={this.onChangeArtista}></input>
                <input placeholder='Link' onChange={this.onChangeNome}></input>
                <button onClick={this.onClickCriar}>Criar</button>
            </div>
        )
    }
}