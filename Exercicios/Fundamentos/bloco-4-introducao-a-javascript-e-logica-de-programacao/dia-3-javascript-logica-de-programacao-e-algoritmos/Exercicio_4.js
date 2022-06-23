// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

// Declarando Váriáveis 
let conjuntoNumPrimos = [];

// Procura os numeros primos e coloca em um array
for(let numA = 2; numA <= 50; ++numA) {
    let controle = 0;
    for(let i = 2; i <= numA; ++i){
        if (numA % i === 0) {
            controle++
        }
    }
    if(controle === 1){
        conjuntoNumPrimos.push(numA);
    }

}


//Procura o maior número primo
let maiorNumeroPrimo = conjuntoNumPrimos[0];
for(let i = 0; i < conjuntoNumPrimos.length; ++i){
    if(conjuntoNumPrimos[i] > maiorNumeroPrimo){
        maiorNumeroPrimo = conjuntoNumPrimos[i];
    }
}

console.log(maiorNumeroPrimo);




