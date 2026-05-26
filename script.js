// Função que será executada ao clicar no botão
function gerarTabuada() {

    // Pega o valor do input
    const numeroInput = document.getElementById('numeroInput');
    let numero = parseInt(numeroInput.value);

    // Pega a div onde a tabuada será exibida
    const resultadoDiv = document.getElementById('resultadoTabuada');

    // Limpa o conteúdo anterior
    resultadoDiv.innerHTML = '';

    // Verifica se foi digitado um número válido
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = '<p>Digite um número válido.</p>';
        return;
    }

    // Adiciona um título
    resultadoDiv.innerHTML += `<h2>Tabuada do Número ${numero}:</h2>`;

    // Laço de repetição de 1 até 10
    for (let i = 1; i <= 10; i++) {

        let resultado = numero * i;

        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

// Seleciona o botão
const btnGerar = document.getElementById('btnGerar');

// Adiciona o evento de clique
btnGerar.addEventListener('click', gerarTabuada);