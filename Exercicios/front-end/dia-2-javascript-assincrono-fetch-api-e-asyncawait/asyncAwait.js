function rand(min = 0, max = 3) {
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


// esperaAi('Fase 1', rand())
//     .then((valor) => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand())
//     })
//     .then((valor) => {
//         console.log(valor)
//         return esperaAi('Fase 3', rand())
//     })
//     .then((valor) => console.log(valor))
//     .catch( e => {
//         console.log(e);
//     });

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        
        const fase3 = await esperaAi(3, rand());
        console.log('Terminamos na frase: ', fase3);
    } catch(e) {
        console.log(e);
    }
}

// executa();

//  Os três estados de uma promise
// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada
