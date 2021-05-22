/* Exercício de interpretação 1
-No primeiro bloco de código sera imprimido no cosole a variavel b que tem o valor 10. No segundo bloco sera imprimido o valor de  "a" e "b", que correspondem aos números 10 e 5.

Exercício de interpretação 2 
-De acordo com o fluxo de troca de valores o console irá imprimir: 10, 10, 10.

Exercício de interpretação 3
-Podemos substituir a variavel "p" por "horasTrabalhadas" e a variavel "t" por "salarioDiario".*/

//Exercicio de escrita de código 1

let nome 
let idade 
console.log(typeof nome, idade)

// Nao houve resposta do console pois os valores estão indefinidos.

const perguntaNome = prompt("Qual seu nome?")
const perguntaIdade = prompt("Qual sua idade?")

console.log(typeof perguntaNome)
console.log(typeof perguntaIdade)

// O console retornou que perguntaNome era uma String e que perguntaIdade também era um string.

console.log("Olá",perguntaNome,"você tem",perguntaIdade,"anos.")

//Exercicio de escrita 2

const perguntaUm =  "Você é humano?"
const perguntaDois = "Você está vivo?"
const perguntaTres=  "Está bem?"

const respostaUm = "SIM"
const repostaDois = "SIM"
const respostaTres = "SIM"

console.log(perguntaUm,respostaUm)
console.log(perguntaDois,repostaDois)
console.log(perguntaTres,respostaTres)

//Exercicio de escrita 3 

let a = "10"
let b = "25"
let novoNumero 

novoNumero = a
a = b 
b = novoNumero


console.log("O novo valor de a é",a)
console.log("O novo valor de b é",b)
