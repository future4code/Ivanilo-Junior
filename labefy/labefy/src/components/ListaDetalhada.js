import React from 'react'
import axios from 'axios'

export default class ListaDetalhada extends React.Component{
state={
    lista:[],
    musicas:[],
    ids:'',
    srcDoAudio:'',
}
componentDidMount(){
    this.pegarPlaylists();
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
    onClickAdcionar = (id) =>{
        let pergunta = window.confirm('Deseja adcionar uma musica a playlist?')
            if(pergunta===true){
               const nomeMusica= prompt('Nome da Musica:');
               const artistaMusica = prompt('Nome do Artista/Banda:');
               const urlMusica = prompt('Link da Musica:');
               axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,{
                   'name':nomeMusica,
                   'artist':artistaMusica,
                   'url':urlMusica,
               },{
                   headers:{
                       Authorization:'ivanilo-junior-johnson'
                   }
               }).then((response)=>{
                   alert('Musica adcionada com sucesso!')
               }).catch((error)=>{
                   alert(error)
               })
            }
    }
    onClickPlay = (url) =>{
        this.setState({srcDoAudio:url})
    }


    render(){
        const printMusicas = this.state.musicas.map((item,i)=>{
            return <div><p key={i}>Musica: {item.name}</p><p>Artista: {item.artist}</p>
            <button onClick={()=>{{this.onClickPlay(item.url)}}}>{'>'}</button></div>
        });

        const printLista = this.state.lista.map((item,i)=>
        {{return <li key={i}>{item.name}
        <button onClick={()=>{{this.pegarMusicas(item.id)}}}>^</button>
        <button onClick={()=>{{this.onClickAdcionar(item.id)}}}>+</button>
        {this.state.ids===item.id ?<p>{printMusicas}</p>:undefined}
        </li>}});
console.log(this.state)
        return(
            <div>
                {printLista}
                <audio src={this.state.srcDoAudio} controls preload autoPlay></audio>
            </div>
        )
    }
}