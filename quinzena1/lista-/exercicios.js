// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
 const perguntaAltura = prompt("Qual a altura?")
 const perguntaLargura = prompt("Qual a largura?")

console.log(perguntaAltura*perguntaLargura)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt("Qual o ano atual?")
  const anoDeNascimento = prompt("Qual seu ano de nascimento?")

  console.log(anoAtual-anoDeNascimento)
}

// Exercício 3
function calculaIMC() {
  const pesoGramas = prompt("Qual seu peso em gramas?")
  const alturaMetros = prompt("Qual sua altura em metros?")
console.log(pesoGramas/alturaMetros**2)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const perguntaNome = prompt("Qual seu nome?")
  const preguntaIdade = prompt("Qual sua idade?")
  const perguntaEmail = prompt("Qual seu email?")
 
  console.log(`Meu nome é ${perguntaNome}, tenho ${preguntaIdade} anos, e o meu email é ${perguntaEmail}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const perguntaUm = prompt("Diga uma cor favorita:")
  const perguntaDois = prompt("Mais uma cor:")
  const perguntaTres = prompt("A ultima cor favorita:")
   const cores = [perguntaUm,perguntaDois,perguntaTres]
   console.log(cores)
  
}

// Exercício 6
function retornaStringEmMaiuscula() {
 const perguntaUm = prompt("Digite uma palavra")
console.log(perguntaUm.toLocaleUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const perguntaUm =Number(prompt("Diga um valor de um espetaculo:"))
  const perguntaDois = Number(prompt("Diga o valor de cada ingresso:"))
  let minimoIngressosVendidos = perguntaUm/perguntaDois
  console.log(minimoIngressosVendidos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let perguntaUm = prompt("Qual seu nome?")
  let perguntaDois = prompt("Qual seu sobrenome?")

console.log(perguntaUm>=perguntaDois)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let stringA = prompt("Sua cor favorita?")
  let stringB = prompt("Sua fruta favorita?")
  console.log(stringA.toLowerCase() === stringB.toLowerCase())
}

// Exercício 10
function checaRenovacaoRG() {
 const anoAtual = Number(prompt("Qual o ano atual?"))
 const anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
 const anoEmissao = Number(prompt("Quando sua identidade foi emitida?"))

 let idadePessoa = anoAtual-anoNascimento
 let idadeRg = anoAtual - anoEmissao 

let necessitaReno = idadePessoa<=20 && idadeRg >= 5
let necessitaRenoV = idadePessoa >20 && idadePessoa <=50 && idadeRg >= 10
let necessitaRenova = idadePessoa>50 && idadeRg >=15

console.log((idadePessoa<=20 && idadeRg >= 5) ||(idadePessoa >20 && idadePessoa <=50 && idadeRg >= 10) ||( idadePessoa>50 && idadeRg >=15))
}

// Exercício 11
function checaAnoBissexto() {
  const pergunta = Number(prompt("Digite um ano:"))
console.log((pergunta%400 === 0) || (pergunta%4 === 0) && !(pergunta%100 ===0 )) 
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
   const perguntaIdade = prompt("Voê tem mais de 18 anos?")
   const perguntaEscola = prompt("Você tem ensino medio completo?")
   const perguntaHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
   let resposta = "sim"
console.log((perguntaIdade === resposta) && (perguntaEscola === resposta) && (perguntaHorario === resposta))
}