// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// const {pokemons, getPokemonDetails, handlePokemonSearch} = require('./exercicio_8');

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, handlePokemonSearch } = require('./exercicio_8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails('Pikachu', (error, _message) => {
      try {
        expect(error).toEqual(expectedError);
        done();
      } catch (error) {
        done(error);
      }
    })
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedStrind = 'Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas';
    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedStrind);
        done();
      } catch (error) {
        done(error);
      }
    })
  });
});