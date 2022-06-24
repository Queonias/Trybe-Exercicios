// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;

// Atravez de loop
for (let i = 0; i <= numbers.length; i += 1){
    if (numbers[i] > maior){
        maior = numbers[i];
    }
}

maior = 0;

//Usando as propriedades
maior = Math.max.apply(null, numbers);

console.log(maior);

