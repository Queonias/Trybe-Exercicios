//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 1;
const b = 2;
const c = 5;

console.log(`Os números escolhidos foram:${a}, ${b}, ${c} `);

if (a > b && a > c) {
    console.log(`${a} é o maior número entre eles`);
} else if (b > a && b > c) {
    console.log(`${b} é o maior número entre eles`);
} else if (c > a && c > b) {
    console.log(`${c} é o maior número entre eles`);
} else {
    console.log("Há números com valores iguais.");
}
