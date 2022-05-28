"use strict"

import { getServicosPorEmpresa} from "./servico.js";


let id_empresa = null;


const criar_filtro_especialidade = (id_especialidade, nome_especialidade) =>
{
    const container_mae = document.getElementById("container_filtros");
    const container_filtro_especialidade = document.createElement("div");

    container_filtro_especialidade.classList.add("container_filtro");
    // container_filtro_especialidade.classList.add("filtro_selecionado");
    container_filtro_especialidade.id = `filtro_especialidade_${id_especialidade}`;

    container_filtro_especialidade.innerHTML = 
    `
        <span>${nome_especialidade}</span>
    `;

    container_filtro_especialidade.addEventListener("click", (evento)=>
    {
        alterarFiltragemServicosPorEspecialidade(id_especialidade)
    })

    container_mae.appendChild(container_filtro_especialidade);
}

const alterarFiltragemServicosPorEspecialidade = (id_especialidade) =>
{
    const campo_filtro = document.getElementById(`filtro_especialidade_${id_especialidade}`);

    //VERIFICANDO SE ESTAREI FILTRANDO OU "DESFILTRANDO"
    if (campo_filtro.classList.contains("filtro_selecionado")) 
    {
        //TIRA A SELEÇÃO DO FILTRO
            campo_filtro.classList.remove("filtro_selecionado")

        //SELECIONA TODOS OS CONTAINERS DE LISTAGEM
            const arr_container_listagens_especialidades = Array.prototype.slice.call(document.getElementsByClassName("container_listagem_especialidade"))

        //DEIXA TODOS OS CONTAINERS VISIVEIS
            arr_container_listagens_especialidades.map(
                (elemento)=>
                {
                    elemento.style.display = "flex";
                }
            )
    }
    else
    {
        //TIRANDO OUTROS POSSÍVEIS FILTROS
            const arr_container_listagens_especialidades = Array.prototype.slice.call(document.getElementsByClassName("container_listagem_especialidade"))
            arr_container_listagens_especialidades.map((elemento)=> elemento.style.display = "flex")
    
            const arr_container_filtros_especialidades = Array.prototype.slice.call(document.getElementsByClassName("container_filtro"))
            arr_container_filtros_especialidades.map((elemento)=> elemento.classList.remove("filtro_selecionado"))
    
        //ESTABELECENDO FLTRAGEM
            //ESTABELECE A SELEÇÃO DO FILTRO
                campo_filtro.classList.add("filtro_selecionado")

            //SELECIONA TODOS OS CONTAINERS QUE NÃO NÃO DIZEM RESPEITO AO FILTRO E ESCONDE-OS
                const arr_containers_especialidades_nao_desejadas = arr_container_listagens_especialidades.filter(
                    (elemento) =>
                    {
                        const id_elemento = elemento.id
                        const id_especialidade_elemento = id_elemento.substring(id_elemento.lastIndexOf("_")+1, id_elemento.length)
                        return id_especialidade_elemento != id_especialidade
                    }
                )
                arr_containers_especialidades_nao_desejadas.map((elemento)=> elemento.style.display = "none")
}
}


const criar_container_especialidade = (id_especialidade, nome_especialidade) =>
{
    const container_mae = document.getElementById("container_geral_listagem_servicos");
    const container_especialidade = document.createElement("div");

    container_especialidade.classList.add("container_listagem_especialidade");
    container_especialidade.id = `container_listagem_especialidade_${id_especialidade}`;

    container_especialidade.innerHTML = 
    `
        <div class="container_titulo_especialidade">
            <h2>${nome_especialidade}</h2>
        </div>

        <div  class="container_listagem" id="listagem_especialidade_${id_especialidade}">            
            
        </div>

    `;

    container_mae.appendChild(container_especialidade)
    console.log(document.getElementById(`listagem_especialidade_${id_especialidade}`))

    return document.getElementById(`listagem_especialidade_${id_especialidade}`)
}

const criar_card_servico = (servico) =>
{
    // console.log(servico)

    const card_servico = document.createElement("div");

    card_servico.classList.add("card_servico");
    card_servico.id = `id_servico${servico.id_servico}`;
    const servico_disponivel_pra_uso = servico.ativo_para_uso == 1 ? "checked" : "";

    //VERIFICANDO DESCONTO
    let preco_servico_tratado = parseFloat(servico.preco).toFixed(2);
    let situacao_desconto = 'style="display: none;"'

    if(servico.desconto != 0 && servico.desconto != null)
    {
        preco_servico_tratado = (servico.preco - (servico.preco * (servico.desconto/100))).toFixed(2);
        situacao_desconto = "";
    }

    console.log(servico.preco)

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
                                            
            <p>R$ ${preco_servico_tratado.toString().replace(".", ",")}</p>
            <div class="container_desconto" ${situacao_desconto}>
                <P class="preco_sem_desconto"> R$ ${parseFloat(servico.preco).toFixed(2).toString().replace(".", ",")} | </P>
                <P class="desconto_valor_servico">-${servico.desconto}%</P>
            </div>
            
        </div>
        <div class="container_acoes_servico">
            <span class="material-symbols-outlined" id="delete_${servico.id_servico}">delete</span>
            <span class="material-symbols-outlined">edit</span>
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
            const container_servicos_especialidade = document.getElementById(`listagem_especialidade_${id_especialidade_do_servico}`)
            if(container_servicos_especialidade == null) // se não tiver, cria e coloca dentro
            {
                criar_filtro_especialidade(id_especialidade_do_servico, nome_especialidade_do_servico)
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

        const container_avisos = document.getElementById("container_aviso_sem_servico");
        container_avisos.style.display = "none"; //tirando aviso de "sem serviços"

        const arr_switches = Array.prototype.slice.call(document.getElementsByClassName("switch_ativacao_servico"))
        arr_switches.map(
            (elemento)=>
            {
                elemento.addEventListener("click", (evento)=>{mudarEstadoServico(evento.target.id)})
            }
        )
        
        
    }

    
}

export {listarServicosSalao}