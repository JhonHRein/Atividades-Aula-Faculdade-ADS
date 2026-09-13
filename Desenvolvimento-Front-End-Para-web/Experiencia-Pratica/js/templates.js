// js/templates.js

export const templates = {
    inicio: () => `
        <section>
            <h2>INSTITUTO CONECTA 
                <span class="badge badge-destaque">Oficial</span>
                <span class="badge badge-novo">Novo</span>
            </h2>

            <div class="alerta alerta-info">
                <strong>Informativo:</strong> Bem-vindo ao portal do Instituto Conecta. Nossos projetos de voluntariado estão com inscrições abertas!
            </div>

            <h3>Quem somos</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos nisi necessitatibus sequi libero expedita commodi...</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae tempora nemo ex nihil distinctio esse praesentium...</p>
            <img src="img/conecta500g.png" alt="Foto dos colaboradores da ONG.">
        </section>
    `,

    projetos: () => {
        const listaProjetos = [
            { titulo: "Atividades de voluntariado", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
            { titulo: "Campanhas de doações", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
            { titulo: "Projetos Realizados", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
            { titulo: "Resultados", texto: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." }
        ];

        const cardsHTML = listaProjetos.map(item => `
            <section>
                <h2>${item.titulo}</h2>
                <p>${item.texto}</p>
            </section>
        `).join('');

        return cardsHTML;
    },

    cadastro: () => `
        <form id="form-cadastro" action="#" method="post">
            <fieldset>
                <legend>Dados de cadastro</legend>
                
                <label for="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" required minlength="3" placeholder="Exemplo: João Bonifácio">
                
                <label for="email">E-Mail</label>
                <input type="email" id="email" name="email" required placeholder="exemplo@gmail.com">
                
                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" required pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" placeholder="(11) 99999-9999">
                
                <label for="nascimento">Data</label>
                <input type="date" id="nascimento" name="nascimento" required>
                
                <label for="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00">
            </fieldset>
            
            <fieldset>
                <legend>Endereço</legend>

                <label for="cep">CEP</label>
                <input type="text" id="cep" name="cep" required pattern="\\d{5}-\\d{3}" placeholder="00000-000">
            </fieldset>
            
            <button type="submit">Enviar Cadastro</button>
        </form>
    `
};