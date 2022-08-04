// Desafio 9
function encode(frase) {
    let newFrase = '';
    frase = frase.replace(/a/gi, 1);
    frase = frase.replace(/e/gi, 2);
    frase = frase.replace(/i/gi, 3);
    frase = frase.replace(/o/gi, 4);
    frase = frase.replace(/u/gi, 5);
    return frase;
  }
  function decode(code) {
    code = code.replace(/1/gi,'a');
    code = code.replace(/2/gi,'e');
    code = code.replace(/3/gi,'i');
    code = code.replace(/4/gi,'o');
    code = code.replace(/5/gi,'u');
    return code;
  }

  console.log(encode('bcdf').length);

  module.exports = {decode, encode}

//   let l = [w,b,g];
//   l.length