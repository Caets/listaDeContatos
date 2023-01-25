const form = document.getElementById('form-contato');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
})

function adicionaContato() {
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    if(nomes.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já foi inserido`);
    }else{
    nomes.push(inputNome.value);
    telefones.push(parseFloat(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('table');
    corpoTabela.innerHTML = linhas;
}
