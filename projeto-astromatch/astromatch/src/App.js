import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import axios from 'axios';
import CardPessoa from './components/CardPessoa';
import Footer from './components/Footer'
import ListaMatches from './components/ListaMatches';


const JanelaApp = styled.div`
width: 400px;
height: 600px;
transform: translate(-50%, -50%);
border: black solid 1px;
position: fixed;
top: 50%;
left: 50%;
border-radius: 10px;
`
export default function App() {
  
  const [pessoa, setPessoa] = useState({})
  
  const BuscarUser = () =>{
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ivan/person`)
    .then((response)=>{
      setPessoa(response.data.profile)
    })
  }
  useEffect(()=>{
    BuscarUser()
    },[])

  return (
      <JanelaApp>
      <Header></Header>
      <CardPessoa
      nome ={pessoa.name}
      foto ={pessoa.photo}
      idade ={pessoa.age}
      bio={pessoa.bio}
      ></CardPessoa>
      <Footer id={pessoa.id} funcao={BuscarUser}></Footer>
      </JanelaApp>
  );
}


