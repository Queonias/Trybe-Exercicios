// 7 - A função uppercase recebe um parâmetro str e uma callback. Esta função transforma as letras de uma palavra em letras maiúsculas. Escreva um teste que verifique a chamada da função uppercase. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };
  
//   const teste = (string) => {
//     try {
//         expect(string).toBe('MUNDO');
//         done();
//     } catch (error) {
//         done(error);
//     }
// }

  
  it('verifica a chamada da função uppercase', (done) => {
      uppercase('mundo', (string) => {
        try {
            expect(string).toBe('MUNDO');
            done();
        } catch (error) {
            done(erro);
        }
      });
  });
