function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, temp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg != 'string') {
                reject(new Error('Valor inválido'))
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise'); 
        }, temp);
    })
}


// esperaAi('mensagem 1', rand(1, 3))
// .then((resposta) => {
//     console.log(resposta);
//     return esperaAi('mensagem 2', rand(1, 3))
// }).then((resposta) => {
//     console.log(resposta);
//     return esperaAi( 123, rand(1, 3))
// }).then((resposta) => {
//     console.log(resposta);
// }).catch( e => {
//     console.log(e)
// })

const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(123, rand(1, 5)),
]

// Promise.all Promise.race Promise.resolve Promise.reject
// --------------------------------------------------------------------------------------------------------------------------
// Promise.all

// Promise.all(promises)
// .then( (valor) => {
//     console.log(valor);
// }).catch(e => {
//     console.log(e);
// });

//---------------------------------------------------------------------------------------------------------------------------
// Promise.race

Promise.race(promises)
.then( (valor) => {
    console.log(valor);
}).catch(e => {
    console.log(e);
});

//---------------------------------------------------------------------------------------------------------------------------
// Promise.resolve

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache')
    }
}