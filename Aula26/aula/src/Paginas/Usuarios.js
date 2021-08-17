import axios from 'axios';
import React from 'react';

export default class Usuarios extends React.Component{
state={
    ListaUsuarios:[]
}

componentDidMount(){
    this.exibirPLaylist();
}
componentDidUpdate(){
    this.exibirPLaylist();
}
exibirPLaylist = () => {axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
        headers:{
            "Authorization": "ivanilo-junior-johnson"
        }
    }).then((response)=>{
        this.setState({ListaUsuarios:response.data});
    })
}

onClickRemover = (id) => {
    axios.delete
    (`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
        headers:{
            Authorization: 'ivanilo-junior-johnson'
        }
    }).then((response)=>{
        alert('Usuario removido!')
    }).catch((error)=>{
        alert(error)
    })
}

    render(){
        const mostrarPlaylist = this.state.ListaUsuarios.map((item,i)=>{
            return <li key={i}>{item.name}<button onClick={()=>{this.onClickRemover(item.id)}}>x</button></li>
        })
         return(
            <div>
                <h2>Usuarios</h2>
                {mostrarPlaylist}
            </div>
        )
    }
}
