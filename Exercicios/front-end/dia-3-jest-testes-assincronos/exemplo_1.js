const fetch = require('node-fetch');

const consultaCep = async (cep) => {
    try {
        const requisicao = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const resposta = await requisicao.json();
        
        const { logradouro } = resposta;
        return logradouro;
    } catch(error) {
        return error.message;
    }
}

consultaCep('30130010');

module.exports = { consultaCep };