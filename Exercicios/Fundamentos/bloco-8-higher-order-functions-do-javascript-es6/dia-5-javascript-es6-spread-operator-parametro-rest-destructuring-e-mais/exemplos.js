//Spread Operator

const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = [ 'F40',...carros, ...motos];

console.log(veiculos);



//---------------------------------------------------------------------------------------
const conhecimentosTrybe = {
    softSkills: true,
    hardSkills: true,
    trabalho: true
}

const pessoa = {
    nome: 'Nádia',
    idade: '28',
    cidade: 'BH'
}

const pessoaTrybe = {
    ...pessoa,
    ...conhecimentosTrybe,
    esporte:'Corrida'
}

console.log(pessoaTrybe);

//---------------------------------------------------------------------------------------

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

//---------------------------------------------------------------------------------------

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
    'JAN', 'FEV', 'MAR',
    'ABR', 'MAI', 'JUN',
    'JUL', 'AGO', 'SET',
    'OUT', 'NOV', 'DEZ'
] */

//---------------------------------------------------------------------------------------
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

//---------------------------------------------------------------------------------------

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

//---------------------------------------------------------------------------------------

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
};

const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
} */

//---------------------------------------------------------------------------------------

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Manga', 'Graviola'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Bota', 'calça', 'Blusa'];

const fruitSalad = (fruit, additional) => {
    // Esreva sua função aqui
    return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

//---------------------------------------------------------------------------------------

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

//   --------------------------------------------------------------------------------------

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// /-------------------------------------------------------------------------------------

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas


// /-------------------------------------------------------------------------------------

// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

//   ------------------------------------------------------------------------------------------


const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];
  console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


//   -------------------------------------------------------------------------------------------------

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: name, b: classAssigned, c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática

//   -----------------------------------------------------------------------------------------------------

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality } = person;

  console.log(nationality);


  //    ----------------------------------------------------------------------------------------------

