/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const cartaUsurario = comprarCarta()
const sCartaUsuario = comprarCarta()
const cartaPc = comprarCarta()
const sCartaPc = comprarCarta()

console.log("Bem vindo ao jogo de Blackjack!")
    if (confirm("Iniciar uma nova rodada?")){
      console.log("Usuário - cartas:",cartaUsurario.texto, sCartaUsuario.texto,"- pontuação: ",cartaUsurario.valor + sCartaUsuario.valor )
      console.log("Computador - cartas:",cartaPc.texto,sCartaPc.texto,"- pontuação:",cartaPc.valor+sCartaPc.valor);
      if (cartaUsurario.valor+sCartaUsuario.valor>sCartaPc.valor+cartaPc.valor &&cartaUsurario.valor+sCartaUsuario.valor<=21 ){
         console.log("O usuário ganhou!")
      }else if (cartaPc.valor+sCartaPc.valor>cartaUsurario.valor+sCartaUsuario.valor && sCartaPc.valor+cartaPc.valor<=21){
         console.log("O computador ganhou!")
      }else{
         console.log("Empate!")
      }
    }else{
       console.log("O jogo acabou.")
       
}
console.log