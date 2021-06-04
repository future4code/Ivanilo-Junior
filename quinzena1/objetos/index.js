/*Exercício de Interpretação de Código 1
O console irá imprimir:
"Matheus Nachtergaele", 3 ,"Globo", horario: "14h".

Exercício de Interpretação de Código 2 
a) foi impresso dois valores: false, undefined.
b)Foi retornado false pois a propriedade backender tem o valor false, e undefined porque
altura não está declarado dentro do objeto.

*/

//Exercício de Escrita de Código 1

const pessoa = {
    nome: "Ivanilo", 
    apelidos: ["Ivan", "Junior", "Nilo"]
 }

function frase(nome,apelidos,apelidoDois,apelidoTres){
    console.log(`Eu sou ${nome}, mas pode me chamar de: ${apelidos}, ${apelidoDois} ou ${apelidoTres}.`)
}
console.log(frase(pessoa.nome,pessoa.apelidos[0],pessoa.apelidos[1],pessoa.apelidos[2]))

const mesmaPessoa = {
    ...pessoa,
    apelidos:["Jujuba","Nilinho","Vanvan"]
}
console.log(frase(mesmaPessoa.nome,mesmaPessoa.apelidos[0],mesmaPessoa.apelidos[1],mesmaPessoa.apelidos[2]));

//Exercício de Escrita de Código 2

const eu ={
    nome:"Ivan",
    idade:25,
    profissão:"estudante"
}
const ela = {
    nome:"cacau",
    idade:22,
    profissão:"estudante"
}
function fraseDois(objeto,objetoUm,objetoDois){
    let msg = []
    msg.push(objeto)
    msg.push(objetoUm)
    msg.push(objetoDois)
}
console.log(fraseDois(eu.nome,eu.idade,eu.profissão))