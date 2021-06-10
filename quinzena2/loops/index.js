/*Exercícios de Interpetração de Código 1
a)O laço do esercício cria uma variavel i que atualiza a cada volta e soma seu
numero a variavel valor até que o numero seja menor que 5.
b)10.

Exercício de Interpretação de Código 2
a)Serão impressos todos os numeros maiores que 18.
b)Sim; Caso queira imprimir todos os numeros do array basta restirar a parte do if e apenas
imprimir a variavel número desta forma:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
	console.log(numero)
}

Exercício de Interpretação de Código 3
Seriam impressoa 4 linhas cada uma com a quantidade de asteriscos respectivas 
a numeração da linha.
*/

//Exercício de Escrita de Código 1

//const p = Number(prompt("Digite em números quantos animais de estimação você tem:"))

//if(p===0){
//    console.log("Que pena você pode adotar um pet!")
//}else{
//let i = 0
//let a = []
//while(i<p){
//    const pd =prompt("Digite o nome de seu(s) pet(s):")
//    i++;a.push(pd)
//}
//console.log(a)
//}

//Exercício de Escrita de Código 2
//a) 
//let arrayOriginal = [1,2,3,4,5]
//let index=0
//while(index<arrayOriginal.length){
//    console.log(arrayOriginal[index])  
//    index++
//}
//b)
//let arrayOriginal = [1,2,3,4,5]
//let index=0
//while(index<arrayOriginal.length){
//    console.log(arrayOriginal[index]/10)  
//    index++
//}
//c)
let arrayOriginal = [0,1,2,3,4,5]
let novoArray = []
let index = 0
while(index<arrayOriginal.length){
    if(arrayOriginal[index]%2===0){
        novoArray.push(arrayOriginal[index])
}
index++
}
console.log(novoArray)
//d)










//e)
let maior = 0
let menor = 0 
for(let num of arrayOriginal){
    if(num>maior){
        maior = num
    }
}
for (let nume of arrayOriginal){
    if(nume<menor){
        menor = nume
    }
}
console.log(`O maior numero é ${maior} e o menor numero é ${menor}`)

