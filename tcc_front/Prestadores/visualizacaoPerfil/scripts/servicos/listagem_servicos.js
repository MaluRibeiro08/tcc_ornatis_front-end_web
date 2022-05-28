"use strict"

import {  getServicosPorEmpresa} from "./servicos.js";

const criar_container_especialidade = (id_especialidade, nome_especialidade) =>
{
    const container_mae = document.getElementById("container_geral_listagem_servicos");
    const container_especialidade = document.createElement("div");

    container_especialidade.classList.add("container_listagem_especialidade");
    container_especialidade.id = `container_listagem_especialidade${id_especialidade}`;

    container_especialidade.innerHTML = 
    `
        <div class="container_titulo_especialidade">
            <h2>${nome_especialidade}</h2>
        </div>

        <div class="container_listagem_especialidade${id_especialidade}">            
            
        </div>

    `;

    container_mae.appendChild(container_especialidade)
    
    return document.getElementById(`container_listagem_especialidade${id_especialidade}`)
}


const criar_card_servico = (servico) =>
{
    // console.log(servico)

    const card_servico = document.createElement("div");

    card_servico.classList.add("card_servico");
    card_servico.id = `id_servico${servico.id_servico}`;

    card_servico.innerHTML = 
    `
        <div class="container_informacoes_servico">
        <h4 class="nome_servico">${servico.nome_servico}</h4>
        <div class="container_duracao_servico">
            <p>Duração:</p>
            <p class="duracao_servico">${servico.tempo_duracao} min</p>
        </div>
        </div>
        <div class="container_preco_servico">
            <p>R$ ${servico.preco.toString().replace(".", ",")}</p>
        </div>
        <div class="container_acoes_servico">
            <span class="material-symbols-outlined">event</span>
        </div>
    `;

    return(card_servico)
}


const listarServicosSalao = async (id_empresa) =>
{
    const servicos = await getServicosPorEmpresa(id_empresa);

    console.log(servicos)

    let contador =0;
    if (servicos.length != 0 && servicos != null) 
    {
        while (contador < servicos.length) 
        {
            const id_especialidade_do_servico = servicos[contador].id_especialidade;
            const nome_especialidade_do_servico = servicos[contador].nome_especialidade;

            //VERIFICANDO SE HÁ UM CONTAINER PRA ESPECIALIDADE DO SERVICO
            const container_servicos_especialidade = document.getElementById(`container_listagem_especialidade${id_especialidade_do_servico}`)
            if(container_servicos_especialidade == null) // se não tiver, cria e coloca dentro
            {
                const container_especialidade = criar_container_especialidade(id_especialidade_do_servico, nome_especialidade_do_servico);
                const card_servico = criar_card_servico(servicos[contador]);
                container_especialidade.appendChild(card_servico)
            }
            else //se tiver, coloca o servico dentro
            {
                const card_servico = criar_card_servico(servicos[contador]);
                container_servicos_especialidade.appendChild(card_servico)        
            }

            contador = contador+1;
        }

        const container_avisos = document.getElementById("container_aviso_servicos");
        container_avisos.style.display = "none"; //tirando aviso de "sem serviços"
        document.getElementById("container_cabecalho_listagem_servicos").style.display = "flex"; //mostrando a barra de pesquisa e filtragem

    }

    
}

export {listarServicosSalao}