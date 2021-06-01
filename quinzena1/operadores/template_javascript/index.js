//Exerceicio de interpretaçao 1
//Na situação a o resultado será falso
//Na situação b o resultado será falso
//Na situação c o resultado será verdadeiro
//Ma situação d o resultaod será verdadeiro

//Exercício de interpretação 2
/*Para ajuda-lo devemos transformar a entrada do prompt em numeros, pois caso contrario
o console ira imprimir um numero ao lado do outro */

let primeiroNumero =Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

//Exercicio de Escrita de Código 1

const primeiraPergunta = Number(prompt("Qual sua idade?"))
const segundaPergunta = Number(prompt("Qual a idade do seu melhor amigo?"))
let diferencaIdade = primeiraPergunta - segundaPergunta
console.log("Sua idade é maior que a do seu amigo?-",primeiraPergunta>segundaPergunta)
console.log("A diferença de idade é de ", diferencaIdade,"anos.")

//Exercicio de Escrita de Código 2

const numeroPar = Number(prompt("Coloque um numero par!"))
console.log(numeroPar%2)
/* Se o usuario inserir um numero par o resultado esperado é zero pois não a resto na divisão,
caso contrario o console apresentara o numero restante da divisão.*/

//Exercicio de Escrita de Código 3

const perguntaIdadeAnos = Number(prompt("Qual sua idade em anos?"))
let idadeMeses = perguntaIdadeAnos*12
let idadeDias = perguntaIdadeAnos* 365.5
let idadeHoras = idadeDias*24
console.log("Sua idade em meses é de",idadeMeses,"meses.")
console.log("Sua idade em dias é de",idadeDias,"dias.")
console.log("Sua idade em horas é de", idadeHoras,"horas.")

// Exercicio de Esxrita de Codigo 4

const numeroUm =Number(prompt("Digite um numero."))
const numeroDois = Number(prompt("Digite outro numero."))
let divisaoUm = numeroUm%numeroDois===0
let divisaoDois = numeroDois%numeroUm===0

console.log("O primeiro numero é maior que segundo?",numeroUm>numeroDois)
console.log("O primeiro numero é igual ao segundo?",numeroUm===numeroDois)
console.log("O primeiro numero é divisível pelo segundo?",divisaoUm)
console.log("O segundo numero é divisível pelo primeiro?",divisaoDois)