import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Input = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
background-color: lightgrey;
box-shadow: black;
margin: 10px;
text-align : center ;
justify-content: center;
align-items: center;
`
class App extends React.Component {
  state={
    posts :[{
      nomeUsuario:'paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },{
      nomeUsuario:'ivan',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/130'
    },{
      nomeUsuario:'cacau',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/140'
    } ],
    ValorInputNome:'',
    ValorInputFotoUsuario:'',
    ValorInputPost:''
  }

  ListaDePost = () => this.state.posts.map((item)=>{
    return <Post
      nomeUsuario = {item.nomeUsuario}
      fotoUsuario = {item.fotoUsuario}
      fotoPost = {item.fotoPost}
    ></Post>;
  })
    AdcionarPost = () => {
      const NovoPost ={
        nomeUsuario: this.state.ValorInputNome,
        fotoUsuario:this.state.ValorInputFotoUsuario,
        fotoPost: this.state.ValorInputPost
      }
      const NovoArrayPost = [...this.state.posts, NovoPost];

      this.setState({
        posts:NovoArrayPost
      })
    }

    onchangeInputnomeUsuario = (event) =>{
      this.setState({ValorInputNome:event.target.value})
    }
    onchangeInputfotoUsuario = (event) =>{
      this.setState({ValorInputFotoUsuario:event.target.value})
    }
    onchangeInputfotoPost = (event) =>{
      this.setState({ValorInputFotoPost:event.target.value})
    }
  render() {
    return (
      
      <MainContainer>
        <Input>
        <p>Poste uma Foto</p>
        <input placeholder="Nome" value={this.state.nomeUsuario} onChange={this.onchangeInputnomeUsuario}/>
        <input placeholder="Foto Usuario" value={this.state.fotoUsuario} onChange={this.onchangeInputfotoUsuario}/>
        <input placeholder="Foto Post" value={this.state.fotoPost} onChange={this.onchangeInputfotoPost}/>
        <button onClick={this.AdcionarPost}>Postar</button>
        </Input>
        {this.ListaDePost()}  
      </MainContainer>
    );
  }
}
export default App;
