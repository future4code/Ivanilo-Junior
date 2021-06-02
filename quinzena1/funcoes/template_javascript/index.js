/* Exercício de Interpretação de Código 1

a) Será impresso o valor de 2*5 e 10*5
b) Se retirassemos o console.log o valor seria retonado com a realização das funções.

Exercício de Interpretação de Código 2
a) A função irá retornar o texto inserido pelo usuario e em lowercase e verficar
se a palavra cenoura está nele retornando um booleano.
b)i. -eu gosto de  cenoura - true
  ii.-cenoura é bom pra vista - true
  iii.-cenouras crescem na terra - true*/

// Exrecício de Escrita de Código 1
// Função A
function imprimirNome(){
    const frase = "Eu sou Ivan, tenho 25 anos, moro em São Paulo e sou estudante."
    return frase
}
console.log(imprimirNome())

//Função B

 function imprimirNomeDois(nome,idade, cidade,profissão){
     const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`
    return frase
    }
console.log(imprimirNomeDois("Ivan",25,"sp","estudante"))

// Exercício de Escrita de Código 2
//Função A
function somarNumeros(numero,numeroDois){
    const soma = numero + numeroDois
    return soma
}
console.log(somarNumeros(1,1))
//Função B
function verificarNumero(numero,numeroDois){
    const verificar = numero>=numeroDois
    return verificar
}
console.log(verificarNumero(1,10))
//Função C
function verificarPar(numero){
    const verificar = numero% 2 === 0
    return verificar
}
console.log(verificarNumero(13))
//Função D

function imprimirMensagem(frase){
    const mensagem = frase.toUpperCase()
   console.log(mensagem.length, mensagem)
}
console.log(imprimirMensagem("ola eu sou o ivan"))

//Exercício de Escrita de Código 3
function somar(numero,numeroDois){
    const soma = numero + numeroDois
    return soma 
}
function dividir(numero,numeroDois){
    const divisao = numero/numeroDois
    return divisao
}
function subtracao(numero,numeroDois){
    const subtracao = numero - numeroDois
    return subtracao
}
function multiplicar(numero,numeroDois){
    const multiplicacao = numero*numeroDois
    return multiplicacao
}
const pedidoUm = Number(prompt("Insira um numero:"))
const pedidoDois = Number(prompt("Insira outro numero:"))
console.log("Numeros inseridos:", pedidoUm,"e", pedidoDois)
console.log("Soma:",somar(pedidoUm,pedidoDois))
console.log("Divisão:",dividir(pedidoUm,pedidoDois))
console.log("Subtração:",subtracao(pedidoUm,pedidoDois))
console.log("Multiplicação:",multiplicar(pedidoUm,pedidoDois))