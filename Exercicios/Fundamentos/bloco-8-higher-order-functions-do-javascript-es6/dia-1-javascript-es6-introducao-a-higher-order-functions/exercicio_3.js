
const comparaNota = (gab, alunNot) => {
            if (gab === alunNot) {
                return 1;
            } else if (alunNot != 'N.A') {
                return -0.5;
            } else 
            return 0;
};

const somaPontos = (gabarito, respostaAlunos, func) => {
    let pontos = 0;
    for(let i = 0; i < gabarito.length; i += 1) {
        pontos += func(gabarito[i], respostaAlunos[i]);
    }
    return `Total de pontos: ${pontos}`;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
