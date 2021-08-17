import React from 'react';
import Usuarios from './Paginas/Usuarios'
import Home from './Paginas/Home'
import styled from 'styled-components';

const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 100%;
padding: 10%;
`

export default class App extends React.Component{
  state={
    Pagina:'Home'
  }
  onClickUsuarios = () =>{
    if(this.state.Pagina === 'Home'){
      this.setState({Pagina:'Usuarios'})
    }else{
      this.setState({Pagina:'Home'})
    }
  }

  render(){
    let page;
    let buttonName;
    if(this.state.Pagina === 'Home'){
      buttonName = 'Usuarios'
    }else if (this.state.Pagina==='Usuarios'){
      buttonName = 'Home'
    }

    if(this.state.Pagina === 'Home'){
      page = <Home/>
    }else if (this.state.Pagina==='Usuarios'){
      page = <Usuarios/>
    }
    return(
    
    <div>
      <button onClick = {this.onClickUsuarios}>{buttonName}
      </button>
      <Main>
        {page}
      </Main>
    </div>
    )
  }
}
