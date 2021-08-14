import axios from 'axios';
import React from 'react';

export default class Usuarios extends React.Component{
state={
    ListaUsuarios:[]
}

imprimirLista = () =>{
    this.state.ListaUsuarios.map((item,indice)=>{
        return (
            <li>{item.indice}</li>
        )
    })
}

componentDidMount(){
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
        headers:{
            "Authorization": "ivanilo-junior-johnson"
        }
    }).then((response)=>{
        this.setState({ListaUsuarios:response.data});
    })
}
    render(){
        console.log(this.state)
         return(
            <div>
                <h1>Usuarios</h1>
                {this.imprimirLista()}
            </div>
        )
    }
}
