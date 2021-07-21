import React from 'react';
import styled from 'styled-components';

const ContainerGrande = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;
const ImagemCard = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;
const NomeCard = styled.h4 `
margin-bottom: 15px;
`;
const Session = styled.section`
display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;
function CardGrande(props) {
    return (
        <ContainerGrande className="bigcard-container">
            <ImagemCard src={ props.imagem } />
            <Session>
                <NomeCard>{ props.nome }</NomeCard>
                <p>{ props.descricao }</p>
            </Session>
        </ContainerGrande>
    )
}

export default CardGrande;