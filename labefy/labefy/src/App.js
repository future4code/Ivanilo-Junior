import React from  'react';
import CriarPlaylist from './components/CriarPlaylist';
import ListaDetalhada from './components/ListaDetalhada';
import ListaPlaylist from './components/ListaPlaylist';

export default class App extends React.Component{
render(){
  return(
    <div>
      <CriarPlaylist></CriarPlaylist>
      <ListaDetalhada></ListaDetalhada>
    </div>
  )
}
}
