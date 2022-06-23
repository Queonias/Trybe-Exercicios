//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let tamanho = array[0].length;


// for(let i = 0; i < array.length; ++i) {
//     console.log(array[i]);
// }
let controle = array[0].length;
let maiorPalavra = '';
let menorPalavra = '';



for(let i = 0; i < array.length; ++i){
if(array[i].length > controle) {
    controle = array[i].length
    maiorPalavra = array[i];
}
}

for(let i = 0; i < array.length; ++i){
    if(array[i].length < controle) {
        controle = array[i].length
        menorPalavra = array[i];
    }
    }


console.log(maiorPalavra, menorPalavra);