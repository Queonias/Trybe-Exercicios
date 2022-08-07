const { rejects } = require("assert");
const { Console } = require("console");
const { resolve } = require("path");

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// a promisse fica dentro da função que será chamada.
// Sem a promisses o código não seria executado em sequencia

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Erro'));
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

// Encadeando o then 

esperaAi('Conexão com o BD', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando os dados da BASE', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.then(() => {
    console.log('Exibe os dados na tela');
    return esperaAi('Frase teste', rand(1, 3));
})
.then((resposta) => {
    console.log(resposta);
    return esperaAi(123, rand(1, 3));
})
.then((resposta) => {
    console.log(resposta);
})
.catch( e => {
    console.log('Erro', e);
})

console.log('Isso vai ser exibido antes de qualquer uma promisse');

// A ideia de usar uma promisse é falar para o JavaScript para que ele execute as funções em ordem.

 