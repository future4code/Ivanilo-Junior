import React from 'react';

export default class CriarMusica extends React.Component{
state={
    InputNome:'',
    InputArtista:'',
    InputUrl:''
}
onChangeNome = (event) =>{
    this.setState({InputNome:event.target.value})
}
onChangeArtista = (event) =>{
    this.setState({InputArtista:event.target.value})
}
onChangeUrl = (event) =>{
    this.setState({InputUrl:event.target.value})
}

    render(){
        return(
            <div>
                <input placeholder='Musica'></input><button>+</button>
                <input placeholder='Artista'></input><button>+</button>
                <input placeholder='Link'></input><button>+</button>
            </div>
        )
    }
}