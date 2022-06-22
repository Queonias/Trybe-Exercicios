// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const precoCompra = 100;
const precoVenda = 140;
const imposto = precoCompra*0.2;
const custoProduto = precoCompra + imposto;
const controle = precoCompra > 0 && precoVenda > 0;


if (controle) {
    let lucro = (precoVenda - custoProduto) * 1000;
    console.log(lucro);
} else {
    console.log("Valor inválido!")
}

