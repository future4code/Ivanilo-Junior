/* Exercicio de interpretação 1
 
-Na primeira declaração aparecerá 'a  undefined' pois a variavel esta indefinida.
-Na segunda aparecerá 'b . null' pois o valor do array é nulo.
-Na terceira aparecerá 'c . (11) que corresponde ao tamnaho do array.
-Na quarta aparecerá 'd . 3', pois o três corresponde a posição 0 do array.
-Na quinta aparecerá 'e . 3,19,5,6,7,8,9,10,11,12,13. Pois substituimos o valor da segunda posição do array por 19.
-Na sexta aparecerá 'f . 9' pois o valor de i mais 6 corresponde a sexta posição do array.

Exercicio de interpretação 2
- A saida será:  "SUBI NUM ÔNIBOS EM MIRROCOS"*/

// Exercicio de escrita de código 1

const emailUsuario = prompt("Qual seu email?")
const nomeUsuario = prompt("Qual seu nome?")
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)

// Exercicio de escrita de codigo 2

let comidas = ["Lasanha","Sanduiches","Temaki","Bolo","Laranja"]
console.log(comidas)

console.log("Essas são suas comidas preferias:", comidas)

let perguntaUsuario = prompt("Qual sua comida preferida?")
comidas[1] = perguntaUsuario
console.log(comidas)

//Exercicio de escrita de codigo 3

let listaDeTarefas = []
let perguntaUm = prompt("Diga uma tarefa que realizara no seu dia")
let perguntaDois = prompt("Diga mais uma tarefa")
let perugntaTres = prompt("Diga a ultima tarefa")

listaDeTarefas.push(perguntaUm,perguntaDois,perugntaTres)
console.log(listaDeTarefas)

let perguntaQuatro = prompt("Escreva o indice de qual das tarefas ja realizou.Sendo elas: 0, 1 ou 2")
 
listaDeTarefas.splice(perguntaQuatro,perguntaQuatro)

 console.log(listaDeTarefas)

