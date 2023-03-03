const urlFrotas = '';
const urlServicos = '';
const urlMotorista = '';

const principalSuperior = document.querySelector('');
const listaFrotas = document.querySelector('');
const listaMotoristas = document.querySelector('');

const principalInferior = document.querySelector('');
const listaServicos = document.querySelector('');
const listaManutencao = document.querySelector('');

function carregar() {
    const optionsFrotas = { method: 'GET' };

    fetch(urlFrotas, optionsFrotas)
        .then(response => response.json())
        .then(res => {
            console.log(res)
            res.forEach(dados => {
                let tabela = listaFrotas.cloneNode(true)
                tabela.classList.remove("model")
                tabela.querySelector('.marcaFrota').innerHTML = 'Marca: ' + dados.marca
                tabela.querySelector('.modeloFrota').innerHTML = 'Modelo: ' + dados.modelo
                tabela.querySelector('.placaFrota').innerHTML = 'Placa: ' + dados.placa
                principalSuperior.appendChild(tabela)
            });
        })
        .catch(err => console.error(err));
}