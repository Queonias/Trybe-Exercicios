const btnEnviar = document.getElementById('btn-enviar');
const name = document.getElementById('name');
const email = document.getElementById('email');
const opcoes = document.querySelector('.opcoes');
const bntApagar = document.getElementById('btn-apagar');
const textArea = document.getElementById("resposta");
const data = document.getElementById('date');
const concordoUm = document.getElementById('concordo1');
const concordoDois = document.getElementById('concordo2');


function pegaValorDoRadio () {
    const radio = document.querySelector('input[name="opcoes"]:checked');
    return radio;
}

function apagaValor () {
    const radio = pegaValorDoRadio();
    radio.checked = false;
    email.value = "";
    name.value = "";
    textArea.value = "";
    data.value = '';
    concordoUm.checkout = false;
    concordoDois.checkout = false;
}


btnEnviar.addEventListener('click', function (e) {
    e.preventDefault();
})

opcoes.addEventListener('click', pegaValorDoRadio); 
bntApagar.addEventListener('click', apagaValor);



