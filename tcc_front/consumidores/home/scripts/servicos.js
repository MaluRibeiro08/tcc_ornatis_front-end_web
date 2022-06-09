"use strict"
import { agendar } from "./agendamentos.js"
const pesquisarServicosPorEspecialidade =  (id_especialidade) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/consumidor/servico/?id_especialidade=${id_especialidade}&acao=listarServicosPorEspecialidade`)

const url_imagem_servico = "http://localhost/tcc_ornatis_back-end/api-ornatis/upload/imagem_servico/"

const getUrlImagemServico = () => {return url_imagem_servico;}
const criarListaServicos = (arr_servicos) =>
{

    // {
    //     "id_servico": "118",
    //     "nome_servico": "Hidratação de cabelos",
    //     "tempo_duracao": "15",
    //     "habilitado": "1",
    //     "desconto": "10",
    //     "intervalo": "5",
    //     "preco": "12",
    //     "imagem_servico": "594b212b9353c77654c4b36dedd0f7bf.jpg",
    //     "detalhes": "Descrição e detalhes da hidratação",
    //     "id_empresa": "3",
    //     "ativo_para_uso": "1",
    //     "id_especialidade": "5",
    //     "id_parte_corpo": "4",
    //     "nome_fantasia": "Salão teste perfeito",
    //     "imagem_perfil": "03ffcdd9fed321ad3c3a037a296b0b5f.jpeg",
    //     "nome_cidade": "Carapicuíba",
    //     "sigla_estado": "SP",
    //     "nome_parte_corpo": "Cabelo",
    //     "nome_especialidade": "Hidratação"
    // }


    arr_servicos.map
    (
        (servico) =>
        {

            //VERIFICANDO DESCONTO
                let preco_servico_tratado = parseFloat(servico.preco).toFixed(2);
                let situacao_desconto = 'style="display: none;"'

                if(servico.desconto != 0 && servico.desconto != null)
                {
                    preco_servico_tratado = (servico.preco - (servico.preco * (servico.desconto/100))).toFixed(2);
                    situacao_desconto = "";
                }

            const container_mae = document.getElementById("container_listagem")
            const novo_agendamento = document.createElement("div")

            novo_agendamento.classList.add("container_item_listagem")
            novo_agendamento.id = `${servico.id_servico}`

            novo_agendamento.innerHTML = 
            `
                <input type="hidden" name="id_servico" value="${servico.id_servico}">
                <div class="container_cabecalho">
                    <h6 class="nome_salao_servico" id="nome_salao">
                        ${servico.nome_fantasia}
                    </h6>
                    <span class="localizacao_salao">${servico.nome_cidade}-${servico.sigla_estado}</span>
                </div>
                <div class="container_informacoes_gerais">
                    <div class="container_imagem_item">
                        <img src="${url_imagem_servico+'/'+servico.imagem_servico}" alt="" class="imagem_item">
                    </div>
                    <div class="container_informacoes">
                        <h5 class="nome_item">${servico.nome_servico}</h5>
                        <p class="categoria_parte-corpo">${servico.nome_especialidade + " - " + servico.nome_parte_corpo}</p>
                        <div class="container_duracao">
                            <span class="material-symbols-outlined">schedule</span>
                            <p class="duracao">${servico.tempo_duracao} min</p>
                        </div>
                    </div>
                    <div class="container_valores">
                        <div class="container_preco_final">
                            <span class="cifrao">R$ </span>
                            <p class="preco_final">${preco_servico_tratado.toString().replace(".", ",")}</p>
                        </div>
                        <div class="container_desconto" ${situacao_desconto}>
                            <span class="preco_original">${parseFloat(servico.preco).toFixed(2).toString().replace(".", ",")}</span> 
                            <span class="desconto"> ${' -' + servico.desconto + "%"}</span>
                        </div>
                    </div>
                    <div class="container_acoes_item_listagem">
                        <span class="material-symbols-outlined btn_agendar_servico" id="btn_agendar_servico_${servico.id_servico}">event</span>
                    </div>
                </div>
             
            `

            novo_agendamento.getElementsByClassName("btn_agendar_servico")[0].addEventListener("click", 
                () => 
                {
                    // window.open("/tcc_front/consumidores/cadastro/cadastro_consumidor.html", '_blank')
                    agendar(servico)
                }
            )

            container_mae.appendChild(novo_agendamento)
        }
    )

    console.log("recebemos servicos para listar");
    console.log(arr_servicos);
}

export {pesquisarServicosPorEspecialidade, criarListaServicos, getUrlImagemServico}