const { consultaCep } = require('./exemplo_1');

it('Verifica se retorna um logradouro', async () => {
    expect(await consultaCep('30130010')).toEqual('Praça Sete de Setembro');
});