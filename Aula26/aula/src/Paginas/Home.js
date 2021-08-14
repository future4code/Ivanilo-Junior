import React from 'react';
import axios from 'axios';

export default class Home extends React.Component{
    state={
        InputEmail:'',
        InputNome:'',
    }
    onChangeEmail = (event) =>{
        this.setState({InputEmail:event.target.value})
    }
    onChangeNome = (event) =>{
        this.setState({InputNome:event.target.value})
    }
    onClickInscrever = () =>{
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
            'name':this.state.InputNome,
            'email':this.state.InputEmail
        },{
            headers:{
                Authorization:'ivanilo-junior-johnson'
            }
        }).then((response)=>{
            alert('Você se inscreveu!')
        }).catch((error)=>{
            alert(error)
        })
    }
    render(){
        return(
            <div>
                <h1>Inscreva-se</h1>
                <input placeholder='Email' onChange={this.onChangeEmail}></input>
                <input placeholder='Nome' onChange={this.onChangeNome}></input>
                <button onClick={this.onClickInscrever}>Inscrever-se</button>
                
             </div>
        )
    }
}