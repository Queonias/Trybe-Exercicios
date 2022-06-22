//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
//Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum
//ângulo for inválido o programa deve retornar uma mensagem de erro.

let alfa = 30;
let beta = 45;
let theta = 105;

let verificaSeEhMaiorZero = alfa > 0 && beta > 0 && theta > 0;
let verificaSeSomaEh = 180 === alfa + beta + theta;

if (verificaSeEhMaiorZero && verificaSeSomaEh) {
  console.log("True");
} else if (!verificaSeEhMaiorZero){
  console.log("Ângulo inválido");
} else if (!(verificaSeEhMaiorZero && verificaSeSomaEh)) {
    console.log("False");
}
