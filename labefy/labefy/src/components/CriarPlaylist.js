import React from 'react';
import axios from 'axios';

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
    this.setState({
        InputName:''
    })
} 
    render(){
        return(
    <div>
        <input 
        onChange={this.OnChangeInputName}
        placeholder='Playlist'> 
        </input>
        <button 
        onClick={this.CreatePlaylist}>+
        </button>
    </div>
    )
}
}