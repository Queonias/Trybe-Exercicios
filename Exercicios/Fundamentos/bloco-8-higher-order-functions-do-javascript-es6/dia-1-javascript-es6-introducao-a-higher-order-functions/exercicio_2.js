const checkNum = (numGerado, numeroEscolhido) => {
    if (numGerado === numeroEscolhido){
        return "Parabéns você ganhou!!!";
    }
    return "Tente novamente :-(";
}

const geraNumerosAleatorios = (inputNum, func) => {
    const num = Math.floor(Math.random() * (5 - 1)) + 1;
    
    return checkNum(num, inputNum);
}

//Testando 
for(let i = 0; i <= 10; i += 1){
    console.log(geraNumerosAleatorios(3, checkNum));
}


