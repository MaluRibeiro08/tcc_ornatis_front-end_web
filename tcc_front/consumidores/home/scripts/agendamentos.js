"use strict"
import { getUrlImagemServico } from "./servicos.js";
const carregarAgendamentosConsumidor =   (id_consumidor) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/consumidor/agendamento/?id_consumidor=${id_consumidor}&acao=listarAgendamentos`)



const getMesExtenso = (dataNumerica) =>
{
    const meses = 
    [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
      
    var data = new Date(dataNumerica);
    var mes = meses[data.getMonth()];

    return mes.slice(0, 3);
}

const criar_card_agendamento = (agendamento) =>
{
    if(document.getElementById(`${agendamento["data_agendamento"]}`) != null)
    {
        //console.log("vamos criar o card pq o container já existe")

        const container_mae = document.getElementById(agendamento["data_agendamento"])
        const novo_agendamento = document.createElement("div")

        novo_agendamento.classList.add("container_compromisso")
        novo_agendamento.classList.add = `container_compromisso${agendamento["id_agendamento"]}`

        novo_agendamento.innerHTML = 
        `
            <div class="container_horarios_compromisso">
                <div class="container_horarios">
                    <div class="container_geral_horario container_geral_horario_inicio">
                        <p class="horario horario_inicio">${agendamento["hora_inicio"].substring(0, 5)}</p>
                    </div>

                    <div class="container_geral_horario container_geral_horario_termino">
                        <p class="horario horario_termino">${agendamento["hora_fim"].substring(0, 5)}</p>
                    </div>
                </div>
                <div class="container_enfeite_horarios">
                    <div class="bolinha_horario_compromisso"></div>
                    <div class="linha_entre_bolinhas"></div>
                    <div class="bolinha_horario_compromisso"></div>
                </div>
                
            </div>
            <div class="container_informacoes_compromisso">
                <div class="container_titulo_compromisso">
                    <p class="titulo_compromisso">${agendamento["nome_servico"]}</p>
                </div>
                <div class="container_demais_infos_compromisso">
                    <div class="container_info_salao_compromisso">
                        <span class="material-symbols-outlined">pin_drop</span>
                        <a class="nome_salao" id="${agendamento["id_empresa"]}" href="../visualizacaoPerfil/index.html?id_empresa=${agendamento["id_empresa"]}" target= "_blank">${agendamento["nome_fantasia"]}</a>
                    </div>
                    <div class="container_info_preco_compromisso">
                        <span class="material-symbols-outlined">monetization_on</span>
                        <p class="valor_agendamento">R$ ${parseFloat(agendamento["preco"]).toFixed(2).toString().replace(".", ",")}</p>
                    </div>
                </div>
            </div>
        `

        container_mae.appendChild(novo_agendamento)
    }
    else
    {
        //console.log('deu problema,não foi encontrado o container do dia desse agendamento')
    }
}

const criar_container_dia = (id_container_dia) =>
{
    const container_mae = document.getElementById("lista_agendamentos")
    const novo_container_dia = document.createElement("div")

    novo_container_dia.classList.add("container_geral_listagem_dia")
    novo_container_dia.classList.add = `container_geral_listagem_dia_${id_container_dia}`

    novo_container_dia.innerHTML = 
    `
        <div class="container_dia_mes">
            <p class="dia_mes">${id_container_dia.substring(id_container_dia.lastIndexOf("-")+1, id_container_dia.length)}</p>
            <p class="mes">${getMesExtenso(id_container_dia)}</p>
        </div>

        <div class="container_compromissos_dia" id="${id_container_dia}" >

        </div>

    `

    container_mae.appendChild(novo_container_dia)

    //console.log("criando container do dia" + id_container_dia)
}

const criar_lista_agendamentos = (arr_agendamentos) =>
{
    let contador_agendamentos = 0;

    while(contador_agendamentos < arr_agendamentos.length)
    {
        const agendamento = arr_agendamentos[contador_agendamentos];
        if(document.getElementById(`${agendamento["data_agendamento"]}`) == null)
        {
            //console.log("teste - sem container para esse dia")
            //console.log(agendamento)
            criar_container_dia(agendamento["data_agendamento"]);
            criar_card_agendamento(agendamento);
        }
        else
        {
            criar_card_agendamento(agendamento);
        }
        // criar_card_agendamento(agendamento)
        // //console.log(agendamento["data_agendamento"])
        contador_agendamentos = contador_agendamentos+1;
    }
}

const agendar = (servico) =>
{
    //COMPLETAR MODAL
        //VERIFICANDO DESCONTO
        let preco_servico_tratado = parseFloat(servico.preco).toFixed(2);
        let situacao_desconto = 'none'

        if(servico.desconto != 0 && servico.desconto != null)
        {
            preco_servico_tratado = (servico.preco - (servico.preco * (servico.desconto/100))).toFixed(2);
            situacao_desconto = "flex";
        }

    document.getElementById("id_servico_modal_cadastro_agendamento").value = servico.id_servico;
    document.getElementById("nome_salao_modal_cadastro_agendamento").textContent = servico.nome_fantasia
    document.getElementById("localizacao_salao_modal_cadastro_agendamento").textContent = `${servico.nome_cidade}-${servico.sigla_estado}`
    document.getElementById("imagem_item_modal_cadastro_agendamento").src = `${getUrlImagemServico()+'/'+servico.imagem_servico}`
    document.getElementById("nome_item_modal_cadastro_agendamento").textContent = servico.nome_servico
    document.getElementById("categoria_parte-corpo_modal_cadastro_agendamento").textContent = `${servico.nome_especialidade + " - " + servico.nome_parte_corpo}`
    document.getElementById("duracao_modal_cadastro_agendamento").textContent = servico.tempo_duracao+ " min"
    document.getElementById("preco_final_modal_cadastro_agendamento").textContent = preco_servico_tratado.toString().replace(".", ",")
    document.getElementById("container_desconto_modal_cadastro_agendamento").style.display = situacao_desconto
    document.getElementById("preco_original_modal_cadastro_agendamento").textContent = parseFloat(servico.preco).toFixed(2).toString().replace(".", ",")
    document.getElementById("desconto_modal_cadastro_agendamento").textContent = ' -' + servico.desconto + "%";

    //ABRIR MODAL
        document.getElementById("container_modais").style.display = "flex"

    
    console.log(servico)
}

export {carregarAgendamentosConsumidor, criar_lista_agendamentos, agendar}