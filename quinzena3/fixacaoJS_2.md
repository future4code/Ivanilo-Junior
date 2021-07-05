```function calculaPrecoTotal(quantidade) {
    let precoUmaD = 1;
    let precoMenosDeUd = 1.3;
    let resultado = 0 ;
    if(quantidade<12){
      resultado = quantidade*precoMenosDeUd
    }else if(quantidade>12){
      resultado = quantidade*precoUmaD
    }else{
      resultado = resultado
    }
    return resultado;
}
calculaPrecoTotal(2)```