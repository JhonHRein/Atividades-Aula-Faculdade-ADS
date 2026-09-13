// js/storage.js

export function salvarCadastro(dadosFormulario) {
    localStorage.setItem('cadastroVoluntario', JSON.stringify(dadosFormulario));
}

export function carregarDadosSalvos() {
    const dadosSalvos = localStorage.getItem('cadastroVoluntario');

    if (dadosSalvos) {
        const objetoDados = JSON.parse(dadosSalvos);

        if (document.getElementById('nome')) {
            document.getElementById('nome').value = objetoDados.nome || '';
            document.getElementById('email').value = objetoDados.email || '';
            document.getElementById('telefone').value = objetoDados.telefone || '';
            document.getElementById('cpf').value = objetoDados.cpf || '';
            document.getElementById('cep').value = objetoDados.cep || '';
        }
    }
}