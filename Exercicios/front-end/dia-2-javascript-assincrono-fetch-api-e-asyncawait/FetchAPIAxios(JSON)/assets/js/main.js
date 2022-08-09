const getJson = async (callback) => {
  const response = await fetch('pessoas.json');
  const json = await response.json();
  callback(json);
}

// fetch('pessoas.json')
// .then(resposta => resposta.json())
// .then(json => carregaElementosNaPagina(json));
// .then(json => console.log(json[0]));


function carregaElementosNaPagina(json) {
  const table = document.createElement('table');
  json.sort((a, b) => a.nome > b.nome ? 1 : -1).forEach(pessoa => {
    const tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr)
  });

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}

getJson(carregaElementosNaPagina);


