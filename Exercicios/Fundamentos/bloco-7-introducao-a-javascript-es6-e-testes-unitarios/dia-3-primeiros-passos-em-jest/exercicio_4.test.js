// Para as funções encode e decode crie os seguintes testes em Jest:
// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.


const { decode, encode } = require('./exercicio_4.js');

describe('Testando as funções encode decode', () => {
    it('Teste se decode são funções', () => {
        expect(typeof decode).toBe('function')
    });
    it('Teste se encode são funções', () => {
        expect(typeof encode).toBe('function');
    });
    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
        expect(encode('a e i o u')).toBe('1 2 3 4 5');
    })
    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
        expect(decode('12345')).toBe('aeiou');
    })
    it('Teste se as demais letras/números não são convertidos para função encode;', () => {
        expect(encode('bcdgf')).toBe('bcdgf');
    })
    it('Teste se as demais letras/números não são convertidos para função decode;', () => {
        expect(decode('6789')).toBe('6789');
    })
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro, função encode.', () => {
        expect(encode('ola').length).toBe(3);
    })
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro, função decode.', () => {
        expect(decode('1457').length).toBe(4);
    })
})