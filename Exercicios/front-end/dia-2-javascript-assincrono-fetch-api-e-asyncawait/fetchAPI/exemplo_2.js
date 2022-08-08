const fetch = require('node-fetch');

const getRandomAdvice = () => {
    const url = 'https://api.adviceslip.com/advice';
    const resquest = fetch(url)
    .then((resposta) => resposta.json())
    .then(({ slip:{ id, advice } }) => {
        console.log(id, advice);
    }).catch( e => console.log(e))
}

getRandomAdvice();