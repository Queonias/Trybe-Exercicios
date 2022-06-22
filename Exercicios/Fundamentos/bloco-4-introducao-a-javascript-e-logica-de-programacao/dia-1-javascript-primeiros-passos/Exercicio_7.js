// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


// for(let i = 0; i <= 90; i+= 10) {}

for(let i = 0; i <= 100; i += 10) {

  let porcentagem = i;

  if (porcentagem >= 90 ) {
    console.log("A");
  } else if (porcentagem >= 80 && porcentagem < 90) {
    console.log("B");
  } else if (porcentagem >= 70 && porcentagem < 80) {
    console.log("C");
  } else if (porcentagem >= 60 && porcentagem < 70) {
    console.log("D");
  } else if (porcentagem >= 50 && porcentagem < 60) {
    console.log("E");
  } else if ( porcentagem < 50) {
    console.log("F");
  }

}