import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.input`
display: flex;
flex-direction: column;
`

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
                <h2>Inscreva-se</h2>
                <Input placeholder='Email' onChange={this.onChangeEmail}></Input>
                <Input placeholder='Nome' onChange={this.onChangeNome}></Input>
                <button onClick={this.onClickInscrever}>Inscrever-se</button>
                
             </div>
        )
    }
}