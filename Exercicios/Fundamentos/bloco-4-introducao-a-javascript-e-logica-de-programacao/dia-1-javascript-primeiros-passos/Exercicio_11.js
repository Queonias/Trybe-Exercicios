let salarioBruto = 3558.58;
let salarioDescINSS;
let salarioDescIR = 0;
let salarioLiquido;

// Calculo do INSS
if (salarioBruto <= 1556.94){
    salarioDescINSS = salarioBruto*0.92
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioDescINSS = salarioBruto*0.91;    
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioDescINSS = salarioBruto*0.89;
} else if(salarioBruto > 5189.82){
    salarioDescINSS = salarioBruto - 570.88;
} 

// Calculo do Imposto de Renda
if (salarioDescINSS <= 1903.98){
    salarioDescIR = salarioDescINSS;
} else if (salarioDescINSS >= 1903.99 && salarioDescINSS <= 2826.65){
    salarioDescIR = salarioDescINSS*0.925;    
} else if(salarioDescINSS >= 2826.66 && salarioDescINSS <= 3751.05){
    salarioDescIR = salarioDescINSS*0.85;
} else if(salarioDescINSS >= 3751.06 && salarioDescINSS <= 4664.68){
    salarioDescIR = salarioDescINSS*0.775;
} else if(salarioDescINSS > 4664.68){
    salarioDescIR = salarioDescINSS*0.725;
} 


salarioLiquido = salarioDescIR;

console.log(salarioLiquido);