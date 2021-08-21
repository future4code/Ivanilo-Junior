import axios from 'axios';
import React from 'react';

export default class ListaPlaylist extends React.Component{
state={
    lista:[]
}
componentDidMount(){
    this.pegarPlaylists();
}
componentDidUpdate(){
    this.pegarPlaylists();
}
pegarPlaylists = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
        headers:{
            Authorization: 'ivanilo-junior-johnson'
        }
    }).then((response)=>{
        this.setState({lista:response.data.result.list})
    })
}
apagarPlaylist = (id) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}
    `,{
        headers:{
            Authorization: 'ivanilo-junior-johnson'
        }
    })
}


    render(){
        const printLista = 
        this.state.lista.map((item,i)=>
        {return <li key={i}>{item.name}
        <button onClick={()=>{this.apagarPlaylist(item.id)}}>x</button>
        </li>})

        return(
            <div>
                <h3>
                    Playlists
                </h3>
                {printLista}
            </div>
        )
    }

}