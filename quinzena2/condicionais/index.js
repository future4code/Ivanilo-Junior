/* Exercício de Interpretação de Código 1
a)O código verifica se o resto da divisão do numero inserido pelo usuário é 0,
caso seja, imprime "Passou no teste", caso contrario "Não passou no teste".
b)O consolo imprime passou no teste para numero que divididos por 2 resultem em um resto de 0, por exemple numeros pares.
c)O console imprime Não passou no teste para numeros que dividos por 2 não resultem em um resto de 0, por exemplo numeros impares.

Exercício de Interpretação de Código 2
a) O código deve mostrar o preço de acordo com a fruta que o usuario escolher e em seguir imprimir
uma mensagem informando a fruta escolhida e seu preço.
b) O preço da fruta maçã é R$ 2.25.
c)Ainda assim o console imprimiria o preço de Pêra.

Exercício de Interpretação de Código 3
a)A primeira linha pede pra que o usuario insira um numero, transformandoo em number e depois armazenando em uma variavel.
b)A mensagem seria "esse numero passou no teste" pois 10 é maior que 0. Se fosse -10 não hariva mensagem.
c)Sim, pois a variavel mensagem esta definida apenas dentro do escopo do if.

Exercício de Escrita de Código 1*/
const pergunta = Number(prompt("Qual sua idade?"))
if (pergunta>18){
    console.log("Você pode dirigir!")
} else {console.log("Você não pode dirigir!")
}

// Exercício de Escrita de Código 2
const question = prompt("Em qual turno você estuda?Digite M - matutino, V - vespertino,N - Noturno")
if (question.toLocaleLowerCase() === "m"){
    console.log("Bom Dia!")
}else if (question.toLocaleLowerCase()==="v"){
    console.log("Boa Tarde!")
} else if(question.toLocaleLowerCase()==="n"){
    console.log("Boa Noite!")
}

//Exercício de Escrita de Código 3
const questionn = prompt("Em qual turno você estuda?Digite M - matutino, V - vespertino, N - Noturno")
let retorno 
switch (questionn.toLocaleLowerCase()) {
    case "m":
    retorno = "Bom Dia!"
    break;
    case "v":
    retorno = "Boa Tarde!"
    break;
    case "n":
    retorno = "Boa Noite!"
    break;
    default:
        break;
}
console.log(retorno)

//Exercício de escrita de Código 4
const pergUm = prompt("Qual o gêreno do filme que vão assitir?")
const pergDois = Number(prompt("Qual o valor do ingresso?"))

if (pergUm.toLocaleLowerCase() === "fantasia" && pergDois <15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme!")
}