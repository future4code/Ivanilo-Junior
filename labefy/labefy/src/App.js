import React from  'react';
import CriarPlaylist from './components/CriarPlaylist';
import ListaDetalhada from './components/ListaDetalhada';
import styled from 'styled-components';

const DivPrincipal = styled.div`
background-color: lightgray;
height: 100vh;
margin: 0;
padding: 0;
`
const Header = styled.div`
`

export default class App extends React.Component{
render(){
  return(
    <DivPrincipal>
      <CriarPlaylist></CriarPlaylist>
      <ListaDetalhada></ListaDetalhada>
    </DivPrincipal>
  )
}
}
