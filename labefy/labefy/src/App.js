import React from  'react';
import CriarPlaylist from './components/CriarPlaylist';
import ListaDetalhada from './components/ListaDetalhada';
import ListaPlaylist from './components/ListaPlaylist';
import CriarMusica from './components/CriarMusica';

export default class App extends React.Component{
render(){
  return(
    <div>
<ListaDetalhada></ListaDetalhada>
    </div>
  )
}
}
