//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const a = 2;
const b = 1;

if (a > b) {
  console.log(`O número ${a} é maior que o número ${b}.`);
} else if (b > a) {
  console.log(`O número ${b} é maior que o número ${a}.`);
} else if (b === a) {
  console.log(`O número ${b} é igual ao número ${a}.`);
}
