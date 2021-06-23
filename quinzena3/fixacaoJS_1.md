function calculaSalario(qtdeCarrosVendidos, valorTotalVendas){
let valorcarro = qtdeCarrosVendidos/valorTotalVendas;
let comissao = valorcarro*100(+valorcarro/100*5);
let salario = 2000,000 + comissao;
return salario
}