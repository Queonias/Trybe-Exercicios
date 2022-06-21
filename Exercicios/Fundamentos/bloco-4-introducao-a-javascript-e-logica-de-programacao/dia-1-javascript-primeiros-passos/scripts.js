// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const num = 3;

if (num > 0) {
  console.log(`positivo`);
} else if (num < 0) {
  console.log(`negativo`);
} else if ((num == 0)) {
  console.log(`${num} é um número neutro`);
} else {
    console.log("Entrada inválida.");
}
