/* Exercicio de Interpretação de Código 1
a) Serão impressos em sequencia, o item da posição 0, o indice da posição do item, e o array completo.

Exercicio de Interpretação de Código 2
a)Será retornado um novo array com os itens"nome" do array original.

Exercicio de Interpretação de Código 3
a)Serão retornados todos os itens que são diferentes do apelido "Chijo"*/

//Exercício de Escrita de Código 1
/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
//a)
const nomesPets = pets.map((item,index,array)=>{
return item.nome
})
console.log(nomesPets)
//b)

const dogsSalsicha = pets.filter((item,index,array)=>{
return item.raca === "Salsicha"
})
console.log(dogsSalsicha)

//c)

const filtarRaca = pets.filter((item,index,array)=>{
     return item.raca === "Poodle"
})

const msgPets = filtarRaca.map((filtarRaca,index,array)=>{
    return`Você ganhou um cupom de desconto de 10% para tosar o/a ${filtarRaca.nome}`
})
console.log(msgPets)
*/
//Exercício de Escrita de Código 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a)
const apenasNomes = produtos.map((produto)=>{
    return produto.nome
})

//c)
const apenasBebidas = produtos.filter((item)=>{
    return item.categoria === "Bebidas"
   })
console.log(apenasBebidas)

//d)
const filtrarYpe = produtos.filter((item)=>{
    return item.nome.includes("Ypê")
})
console.log(filtrarYpe)

//b)
/*
let novoArray = [...produtos]
const semCategoria = novoArray.map((item,index,array)=>{
    delete item.categoria
})
const filtrarPreco = novoArray.filter((item,index,array)=>{
    item.preco = item.preco - item.preco/100*5
})
console.log(filtrarPreco)
*/

//e)
const filtraYpe = produtos.filter((item)=>{
    return item.nome.includes("Ypê")
})
const msgYpe = filtraYpe.map((filtraYpe)=>{
    return`Compre ${filtraYpe.nome} por ${filtraYpe.preco}`
})
console.log(msgYpe)