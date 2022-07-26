const arr = ['Ana', 'Pedro', 'Giovana'];

const filtered = arr.filter((element, indice, array) => element === 'Ana');

console.log(filtered); // Retorna um array com o nome ana [ 'Ana' ]

//---------------------------------------------------------------------------

const notasEstudantes = [
    {
        nome: 'Joicy',
        nota: 100
    },
    {
        nome: 'Ronald',
        nota: 50
    },
    {
        nome: 'Ana',
        nota: 90
    },
    {
        nome: 'Carol',
        nota: 70
    },
]

// notasEstudantes.filter((element) => console.log(element));

const estudantesComAprovacao = notasEstudantes.filter((pessoas) => pessoas.nota >= 80);

console.log(estudantesComAprovacao); //[ { nome: 'Joicy', nota: 100 }, { nome: 'Ana', nota: 90 } ]

const estudantesSemAprovacao = notasEstudantes.filter((pessoas) => !(pessoas.nota >= 80));

console.log(estudantesSemAprovacao); 

//---------------------------------------------------------------------------

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven);


//---------------------------------------------------------------------------

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
    );
    
    console.log(verifyAgeDrive(objPeople));
    // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
    
//---------------------------------------------------------------------------

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]


//----------------------------------------------------------------------------

const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

const novasPessoas = pessoas.map((element) => element.toLocaleUpperCase());

console.log(novasPessoas);

const novasPessoas2 = pessoas.map((element) => {
    const registro = {};
    registro.nome = element;
    registro.empresa = 'Trybe';
    return registro;
});

console.log(novasPessoas2);

//----------------------------------------------------------------------------

const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];


const nomes = persons.map((pessoas) => `${pessoas.firstName} ${pessoas.lastName}`)

console.log(nomes);

//----------------------------------------------------------------------------

const numbers3 = [1, 2, 3, 4, -5];

const negativeNumbers = numbers3.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers3); // [ 1, 2, 3, 4, -5 ]

//----------------------------------------------------------------------------

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const novaLista = (produtos, precoLista) => produtos.map((product, index) => ({product : precoLista[index]}));

console.log(novaLista(products, prices));

//----------------------------------------------------------------------------

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

//   const periodomatutindo = estudantes.filter((estudante) => estudante.turno === 'Manhã')
//   .map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

//   console.log(periodomatutindo);


  //----------------------------------------------------------------------------

  const statuss = (name, listEstudantes) =>{
   const statusEstudant = listEstudantes.find((estudante) => estudante.nome === name);
    const materiass = statusEstudant.materias
    .map((materias) => materias.nota >= 60 ? `${materias.name} --> Aprovado`:`${materias.name} --> Reprovado`);
    return materiass;
  }


  console.log(statuss('Natalia', estudantes))

// const reportStatus = (name, students) => {
//     const studentInfo = students.find((student) => student.nome === name);
//     return studentInfo.materias.map((materia) => (
//       `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
//     ));
//   };
  
//   console.log(reportStatus('Natalia', estudantes));

//----------------------------------------------------------------------------


  