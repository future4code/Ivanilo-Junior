import React from 'react'
import axios from 'axios'

export default class ListaDetalhada extends React.Component{
state={
    lista:[],
    detalhes:[]
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
            this.setState({detalhes:response.data.result})
        })
    }

    render(){
        
        const printLista = this.state.lista.map((item,i)=>
        {{return <li key={i}>{item.name}<button onClick={()=>{{this.pegarMusicas(item.id)}}}>+</button></li>}})

        console.log(this.state)
        return(
            <div>
                {printLista}
            </div>
        )
    }
}