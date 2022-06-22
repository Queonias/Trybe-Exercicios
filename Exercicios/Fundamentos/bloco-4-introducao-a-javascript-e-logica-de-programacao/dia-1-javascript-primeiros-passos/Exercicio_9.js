// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.


const num1 = 5;
const num2 = 3;
const num3 = 5;

validadorNum1 = num1 % 2 === 0
validadorNum2 = num2 % 2 === 0
validadorNum3 = num3 % 2 === 0

if (!validadorNum1 || !validadorNum2 || !validadorNum3){
    console.log("True");
} else {
    console.log("False");
}