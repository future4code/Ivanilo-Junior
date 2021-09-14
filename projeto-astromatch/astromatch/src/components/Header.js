import React from 'react';
import iconepessoa from '../icones/iconepessoa.png';
import styled from 'styled-components';

const DivPrincipal = styled.div`
display: flex;
justify-content: space-around;
text-align: center;
align-items: center;
height: 40px;
`

export default function Header(){

    return(
        <>
        <DivPrincipal>
        <h3>Astromatch</h3>
        <div>
        <img src={iconepessoa} alt='icone'></img>
        </div>
        </DivPrincipal>
        <hr></hr>
        </>
    );
}