import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import expandir from '../icones/expandir.png';
import adcplaylist from '../icones/adcplaylist.png';
import remover from '../icones/remover.png';
import play from '../icones/play.png'

const DivPrincipla = styled.div`
display:flex;
justify-content: center;
text-align: center;
align-items: center;
flex-direction:column;
`
const PlayerAudio = styled.audio`
position:absolute;
bottom: 0;
`
const Divisoria = styled.hr`
width: 99vw;
border-color: black;
height: 0,1px;
`
const Lista = styled.li`
width: 500px;
list-style-type: none;
display: flex;
justify-content:space-around;
align-items: center;
;
`
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
    apagarPlaylist = (id) =>{
        const mensagem = window.confirm('Deseja mesmo excluir a Playlist?')

        if(mensagem === true){
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}
        `,{
            headers:{
                Authorization: 'ivanilo-junior-johnson'
            }
        }).then((response)=>{
        alert('Playlist excluída com sucesso!')})
    }else{

    }
}


    render(){
        const printMusicas = this.state.musicas.map((item,i)=>{
            return <div><p key={i}>Musica: {item.name}</p><p>Artista: {item.artist}</p>
            <img src={play}onClick={()=>{{this.onClickPlay(item.url)}}}></img></div>
        });

        const printLista = this.state.lista.map((item,i)=>
        {{return <Lista key={i}><h3>{item.name}</h3><div>
        <img src={expandir} onClick={()=>{{this.pegarMusicas(item.id)}}}></img>
        <img src={adcplaylist}onClick={()=>{{this.onClickAdcionar(item.id)}}}></img>
        <img src={remover} onClick={()=>{this.apagarPlaylist(item.id)}}></img>
        {this.state.ids===item.id ?<p>{printMusicas}</p>:undefined}
        </div></Lista>}});
        
        return(
            <DivPrincipla>
                <Divisoria></Divisoria>
                <h3>Playlist's</h3>
                {printLista}
                <PlayerAudio src={this.state.srcDoAudio} controls preload autoPlay></PlayerAudio>
            </DivPrincipla>
        )
    }
}