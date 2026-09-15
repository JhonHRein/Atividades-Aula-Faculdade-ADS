
import { templates } from './templates.js';
import { salvarCadastro, carregarDadosSalvos } from './storage.js';


const rotas = {
    '#inicio': templates.inicio,
    '#/inicio': templates.inicio,
    '#projetos': templates.projetos,
    '#/projetos': templates.projetos,
    '#cadastro': templates.cadastro,
    '#/cadastro': templates.cadastro
};

function navegar() {
    
    const hash = window.location.hash || '#inicio';
    const renderizar = rotas[hash] || templates.inicio;
    
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = renderizar();

    
    if (hash === '#cadastro' || hash === '#/cadastro') {
        carregarDadosSalvos();
    }
}


window.addEventListener('hashchange', navegar);
window.addEventListener('DOMContentLoaded', navegar);

const appContainer = document.getElementById('app');


appContainer.addEventListener('submit', (event) => {
    if (event.target && event.target.id === 'form-cadastro') {
        event.preventDefault();

        const dadosFormulario = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            cpf: document.getElementById('cpf').value,
            cep: document.getElementById('cep').value
        };

        salvarCadastro(dadosFormulario);
        exibirNotificacao("Cadastro realizado e salvo com sucesso!");
        event.target.reset();
    }
});

function exibirNotificacao(mensagem) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: 'Sucesso!',
            text: mensagem,
            icon: 'success',
            confirmButtonColor: '#007bff',
            timer: 3000
        });
    } else {
        alert(mensagem); 
    }
}