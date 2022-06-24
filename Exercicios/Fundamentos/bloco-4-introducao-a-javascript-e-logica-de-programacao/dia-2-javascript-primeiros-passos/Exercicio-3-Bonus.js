//Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let i = 0; i < numbers.length; i++) {
  //Pecorrendo o array fornecido

  for (let indice = i; indice < i + 1; indice++) {
    //Cria a lógica para selacionar números no intervalo de 2 em 2

    if (i + 1 < numbers.length) {
      //Cria novo array com a regra do exercício
      let novoNum = numbers[i] * numbers[i + 1];
      novoArray.push(novoNum);
    } else if (i + 1 === numbers.length) {
      let novoNum = numbers[i] * 2;
      novoArray.push(novoNum);
      break;
    }
  }
}

console.log(novoArray);
