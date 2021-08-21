import React from 'react'
import axios from 'axios'

export default class ListaDetalhada extends React.Component{
state={
    lista:[],
    musicas:[],
    ids:''
}
componentDidMount(){
    this.pegarPlaylists()
}
componentDidUpdate(){
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
    pegarMusicas = (id) =>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,{
            headers:{
                Authorization:'ivanilo-junior-johnson'
            }
        }).then((response)=>{
            this.setState({musicas:response.data.result.tracks,ids:id})
        })
    }
    onClickAdcionar = () =>{
        const pergunta = prompt('Deseja adcionar uma musica a sua playlist?')
            if(pergunta==='sim'){
               const nomeMusica= prompt('Nome da Musica:')
               const artistaMusica = prompt('Nome do Artista/Banda:')
               const urlMusica = prompt('Link da Musica:')
            }
    }

    render(){
        const printMusicas = this.state.musicas.map((item,i)=>{
            return <div><p key={i}>Musica:{item.name}</p><p>Artista:{item.artist}</p></div>
        })
        const printLista = this.state.lista.map((item,i)=>
        {{return <li key={i}>{item.name}
        <button onClick={()=>{{this.pegarMusicas(item.id)}}}>^</button>
        <button onClick={this.onClickAdcionar}>+</button>
        {this.state.ids==item.id ?<p>{printMusicas}</p>:undefined}
        </li>}})

        return(
            <div>
                {printLista}
            </div>
        )
    }
}