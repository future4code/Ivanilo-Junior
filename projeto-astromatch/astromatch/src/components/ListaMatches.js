import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

export default function ListaMatches(){
    
    const [matches,setMatches] = useState([])

    const PegarLista = () =>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ivan/matches')
        .then((resp)=>{
            setMatches(resp.data)
        })
    }
    useEffect(()=>{
PegarLista()
    },[])
    return(
        <>
        </>
    )
}