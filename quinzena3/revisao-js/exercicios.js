// EXERCÍCIO 01
function inverteArray(array) {
  let b =[]
  for(let i = 0;i<array.length;i++)
    b.unshift(array[i])
return b
}
// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let b = []
  for(let i = 0;i<array.length;i++)
  if(array[i]%2===0){
    b.push(array[i]*array[i])
  }
return b
}
// EXERCÍCIO 03
function retornaNumerosPares(array) {
let b = []
for(let i =0;i<array.length;i++)
if(array[i]%2===0){
  b.push(array[i])
}
return b
}
// EXERCÍCIO 04
function retornaMaiorNumero(array) {
let mn = 0
for(let i = 0;i<array.length;i++)
if(array[i]>mn){
  mn = array[i]
}
return mn 
}
// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
const respostas = [false,false,true,true,true]
return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let a = []
  for(let i =0;i<n*2;i++)
  if(i%2===0){
    a.push(i)
  }
  return a 
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a===b && a ===c){
    return "Equilátero"
  }else if(a===b && a!==c){
    return "Isósceles"
  }else{
    return "Escaleno"
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let numeros ={
  maiorNumero: 0,
  maiorDivisivelPorMenor: 0,
  diferenca: 0
  }
  if(num1>num2){
    numeros.maiorNumero=num1
  }else{
    numeros.maiorNumero=num2
  }
  if(num1%num2===0){
    numeros.maiorDivisivelPorMenor=true
  }else if(num2%num1===0){
    numeros.maiorDivisivelPorMenor=true
  }else{
    numeros.maiorDivisivelPorMenor=false
  }
  if(num1-num2>=0){
    numeros.diferenca=num1-num2
  }else{
    numeros.diferenca=num2-num1
  }
  return numeros
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for(let i =0; i<array.length;i++){
    for(let x= 0;x<array.length;x++){
      if(array[x]>array[x+1]){
        let temp = array[x]
        array[x] = array[x+1]
        array[x+1] = temp
      }
    }
  }
  let novoArray = []
  let segundoMenor = array[1]
  let segundoMaior = array.length-1
novoArray.push(segundoMaior)
novoArray.push(segundoMenor)
return novoArray
}
// EXERCÍCIO 11m    
function ordenaArray(array) {
  for(let i =0; i<array.length;i++){
    for(let x= 0;x<array.length;x++){
      if(array[x]>array[x+1]){
        let temp = array[x]
        array[x] = array[x+1]
        array[x+1] = temp
      }
    }
  }
  return array
}
// EXERCÍCIO 12
function filmeFavorito() {
const filme={
nome: "O Diabo Veste Prada",
ano: 2006,
diretor: "David Frankel",
atores:[" Meryl Streep"," Anne Hathaway"," Emily Blunt"," Stanley Tucci"]
}
return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme={
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores:["Meryl Streep","Anne Hathaway","Emily Blunt","Stanley Tucci"]
  }
  return`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
const retangulo={
  largura:lado1,
  altura:lado2,
  perimetro:2*(lado1+lado2),
  area:lado1*lado2
}
return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
    const pessoaUm = {
    nome: pessoa.nome,
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco
  }
  const pessoaDois = {...pessoaUm}
  pessoaDois.nome = "ANÔNIMO"
return pessoaDois
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maiorDeIdade = arrayDePessoas.filter((item,indice,array)=>{
    return item.idade>=18
  })
return maiorDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menorDeIdade = arrayDePessoas.filter((item,indice,array)=>{
    return item.idade<18
  })
return menorDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
const multDois = (inputNUmero)=>{
return inputNUmero*2
}
const resultado = array.map(multDois)
return resultado
}
// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const multDois = array.map((item,indice,array)=>{
    return item*2
  })
  const paraString = multDois.map((item)=>{
    return item.toString()
  })
return paraString 
}

// EXERCÍCIO 17C
function verificaParidade(array) {
const novoArray =[]
array.map((numero)=>{
  if(numero%2===0){
    novoArray.push(`${numero} é par`)
  }else{
    novoArray.push(`${numero} é ímpar`)
  }
})
return novoArray
}
// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
const pessoasAutorizadas = pessoas.filter((nome,indice,array)=>{
  return nome.idade>14 && nome.idade<60 && nome.altura>1.5
})
return pessoasAutorizadas
}
// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const NaoAutorizadas = pessoas.filter((nome,indice,array)=>{
    return nome.idade<=14 || nome.idade>60 || nome.altura<1.5
  })
  return NaoAutorizadas
}
// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
consultasNome.sort(function(a,b){
  if(a.nome<b.nome){
    return -1
  }else{
    return true 
  }
})
return consultasNome
}
// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
}
// EXERCÍCIO 20
function calculaSaldo(contas) {
}

